import { defineCollection, z } from "astro:content";
import VideoEmbed from "@/components/VideoEmbed.astro";
import WhatsAppButton from "@/components/WhatsAppButton.astro";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    readTime: z.string(),
    category: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  blog,
};

// ✅ Esto es global y debe ir después
export const markdown = {
  components: {
    VideoEmbed,
    WhatsAppButton,
  },
};
