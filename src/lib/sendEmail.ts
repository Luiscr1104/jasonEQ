// src/lib/sendContactEmail.ts
import { Resend } from "resend";
import fs from "node:fs/promises";
import path from "node:path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
  firstname,
  lastname,
  email,
  phone,
  message,
}: {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}) {
  const fullName = `${firstname} ${lastname}`;

  // Ruta absoluta al archivo HTML (usa __dirname para evitar errores en producción)
  const filePath = path.resolve(
    process.cwd(),
    "src/emails/ContactFormNotification.html"
  );
  let htmlTemplate = await fs.readFile(filePath, "utf-8");

  // Reemplazo de placeholders
  htmlTemplate = htmlTemplate
    .replace("{{{fullName}}}", fullName)
    .replace("{{{email}}}", email)
    .replace("{{{phone}}}", phone)
    .replaceAll("{{message}}", message || "Sin mensaje");

  return await resend.emails.send({
    from: "Jason Castro <no-reply@terrenoslafortunacr.com>",
    to: ["luiscr1104@gmail.com", "jcastro@ecoquintas.com"],
    subject: "📩 Nuevo contacto desde TerrenosLaFortunaCR.com",
    html: htmlTemplate,
  });
}
