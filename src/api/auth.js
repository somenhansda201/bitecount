/**
 * ------------------------------------------------------------
 * Authentication API
 * ------------------------------------------------------------
 *
 * Handles communication between the frontend
 * and FastAPI authentication endpoints.
 *
 * Backend Endpoints:
 * - POST /auth/register
 * - POST /auth/login
 * - POST /auth/google
 *
 * Uses:
 * - Fetch API
 * - JWT Authentication
 */
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Register a new user.
 *
 * Sends user registration data
 * to the FastAPI backend.
 *
 * @param {Object} userData
 * @returns {Promise<Object>}
 * @throws {Error}
 */



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

/**
 * Login using email and password.
 *
 * Sends user credentials
 * to the backend authentication endpoint.
 *
 * @param {string} email
 * @param {string} password
 *
 * @returns {Promise<Object>}
 */

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

/**
 * Authenticate using Google OAuth.
 *
 * Sends Google ID Token
 * to the backend for verification.
 *
 * @param {string} idToken
 *
 * @returns {Promise<Object>}
 */

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
