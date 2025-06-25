"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface DecodedToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export default function GoogleButton() {
  const router = useRouter();

  const login = useGoogleLogin({
    flow: "implicit",
    onSuccess: async (token) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/google`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: token.access_token }),
          }
        );

        if (!res.ok) throw new Error("Google auth failed");

        const data = await res.json();
        localStorage.setItem("token", data.token);

        const { role } = jwtDecode<DecodedToken>(data.token);
        toast.success("Logged-in with Google");

        router.push(role === "admin" ? "/admin-dashboard" : "/");
      } catch {
  toast.error("Google login error");
}
    },
    onError: () => toast.error("Google auth cancelled"),
  });

  return (
    <button
      type="button"
      onClick={() => login()}
      className="group relative flex w-full items-center justify-center border border-gray-300 px-5 py-1.5 text-sm tracking-wide overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2">
        {/* Google icon */}
        <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M21.8 10.23h-9.62v3.54h5.54c-.24 1.46-1.37 4.28-5.54 4.28A6.42 6.42 0 0 1 6.8 11.6a6.42 6.42 0 0 1 5.39-6.35 6.45 6.45 0 0 1 4.52 1.64l2.93-2.93A10.63 10.63 0 0 0 12.19 2a10.6 10.6 0 0 0 0 21.2c5.9 0 10.6-4.78 10.6-10.6 0-.71-.07-1.4-.21-2.07z"
            fill="currentColor"
          />
        </svg>
        Continue with Google
      </span>

      {/* hover fill */}
      <span className="absolute inset-0 translate-y-full bg-gray-900 transition-transform duration-300 group-hover:translate-y-0" />

      <style jsx>{`
        button {
          color: #000;
        }
        button:hover {
          color: #fff;
        }
      `}</style>
    </button>
  );
}
