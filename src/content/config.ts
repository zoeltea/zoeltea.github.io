import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    location: z.string().default('Jakarta, Indonesia'),
    type: z.enum(['Full-time', 'Contract', 'Consulting']).default('Full-time'),
    order: z.number(),
    summary: z.string(),
    highlights: z.array(z.string()),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    period: z.string(),
    category: z.enum(['Platform & Core Backend', 'Fintech & Payments', 'SDET & Automation Architecture', 'E-Commerce Infrastructure']),
    impactMetrics: z.array(z.string()),
    stack: z.array(z.string()),
    github: z.string().optional(),
    url: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    readingTime: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  experience,
  projects,
  notes,
};
