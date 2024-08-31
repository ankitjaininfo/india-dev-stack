import { defineCollection, z } from "astro:content";

// Blog collection schema
const softwareCollection = defineCollection({
  schema: z.object({
    Name: z.string(),
    Tagline: z.string(),
    Description: z.string(),
    Website: z.string().url(),
    Features: z.array(
      z.object({
        Feature: z.string(),
      }),
    ),
    Logo: z.string(),
    Demo: z.string().url(),
    Images: z.array(z.string()),
    Makers: z.array(z.string().url()),
    Category: z.string(),
    Tags: z.array(z.string()),
    Stage: z.enum(["Active Customers", "In Development"]),
    HQ: z
      .object({
        City: z.string(),
        Country: z.string(),
      })
      .array(),
    DC: z
      .object({
        City: z.string(),
        Country: z.string(),
      })
      .array(),
    Customers: z.array(z.string()),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  blog: softwareCollection,
  pages: pagesCollection,
};
