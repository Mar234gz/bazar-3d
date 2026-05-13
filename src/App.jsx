import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

import { useState, useEffect } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { app, db } from "./services/firebase";

import {
  collection,
  getDocs
} from "firebase/firestore";

/* COMPONENTES */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

/* PAGINAS */
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";

/* ===================== LOGIN ===================== */

function Login() {

  const navigate = useNavigate();

  const auth = getAuth(app);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/home");

    } catch (error) {

      alert("Error: " + error.message);

    }
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        {/* Logo */}
        <div style={styles.logo}>✨</div>

        <h2 style={styles.title}>
          Mary's Closet
        </h2>

        <p style={styles.subtitle}>
          Bazar de Segunda Mano
        </p>

        {/* Tabs */}
        <div style={styles.tabsContainer}>

          <button style={styles.activeTab}>
            Iniciar Sesión
          </button>

          <button
            style={styles.tab}
            onClick={() => navigate("/register")}
          >
            Registrarse
          </button>

        </div>

        {/* FORM */}
        <div style={{ textAlign: "left" }}>

          <label style={styles.label}>
            Email
          </label>

          <input
            type="email"
            placeholder="tu@email.com"
            style={styles.input}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label style={styles.label}>
            Contraseña
          </label>

          <input
            type="password"
            placeholder="****"
            style={styles.input}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            style={styles.button}
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>

        </div>

        {/* INFO */}
        <div style={styles.infoBox}>
          Usuario de prueba <br />
          test@test.com
        </div>

        <p
          style={styles.adminText}
          onClick={() => navigate("/admin")}
        >
          ¿Eres administrador? Ingresa aquí
        </p>

      </div>

    </div>
  );
}

/* ===================== REGISTER ===================== */

function Register() {

  const navigate = useNavigate();

  const auth = getAuth(app);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmar, setConfirmar] =
    useState("");

  const handleRegister = async () => {

    if (password !== confirmar) {

      alert("Las contraseñas no coinciden");

      return;

    }

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Usuario registrado");

      navigate("/");

    } catch (error) {

      alert("Error: " + error.message);

    }
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <div style={styles.logo}>✨</div>

        <h2 style={styles.title}>
          Mary's Closet
        </h2>

        <p style={styles.subtitle}>
          Crear Cuenta
        </p>

        <div style={styles.tabsContainer}>

          <button
            style={styles.tab}
            onClick={() => navigate("/")}
          >
            Iniciar Sesión
          </button>

          <button style={styles.activeTab}>
            Registrarse
          </button>

        </div>

        <div style={{ textAlign: "left" }}>

          <label style={styles.label}>
            Email
          </label>

          <input
            type="email"
            placeholder="tu@email.com"
            style={styles.input}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label style={styles.label}>
            Contraseña
          </label>

          <input
            type="password"
            placeholder="****"
            style={styles.input}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <label style={styles.label}>
            Confirmar Contraseña
          </label>

          <input
            type="password"
            placeholder="****"
            style={styles.input}
            onChange={(e) =>
              setConfirmar(e.target.value)
            }
          />

          <button
            style={styles.button}
            onClick={handleRegister}
          >
            Crear Cuenta
          </button>

        </div>

      </div>

    </div>
  );
}

/* ===================== HOME ===================== */

function Home() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const querySnapshot = await getDocs(
          collection(db, "Productos")
        );

        const data = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data()
          })
        );

        setProducts(data);

      } catch (error) {

        console.error(
          "Error cargando productos:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchProducts();

  }, []);

  if (loading) {

    return (
      <h2 style={{ textAlign: "center" }}>
        Cargando catálogo...
      </h2>
    );
  }

  return (

    <div style={homeStyles.container}>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* CATALOGO */}
      <div style={homeStyles.catalogo}>

        <h2 style={homeStyles.title}>
          Catálogo
        </h2>

        <div style={homeStyles.grid}>

          {products.length === 0 ? (

            <p>No hay productos aún</p>

          ) : (

            products.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))

          )}

        </div>

      </div>

    </div>
  );
}

/* ===================== APP ===================== */

function App() {

  const [loadingAuth, setLoadingAuth] =
    useState(true);

  const auth = getAuth(app);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        () => {

          setLoadingAuth(false);

        }
      );

    return () => unsubscribe();

  }, []);

  if (loadingAuth) {

    return (
      <h2 style={{ textAlign: "center" }}>
        Cargando...
      </h2>
    );
  }

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* HOME */}
        <Route
          path="/home"
          element={<Home />}
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={<Admin />}
        />

        {/* PRODUCTO 3D */}
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

/* ===================== ESTILOS LOGIN ===================== */

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e9dde2"
  },

  card: {
    background: "#f8f2f4",
    padding: "30px",
    borderRadius: "15px",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    textAlign: "center"
  },

  logo: {
    fontSize: "35px",
    marginBottom: "10px"
  },

  title: {
    color: "#e91e63",
    margin: 0
  },

  subtitle: {
    color: "#777",
    fontSize: "13px",
    marginBottom: "20px"
  },

  tabsContainer: {
    display: "flex",
    marginBottom: "20px",
    gap: "5px"
  },

  activeTab: {
    flex: 1,
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    background: "#e91e63",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  },

  tab: {
    flex: 1,
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    background: "#f3d3df",
    color: "#555",
    cursor: "pointer"
  },

  label: {
    fontSize: "14px",
    color: "#555"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #e91e63",
    boxSizing: "border-box"
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#e91e63",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  infoBox: {
    marginTop: "15px",
    background: "#f1f1f1",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "12px",
    color: "#666"
  },

  adminText: {
    marginTop: "15px",
    fontSize: "12px",
    color: "#e91e63",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline"
  }
};

/* ===================== ESTILOS HOME ===================== */

const homeStyles = {

  container: {
    background: "#fff5f8",
    minHeight: "100vh"
  },

  catalogo: {
    padding: "40px"
  },

  title: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "40px"
  },

  grid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px,1fr))",

    gap: "25px"
  }
};
