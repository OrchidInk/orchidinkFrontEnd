import dynamic from 'next/dynamic';
import React from 'react';

const SuperAdminLoginForm = dynamic(() => import('./SuperAdminLoginForm'), { ssr: false });

const SuperAdminLogin = () => {
  return (
    <>
      <SuperAdminLoginForm />
    </>
  );
};

export default SuperAdminLogin;
