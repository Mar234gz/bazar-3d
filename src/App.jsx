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
  onAuthStateChanged
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

        <h2>Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo"
          style={styles.input}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={styles.input}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          style={styles.button}
          onClick={handleLogin}
        >
          Entrar
        </button>

      </div>

    </div>
  );
}

/* ===================== HOME ===================== */

function Home() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

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

  const [user, setUser] = useState(null);

  const [loadingAuth, setLoadingAuth] =
    useState(true);

  const auth = getAuth(app);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

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

        {/* LOGIN / HOME */}
        <Route
          path="/"
          element={
            user ? <Home /> : <Login />
          }
        />

        {/* HOME */}
        <Route
          path="/home"
          element={<Home />}
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
    background: "#fce4ec"
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    width: "320px",
    boxShadow:
      "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#ec407a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold"
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