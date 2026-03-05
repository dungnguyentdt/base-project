import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  connect-src 'self' ${process.env.NEXT_PUBLIC_API_URL || ""} ${process.env.NEXT_PUBLIC_WEBSOCKET_URL || ""};
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
`
  .replace(/\n/g, " ")
  .trim();

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent XSS by restricting resource origins
          { key: "Content-Security-Policy", value: cspHeader },
          // Prevent MIME type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Force HTTPS for 1 year
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          // Control referrer info sent to other origins
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disable browser features not needed
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  images: {
    // TODO: Replace with the actual image CDN / API hostname(s) in use.
    // Wildcard "**" is disabled — it allows Next.js image proxy to fetch
    // from any host, including internal network addresses (SSRF risk).
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "cdn.example.com",
      // },
    ],
  },
};
const withNextIntl = createNextIntlPlugin("./src/libs/i18n/request.ts");
export default withNextIntl(nextConfig);
