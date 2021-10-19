import React from 'react';
import { t } from 'translate/ports/t';
import { Layout } from '../../components';

export function Wizard() {
  return (
    <Layout>
      <h1>Wizard</h1>
      <p>{t('btn.remove')}</p>
    </Layout>
  );
}
