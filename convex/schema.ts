import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // Example user table - customize based on your needs
  users: defineTable({
    name: v.string(),
    email: v.string(),
    createdAt: v.number(),
  }).index('by_email', ['email']),

  // Add more tables as needed
});
