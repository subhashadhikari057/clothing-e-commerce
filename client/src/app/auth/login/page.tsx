"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/ui/InputField";
import { loginUser } from "@/app/services/authService";
import { toast } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(formData);
      toast.success("Login successful");

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      // Decode token to extract role
      const decoded = jwtDecode<DecodedToken>(data.token);
      const role = decoded.role;

      // Redirect based on role
      if (role === "admin") {
        router.push("/admin-dashboard");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm px-6 py-10 border border-gray-200 rounded-md shadow-md"
      >
        <h2 className="text-center text-lg font-semibold mb-6 tracking-wide">Login</h2>

        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            disabled={loading}
            className="border px-5 py-1 text-sm hover:bg-black hover:text-white transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/auth/signup")}
            className="border px-5 py-1 text-sm hover:bg-black hover:text-white transition"
          >
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
}
