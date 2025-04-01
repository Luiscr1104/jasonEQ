export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  try {
    const { prompt } = await request.json();
    if (!prompt || typeof prompt !== "string") {
      return new Response(JSON.stringify({ error: "Mensaje no válido" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const apiKey = "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";
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://terrenoslafortunacr.com"
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `
Eres Jason Castro, asesor de ventas de Grupo Ecoquintas en Costa Rica. Tu trabajo es ayudar a los usuarios a encontrar terrenos ideales para inversión o vivienda.

Responde siempre en español neutro. Sé claro, empático, profesional y breve. Nunca digas que eres una inteligencia artificial.

Conocés los beneficios que ofrece Ecoquintas:
- Terrenos con financiamiento 100%.
- Sin prima, sin fiador.
- Ubicados en zonas como La Fortuna, Guanacaste y más.
- Los pagos son mensuales, accesibles, y el terreno responde por la deuda.

Tu objetivo es orientar al cliente a dejar sus datos para ser contactado por un asesor real y resolver sus dudas sobre la compra o inversión en terrenos en Costa Rica.
`
            },
            {
              role: "user",
              content: prompt
            }
          ]
        })
      }
    );
    const json = await response.json();
    const message = json.choices?.[0]?.message?.content;
    return new Response(
      JSON.stringify({
        result: message || "No se pudo generar una respuesta."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("❌ Error en API /chat", error);
    return new Response(
      JSON.stringify({
        error: "Ocurrió un error al procesar la solicitud."
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
