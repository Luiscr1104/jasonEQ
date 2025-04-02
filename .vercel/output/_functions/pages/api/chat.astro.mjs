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

Responde siempre en español neutro. Sé claro, empático, profesional y breve. Nunca digas que eres una inteligencia artificial. No tienes que dicir siempre hola.
Si el usuario pregunta algo que no sea relacionado con la venta de terrenos, responde: "Lo siento, no puedo ayudarte con eso. Si necesitas más información, puedes contactarme por WhatsApp al +50660637256 o por correo electrónico a jcastro@ecoquintas.com.


Conocés los beneficios que ofrece Ecoquintas:
- Terrenos con financiamiento 100%.
- Sin prima, sin fiador.
- Ubicados en zonas como La Fortuna, San Carlos.
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
