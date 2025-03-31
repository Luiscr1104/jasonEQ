// src/pages/api/contacto.ts
import type { APIContext } from "astro";
import { createContactInDynamics } from "../../lib/dynamics";

export const prerender = false; // 👈 Requerido para rutas API

export async function POST({ request }: APIContext) {
  try {
    let firstname: string,
      lastname: string,
      email: string,
      phone: string,
      message: string,
      idioma: "es" | "en";

    if (request.headers.get("content-type")?.includes("application/json")) {
      const body = await request.json();
      ({ firstname, lastname, email, phone, message, idioma } = body);
    } else {
      const formData = await request.formData();
      firstname = formData.get("firstname") as string;
      lastname = formData.get("lastname") as string;
      email = formData.get("email") as string;
      phone = formData.get("phone") as string;
      message = formData.get("message") as string;
      idioma = formData.get("new_idioma") as "es" | "en";
    }

    if (!firstname || !lastname || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Nombre, Apellidos y email son obligatorios",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    await createContactInDynamics({
      firstname,
      lastname,
      email,
      phone,
      message,
      idioma,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contacto creado exitosamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Ocurrió un error al procesar la solicitud",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
