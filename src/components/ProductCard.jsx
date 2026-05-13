import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const handleViewProduct = () => {

    navigate(`/product/${product.id}`);

  };

  return (

    <div style={styles.card}>

      <img
        src={product.imagen}
        alt={product.nombre}
        style={styles.image}
      />

      <h3>
        {product.nombre}
      </h3>

      <p style={styles.price}>
        ${product.precio}
      </p>

      <button
        style={styles.button}
        onClick={handleViewProduct}
      >
        Ver producto
      </button>

    </div>
  );
}

const styles = {

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "20px",
    boxShadow:
      "0 5px 15px rgba(0,0,0,0.1)"
  },

  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px"
  },

  price: {
    color: "#ec407a",
    fontWeight: "bold",
    marginBottom: "15px"
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#ec407a",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default ProductCard;