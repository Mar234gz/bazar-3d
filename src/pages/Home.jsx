function Home() {
  return (
    <div style={{ background: "#fce4ec", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <div style={{
        background: "#fff",
        padding: "40px",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        textAlign: "center"
      }}>
        <h1>Bienvenida 💗</h1>
        <p>Explora tu bazar</p>
      </div>

      {/* CATÁLOGO */}
      <div style={{ padding: "20px" }}>
        <h2>Catálogo</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px"
        }}>
          <div style={card}>Blusa</div>
          <div style={card}>Vestido</div>
          <div style={card}>Pantalón</div>
        </div>
      </div>

    </div>
  );
}

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
};