// src/lib/fetchEcwidProducts.ts
export type EcwidProduct = {
  id: number;
  name: string;
  sku: string;
  price: number;
  currency: string;
  imageUrl: string;
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
  return data.items as EcwidProduct[];
}
