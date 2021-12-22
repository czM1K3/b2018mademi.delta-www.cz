import React, { FC } from 'react';
import Layout from './components/layout';
import Link from 'next/link';

const Home: FC = () => {
  return (
    <Layout>
      <h1>Vítejte</h1>
      <p>Nejsem expert, ale myslím si, že jste měli na mysli stránku: <Link href="/maturita">/maturita</Link> </p>
    </Layout>
  );
};

export default Home;
