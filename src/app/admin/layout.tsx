'use client';
import { Providers } from '@/provider';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/admin/auth/login');
    }
  }, [router]);

  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
