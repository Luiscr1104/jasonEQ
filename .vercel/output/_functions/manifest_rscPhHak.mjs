import { e as decodeKey } from './chunks/astro/server_DNKnIY11.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CbBj1Z2L.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/","cacheDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/node_modules/.astro/","outDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/dist/","srcDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/","publicDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/public/","buildClientDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/dist/client/","buildServerDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"categorias/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/categorias","isIndex":false,"type":"page","pattern":"^\\/categorias\\/?$","segments":[[{"content":"categorias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categorias.astro","pathname":"/categorias","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"propiedades/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/propiedades","isIndex":false,"type":"page","pattern":"^\\/propiedades\\/?$","segments":[[{"content":"propiedades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/propiedades.astro","pathname":"/propiedades","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.5.4_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4.37.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contacto","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contacto\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contacto.ts","pathname":"/api/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/categorias.astro",{"propagation":"none","containsHead":true}],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/categorias/[id].astro",{"propagation":"none","containsHead":true}],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades.astro",{"propagation":"none","containsHead":true}],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/categorias/[id]@_@astro":"pages/categorias/_id_.astro.mjs","\u0000@astro-page:src/pages/categorias@_@astro":"pages/categorias.astro.mjs","\u0000@astro-page:src/pages/propiedades/[id]@_@astro":"pages/propiedades/_id_.astro.mjs","\u0000@astro-page:src/pages/propiedades@_@astro":"pages/propiedades.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/contacto@_@ts":"pages/api/contacto.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.5.4_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4.37.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/node_modules/.pnpm/astro@5.5.4_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4.37.0_typescript@5.8.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CQ79uXyM.mjs","\u0000@astrojs-manifest":"manifest_rscPhHak.mjs","/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.DaQewdK-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\"form\"),o=document.getElementById(\"loader\"),c=document.getElementById(\"successMessage\"),t=e?.querySelector(\"button[type='submit']\"),s=document.getElementById(\"toast\"),i=document.getElementById(\"toast-message\");function a(r){!(s instanceof HTMLElement)||!(i instanceof HTMLElement)||(i.textContent=r,s.classList.remove(\"hidden\"),s.classList.add(\"show\"),setTimeout(()=>{s.classList.remove(\"show\"),s.classList.add(\"hidden\")},3500))}!(e instanceof HTMLFormElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||e.addEventListener(\"submit\",async r=>{r.preventDefault(),o.classList.remove(\"hidden\"),t.disabled=!0,t.classList.add(\"opacity-50\",\"cursor-not-allowed\");const n=new FormData(e),m=n.get(\"firstname\")||\"\",u=n.get(\"lastname\")||\"\";n.set(\"fullname\",`${m} ${u}`);try{const l=await(await fetch(\"/api/contacto\",{method:\"POST\",body:n})).json();l.success?(e.reset(),c instanceof HTMLElement&&c.classList.remove(\"hidden\"),a(\"✅ ¡Gracias por tu interés! Muy pronto recibirás información.\")):a(\"❌ Error: \"+l.message)}catch(d){console.error(\"❌ Error:\",d),a(\"❌ Error inesperado al enviar el formulario.\")}finally{o.classList.add(\"hidden\"),t.disabled=!1,t.classList.remove(\"opacity-50\",\"cursor-not-allowed\")}})});"]],"assets":["/_astro/categorias.BKSusSEl.css","/Slider.jpg","/condo.png","/establo.png","/favicon.svg","/jason-profile.png","/jason.png","/residencial.png","/images/galeria/ecoquintas-1.jpg","/images/galeria/ecoquintas-2.jpg","/images/galeria/ecoquintas-3.JPG","/images/galeria/ecoquintas-4.jpeg","/images/galeria/ecoquintas-5.jpeg","/categorias/index.html","/propiedades/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"77inr9rCPZS01QyfhibHPlfGi3ELW9BaWJjyU7+wSAo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
