
import * as THREE from 'three';
import CSM from 'three-custom-shader-material';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { patchShaders } from '../../helpers/patchShaders';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition; // use the world position instead of the uv
  void main() {
    vUv = uv;
    vPosition = position;
}`;

const fragmentShader = patchShaders(/* glsl */ `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uThickness;
  uniform vec3 uColor;
  uniform float uProgress;
  
  void main() {
    gln_tFBMOpts opts = gln_tFBMOpts(1.0, 0.3, 2.0, 5.0, 1.0, 5, false, false);
    // float noise = gln_sfbm(vUv, opts); // THE ORIGINAL CODE FROM THE TUTORIAL
    float noise = gln_sfbm(vPosition, opts); //  use the world position instead of the uv for a better effect working on all objects
    noise = gln_normalize(noise);

    float progress = uProgress;

    float alpha = step(1.0 - progress, noise);
    float border = step((1.0 - progress) - uThickness, noise) - alpha;
    
    csm_DiffuseColor.a = alpha + border;
    csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, uColor, border);
  }
`);

type DissolveMaterialType = {
  baseMaterial: THREE.Material,  
  thickness?: number,
  color?: string, 
  intensity?: number,
  duration?: number,
  visible?: boolean,
  onFadeOut?: () => void
}
export const DissolveMaterial = (props: DissolveMaterialType) => {

  const { baseMaterial, thickness = 0.05, color = '#eb5a13', intensity = 50, duration = 2, visible = true, onFadeOut } = props;

  const uniforms = useRef({
    uThickness: { value: props.thickness },
    uColor: { value: new THREE.Color(props.color).multiplyScalar(20) },
    uProgress: { value: 0 },
  });

  useEffect(() => {uniforms.current.uColor.value.set(color).multiplyScalar(intensity)}, [color, intensity]);
  useEffect(() => {uniforms.current.uThickness.value = thickness}, [thickness]);

  useFrame((_state, delta) => {
    easing.damp(
      uniforms.current.uProgress,
      "value",
      visible ? 1 : 0,
      duration,
      delta
    );

    if (uniforms.current.uProgress.value < 0.05 && onFadeOut) {
      onFadeOut();
    }

  });

  return (
    <CSM 
      baseMaterial={baseMaterial} 
      vertexShader={vertexShader} 
      silent={true}
      fragmentShader={fragmentShader} 
      uniforms={uniforms.current} 
      toneMapped={false} 
      emissiveIntensity={10}
      transparent 
    />
  );
}
