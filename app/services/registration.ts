export const registerUser = async (formData: {
  fullName: string;
  email: string;
  password: string;
  role: string;
}) => {
  const mappedRole = formData.role === "talent" ? "TALENT" : "COMPANY";

  const response = await fetch("http://localhost:8080/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.fullName,
      email: formData.email,
      password: formData.password,
      role: mappedRole,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Registration failed: ${errorText}`);
  }

  return await response.json();
};
