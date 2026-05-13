import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Environment,
  useGLTF
} from "@react-three/drei";

/* MODELO */

function Model() {

  const { scene } = useGLTF(
    "/models/ropa.glb"
  );

  return (

    <primitive
      object={scene}
      scale={1}
      position={[0, -1, 0]}
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
        background: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden"
      }}
    >

      <Canvas
        camera={{ position: [0, 0, 5] }}
      >

        {/* LUCES */}
        <ambientLight intensity={2} />

        <directionalLight
          position={[2, 2, 2]}
        />

        {/* SUSPENSE */}
        <Suspense fallback={null}>

          <Model />

          <Environment preset="studio" />

        </Suspense>

        {/* CONTROLES */}
        <OrbitControls />

      </Canvas>

    </div>
  );
}

export default Viewer3D;