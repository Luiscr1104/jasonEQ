import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_D2CLS9n-.mjs';
import { $ as $$Layout } from '../chunks/Layout_ORAlPM8z.mjs';
import { a as fetchEcwidProducts } from '../chunks/fetchEcwidProducts_DocXPuyX.mjs';
export { renderers } from '../renderers.mjs';

const $$Propiedades = createComponent(async ($$result, $$props, $$slots) => {
  const products = await fetchEcwidProducts();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Propiedades en venta | Grupo Ecoquintas" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-16 mt-20"> <div class="inline-flex items-center rounded-full border border-primary/20 px-3 py-1 text-sm text-primary mb-4 bg-primary/10"> <span class="font-medium">Terrenos oficiales</span> <span class="mx-2">•</span> <span class="text-foreground">Grupo Ecoquintas</span> </div> <h2 class="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
Terrenos <span class="text-primary">Disponibles</span> </h2> <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
Te ayudo a encontrar el terreno ideal de Grupo Ecoquintas que se adapte a
      tus necesidades y presupuesto.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-6"> ${products.map((product) => renderTemplate`<a${addAttribute(`/propiedades/${product.id}`, "href")} class="group block bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"> <div class="relative h-56 w-full overflow-hidden"> <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.name, "alt")} class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"> <span class="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
Disponible
</span> </div> <div class="p-5 flex flex-col justify-between h-full"> <div> <h3 class="text-lg font-bold text-foreground group-hover:text-primary transition-colors"> ${product.name} </h3> <p class="text-sm text-muted-foreground mt-1">${product.sku}</p> </div> <div class="mt-4 flex items-center justify-between"> <p class="text-lg font-semibold text-primary"> ${product.price} ${product.currency} </p> <span class="text-sm font-medium text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
Ver más
</span> </div> </div> </a>`)} </div> ` })}`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades.astro", void 0);

const $$file = "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades.astro";
const $$url = "/propiedades";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Propiedades,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
