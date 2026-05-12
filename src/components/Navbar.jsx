function Navbar() {
  return (
    <div style={styles.navbar}>
      <h2 style={styles.logo}>Marys Closet Bazar</h2>

      <div style={styles.links}>
        <span>Inicio</span>
        <span>Catálogo</span>
        <span>Login</span>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    background: "#fff",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
  },

  logo: {
    color: "#ec407a"
  },

  links: {
    display: "flex",
    gap: "20px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Navbar;