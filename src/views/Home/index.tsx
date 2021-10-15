import React from 'react';
import { t } from 'translate/ports/t';
import { Layout } from '../../components';

export function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <p>{t('btn.remove')}</p>
    </Layout>
  );
}
