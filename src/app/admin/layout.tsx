import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        {/* Navigation specific to admin */}
      </nav>
      <main>{children}</main>
    </div>
  );
}
