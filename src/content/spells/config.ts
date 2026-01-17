import { defineCollection, z } from 'astro:content';

const spells = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    nivel: z.number(),
    clase: z.string(),
    rango: z.string(),
    castingTime: z.string(),
    tipo: z.string(),
    duracion: z.string(),
    resumen: z.string(),
  }),
});

export const collections = { spells };
