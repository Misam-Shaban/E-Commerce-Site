import { useState } from "react";
import api from "../API/axios";

export default function SignUP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await api.post("/auth/signup", form);
      setSuccess(response.data.message);
      setForm({ name: "", email: "", password: "" });
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          "Unable to create your account. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#181818] px-6 py-16 text-white">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md space-y-5 rounded-2xl border border-[#333] bg-[#222] p-8"
      >
        <h1 className="text-3xl font-bold">Create account</h1>

        <label className="block space-y-2 text-sm">
          <span>Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#444] bg-[#181818] px-4 py-3"
          />
        </label>

        <label className="block space-y-2 text-sm">
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[#444] bg-[#181818] px-4 py-3"
          />
        </label>

        <label className="block space-y-2 text-sm">
          <span>Password</span>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={8}
            className="w-full rounded-lg border border-[#444] bg-[#181818] px-4 py-3"
          />
        </label>

        {error && (
          <p role="alert" className="text-sm text-red-400">
            {error}
          </p>
        )}
        {success && (
          <p role="status" className="text-sm text-green-400">
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-white px-4 py-3 font-bold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Creating account..." : "Sign up"}
        </button>
      </form>
    </main>
  );
}
