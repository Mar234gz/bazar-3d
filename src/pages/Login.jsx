function Login() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#fce4ec"
    }}>
      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "15px",
        width: "300px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>
        <h2>Iniciar Sesión</h2>

        <input placeholder="Correo" style={inputStyle}/>
        <input placeholder="Contraseña" type="password" style={inputStyle}/>

        <button style={btnStyle}>Entrar</button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "#ec407a",
  color: "#fff",
  border: "none",
  borderRadius: "8px"
};