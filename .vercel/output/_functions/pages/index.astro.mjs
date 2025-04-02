import { c as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, d as addAttribute, e as renderScript, a as createAstro } from '../chunks/astro/server_D2CLS9n-.mjs';
import { a as $$UserCheck, b as $$Percentage, c as $$Clock, d as $$HeartHandshake, e as $$Shield, f as $$TrendingUp, g as $$MapPinBolt, h as $$Seedling, i as $$ArrowUpRight, j as $$Star, k as $$PhoneCall, l as $$Mail, $ as $$Layout } from '../chunks/Layout_ORAlPM8z.mjs';
/* empty css                                 */
import { f as fetchEcwidCategories } from '../chunks/fetchEcwidCategories_Cufnm5h8.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden bg-background" aria-labelledby="hero-title" data-astro-cid-bbe6dxrz> <!-- Imagen de fondo con gradiente --> <div class="absolute inset-0 z-0 animate-fade-in" role="img" aria-label="Terrenos Ecoquintas" data-astro-cid-bbe6dxrz> <img src="/Slider.jpg" alt="Terrenos Ecoquintas" class="w-full h-full object-cover brightness-[0.85] blur-[1px]" loading="eager" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60" data-astro-cid-bbe6dxrz></div> </div> <!-- Contenido --> <div class="relative z-10 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto py-20 sm:py-24 md:py-32 lg:py-40 animate-fade-up" data-astro-cid-bbe6dxrz> <header class="max-w-3xl space-y-8" data-astro-cid-bbe6dxrz> <!-- Badge superior --> <div class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm" data-astro-cid-bbe6dxrz> <span class="mr-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium" data-astro-cid-bbe6dxrz>
Oficial
</span>
Asesor Autorizado de Grupo Ecoquintas
</div> <!-- Título optimizado SEO --> <h1 id="hero-title" class="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md sm:drop-shadow-lg leading-tight" data-astro-cid-bbe6dxrz> <strong data-astro-cid-bbe6dxrz>Terrenos 100% financiados</strong> con tu <span class="text-primary" data-astro-cid-bbe6dxrz>asesor personal</span> de Grupo Ecoquintas
</h1> <!-- Beneficios clave --> <ul class="flex flex-wrap gap-3 mt-6 list-none" aria-label="Beneficios principales" data-astro-cid-bbe6dxrz> ${["100% financiadas", "Sin prima", "Sin fiador"].map((benefit) => renderTemplate`<li class="bg-white/10 border border-white/20 text-white text-sm sm:text-base font-medium px-5 py-2 rounded-full backdrop-blur-sm shadow-sm hover:bg-white/20 transition" data-astro-cid-bbe6dxrz> ${benefit} </li>`)} </ul> <!-- Descripción --> <p class="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-4" data-astro-cid-bbe6dxrz>
Asesoría personalizada y gratuita para invertir en terrenos en
<strong data-astro-cid-bbe6dxrz> La Fortuna de San Carlos</strong>. Accedé a lotes con precios
        exclusivos, excelente ubicación y la mejor financiación del país.
