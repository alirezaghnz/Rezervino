import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://ttpaxypnlgpojmtnkzir.supabase.co/storage/v1/object/public/villa-images/**"
      ),
    ],
  },
};

export default nextConfig;
