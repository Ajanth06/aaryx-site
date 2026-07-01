import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AARYX",
    short_name: "AARYX",
    description: "Procurement & business solutions between Europe and Asia.",
    start_url: "/de",
    display: "standalone",
    background_color: "#f7f3ea",
    theme_color: "#d24b2f",
    icons: [
      {
        src: "/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