</p> <!-- Botones --> <nav class="flex flex-col sm:flex-row gap-4 pt-6" aria-label="Acciones principales" data-astro-cid-bbe6dxrz> <a href="/propiedades" class="text-white bg-primary hover:bg-primary/80 px-6 py-3 rounded-md text-center text-base font-medium transition-colors duration-200" data-astro-cid-bbe6dxrz>
Ver terrenos disponibles
</a> <a href="#contacto" class="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-3 rounded-md text-center text-base font-medium transition-colors duration-200" data-astro-cid-bbe6dxrz>
Contactarme
</a> </nav> </header> </div> <!-- SVG decorativo inferior --> <div class="custom-shape-divider-bottom-1743179714" data-astro-cid-bbe6dxrz> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" data-astro-cid-bbe6dxrz> <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill" data-astro-cid-bbe6dxrz></path> </svg> </div> </section> <!-- Animaciones --> `;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Hero.astro", void 0);

const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="beneficios" class="py-20 bg-background mt-20"> <div class="container px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"> <!-- Título principal --> <div class="text-center mb-16 max-w-3xl mx-auto"> <span class="inline-block text-primary font-medium mb-2">
VENTAJAS EXCLUSIVAS
</span> <h2 class="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
¿Por qué
<span class="relative inline-block"> <span class="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded"></span> <span class="relative">elegirme</span> </span>
como tu asesor?
</h2> <p class="mt-4 text-lg text-muted-foreground">
Como asesor independiente autorizado, te ofrezco ventajas exclusivas al
        adquirir terrenos oficiales de Grupo Ecoquintas.
</p> </div> <!-- Grid de beneficios optimizado --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${[
    {
      icon: $$UserCheck,
      title: "Asesor\xEDa Personalizada",
      text: "Atenci\xF3n directa y personalizada durante todo el proceso de compra, adaptada a tus necesidades."
    },
    {
      icon: $$Percentage,
      title: "Precios Oficiales",
      text: "Acced\xE9 a las mismas condiciones que ofrece Grupo Ecoquintas, sin cargos adicionales."
    },
    {
      icon: $$Clock,
      title: "Ahorro de Tiempo",
      text: "Te ayudo a encontrar el terreno ideal seg\xFAn tus necesidades espec\xEDficas."
    },
    {
      icon: $$HeartHandshake,
      title: "Acompa\xF1amiento Completo",
      text: "Te acompa\xF1o durante todo el proceso, desde la selecci\xF3n hasta la escrituraci\xF3n."
    }
  ].map(({ icon: Icon, title, text }) => renderTemplate`<div class="bg-white p-6 rounded-2xl shadow-sm border border-border hover:shadow-md hover:border-primary/40 transition group hover:-translate-y-1"> <div class="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors"> ${renderComponent($$result, "Icon", Icon, { "class": "w-6 h-6" })} </div> <h3 class="text-xl font-semibold text-foreground mb-2">${title}</h3> <p class="text-muted-foreground">${text}</p> </div>`)} <!-- Tarjeta destacada con gradient --> <div class="col-span-1 sm:col-span-2 lg:col-span-4"> <div class="bg-gradient-to-br from-primary/10 via-yellow-50 to-white border border-primary/30 p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6 transition hover:-translate-y-1"> <div class="flex items-center gap-4"> <div class="h-12 w-12 flex items-center justify-center rounded-xl bg-primary text-white"> ${renderComponent($$result, "Check", $$UserCheck, { "class": "w-6 h-6" })} </div> <div> <div class="text-primary font-medium text-sm">DESTACADO</div> <h3 class="text-xl font-semibold text-foreground">
Experiencia Comprobada
</h3> </div> </div> <p class="text-muted-foreground text-center md:text-left md:ml-8">
Más de 5 años ayudando a clientes a encontrar su terreno ideal con
            Grupo Ecoquintas.
</p> </div> </div> </div> <!-- Subtítulo --> <div class="text-center mb-12 max-w-3xl mx-auto mt-20"> <span class="inline-block text-primary font-medium mb-2">
TERRENOS DE CALIDAD
</span> <h3 class="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
Ventajas de los terrenos <span class="text-primary">Ecoquintas</span> </h3> </div> <!-- Ventajas de los terrenos --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${[
    {
      icon: $$Shield,
      title: "Inversi\xF3n Segura",
      text: "Todos los terrenos cuentan con escrituras y documentaci\xF3n legal en regla."
    },
    {
      icon: $$TrendingUp,
      title: "Alta Plusval\xEDa",
      text: "Ubicaciones estrat\xE9gicas con crecimiento constante y apreciaci\xF3n garantizada."
    },
    {
      icon: $$MapPinBolt,
      title: "Ubicaciones Premium",
      text: "Terrenos en zonas de alto desarrollo con excelente conectividad y servicios."
    },
    {
      icon: $$Seedling,
      title: "Entorno Natural",
      text: "Desarrollos en armon\xEDa con la naturaleza, preservando el ecosistema local."
    }
  ].map(({ icon: Icon, title, text }) => renderTemplate`<div class="bg-white p-6 rounded-2xl shadow-sm border border-border hover:border-primary/40 transition-transform group hover:-translate-y-1"> <div class="h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors"> ${renderComponent($$result, "Icon", Icon, { "class": "w-6 h-6" })} </div> <h3 class="text-xl font-semibold text-foreground mb-2">${title}</h3> <p class="text-muted-foreground">${text}</p> </div>`)} </div> </div> </section>`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Benefits.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="py-20 bg-background mt-20"> <div class="container px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> <!-- Imagen y tarjeta --> <div class="lg:col-span-5"> <div class="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"> <img src="/jason.png" alt="Jason Castro - Asesor Inmobiliario" class="w-full h-full object-cover" loading="eager"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-white"> <div class="flex items-center gap-2 mb-2"> <div class="h-2 w-2 rounded-full bg-primary"></div> <span class="text-sm font-medium">Asesor Certificado</span> </div> <h3 class="text-2xl font-serif font-bold">Jason Castro</h3> <p class="text-white/80">
