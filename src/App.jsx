import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./services/firebase";

/* ===================== LOGIN ===================== */
function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "20px" }}>Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}

/* ===================== HOME ===================== */
function Home() {
  return (
    <div style={homeStyles.container}>
      
      {/* HEADER */}
      <div style={homeStyles.header}>
        <h1>Bienvenida 💗</h1>
        <p>Explora tu bazar</p>
      </div>

      {/* CATÁLOGO */}
      <div style={homeStyles.catalogo}>
        <h2>Catálogo</h2>

        <div style={homeStyles.grid}>
          <div style={homeStyles.card}>Blusa</div>
          <div style={homeStyles.card}>Vestido</div>
          <div style={homeStyles.card}>Pantalón</div>
          <div style={homeStyles.card}>Falda</div>
        </div>
      </div>

    </div>
  );
}

/* ===================== APP ===================== */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
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
    borderRadius: "15px",
    width: "300px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#ec407a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

/* ===================== ESTILOS HOME ===================== */
const homeStyles = {
  container: {
    background: "#fce4ec",
    minHeight: "100vh"
  },
  header: {
    background: "#fff",
    padding: "40px",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    textAlign: "center"
  },
  catalogo: {
    padding: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px"
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
  }
};