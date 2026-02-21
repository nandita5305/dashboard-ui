"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 Predefined credentials
  const ADMIN_ROLE = "admin";
  const ADMIN_PASSWORD = "savara123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (role.toLowerCase() === ADMIN_ROLE && password === ADMIN_PASSWORD) {
      router.push("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-4">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Role Input */}
          <div>
            <label className="block text-sm mb-2">Role</label>
            <input
              type="text"
              placeholder="Enter role (admin)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}