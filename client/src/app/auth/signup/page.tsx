"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/ui/InputField";
import { registerUser } from "@/app/services/authService";
import { toast } from "react-hot-toast";
import GoogleButton from "@/app/components/ui/GoogleButton";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser(formData);
      toast.success("Account created successfully!");
      router.push("/auth/login");
    } catch (err) {
  const errorMsg = (err as Error).message || "Signup failed";
  toast.error(errorMsg);
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
        <h2 className="text-center text-lg font-semibold mb-6 tracking-wide">
          Create Account
        </h2>

        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
            {loading ? "Creating..." : "Sign up"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/auth/login")}
            className="border px-5 py-1 text-sm hover:bg-black hover:text-white transition"
          >
            Login
          </button>
        </div>
        <div className="mt-4">
  <GoogleButton />
</div>

      </form>
    </section>
  );
}
