import { config } from "dotenv";
config({ path: ".env" }); // 👈 Esto fuerza a cargar las variables desde .env

type CreateContactInput = {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  message?: string;
  idioma?: "es" | "en";
};

// ⚙️ Variables de entorno usando process.env
const DYNAMICS_API_URL = process.env.ASTRO_DYNAMICS_API_URL;
const CLIENT_ID = process.env.ASTRO_DYNAMICS_CLIENT_ID;
const CLIENT_SECRET = process.env.ASTRO_DYNAMICS_CLIENT_SECRET;
const TENANT_ID = process.env.ASTRO_DYNAMICS_TENANT_ID;
const SCOPE = process.env.ASTRO_DYNAMICS_SCOPE;
const JASON_OWNER_ID = "23fddb4d-37a0-ef11-8a6a-0022480a5c2f"; // GUID fijo de Jason Castro

// 🧠 Validar variables obligatorias
if (
  !DYNAMICS_API_URL ||
  !CLIENT_ID ||
  !CLIENT_SECRET ||
  !TENANT_ID ||
  !SCOPE ||
  !JASON_OWNER_ID
) {
  console.error({
    DYNAMICS_API_URL,
    CLIENT_ID,
    CLIENT_SECRET: CLIENT_SECRET ? "✅" : "❌",
    TENANT_ID,
    SCOPE,
    JASON_OWNER_ID,
  });

  throw new Error("Faltan variables de entorno para conectar con Dynamics");
}

// 🔑 Obtener token de acceso
export async function getAccessToken(): Promise<string> {
  const response = await fetch(
    `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID || "", // 👈 así
        client_secret: CLIENT_SECRET || "", // 👈 así
        scope: SCOPE || "", // 👈 así
      }),
    }
  );

  const data = await response.json();

  if (!data.access_token) {
    console.error("❌ Error al obtener el token:", data);
    throw new Error("Token inválido");
  }

  return data.access_token;
}

// 📬 Crear contacto en Dynamics 365 CRM
export async function createContactInDynamics({
  firstname,
  lastname,
  email,
  phone = "",
  message = "",
  idioma = "es",
}: CreateContactInput): Promise<string> {
  const accessToken = await getAccessToken();

  const contactData = {
    firstname,
    lastname,
    emailaddress1: email,
    telephone1: phone,
    description: message,
    new_idioma: idioma === "es", // true si es español
    new_medio: 100000014, // Pruebas
    new_nivel_de_interes: 100000001, // Muy interesado
  };

  if (!DYNAMICS_API_URL) {
    throw new Error("La URL de Dynamics no está definida.");
  }

  const response = await fetch(DYNAMICS_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "OData-Version": "4.0",
      "OData-MaxVersion": "4.0",
    },
    body: JSON.stringify(contactData),
  });

  const result = await response.text();

  if (!response.ok) {
    console.error("❌ Error al crear contacto:", result);
    throw new Error("Falló la creación del contacto en Dynamics");
  }

  return result;
}
