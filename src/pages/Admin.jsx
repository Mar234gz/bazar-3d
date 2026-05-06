export default function Admin() {
  return (
    <div style={styles.container}>
      <h1>Panel Administrador</h1>

      <button style={styles.btn}>Agregar Producto</button>

      <div style={styles.list}>
        <p>Lista de productos (próximamente)</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  },
  btn: {
    padding: "10px 20px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "8px"
  },
  list: {
    marginTop: "20px"
  }
};