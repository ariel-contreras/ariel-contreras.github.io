import { defineCollection, z } from "astro:content";
const cartas = defineCollection({
  type: 'content',
  schema: z.object({
    saludo: z.string(),
    subtitulo: z.string(),
    resumen: z.string(),
    firma: z.string(),
    cargo: z.string(),
    inicial: z.string(),
    footer: z.string(),
  }),
});

export const collections = {cartas}