Especialista en terrenos de inversión con más de 5 años de
              experiencia
</p> </div> </div> </div> <!-- Texto y beneficios --> <div class="lg:col-span-7 space-y-6"> <span class="inline-block text-primary font-medium mb-2">MIS SERVICIOS</span> <h2 class="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
Mis servicios como
<span class="relative inline-block"> <span class="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 rounded"></span> <span class="relative">asesor independiente</span> </span> </h2> <p class="text-lg text-muted-foreground">
Como asesor inmobiliario independiente autorizado por Grupo
          Ecoquintas, te ofrezco un servicio personalizado para que encuentres
          el terreno ideal para tu inversión o proyecto.
</p> <!-- Lista de servicios --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> ${[
    "Asesor\xEDa personalizada",
    "Visitas guiadas",
    "Gesti\xF3n de tr\xE1mites",
    "Asesor\xEDa financiera"
  ].map((titulo, index) => renderTemplate`<div class="bg-muted p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors"> <div class="flex gap-3 mb-4"> ${renderComponent($$result, "Check", $$UserCheck, { "class": "h-6 w-6 text-primary flex-shrink-0" })} <h3 class="font-medium text-lg">${titulo}</h3> </div> <p class="text-muted-foreground ml-9"> ${[
    "Te ayudo a identificar el terreno que mejor se adapte a tus necesidades y presupuesto.",
    "Te acompa\xF1o personalmente a conocer los terrenos que te interesen.",
    "Te ayudo con toda la documentaci\xF3n y tr\xE1mites necesarios para la compra.",
    "Te oriento sobre las mejores opciones de financiamiento disponibles."
  ][index]} </p> </div>`)} </div> <!-- Botón CTA --> <div class="pt-6"> <a href="#contacto" class="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md text-base font-medium transition-transform duration-200 group"> <span>Agenda una consulta gratuita</span> ${renderComponent($$result, "ArrowUpRight", $$ArrowUpRight, { "class": "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })} </a> </div> </div> </div> </div> </section>`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Services.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      id: 1,
      content: "Jason me ayud\xF3 a encontrar el terreno perfecto en Altos del Guayacan. Su asesor\xEDa fue invaluable y me ahorr\xF3 mucho tiempo en la b\xFAsqueda. Totalmente recomendado.",
      author: "Argiere Chinchicha",
      role: "Inversionista",
      avatar: "AC"
    },
    {
      id: 2,
      content: "Excelente atenci\xF3n y asesor\xEDa. Jason me explic\xF3 todas las opciones disponibles y me ayud\xF3 a elegir el terreno que mejor se adaptaba a mis necesidades y presupuesto.",
      author: "Pamela",
      role: "Propietaria",
      avatar: "P"
    },
    {
      id: 3,
      content: "Gracias a Jason pude adquirir un terreno en Condominio El Establo con excelentes condiciones. Su conocimiento del mercado y de los desarrollos de Ecoquintas fue fundamental.",
      author: "Marcos Sol\xEDs",
      role: "Inversionista",
      avatar: "MS"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="testimonios" class="py-20 bg-[#FAFAFA]"> <div class="container px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"> <!-- Encabezado --> <div class="text-center mb-16"> <span class="inline-block text-primary font-medium mb-2">EXPERIENCIAS</span> <h2 class="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
Lo que dicen <span class="text-primary">mis clientes</span> </h2> <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
Experiencias de quienes ya han confiado en mi asesoría para adquirir terrenos de Grupo Ecoquintas.
</p> </div> <!-- Tarjetas --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${testimonials.map((testimonial, index) => renderTemplate`<div${addAttribute(`bg-white rounded-2xl border border-border overflow-hidden shadow-sm ${index === 1 ? "md:-mt-8" : ""}`, "class")}> <div class="pt-8 px-6 relative"> <div class="flex mb-4"> ${[...Array(5)].map((_, i) => renderTemplate`${renderComponent($$result, "Star", $$Star, { "key": i, "class": "h-5 w-5 fill-primary text-primary" })}`)} </div> <p class="text-foreground relative z-10">"${testimonial.content}"</p> </div> <div class="border-t border-border px-6 pt-6 pb-8 mt-6"> <div class="flex items-center gap-4"> <!-- Avatar con iniciales --> <div class="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold"> ${testimonial.avatar} </div> <div> <p class="font-medium text-foreground">${testimonial.author}</p> <p class="text-sm text-muted-foreground">${testimonial.role}</p> </div> </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Testimonials.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="py-20 bg-[#334155] text-white"> <div class="container px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12"> <!-- Información de contacto --> <div class="lg:col-span-5"> <span class="inline-block text-[#ffcc66] font-medium mb-2">CONTACTO</span> <h2 class="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">
¿Interesado en <span class="text-[#ffcc66] underline decoration-[#ffcc66]/40 underline-offset-4">invertir</span>?
</h2> <p class="text-lg text-white/90 max-w-md mb-12">
Completa el formulario y me pondré en contacto contigo para brindarte
          toda la información sobre los terrenos de Grupo Ecoquintas.
</p> <div class="space-y-8"> <div class="flex items-start gap-4"> <div class="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-white"> ${renderComponent($$result, "PhoneCall", $$PhoneCall, { "class": "h-6 w-6" })} </div> <div> <h3 class="font-medium text-lg text-white">Teléfono</h3> <p class="text-white/80">+506 6063-7256</p> </div> </div> <div class="flex items-start gap-4"> <div class="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-white"> ${renderComponent($$result, "Mail", $$Mail, { "class": "h-6 w-6" })} </div> <div> <h3 class="font-medium text-lg text-white">Correo electrónico</h3> <p class="text-white/80">jcastro@ecoquintas.com</p> </div> </div> <div class="flex items-start gap-4"> <div class="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-white"> ${renderComponent($$result, "MapPin", $$MapPinBolt, { "class": "h-6 w-6" })} </div> <div> <h3 class="font-medium text-lg text-white">Oficina</h3> <p class="text-white/80">
2.5km este del parque <br>
La Fortuna, San Carlos, Costa Rica
</p> </div> </div> <div class="flex items-start gap-4"> <div class="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 text-white"> ${renderComponent($$result, "Clock", $$Clock, { "class": "h-6 w-6" })} </div> <div> <h3 class="font-medium text-lg text-white">
Horario de atención
</h3> <p class="text-white/80">
Lunes a Lunes: 7:00 AM - 6:00 PM<br>
Sábados: 7:00 AM - 2:00 PM
</p> </div> </div> </div> </div> <!-- Formulario --> <div class="lg:col-span-7"> <form id="contactForm" method="POST" action="/api/contacto" enctype="application/x-www-form-urlencoded" class="bg-white text-foreground p-8 rounded-2xl shadow-lg space-y-6"> <h3 class="font-serif text-2xl font-bold mb-4 text-foreground">
Solicita información
</h3> <!-- Nombres y apellidos --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="space-y-2"> <label for="firstname" class="text-sm font-medium">Nombre *</label> <input id="firstname" name="firstname" required class="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"> </div> <div class="space-y-2"> <label for="lastname" class="text-sm font-medium">Apellidos *</label> <input id="lastname" name="lastname" required class="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"> </div> </div> <!-- Teléfono --> <div class="space-y-2"> <label for="phone" class="text-sm font-medium">Teléfono *</label> <input id="phone" name="phone" type="tel" required class="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"> </div> <!-- Correo electrónico --> <div class="space-y-2"> <label for="email" class="text-sm font-medium">Correo electrónico *</label> <input id="email" name="email" type="email" required class="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"> </div> <!-- Tipo de terreno --> <div class="space-y-2"> <label for="interes" class="text-sm font-medium">
¿Qué tipo de terreno te interesa? *
</label> <select id="interes" name="interes" required class="w-full rounded-md border border-border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"> <option disabled selected>Selecciona una opción</option> <option value="residencial">Terreno Residencial</option> <option value="comercial">Terreno Comercial</option> <option value="inversion">Terreno para Inversión</option> <option value="campestre">Terreno Campestre</option> </select> </div> <!-- Presupuesto --> <div class="space-y-2"> <label for="presupuesto" class="text-sm font-medium">
Presupuesto aproximado
</label> <select id="presupuesto" name="presupuesto" class="w-full rounded-md border border-border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"> <option disabled selected>Selecciona una opción</option> <option value="500k-1m">$500,000 - $1,000,000</option> <option value="1m-2m">$1,000,000 - $2,000,000</option> <option value="2m-3m">$2,000,000 - $3,000,000</option> <option value="3m+">Más de $3,000,000</option> </select> </div> <!-- Mensaje --> <div class="space-y-2"> <label for="message" class="text-sm font-medium">
Mensaje (opcional)
</label> <textarea id="message" name="message" placeholder="Cuéntame más sobre lo que buscas..." class="w-full rounded-md border border-border px-3 py-2 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary"></textarea> </div> <!-- Marketing --> <div class="flex items-start gap-2"> <input type="checkbox" id="marketing" name="marketing" class="mt-1 accent-[color:var(--primary)]"> <label for="marketing" class="text-sm">
Acepto recibir información sobre terrenos y promociones
</label> </div> <!-- Términos --> <div class="flex items-start gap-2"> <input type="checkbox" id="terminos" name="terminos" required class="mt-1 accent-[color:var(--primary)]"> <label for="terminos" class="text-sm">
He leído y acepto los términos y condiciones y la política de
              privacidad *
</label> </div> <!-- Botón enviar --> <div class="relative"> <button type="submit" class="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors" id="submitBtn"> <span>Solicitar información</span> ${renderComponent($$result, "ArrowUpRight", $$ArrowUpRight, { "class": "h-4 w-4" })} </button> <!-- Loader --> <div id="loader" class="loader absolute right-4 top-1/2 -translate-y-1/2 hidden"></div> </div> <!-- Mensajes --> <p id="successMessage" class="text-green-600 font-medium hidden">
✅ ¡Formulario enviado correctamente!
</p> <span id="loader" class="loader hidden mx-auto my-4"></span> <p id="successMessage" class="hidden text-green-600 text-center font-medium mt-4">
✅ ¡Gracias! Hemos recibido tu solicitud.
</p> <div id="toast" class="toast hidden"> <span id="toast-message"></span> </div> </form> ${renderScript($$result, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Contact.astro?astro&type=script&index=0&lang.ts")} </div> </div> </div> </section>`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Contact.astro", void 0);

const $$Categories = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await fetchEcwidCategories();
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl mx-auto px-6 mt-20" id="categories"> <div class="text-center mb-16"> <!-- Badge superior --> <div class="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 text-primary text-sm px-3 py-1 mb-4"> <span class="font-medium">Terrenos oficiales</span> <span class="mx-2">•</span> <span class="text-secondary">Grupo Ecoquintas</span> </div> <!-- Título --> <h2 class="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-secondary">
Terrenos <span class="text-primary">Disponibles</span> </h2> <!-- Descripción --> <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
Te ayudo a encontrar el terreno ideal de Grupo Ecoquintas que se adapte a
      tus necesidades y presupuesto.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${categories.map((category) => {
    const image = category.hdThumbnailUrl || category.thumbnailUrl || category.imageUrl;
    return renderTemplate`<div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(category.name, "alt")} class="h-48 w-full object-cover">` : renderTemplate`<div class="h-48 w-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
Sin imagen
</div>`} <div class="p-5 flex flex-col justify-between flex-grow"> <div> <h3 class="text-xl font-bold text-secondary mb-1"> ${category.name} </h3> ${category.productCount > 0 && renderTemplate`<p class="text-sm text-gray-500"> ${category.productCount} propiedades
</p>`} </div> <a${addAttribute(`/categorias/${category.id}`, "href")} class="mt-4 text-center text-sm font-medium text-white bg-primary hover:bg-primary/80 px-4 py-2 rounded-md transition-colors">
Ver propiedades
</a> </div> </div>`;
  })} </div> </section>`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/Categories.astro", void 0);

const $$FancyGallery = createComponent(($$result, $$props, $$slots) => {
  const images = [
    {
      url: "/images/galeria/ecoquintas-1.jpg",
      caption: "Condominio El Establo"
    },
    {
      url: "/images/galeria/ecoquintas-2.jpg",
      caption: "Condominio Perla 1"
    },
    {
      url: "/images/galeria/ecoquintas-3.JPG",
      caption: "Condominio Gaia"
    },
    {
      url: "/images/galeria/ecoquintas-4.jpeg",
      caption: "Condominio El Trapiche"
    },
    {
      url: "/images/galeria/ecoquintas-5.jpeg",
      caption: "Condominio Nakury 1"
    },
    {
      url: "/images/galeria/ecoquintas-2.jpg",
      caption: "Condominio Gaia"
    }
  ];
  return renderTemplate`<!-- Encabezado -->${maybeRenderHead()}<div class="text-center mb-16 mt-20" data-astro-cid-j567jrj3> <span class="inline-block text-primary font-medium mb-2" data-astro-cid-j567jrj3>
NUESTROS DESARROLLOS
</span> <h2 class="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-foreground" data-astro-cid-j567jrj3>
Galería de <span class="text-primary" data-astro-cid-j567jrj3>Terrenos</span> </h2> <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-astro-cid-j567jrj3>
Explora nuestros desarrollos y descubre el terreno ideal para tu próxima
    inversión o proyecto.
</p> </div> <ul class="gallery" data-astro-cid-j567jrj3> ${images.map(({ url, caption }) => renderTemplate`<li data-astro-cid-j567jrj3> <a href="#" data-astro-cid-j567jrj3> <figure data-astro-cid-j567jrj3> <img${addAttribute(url, "src")}${addAttribute(caption, "alt")} data-astro-cid-j567jrj3> <figcaption data-astro-cid-j567jrj3>${caption}</figcaption> </figure> </a> </li>`)} </ul> `;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/components/FancyGallery.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Categories", $$Categories, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "FancyGallery", $$FancyGallery, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ` })}`;
}, "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/index.astro", void 0);

const $$file = "/Users/luisr/Documents/personalProjects/jasonEQ/jason-ventas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
