async function fetchEcwidCategories() {
  const storeId = "78233554";
  const token = "secret_5XuVcWbVytyPL3TnBhAuZut6PH3x2hJ1";
  const response = await fetch(
    `https://app.ecwid.com/api/v3/${storeId}/categories`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  if (!response.ok) {
    throw new Error("Error al obtener las categorías de Ecwid");
  }
  const data = await response.json();
  return data.items;
}

export { fetchEcwidCategories as f };
