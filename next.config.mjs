import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/superadmin/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/superadmin/:path*`,
      },
      {
        source: '/admin/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/admin/:path*`,
      },
      {
        source: '/user/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/:path*`, 
      },
    ];
  }
};

export default withNextIntl(nextConfig);
