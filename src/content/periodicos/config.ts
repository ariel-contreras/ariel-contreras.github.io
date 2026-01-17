import { defineCollection, z } from "astro:content";
const periodicos = defineCollection({
  schema: z.object({
    empresa : z.string(),
    fecha : z.string(),
    resumen: z.string(),
    title: z.string(),
    subtitle: z.string(),
    copete: z.string(),
  })
})

export const collections = {periodicos}