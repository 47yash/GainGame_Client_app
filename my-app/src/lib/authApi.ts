const BASE_URL = "http://localhost:8080";

const handleResponse = async (response: Response) => {
  if (response.ok) {
    return response.json();
  }

  // Handle HTTP errors (4xx, 5xx)
  let errorMessage: string;
  try {
    const errorData = await response.json();
    errorMessage = errorData.message || `Error: ${response.status} ${response.statusText}`;
  } catch (parseError) {
    errorMessage = `Error: ${response.status} ${response.statusText}`;
  }

  if (response.status >= 400 && response.status < 500) {
    throw new Error(errorMessage || "Bad request. Please check your input.");
  } else if (response.status >= 500) {
    throw new Error(errorMessage || "Server error. Please try again later.");
  }
  
  throw new Error(errorMessage || "An unexpected error occurred.");
};

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new Error("Failed to connect to the server. Please check your internet connection and try again.");
    }
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new Error("Failed to connect to the server. Please check your internet connection and try again.");
    }
    throw error;
  }
};

