"use client";

import { useEffect, useState } from "react";
import { Search, Building2, MapPin } from "lucide-react"; // icons

export default function Home() {
  const [vacancies, setVacancies] = useState([]);
  const [form, setForm] = useState({ title: "", company: "", location: "" });
  const [filter, setFilter] = useState({ company: "", location: "" });

  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    const res = await fetch("/api/vacancies");
    const data = await res.json();
    setVacancies(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.company)
      return alert("Title and Company required!");

    await fetch("/api/vacancies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", company: "", location: "" });
    fetchVacancies();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this vacancy?")) return;

    await fetch("/api/vacancies", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchVacancies();
  };

  const handleEdit = async (vacancy) => {
    const newTitle = prompt("Edit Job Title:", vacancy.title);
    if (!newTitle) return;

    await fetch("/api/vacancies", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: vacancy._id, updates: { title: newTitle } }),
    });

    fetchVacancies();
  };

  // Apply filters
  const filteredVacancies = vacancies.filter(
    (v) =>
      (filter.company
        ? v.company.toLowerCase().includes(filter.company.toLowerCase())
        : true) &&
      (filter.location
        ? v.location.toLowerCase().includes(filter.location.toLowerCase())
        : true)
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
        🚀 Daily Job Vacancy Updates
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="Job Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          ➕ Add Vacancy
        </button>
      </form>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex items-center flex-1 bg-white shadow rounded-lg px-3">
          <Building2 className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Filter by Company"
            value={filter.company}
            onChange={(e) => setFilter({ ...filter, company: e.target.value })}
            className="flex-1 p-2 outline-none"
          />
        </div>
        <div className="flex items-center flex-1 bg-white shadow rounded-lg px-3">
          <MapPin className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Filter by Location"
            value={filter.location}
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
            className="flex-1 p-2 outline-none"
          />
        </div>
      </div>

      {/* Vacancy List */}
      <div className="space-y-5">
        {filteredVacancies.map((v) => (
          <div
            key={v._id}
            className="bg-white shadow-md rounded-xl p-5 flex justify-between items-start hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-lg font-semibold text-blue-700">{v.title}</h2>
              <p className="text-gray-700">
                {v.company} • {v.location}
              </p>
              <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {new Date(v.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleEdit(v)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(v._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <h2 style={{ color: "#20124d" }}>
//         🔴 Latest Govt Job Updates (13 Sept 2025)
//       </h2>

//       <section style={{ marginTop: "20px" }}>
//         <h3 style={{ color: "#20124d" }}>
//           Patna High Court – Stenographer Vacancy
//         </h3>
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             border: "1px solid #333",
//             background: "#fff",
//           }}
//         >
//           <tbody>
//             <tr style={{ background: "#f2f2f2" }}>
//               <th style={{ border: "1px solid #333", padding: "8px" }}>
//                 Vacancy
//               </th>
//               <td style={{ border: "1px solid #333", padding: "8px" }}>
//                 Stenographer
//               </td>
//             </tr>
//             <tr>
//               <th style={{ border: "1px solid #333", padding: "8px" }}>
//                 No. of Posts
//               </th>
//               <td style={{ border: "1px solid #333", padding: "8px" }}>111</td>
//             </tr>
//             <tr>
//               <th style={{ border: "1px solid #333", padding: "8px" }}>
//                 Last Date
//               </th>
//               <td
//                 style={{
//                   border: "1px solid #333",
//                   padding: "8px",
//                   color: "red",
//                   fontWeight: "bold",
//                 }}
//               >
//                 19 Sept 2025
//               </td>
//             </tr>
//             <tr>
//               <th style={{ border: "1px solid #333", padding: "8px" }}>
//                 Apply Link
//               </th>
//               <td style={{ border: "1px solid #333", padding: "8px" }}>
//                 <a href="#" style={{ color: "blue" }}>
//                   Apply Online
//                 </a>
//               </td>
//             </tr>
//             <tr>
//               <th style={{ border: "1px solid #333", padding: "8px" }}>
//                 विवरण
//               </th>
//               <td style={{ border: "1px solid #333", padding: "8px" }}>
//                 यह भर्ती पटना उच्च न्यायालय द्वारा स्टेनोग्राफर पदों के लिए
//                 निकाली गई है।
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// }
