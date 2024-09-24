'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function AdminHomePage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');

    router.push('/admin/auth/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
