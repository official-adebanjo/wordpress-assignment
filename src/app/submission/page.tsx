"use client";
import { useState } from "react";

export default function SubmissionPage() {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    if (file) {
      formData.append("file", file);
    }

    try {
      const res = await fetch("./api/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Submit Your Assignment
      </h1>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded text-center">
          Thank you for your submission!
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border rounded px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="file">
              Upload Assignment (PDF, DOCX, ZIP)
            </label>
            <input
              id="file"
              type="file"
              className="w-full"
              accept=".pdf,.doc,.docx,.zip"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0] || null;
                if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
                  alert("File size must not exceed 2MB.");
                  e.target.value = ""; // Reset the input
                  setFile(null);
                } else {
                  setFile(selectedFile);
                }
              }}
              required
              name="file"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Comments (optional)
            </label>
            <textarea
              id="message"
              className="w-full border rounded px-3 py-2"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            />
          </div>
          {error && <div className="text-red-600 text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Assignment
          </button>
        </form>
      )}
    </div>
  );
}
