import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Environment,
  useGLTF
} from "@react-three/drei";

/* MODELO */

function Model() {

  const { scene } = useGLTF(
    "/models/T-shirt.glb"
  );

  return (

    <primitive
      object={scene}
      scale={0.3}
    />

  );
}

/* VISOR */

function Viewer3D() {

  return (

    <div
      style={{
        width: "100%",
        height: "600px",
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden"
      }}
    >

      <Canvas
        camera={{ position: [0, 0, 5] }}
      >

        {/* LUCES */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[2, 2, 2]}
        />

        {/* MODELO */}
        <Model />

        {/* CONTROLES */}
        <OrbitControls />

        {/* AMBIENTE */}
        <Environment preset="studio" />

      </Canvas>

    </div>
  );
}

export default Viewer3D;