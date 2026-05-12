function Hero() {
  return (
    <div style={styles.hero}>

      <div style={styles.overlay}>
        <h1 style={styles.title}>
          Explora tu Bazar 3D ✨
        </h1>

        <p style={styles.subtitle}>
          Moda interactiva y experiencia premium
        </p>

        <button style={styles.button}>
          Explorar catálogo
        </button>
      </div>

    </div>
  );
}

const styles = {
  hero: {
    height: "70vh",

    backgroundImage:
      "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b')",

    backgroundSize: "cover",
    backgroundPosition: "center",

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  overlay: {
    background: "rgba(0,0,0,0.4)",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center",
    color: "#fff"
  },

  title: {
    fontSize: "50px",
    marginBottom: "20px"
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "25px"
  },

  button: {
    padding: "15px 30px",
    border: "none",
    borderRadius: "10px",
    background: "#ec407a",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Hero;