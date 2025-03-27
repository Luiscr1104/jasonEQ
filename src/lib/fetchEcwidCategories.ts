// src/lib/fetchEcwidCategories.ts

export type EcwidCategory = {
  id: number;
  name: string;
  productCount: number;
  imageUrl?: string;
  thumbnailUrl?: string;
  hdThumbnailUrl?: string;
};

export async function fetchEcwidCategories(): Promise<EcwidCategory[]> {
  const storeId = import.meta.env.ECWID_STORE_ID;
  const token = import.meta.env.ECWID_SECRET_TOKEN;

  const response = await fetch(
    `https://app.ecwid.com/api/v3/${storeId}/categories`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error al obtener las categorías de Ecwid");
  }

  const data = await response.json();
  return data.items as EcwidCategory[];
}
