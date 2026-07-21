const API_URL = import.meta.env.VITE_API_URL;

export async function sendContactMessage(contactData) {

  const response = await fetch(
    `${API_URL}/contact`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(contactData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.detail || "Failed to send message."
    );
  }

  return data;

}