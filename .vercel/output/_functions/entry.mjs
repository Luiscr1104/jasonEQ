import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_DWZ7SfGd.mjs';
import { manifest } from './manifest_CcrmoAgl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contacto.astro.mjs');
const _page2 = () => import('./pages/categorias/_id_.astro.mjs');
const _page3 = () => import('./pages/categorias.astro.mjs');
const _page4 = () => import('./pages/propiedades/_id_.astro.mjs');
const _page5 = () => import('./pages/propiedades.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.5.4_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4.37.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contacto.ts", _page1],
    ["src/pages/categorias/[id].astro", _page2],
    ["src/pages/categorias.astro", _page3],
    ["src/pages/propiedades/[id].astro", _page4],
    ["src/pages/propiedades.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1c975efe-02b8-4379-9197-832d7c3c2b9d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
