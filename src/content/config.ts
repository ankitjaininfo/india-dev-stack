import { z, defineCollection } from "astro:content";

const softwareCollection = defineCollection({
  type: "data",
  schema: z.object({
    Name: z.string(),
    Tagline: z.string().optional(),
    Description: z.string(),
    Website: z.string().url(),
    Features: z.array(z.string()),
    Logo: z.string(),
    Demo: z.string().url().optional(),
    Pricing: z.enum(["Free", "Paid plans", "Freemium", "Free Trial"]),
    Images: z.array(z.string()).optional(),
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
    Customers: z.array(z.string()).optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string(),
  }),
});

const teamCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    link: z.string().url(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  software: softwareCollection,
  team: teamCollection,
  blog: blogCollection,
};
