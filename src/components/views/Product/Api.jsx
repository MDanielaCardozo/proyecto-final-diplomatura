export const fetchProducts = async () => {
  const BASE_URL = import.meta.env.VITE_API_MUEBLERIA;

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  const BASE_URL = import.meta.env.VITE_API_MUEBLERIA;

  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error", error);
    throw error;
  }
}