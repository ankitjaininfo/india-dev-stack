// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const softwareCollection = defineCollection({
  type: "data",
  schema: z.object({
    Name: z.string(),
    Tagline: z.string(),
    Description: z.string(),
    Website: z.string().url(),
    Features: z.array(z.string()),
    Logo: z.string(),
    Demo: z.string().url().optional(),
    pricing: z.enum(["Free", "Paid plans", "Freemium"]),
    Images: z.array(z.string()),
    Makers: z.array(
      z.object({
        Profile: z.string().url(),
        Name: z.string(),
      }),
    ),
    Category: z.string(),
    Tags: z.array(z.string()),
    Stage: z.enum(["Active Customers", "In Development", "Active Beta"]),
    HQ: z
      .object({
        City: z.string(),
        Country: z.string(),
      })
      .array(),
    Customers: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = {
  software: softwareCollection,
  team: teamCollection,
};
