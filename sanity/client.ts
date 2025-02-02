import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "0fldvcu8", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset
  useCdn: true,
  apiVersion: "2025-01-29", // Use the latest Sanity API version
});
