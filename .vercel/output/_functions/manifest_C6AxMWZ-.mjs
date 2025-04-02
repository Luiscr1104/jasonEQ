import { f as decodeKey } from './chunks/astro/server_D2CLS9n-.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DYjWoVGp.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/","cacheDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/node_modules/.astro/","outDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/dist/","srcDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/","publicDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/public/","buildClientDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/dist/client/","buildServerDir":"file:///Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"categorias/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/categorias","isIndex":false,"type":"page","pattern":"^\\/categorias\\/?$","segments":[[{"content":"categorias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categorias.astro","pathname":"/categorias","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"propiedades/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/propiedades","isIndex":false,"type":"page","pattern":"^\\/propiedades\\/?$","segments":[[{"content":"propiedades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/propiedades.astro","pathname":"/propiedades","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.5.4_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4.37.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/chat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/chat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"chat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/chat.ts","pathname":"/api/chat","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contacto","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contacto\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contacto.ts","pathname":"/api/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/categorias.astro",{"propagation":"none","containsHead":true}],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/categorias/[id].astro",{"propagation":"none","containsHead":true}],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades.astro",{"propagation":"none","containsHead":true}],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/chat@_@ts":"pages/api/chat.astro.mjs","\u0000@astro-page:src/pages/categorias/[id]@_@astro":"pages/categorias/_id_.astro.mjs","\u0000@astro-page:src/pages/categorias@_@astro":"pages/categorias.astro.mjs","\u0000@astro-page:src/pages/propiedades/[id]@_@astro":"pages/propiedades/_id_.astro.mjs","\u0000@astro-page:src/pages/propiedades@_@astro":"pages/propiedades.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/contacto@_@ts":"pages/api/contacto.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.5.4_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4.37.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/node_modules/.pnpm/astro@5.5.4_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4.37.0_typescript@5.8.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B6kOxl3y.mjs","\u0000@astrojs-manifest":"manifest_C6AxMWZ-.mjs","/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades/[id].astro?astro&type=script&index=0&lang.ts":"_astro/_id_.astro_astro_type_script_index_0_lang.DtEgAkFT.js","/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.DaQewdK-.js","/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/ChatWidget.astro?astro&type=script&index=0&lang.ts":"_astro/ChatWidget.astro_astro_type_script_index_0_lang.DckJpg5R.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/propiedades/[id].astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const s=document.getElementById(\"contactForm\"),o=document.getElementById(\"loader\"),e=document.getElementById(\"submitBtn\"),c=document.getElementById(\"successMessage\"),t=document.getElementById(\"toast\"),d=document.getElementById(\"toast-message\");function n(a){t instanceof HTMLElement&&d instanceof HTMLElement&&(d.textContent=a,t.classList.remove(\"hidden\"),t.classList.add(\"show\"),setTimeout(()=>{t.classList.remove(\"show\"),t.classList.add(\"hidden\")},3500))}s instanceof HTMLFormElement&&o instanceof HTMLElement&&e instanceof HTMLButtonElement&&c instanceof HTMLElement&&s.addEventListener(\"submit\",async a=>{a.preventDefault(),o.classList.remove(\"hidden\"),e.disabled=!0,e.classList.add(\"opacity-50\",\"cursor-not-allowed\");const l=new FormData(s);try{const i=await(await fetch(\"/api/contacto\",{method:\"POST\",body:l})).json();i.success?(s.reset(),c.classList.remove(\"hidden\"),n(\"✅ ¡Gracias! Pronto recibirás información personalizada.\")):n(\"❌ Error: \"+i.message)}catch(r){console.error(\"❌ Error inesperado:\",r),n(\"❌ Error al enviar el formulario.\")}finally{o.classList.add(\"hidden\"),e.disabled=!1,e.classList.remove(\"opacity-50\",\"cursor-not-allowed\")}})});"],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelector(\"form\"),o=document.getElementById(\"loader\"),c=document.getElementById(\"successMessage\"),t=e?.querySelector(\"button[type='submit']\"),s=document.getElementById(\"toast\"),i=document.getElementById(\"toast-message\");function a(r){!(s instanceof HTMLElement)||!(i instanceof HTMLElement)||(i.textContent=r,s.classList.remove(\"hidden\"),s.classList.add(\"show\"),setTimeout(()=>{s.classList.remove(\"show\"),s.classList.add(\"hidden\")},3500))}!(e instanceof HTMLFormElement)||!(o instanceof HTMLElement)||!(t instanceof HTMLButtonElement)||e.addEventListener(\"submit\",async r=>{r.preventDefault(),o.classList.remove(\"hidden\"),t.disabled=!0,t.classList.add(\"opacity-50\",\"cursor-not-allowed\");const n=new FormData(e),m=n.get(\"firstname\")||\"\",u=n.get(\"lastname\")||\"\";n.set(\"fullname\",`${m} ${u}`);try{const l=await(await fetch(\"/api/contacto\",{method:\"POST\",body:n})).json();l.success?(e.reset(),c instanceof HTMLElement&&c.classList.remove(\"hidden\"),a(\"✅ ¡Gracias por tu interés! Muy pronto recibirás información.\")):a(\"❌ Error: \"+l.message)}catch(d){console.error(\"❌ Error:\",d),a(\"❌ Error inesperado al enviar el formulario.\")}finally{o.classList.add(\"hidden\"),t.disabled=!1,t.classList.remove(\"opacity-50\",\"cursor-not-allowed\")}})});"],["/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/ChatWidget.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const a=document.getElementById(\"chat-toggle\"),c=document.getElementById(\"chat-widget\"),d=document.getElementById(\"chat-form\"),n=document.getElementById(\"chat-input\"),e=document.getElementById(\"messages\");a?.addEventListener(\"click\",()=>{c?.classList.toggle(\"hidden\")}),d?.addEventListener(\"submit\",async r=>{if(r.preventDefault(),!(n instanceof HTMLInputElement)||!e)return;const o=n.value.trim();if(!o)return;const s=document.createElement(\"div\");s.className=\"bg-gray-100 p-2 rounded-lg text-right\",s.textContent=o,e.appendChild(s),n.value=\"\",e.scrollTop=e.scrollHeight;const t=document.createElement(\"div\");t.className=\"bg-[#fffae6] p-2 italic text-[#334155] rounded-lg\",t.textContent=\"Jason está escribiendo...\",e.appendChild(t);try{const i=await(await fetch(\"/api/chat\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({prompt:o})})).json();t.textContent=i.result||\"No se pudo generar una respuesta.\"}catch{t.textContent=\"❌ Error al conectar con Jason.\"}e.scrollTop=e.scrollHeight})});"]],"assets":["/_astro/montserrat-latin-ext-400-normal.Cd0_BKvP.woff2","/_astro/montserrat-cyrillic-400-normal.BNZrkLa0.woff2","/_astro/montserrat-cyrillic-700-normal.DO8I1zZZ.woff2","/_astro/montserrat-vietnamese-400-normal.CgEMIOQI.woff2","/_astro/montserrat-cyrillic-ext-400-normal.C8cdMEH1.woff2","/_astro/montserrat-cyrillic-ext-700-normal.D3s9QaN5.woff2","/_astro/montserrat-latin-ext-700-normal.DTfQ8iG5.woff2","/_astro/montserrat-vietnamese-700-normal.D8RPk-a5.woff2","/_astro/montserrat-latin-700-normal.BYRy5CoC.woff2","/_astro/montserrat-latin-400-normal.CIMKXMQI.woff2","/_astro/montserrat-vietnamese-600-normal.DPiqdaMz.woff2","/_astro/montserrat-cyrillic-ext-600-normal.DBK1zJ_f.woff2","/_astro/montserrat-cyrillic-600-normal.CFBuNk4A.woff2","/_astro/montserrat-latin-600-normal.CjtsKS3e.woff2","/_astro/montserrat-latin-ext-600-normal.Cdwl3Fm3.woff2","/_astro/montserrat-vietnamese-400-normal.B33MQ3yC.woff","/_astro/montserrat-cyrillic-400-normal.DpKvHuFb.woff","/_astro/montserrat-cyrillic-700-normal.CF3jbqy3.woff","/_astro/montserrat-cyrillic-ext-400-normal.BWKiD3Kv.woff","/_astro/montserrat-cyrillic-ext-700-normal.B5jSujIz.woff","/_astro/montserrat-latin-ext-400-normal.Cy-iUbkq.woff","/_astro/montserrat-vietnamese-700-normal.DUoPxeMJ.woff","/_astro/montserrat-latin-700-normal.DHOpyQza.woff","/_astro/montserrat-latin-ext-700-normal.DdSde0HZ.woff","/_astro/montserrat-latin-400-normal.Sf4eHQyG.woff","/_astro/montserrat-vietnamese-600-normal.CdMhFqNs.woff","/_astro/montserrat-latin-600-normal.CoQZtLyZ.woff","/_astro/montserrat-cyrillic-600-normal.DMdmdRvE.woff","/_astro/montserrat-cyrillic-ext-600-normal.BV6JCa8K.woff","/_astro/montserrat-latin-ext-600-normal.BxCz31zx.woff","/_astro/categorias.3-46jEFz.css","/Slider.jpg","/condo.png","/establo.png","/favicon.svg","/jason-profile.png","/jason.png","/logo.png","/residencial.png","/images/galeria/ecoquintas-1.jpg","/images/galeria/ecoquintas-2.jpg","/images/galeria/ecoquintas-3.JPG","/images/galeria/ecoquintas-4.jpeg","/images/galeria/ecoquintas-5.jpeg","/categorias/index.html","/propiedades/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"NlQl0I7tJctbayuiUK/7qXUE5vOCpc/YVhyiF3Tm9HM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
