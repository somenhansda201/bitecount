const API_URL = import.meta.env.VITE_API_URL;

export async function registerUser(userData) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Registration failed.");
  }

  return data;
}

export async function loginUser(email, password) {
  const body = new URLSearchParams();

  body.append("username", email);
  body.append("password", password);

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Login failed.");
  }

  return data;
}

export async function googleLogin(idToken) {
  const response = await fetch(`${API_URL}/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_token: idToken,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Google login failed.");
  }

  return data;
}
