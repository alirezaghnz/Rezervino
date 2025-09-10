import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
    remotePatterns: [
      new URL(
        "https://ttpaxypnlgpojmtnkzir.supabase.co/storage/v1/object/public/villa-images/**"
      ),
    ],
  },
};

export default nextConfig;
