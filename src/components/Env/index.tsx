import { useControls } from "leva";
import { City } from "./City";
import { useEffect, useRef } from "react";
import { PointLight, SpotLight } from "three";

const LampPost = (props:JSX.IntrinsicElements['group']) => {

    const spotRef = useRef<SpotLight | null>(null);
    const pointRef = useRef<PointLight | null>(null);

    const {streetLights} = useControls({
        streetLights: {
            value: {
                r: 255, // 238
                g: 255, // 0
                b: 255 // 242
            }
        }
    })

    useEffect(() => {

        if (spotRef.current && pointRef.current) {
            spotRef.current.color.setRGB(streetLights.r/255, streetLights.g/255, streetLights.b/255);
            pointRef.current.color.setRGB(streetLights.r/255, streetLights.g/255, streetLights.b/255);
        }

    }, [streetLights])

    return (
        <group {...props}>
            <spotLight 
                ref={spotRef}
                intensity={15} 
                distance={4}
                angle={0.4}
                penumbra={0.8}
                position-y={0}
            />
            <pointLight 
                ref={pointRef}
                intensity={10} 
                distance={4}
            />
        </group>
    );
}

const StreetLights = () => {

    return (
        <>
            <LampPost position={[1.8, 1.65, 1.6]}/>
            <LampPost position={[-1.8, 1.65, 1.6]}/>
            <LampPost position={[1.8, 1.65, -2.1]}/>
            <LampPost position={[-1.8, 1.65, -2.1]}/>
        </>
    );
}

export const Env = () => {

    return (
        <>
            <color attach="background" args={['#202030']} />
            <fog attach="fog" args={['#202030', 5, 50]} />
            <City scale={[2, 2, 2]} position={[0, -1, -3.5]}/>
            <StreetLights />
            <pointLight 
                castShadow
                name="shopLight"
                color={[1,0.95,0.7]} 
                intensity={20} 
                distance={2.5}
                position={[-5, 0.2, -6.5]}
            />
            <group position={[0, 0.2, -6]}>
                <pointLight 
                    name="buildLight1"
                    color={[1,0.95,0.7]} 
                    intensity={20} 
                    distance={2.5}
                />
                <spotLight 
                    name="buildLight2"
                    color={[1,0.95,0.7]} 
                    intensity={100} 
                    distance={4}
                    angle={0.6}
                    penumbra={0.5}
                    position-y={0}
                />
            </group>
        </>        
    );
};