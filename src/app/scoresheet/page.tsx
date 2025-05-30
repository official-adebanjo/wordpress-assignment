"use client";
import { useState, useEffect } from "react";

// Dummy data for demonstration. Replace with real fetch from your backend/API.
type Submission = {
  id: string;
  name: string;
  filename: string;
  message: string;
  score?: number;
};

const dummySubmissions: Submission[] = [
  {
    id: "1",
    name: "John Doe",
    filename: "assignment1.pdf",
    message: "My submission",
    score: undefined,
  },
  {
    id: "2",
    name: "Jane Smith",
    filename: "assignment2.docx",
    message: "Please find attached.",
    score: undefined,
  },
];

export default function ScoreSheetPage() {
  // In a real app, fetch this data from your backend
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    // Simulate fetching submissions
    setSubmissions(dummySubmissions);
  }, []);

  // Simple admin check (replace with real auth in production)
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAdmin(true);
  };

  const handleScoreChange = (id: string, score: number) => {
    setSubmissions((subs) =>
      subs.map((sub) => (sub.id === id ? { ...sub, score } : sub))
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Assignment Scoresheet
      </h1>
      {!admin ? (
        <form onSubmit={handleAdminLogin} className="max-w-xs mx-auto mb-8">
          <input
            type="password"
            placeholder="Admin password"
            className="w-full border rounded px-3 py-2 mb-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login as Admin
          </button>
        </form>
      ) : (
        <table className="w-full border border-gray-300 rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">File</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Score</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub.id}>
                <td className="p-2 border">{sub.name}</td>
                <td className="p-2 border">
                  <a
                    href={`/${sub.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {sub.filename}
                  </a>
                </td>
                <td className="p-2 border">{sub.message}</td>
                <td className="p-2 border">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={sub.score ?? ""}
                    onChange={(e) =>
                      handleScoreChange(sub.id, Number(e.target.value))
                    }
                    className="w-20 border rounded px-2 py-1"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
