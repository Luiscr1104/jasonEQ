export type EcwidProduct = {
  id: number;
  name: string;
  sku: string;
  price: number;
  currency: string;
  imageUrl: string;
  description?: string;
  defaultCategoryName?: string;
};

export async function fetchEcwidProducts(): Promise<EcwidProduct[]> {
  const storeId = import.meta.env.ECWID_STORE_ID;
  const token = import.meta.env.ECWID_SECRET_TOKEN;

  const response = await fetch(
    `https://app.ecwid.com/api/v3/${storeId}/products`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error al obtener los productos de Ecwid");
  }

  const data = await response.json();
  return data.items.map((item: any) => ({
    id: item.id,
    name: item.name,
    sku: item.sku,
    price: item.price,
    currency: item.currency,
    imageUrl: item.imageUrl,
    description: item.description,
    defaultCategoryName: item.defaultCategoryName,
  }));
}

export async function fetchEcwidProductsByCategory(
  categoryId: string
): Promise<EcwidProduct[]> {
  const storeId = import.meta.env.ECWID_STORE_ID;
  const token = import.meta.env.ECWID_SECRET_TOKEN;

  const response = await fetch(
    `https://app.ecwid.com/api/v3/${storeId}/products?category=${categoryId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error al obtener productos por categoría");
  }

  const data = await response.json();
  return data.items.map((item: any) => ({
    id: item.id,
    name: item.name,
    sku: item.sku,
    price: item.price,
    currency: item.currency,
    imageUrl: item.imageUrl,
    description: item.description,
    defaultCategoryName: item.defaultCategoryName,
  }));
}
