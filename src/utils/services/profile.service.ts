export const getProfiles = async (
  page: number,
  pageSize: number,
  gender: ProfileGender
): Promise<unknown> => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=${pageSize}&gender=${gender}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch profiles");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
