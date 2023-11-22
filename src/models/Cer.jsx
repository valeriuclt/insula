import { useGLTF } from "@react-three/drei"

import skyScene from '../assets/3d/sky.glb'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


const Cer = ({ isRotating }) => {

  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.13 * delta
    }

  })
  return (

    <mesh ref={skyRef}>
      < primitive object={sky.scene} />
    </mesh>
  )
}
export default Cer