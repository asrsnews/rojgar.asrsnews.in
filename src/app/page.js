export default function Home() {
  return (
    <div>
      <h2 style={{ color: "#20124d" }}>
        🔴 Latest Govt Job Updates (13 Sept 2025)
      </h2>

      <section style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#20124d" }}>
          Patna High Court – Stenographer Vacancy
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #333",
            background: "#fff",
          }}
        >
          <tbody>
            <tr style={{ background: "#f2f2f2" }}>
              <th style={{ border: "1px solid #333", padding: "8px" }}>
                Vacancy
              </th>
              <td style={{ border: "1px solid #333", padding: "8px" }}>
                Stenographer
              </td>
            </tr>
            <tr>
              <th style={{ border: "1px solid #333", padding: "8px" }}>
                No. of Posts
              </th>
              <td style={{ border: "1px solid #333", padding: "8px" }}>111</td>
            </tr>
            <tr>
              <th style={{ border: "1px solid #333", padding: "8px" }}>
                Last Date
              </th>
              <td
                style={{
                  border: "1px solid #333",
                  padding: "8px",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                19 Sept 2025
              </td>
            </tr>
            <tr>
              <th style={{ border: "1px solid #333", padding: "8px" }}>
                Apply Link
              </th>
              <td style={{ border: "1px solid #333", padding: "8px" }}>
                <a href="#" style={{ color: "blue" }}>
                  Apply Online
                </a>
              </td>
            </tr>
            <tr>
              <th style={{ border: "1px solid #333", padding: "8px" }}>
                विवरण
              </th>
              <td style={{ border: "1px solid #333", padding: "8px" }}>
                यह भर्ती पटना उच्च न्यायालय द्वारा स्टेनोग्राफर पदों के लिए
                निकाली गई है।
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
