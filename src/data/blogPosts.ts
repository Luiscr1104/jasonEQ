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
    title: "5 razones para invertir en terrenos ecológicos en Costa Rica",
    excerpt:
      "Conoce por qué los terrenos ecológicos son una excelente inversión a largo plazo en el mercado inmobiliario costarricense.",
    date: "28 febrero, 2024",
    readTime: "6 min",
    category: "Inversión",
    image: "/images/galeria/ecoquintas-2.webp",
    slug: "razones-invertir-terrenos-ecologicos",
  },
  {
    id: "3",
    title: "Trámites legales para la compra de terrenos en Costa Rica",
    excerpt:
      "Una guía detallada sobre los aspectos legales y trámites necesarios para adquirir un terreno en Costa Rica sin complicaciones.",
    date: "10 febrero, 2024",
    readTime: "10 min",
    category: "Legal",
    image: "/images/galeria/ecoquintas-3.webp",
    slug: "tramites-legales-compra-terrenos",
  },
];
