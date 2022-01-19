import React, { FC } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const Home: FC = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <div>
          <h1>Vítejte</h1>
          <p>Nejsem expert, ale myslím si, že jste měli na mysli stránku: <Link href="/maturita">/maturita</Link> </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
