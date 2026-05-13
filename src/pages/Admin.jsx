import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate("/home"); 
  };

  return (
    <div style={adminStyles.container}>
      {/* Icono de Escudo corregido */}
      <div style={adminStyles.iconContainer}>
        <div style={adminStyles.shieldIcon}>🛡️</div>
      </div>

      <h1 style={adminStyles.mainTitle}>Panel de Administración</h1>
      <p style={adminStyles.brandSubtitle}>Mary's Closet Bazar</p>

      <div style={adminStyles.loginCard}>
        <h2 style={adminStyles.loginTitle}>Iniciar Sesión</h2>
        <p style={adminStyles.loginSubtitle}>Solo usuarios autorizados</p>

        <form onSubmit={handleAdminLogin} style={adminStyles.form}>
          <div style={adminStyles.inputGroup}>
            <label style={adminStyles.label}>📧 Email Administrativo</label>
            <input
              type="email"
              placeholder="admin@maryscloset.com"
              style={adminStyles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={adminStyles.inputGroup}>
            <label style={adminStyles.label}>🔒 Contraseña</label>
            <input
              type="password"
              placeholder="****"
              style={adminStyles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" style={adminStyles.loginButton}>
            ➜ Acceder al Panel
          </button>
        </form>

        <p 
          style={adminStyles.backLink} 
          onClick={() => navigate("/")}
        >
          ← Volver al login de clientes
        </p>
      </div>
    </div>
  );
};

const adminStyles = {
  container: {
    minHeight: "100vh", // Permite que crezca si es necesario
    background: "linear-gradient(180deg, #2c1a32 0%, #9b004d 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "40px 0", // Añade espacio arriba para que el escudo no se pegue al borde
  },
  iconContainer: {
    background: "linear-gradient(135deg, #ff4081, #d81b60)",
    padding: "15px",
    borderRadius: "15px",
    marginBottom: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  shieldIcon: {
    fontSize: "35px", // Un poco más grande para que destaque
    color: "white",
    lineHeight: "1",
  },
  mainTitle: {
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0",
    textAlign: "center",
  },
  brandSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "14px",
    marginBottom: "30px",
  },
  loginCard: {
    background: "white",
    width: "90%", // Responsivo para móviles
    maxWidth: "400px", // Ancho máximo
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
    textAlign: "center",
  },
  loginTitle: {
    fontSize: "24px",
    margin: "0 0 5px 0",
    color: "#333",
  },
  loginSubtitle: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "25px",
  },
  form: {
    textAlign: "left",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "bold",
    color: "#555",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #eee",
    background: "#fdfdfd",
    boxSizing: "border-box",
    fontSize: "14px",
    outlineColor: "#d10069",
  },
  loginButton: {
    width: "100%",
    padding: "14px",
    background: "#d10069",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "15px",
    boxShadow: "0 4px 10px rgba(209, 0, 105, 0.3)",
  },
  backLink: {
    marginTop: "25px",
    fontSize: "14px",
    color: "#888",
    cursor: "pointer",
    display: "block",
  }
};

export default Admin;