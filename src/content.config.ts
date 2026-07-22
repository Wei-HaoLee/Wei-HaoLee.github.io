import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    year: z.number(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).max(3),
    links: z.array(z.object({
      label: z.string(),
      href: z.string()
    })).default([]),
    overview: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional()
    }).optional(),
    featured: z.boolean().default(false),
    accent: z.enum(['blue', 'cyan', 'violet']).default('blue')
  })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()),
    readingTime: z.string()
  })
});

export const collections = { research, blog };
