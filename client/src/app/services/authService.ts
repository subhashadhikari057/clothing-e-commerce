const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api/auth";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

/* ───────────────────────────── */
/* 🔐 REGISTER FUNCTION          */
/* ───────────────────────────── */
export async function registerUser(payload: RegisterPayload) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
}

/* ───────────────────────────── */
/* 🔐 LOGIN FUNCTION             */
/* ───────────────────────────── */
export async function loginUser(payload: LoginPayload) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  // ✅ Store token in localStorage
  localStorage.setItem("token", data.token);

  return data;
}
