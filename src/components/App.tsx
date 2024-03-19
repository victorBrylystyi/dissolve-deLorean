import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { MainScene } from './MainScene';
import { Env } from './Env';
import { OrbitControls, Stats } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const Effects = () => {

  return (
    <EffectComposer>
      <Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur />
    </EffectComposer>
  )
}

export const App = () => {

  const rootRef = useRef(document.getElementById('#root') as HTMLElement);

  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [3, 3, 5], fov: 42 }}>
      <OrbitControls makeDefault minDistance={4} maxDistance={40}/>
      <Suspense fallback={null}>
        <Env />
        <MainScene />
      </Suspense>
      <Effects />
      <Stats showPanel={0} className="stats" parent={rootRef}/>
    </Canvas>
  );
};
