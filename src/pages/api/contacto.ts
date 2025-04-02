import type { APIContext } from "astro";
import { createContactInDynamics } from "@/lib/dynamics";
import { sendContactEmail } from "@/lib/sendEmail";

export const prerender = false;

export async function POST({ request }: APIContext) {
  try {
    // 🔹 Inicialización
    let firstname = "";
    let lastname = "";
    let email = "";
    let phone = "";
    let message = "";

    // 📦 Leer datos del request
    if (request.headers.get("content-type")?.includes("application/json")) {
      const body = await request.json();
      firstname = body.firstname || "";
      lastname = body.lastname || "";
      email = body.email || "";
      phone = body.phone || "";
      message = body.message || "";
    } else {
      const formData = await request.formData();
      firstname = (formData.get("firstname") as string) || "";
      lastname = (formData.get("lastname") as string) || "";
      email = (formData.get("email") as string) || "";
      phone = (formData.get("phone") as string) || "";
      message = (formData.get("message") as string) || "";
    }

    // ✅ Validación básica
    if (!firstname || !lastname || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Nombre, apellidos y correo electrónico son obligatorios.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 🚀 Enviar a Dynamics y a tu correo con Resend
    await Promise.all([
      createContactInDynamics({
        firstname,
        lastname,
        email,
        phone,
        message,
      }),
      sendContactEmail({ firstname, lastname, email, phone, message }),
    ]);

    return new Response(
      JSON.stringify({
        success: true,
        message: "✅ Contacto guardado correctamente.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("❌ Error al procesar contacto:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "❌ Ocurrió un error al enviar tu mensaje.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
