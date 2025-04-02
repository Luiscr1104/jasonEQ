import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderScript, u as unescapeHTML } from '../../chunks/astro/server_D2CLS9n-.mjs';
import { $ as $$Layout } from '../../chunks/Layout_ORAlPM8z.mjs';
import { a as fetchEcwidProducts } from '../../chunks/fetchEcwidProducts_DocXPuyX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const products = await fetchEcwidProducts();
  return products.map((product) => ({
    params: { id: String(product.id) }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { params } = Astro2;
  const productId = params.id;
  const allProducts = await fetchEcwidProducts();
  const product = allProducts.find((p) => p.id.toString() === productId);
  if (!product) {
    throw new Error("Producto no encontrado");
  }
  function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  const suggested = shuffleArray(
    allProducts.filter((p) => p.id.toString() !== productId)
  ).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": `Terreno en venta | ${product.name}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-6xl mx-auto px-6 mt-20"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Imagen y descripción --> <div class="md:col-span-2 space-y-6"> <div class="overflow-hidden rounded-xl border border-border shadow"> <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.name, "alt")} class="w-full h-auto object-cover"> </div> ${product.description && renderTemplate`<div class="mt-10"> <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">
Detalles del terreno
</h2> <div class="prose prose-lg max-w-none text-foreground 
                  prose-strong:text-primary prose-strong:font-semibold 
                  prose-p:leading-relaxed prose-p:text-[17px]">${unescapeHTML(product.description.replace(/<br\s*\/?>/gi, ""))}</div> </div>`} </div> <!-- Info lateral --> <div class="md:col-span-2 flex flex-col justify-between space-y-6"> <div> <div class="mt-4"> <a href="/propiedades" class="text-sm text-primary hover:underline">
← Volver al catálogo
</a> </div> <h1 class="text-3xl font-bold text-foreground mb-2"> ${product.name} </h1> <form id="contactForm" method="POST" action="/api/contacto" enctype="application/x-www-form-urlencoded" class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-advisor-slate mb-1">Nombre</label> <input type="text" name="firstname" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-advisor-teal" placeholder="Tu nombre"> </div> <div> <label class="block text-sm font-medium text-advisor-slate mb-1">Apellidos</label> <input type="text" name="lastname" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-advisor-teal" placeholder="Tus apellidos"> </div> </div> <div> <label class="block text-sm font-medium text-advisor-slate mb-1">Correo electrónico</label> <input type="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-advisor-teal" placeholder="ejemplo@correo.com"> </div> <div> <label class="block text-sm font-medium text-advisor-slate mb-1">Teléfono</label> <input type="tel" name="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-advisor-teal" placeholder="Ej. +506 6063-7256"> </div> <div> <label class="block text-sm font-medium text-advisor-slate mb-1">Mensaje</label> <textarea name="message" rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-advisor-teal" placeholder="¿En qué podemos ayudarte?"></textarea> </div> <div class="relative"> <button type="submit" class="w-full bg-advisor-teal hover:bg-advisor-teal-dark text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2" id="submitBtn">
Enviar mensaje
</button> <div id="loader" class="loader absolute right-4 top-1/2 -translate-y-1/2 hidden"></div> </div> <p id="successMessage" class="hidden text-green-600 text-center font-medium mt-4">
✅ ¡Gracias! Hemos recibido tu solicitud.
</p> <div id="toast" class="toast hidden"> <span id="toast-message"></span> </div> </form> <!-- Lógica JavaScript del form --> ${renderScript($$result2, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades/[id].astro?astro&type=script&index=0&lang.ts")} </div> </div> </div> </section>  <section class="max-w-6xl mx-auto px-6 mt-20"> <h2 class="text-2xl font-semibold text-foreground mb-6 text-center">
También podría interesarte
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> ${suggested.map((item) => renderTemplate`<a${addAttribute(`/propiedades/${item.id}`, "href")} class="group block bg-white border border-border rounded-2xl overflow-hidden shadow hover:shadow-xl transition-transform hover:-translate-y-1"> <div class="relative h-48 w-full overflow-hidden"> <img${addAttribute(item.imageUrl, "src")}${addAttribute(item.name, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"> <span class="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
Disponible
</span> </div> <div class="p-4"> <h3 class="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors"> ${item.name} </h3> </div> </a>`)} </div> <div class="text-center my-10"> <a href="/propiedades" class="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors">
Ver todas las propiedades
</a> </div> </section> ` })}`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades/[id].astro", void 0);

const $$file = "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades/[id].astro";
const $$url = "/propiedades/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
