import NavbarLayout from '@/components/molecules/Navbar/layout';
import React from 'react';

interface BodyProps {
  locale: string;
}

const Body: React.FC<BodyProps> = ({ locale }) => {
  return (
    <NavbarLayout>
      {/* Render locale or use it in your content */}
      <p>Current Locale: {locale}</p>
    </NavbarLayout>
  );
};

export default Body;
