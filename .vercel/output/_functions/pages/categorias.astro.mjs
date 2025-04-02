import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_D2CLS9n-.mjs';
import { $ as $$Layout } from '../chunks/Layout_ORAlPM8z.mjs';
import { f as fetchEcwidCategories } from '../chunks/fetchEcwidCategories_Cufnm5h8.mjs';
export { renderers } from '../renderers.mjs';

const $$Categorias = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await fetchEcwidCategories();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Layout, { "title": "Categor\xEDas en venta | Grupo Ecoquintas" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-6xl mx-auto px-6 pt-28 pb-20"> <div class="text-center mb-12"> <h1 class="text-4xl font-serif font-bold tracking-tight text-foreground">
Explorá nuestras <span class="text-primary">categorías</span> </h1> <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
Elegí entre nuestros distintos proyectos de inversión, todos 100%
        financiables sin prima ni fiador.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${categories.map((category) => {
    const image = category.hdThumbnailUrl || category.thumbnailUrl || category.imageUrl;
    return renderTemplate`<div class="bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(category.name, "alt")} class="h-48 w-full object-cover">` : renderTemplate`<div class="h-48 w-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
Sin imagen
</div>`} <div class="p-5 flex flex-col justify-between flex-grow"> <div> <h2 class="text-xl font-bold text-foreground mb-1"> ${category.name} </h2> ${category.productCount > 0 && renderTemplate`<p class="text-sm text-muted-foreground"> ${category.productCount} propiedades
</p>`} </div> <a${addAttribute(`/categorias/${category.id}`, "href")} class="mt-4 text-center text-sm font-medium text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
Ver propiedades
</a> </div> </div>`;
  })} </div> </section> ` })}`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/categorias.astro", void 0);

const $$file = "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/categorias.astro";
const $$url = "/categorias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Categorias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
