import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Viewer3D() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}