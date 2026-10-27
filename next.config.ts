import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    qualities: [100],
  },

  async redirects() {
    return [
      {
        source: "/detail-project",
        has: [
          {
            type: "query",
            key: "id",
            value: "(?<id>.*)",
          },
        ],
        destination: "/detail-project/:id",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
