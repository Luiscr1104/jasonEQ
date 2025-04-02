async function fetchEcwidProducts() {
  const storeId = "78233554";
  const token = "secret_5XuVcWbVytyPL3TnBhAuZut6PH3x2hJ1";
  const response = await fetch(
    `https://app.ecwid.com/api/v3/${storeId}/products`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  if (!response.ok) {
    throw new Error("Error al obtener los productos de Ecwid");
  }
  const data = await response.json();
  return data.items.map((item) => ({
    id: item.id,
    name: item.name,
    sku: item.sku,
    price: item.price,
    currency: item.currency,
    imageUrl: item.imageUrl,
    description: item.description,
    defaultCategoryName: item.defaultCategoryName
  }));
}
async function fetchEcwidProductsByCategory(categoryId) {
  const storeId = "78233554";
  const token = "secret_5XuVcWbVytyPL3TnBhAuZut6PH3x2hJ1";
  const response = await fetch(
    `https://app.ecwid.com/api/v3/${storeId}/products?category=${categoryId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  if (!response.ok) {
    throw new Error("Error al obtener productos por categoría");
  }
  const data = await response.json();
  return data.items.map((item) => ({
    id: item.id,
    name: item.name,
    sku: item.sku,
    price: item.price,
    currency: item.currency,
    imageUrl: item.imageUrl,
    description: item.description,
    defaultCategoryName: item.defaultCategoryName
  }));
}

export { fetchEcwidProducts as a, fetchEcwidProductsByCategory as f };
