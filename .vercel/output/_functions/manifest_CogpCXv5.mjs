import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_Bi6k3bc9.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BIYWhrSI.mjs';
import 'es-module-lexer';

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jairocampos/Public/projects/venegas-tours/","cacheDir":"file:///Users/jairocampos/Public/projects/venegas-tours/node_modules/.astro/","outDir":"file:///Users/jairocampos/Public/projects/venegas-tours/dist/","srcDir":"file:///Users/jairocampos/Public/projects/venegas-tours/src/","publicDir":"file:///Users/jairocampos/Public/projects/venegas-tours/public/","buildClientDir":"file:///Users/jairocampos/Public/projects/venegas-tours/dist/client/","buildServerDir":"file:///Users/jairocampos/Public/projects/venegas-tours/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/booking","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/booking\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"booking","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/booking.ts","pathname":"/api/booking","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://venegascostaricatours.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jairocampos/Public/projects/venegas-tours/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["/Users/jairocampos/Public/projects/venegas-tours/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/booking@_@ts":"pages/api/booking.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CogpCXv5.mjs","/Users/jairocampos/Public/projects/venegas-tours/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CXxsV011.mjs","/Users/jairocampos/Public/projects/venegas-tours/src/components/booking/BookingModal":"_astro/BookingModal.CN6uH1bO.js","/Users/jairocampos/Public/projects/venegas-tours/src/components/layout/MobileMenu":"_astro/MobileMenu.DkD033fo.js","@astrojs/react/client.js":"_astro/client.DYKcjN1Z.js","/Users/jairocampos/Public/projects/venegas-tours/src/pages/gallery.astro?astro&type=script&index=0&lang.ts":"_astro/gallery.astro_astro_type_script_index_0_lang.ClWDxK03.js","/Users/jairocampos/Public/projects/venegas-tours/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.aIT4rmJV.js","/Users/jairocampos/Public/projects/venegas-tours/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.OrJcQzxP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jairocampos/Public/projects/venegas-tours/src/pages/gallery.astro?astro&type=script&index=0&lang.ts","const g=document.querySelectorAll(\".filter-btn\"),p=document.querySelectorAll(\".gallery-item\"),b=document.getElementById(\"empty-state\");g.forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.dataset.filter;g.forEach(o=>{o.classList.remove(\"bg-jungle\",\"text-white\",\"shadow-md\",\"shadow-jungle/20\"),o.classList.add(\"bg-jungle/[0.04]\",\"text-charcoal/60\")}),e.classList.remove(\"bg-jungle/[0.04]\",\"text-charcoal/60\"),e.classList.add(\"bg-jungle\",\"text-white\",\"shadow-md\",\"shadow-jungle/20\");let l=0;p.forEach(o=>{const m=t===\"All\"||o.dataset.category===t;o.style.display=m?\"\":\"none\",m&&l++}),b.style.display=l===0?\"block\":\"none\"})});const i=document.getElementById(\"lightbox\"),c=document.getElementById(\"lb-img\"),d=document.getElementById(\"lb-video\"),f=document.getElementById(\"lb-close\"),r=document.getElementById(\"lb-prev\"),y=document.getElementById(\"lb-next\"),E=document.getElementById(\"lb-counter\");let s=[],n=0;function v(){const e=[];return document.querySelectorAll(\".gallery-item\").forEach(t=>{if(t.style.display===\"none\")return;const l=t.querySelector(\"[data-src]\"),o=t.querySelector(\"[data-video-src]\");l&&e.push(l.dataset.src),o&&e.push(o.dataset.videoSrc)}),e}function a(e){n=e;const t=s[e];t.endsWith(\".mp4\")?(c.style.display=\"none\",d.style.display=\"block\",d.src=t):(d.style.display=\"none\",d.pause(),c.style.display=\"block\",c.style.opacity=\"0\",c.src=t,c.onload=()=>{c.style.opacity=\"1\"}),E.textContent=`${e+1} / ${s.length}`,r.style.display=e===0?\"none\":\"flex\",y.style.display=e===s.length-1?\"none\":\"flex\"}function h(e){s=v();const t=s.indexOf(e);if(t===-1)return;i.style.display=\"flex\",document.body.style.overflow=\"hidden\";const l=document.querySelector(\"header\");l&&(l.style.display=\"none\"),a(t)}function u(){i.style.display=\"none\";const e=document.querySelector(\"header\");e&&(e.style.display=\"\"),document.body.style.overflow=\"\",d.pause(),d.src=\"\"}document.querySelectorAll(\".gallery-thumb\").forEach(e=>{e.addEventListener(\"click\",()=>h(e.dataset.src))});document.querySelectorAll(\".gallery-video-thumb\").forEach(e=>{e.addEventListener(\"click\",()=>h(e.dataset.videoSrc))});f.addEventListener(\"click\",u);r.addEventListener(\"click\",()=>{n>0&&a(n-1)});y.addEventListener(\"click\",()=>{n<s.length-1&&a(n+1)});document.addEventListener(\"keydown\",e=>{i.style.display===\"none\"||i.style.display===\"\"||(e.key===\"Escape\"&&u(),e.key===\"ArrowLeft\"&&n>0&&a(n-1),e.key===\"ArrowRight\"&&n<s.length-1&&a(n+1))});i.addEventListener(\"click\",e=>{const t=e.target;document.getElementById(\"lb-modal\").contains(t)||r.contains(t)||y.contains(t)||f.contains(t)||u()});"],["/Users/jairocampos/Public/projects/venegas-tours/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"click\",t=>{const e=t.target;if(e.closest(\"[data-booking]\")){t.preventDefault(),window.dispatchEvent(new CustomEvent(\"open-booking\"));return}e.closest('a[href=\"#top\"]')&&(t.preventDefault(),window.scrollTo({top:0,behavior:\"smooth\"}))});const o=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add(\"visible\")})},{threshold:.1});document.querySelectorAll(\"[data-animate]\").forEach(t=>o.observe(t));"],["/Users/jairocampos/Public/projects/venegas-tours/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"header\");window.addEventListener(\"scroll\",()=>{e&&(window.scrollY>60?e.classList.add(\"header-scrolled\"):e.classList.remove(\"header-scrolled\"))});"]],"assets":["/_astro/arenal.Cyrgs2dW.png","/_astro/volcano.CC2yO0tc.jpg","/_astro/hero.CuM1K1s7.jpg","/_astro/monteverde.CZLBgCTL.jpg","/_astro/birdwatching.BpkA6kkg.jpg","/_astro/sunset-beach.C-HQwlHQ.jpg","/_astro/miravalles.B4w77vsF.jpg","/_astro/tarcoles.Db8MItMN.jpg","/_astro/bijagua.G3oYn1VQ.jpg","/_astro/roca-bruja.cwgfetbz.jpg","/_astro/la-leona.DruIGidd.jpg","/_astro/playa-avellanas.B8P5dskq.jpg","/_astro/sunset-dinner.DAGDzClZ.jpg","/_astro/playa-conchal.CN5hF1Ua.jpg","/_astro/guaitil.BZ8PeSIf.jpg","/_astro/playa-flamingo.BQ1sr-qp.jpg","/_astro/tamarindo.CXGaDjSv.jpg","/_astro/playa-grande.CrW9h1tf.jpg","/_astro/sunset.aMkS0cBB.jpg","/_astro/las-catalinas.9sg6eblS.jpg","/_astro/romantic-dinner.OmGq8Nz4.jpg","/_astro/about-waterfall.DM8XBw9T.jpg","/_astro/borinquen.Dxyuv60V.jpg","/_astro/catamaran.CHlNuwB-.jpg","/_astro/eco-adventure.BUHbp3bo.jpg","/_astro/buena-vista.CY60ig9j.jpg","/_astro/rio-celeste.eXohObXU.jpg","/_astro/palo-verde.DKGIyS_z.jpg","/_astro/gallery.4vgZIC5K.css","/favicon.png","/favicon.svg","/logo-white.png","/logo.png","/paypal.png","/robots.txt","/_astro/BookingModal.CN6uH1bO.js","/_astro/MobileMenu.DkD033fo.js","/_astro/client.DYKcjN1Z.js","/_astro/index.CdJzaNS0.js","/_astro/jsx-runtime.D_zvdyIk.js","/gallery/animal.jpeg","/gallery/aqnimal3.jpeg","/gallery/catalinas.jpeg","/gallery/catalinas2.jpeg","/gallery/catalinas3.jpeg","/gallery/catalinas4.jpeg","/gallery/catalinas6.jpeg","/gallery/catarata.jpeg","/gallery/conchal.jpeg","/gallery/conchal2.jpeg","/gallery/conchal5.jpeg","/gallery/conchal6.jpeg","/gallery/escultras4.jpeg","/gallery/escultruas3.jpeg","/gallery/esculturas.jpeg","/gallery/esculturas2.jpeg","/gallery/hacienda.jpeg","/gallery/lagarto.jpeg","/gallery/lagarto2.jpeg","/gallery/oso.jpeg","/gallery/pago2.jpeg","/gallery/pago4.jpeg","/gallery/pajaro1.jpeg","/gallery/pajaro10.jpeg","/gallery/pajaro11.jpeg","/gallery/pajaro12.jpeg","/gallery/pajaro14.jpeg","/gallery/pajaro18.jpeg","/gallery/pajaro20.jpeg","/gallery/pajaro21.jpeg","/gallery/pajaro5.jpeg","/gallery/pajaro7.jpeg","/gallery/parajas10.jpeg","/gallery/pesca.jpeg","/gallery/playa1.jpeg","/gallery/roca-bruja.jpeg","/gallery/video-nuevo1.mp4","/gallery/video1.mp4","/gallery/video2.mp4","/gallery/volcan-2.jpeg","/gallery/volcan.jpeg","/gallery/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"AkHWfkJ4fC1fkMBt9FpSKeYpSAhUD/myXvly/rOPdl4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
