export interface TalentProfileDTO {
  name: string;
  surname: string;
  description: string;
  experience: string;
  skills: string[];
  email: string;
}

export const createTalentProfile = async (profile: TalentProfileDTO) => {
  const res = await fetch("http://localhost:8080/api/profiles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });

  if (!res.ok) {
    throw new Error("Failed to create profile");
  }

  return res.json();
};
export const getLatestTalents = async (
  limit: number = 4,
): Promise<TalentProfileDTO[]> => {
  const res = await fetch(
    `http://localhost:8080/api/profiles?page=0&size=${limit}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch talents");
  }

  const data = await res.json();
  return data.content;
};

export const getAllTalents = async (): Promise<TalentProfileDTO[]> => {
  const res = await fetch("http://localhost:8080/api/profiles?page=0&size=100"); // adjust size as needed

  if (!res.ok) throw new Error("Failed to fetch talents");

  const data = await res.json();
  return data.content;
};
