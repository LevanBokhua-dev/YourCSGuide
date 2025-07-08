export const loginUser = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // if using cookies/session
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Login failed: ${err}`);
  }

  return true;
};
