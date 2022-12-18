import { createClient } from "next-sanity";

export default function SanityClient() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_APIVERSION,
    useCdn: false,
  });
  return client;
}
