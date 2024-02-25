const api = process.env.NEXT_PUBLIC_API;
export const getProducts = async (signal: AbortSignal) => {
  try {
    const response = await fetch(`${api}`, { signal });
    if (response.status === 200) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
};
