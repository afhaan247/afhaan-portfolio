export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "30px",
      background: "#fff",
      marginTop: "80px",
      color: "#777"
    }}>
      © {new Date().getFullYear()} Afhaan. All rights reserved.
    </footer>
  );
}
