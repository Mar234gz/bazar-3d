import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div style={styles.card} onClick={() => navigate(`/producto/${product.id}`)}>
      <img src={product.imagenes[0]} style={styles.image} />

      <div style={styles.info}>
        <h3>{product.nombre}</h3>
        <p>${product.precio}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    cursor: "pointer"
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover"
  },
  info: {
    padding: "10px"
  }
};