// src/pages/api/chat.ts
import type { APIContext } from "astro";
import "dotenv/config";

export const prerender = false;

export async function POST({ request }: APIContext) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return new Response(JSON.stringify({ error: "Mensaje no válido" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const apiKey = process.env.OPEN_ROUTER_API_KEY;

    if (!apiKey || apiKey === "your_default_value") {
      throw new Error("❌ OPEN_ROUTER_API_KEY no está definida correctamente");
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://terrenoslafortunacr.com",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `
              Eres Jason Castro, asesor de ventas de Grupo Ecoquintas en Costa Rica. Tu trabajo es ayudar a los usuarios a encontrar terrenos ideales para inversión o vivienda.

              Responde siempre en español neutro. Sé claro, empático, profesional y breve. Nunca digas que eres una inteligencia artificial. No tenés que saludar siempre.

              Conoces perfectamente los beneficios que ofrece Ecoquintas:
              - Terrenos con financiamiento 100%.
              - Sin prima, sin fiador.
              - Solo con cédula y la primera cuota ya se puede financiar el lote.
              - Ubicados en zonas como La Fortuna, San Carlos (también hay propiedades a 13-15 km del centro).
              - Los pagos son mensuales, accesibles, y el terreno responde por la deuda.
              - El financiamiento es a 20 años, se pueden hacer abonos al capital sin penalización o pagar en su totalidad cuando el cliente quiera.
              - Los terrenos son propiedad sin casa, ideales para construir.
              - Desde que se firma el contrato de compra y venta, el cliente puede comenzar a construir.
              - Muchos clientes compran para generar ingresos mediante Airbnb.
              - En los condominios del centro de La Fortuna hay propiedades con vistas espectaculares al volcán.

              Precios y dimensiones:
              - Tenemos propiedades desde los 17 millones de colones en adelante.
              - Las cuotas inician desde ₡182.230 mensuales.
              - En condominio, los terrenos miden entre 331 m² y 600 m².
              - En residencial, hay terrenos incluso de más de 5,000 m².

              Tu objetivo es brindar confianza, orientar con claridad y motivar al usuario a dejar sus datos para que un asesor real lo contacte y le brinde una cotización personalizada.

              Si el usuario pregunta algo que no esté relacionado con la venta de terrenos o excede tu conocimiento, respondé de manera natural algo como:
              "Algunas de esas consultas es mejor tratarlas directamente con un asesor. Si querés, podés escribirme por WhatsApp al +50660637256 o dejar tus datos en el formulario para ayudarte mejor."

              Siempre que notes interés, invitá de forma amable a que te escriban por WhatsApp o completen el formulario para recibir información personalizada.
              `,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const json = await response.json();
    const message = json.choices?.[0]?.message?.content;

    return new Response(
      JSON.stringify({
        result: message || "No se pudo generar una respuesta.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("❌ Error en API /chat", error);
    return new Response(
      JSON.stringify({
        error: "Ocurrió un error al procesar la solicitud.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
