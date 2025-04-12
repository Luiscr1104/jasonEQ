export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title:
      "Guía completa: Cómo elegir el terreno perfecto para construir tu casa",
    excerpt:
      "Descubre los factores clave que debes considerar antes de comprar un terreno para construir tu hogar soñado.",
    date: "15 marzo, 2024",
    readTime: "8 min",
    category: "Consejos",
    image: "/images/galeria/ecoquintas-1.webp",
    slug: "guia-elegir-terreno-perfecto",
  },
  {
    id: "2",
    title: "¿Por qué invertir en terrenos en La Fortuna de San Carlos?",
    excerpt:
      "Descubrí por qué La Fortuna se ha convertido en uno de los destinos más atractivos para la compra de terrenos en Costa Rica. Ubicación, plusvalía, turismo y más.",
    date: "2024-07-10",
    readTime: "10 min",
    category: "Inversión",
    image: "/images/galeria/ecoquintas-4.webp",
    slug: "por-que-invertir-en-terrenos-la-fortuna",
  },
  {
    id: "3",
    title: "🚀 Terrenos en La Fortuna con Plusvalía Garantizada (Guía 2025)",
    excerpt:
      "Descubrí por qué invertir en terrenos en La Fortuna es una de las mejores decisiones inmobiliarias del 2025. Ubicación privilegiada, alta plusvalía y conexión directa con el Volcán Arenal.",
    date: "2025-04-12",
    readTime: "6 min",
    category: "Inversión",
    image: "/images/galeria/ecoquintas-3.webp",
    slug: "terrenos-la-fortuna-plusvalia-volcan-arenal",
  },
];
