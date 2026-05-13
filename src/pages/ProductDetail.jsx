import { useParams } from "react-router-dom";

import Viewer3D from "../components/Viewer3D";

function ProductDetail() {

  const { id } = useParams();

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#fff5f8",
        padding: "40px"
      }}
    >

      <h1
        style={{
          textAlign: "center"
        }}
      >
        Producto 3D ✨
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        Producto ID: {id}
      </p>

      <Viewer3D />

    </div>
  );
}

export default ProductDetail;