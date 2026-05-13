import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div style={styles.navbar}>

      {/* LOGO */}
      <Link
        to="/"
        style={styles.logo}
      >
        Marys Closet Bazar
      </Link>

      {/* LINKS */}
      <div style={styles.links}>

        <Link
          to="/"
          style={styles.link}
        >
          Inicio
        </Link>

        <Link
          to="/home"
          style={styles.link}
        >
          Catálogo
        </Link>

        <Link
          to="/"
          style={styles.link}
        >
          Login
        </Link>

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
    boxShadow:
      "0 4px 10px rgba(0,0,0,0.05)"
  },

  logo: {
    color: "#ec407a",
    fontSize: "32px",
    fontWeight: "bold",
    textDecoration: "none"
  },

  links: {
    display: "flex",
    gap: "30px",
    alignItems: "center"
  },

  link: {
    textDecoration: "none",
    color: "#111",
    fontWeight: "bold",
    transition: "0.3s"
  }
};

export default Navbar;