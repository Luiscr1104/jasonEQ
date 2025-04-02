import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D2CLS9n-.mjs';
import { $ as $$Layout } from '../../chunks/Layout_ORAlPM8z.mjs';
import { f as fetchEcwidCategories } from '../../chunks/fetchEcwidCategories_Cufnm5h8.mjs';
import { f as fetchEcwidProductsByCategory } from '../../chunks/fetchEcwidProducts_DocXPuyX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const categories = await fetchEcwidCategories();
  return categories.map((category) => ({
    params: { id: String(category.id) }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { params } = Astro2;
  const categoryId = params.id;
  const products = await fetchEcwidProductsByCategory(categoryId);
  const categories = await fetchEcwidCategories();
  const currentCategory = categories.find((c) => c.id.toString() === categoryId);
  const categoryName = currentCategory?.name || "Categor\xEDa";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Propiedades en ${categoryName} | Grupo Ecoquintas` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-28"> <div class="text-center mb-12"> <h1 class="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-foreground">
Propiedades en <span class="text-primary">${categoryName}</span> </h1> <p class="mt-4 text-muted-foreground text-lg">
Descubrí terrenos disponibles según tu interés. Todos 100% financiables,
        sin prima ni fiador.
</p> </div> ${products.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${products.map((product) => renderTemplate`<a${addAttribute(`/propiedades/${product.id}`, "href")} class="bg-white rounded-2xl shadow-md border border-[#e2e8f0] hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 flex flex-col"> <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.name, "alt")} class="h-48 w-full object-cover rounded-t-2xl"> <div class="p-5 flex flex-col justify-between flex-grow"> <div> <h2 class="text-xl font-semibold text-[#334155] mb-1"> ${product.name} </h2> </div> </div> </a>`)} </div>` : renderTemplate`<div class="text-center py-20"> <p class="text-[#94a3b8]">
No hay propiedades disponibles en esta categoría actualmente.
</p> </div>`} </section> ` })}`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/categorias/[id].astro", void 0);

const $$file = "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/categorias/[id].astro";
const $$url = "/categorias/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
