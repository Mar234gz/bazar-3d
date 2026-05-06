import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Viewer3D from "../components/viewer3d/Viewer3D";

export default function ProductDetail() {
  const { id } = useParams();
  const { products, loading } = useProducts();

  if (loading) return <p>Cargando...</p>;

  const product = products.find((p) => p.id === id);

  if (!product) return <p>No encontrado</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <p>${product.precio}</p>

      <Viewer3D modelPath={product.modelo3D?.url} />
    </div>
  );
}