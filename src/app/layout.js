export const metadata = {
  title: "Rojgar Updates - ASRS",
  description: "Daily Sarkari Naukri Updates in Hindi and English",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          margin: 0,
          background: "#f9f9f9",
        }}
      >
        <header
          style={{
            background: "#20124d",
            color: "#fff",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>Rojgar Updates - ASRS</h1>
          <p style={{ margin: "5px 0" }}>आज की ताज़ा सरकारी नौकरियां</p>
        </header>
        <main
          style={{ maxWidth: "1200px", margin: "20px auto", padding: "15px" }}
        >
          {children}
        </main>
        <footer
          style={{
            background: "#20124d",
            color: "#fff",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <p>© 2025 Rojgar Updates by ASRS</p>
        </footer>
      </body>
    </html>
  );
}
