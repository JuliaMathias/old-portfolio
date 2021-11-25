import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Posts />
    </Layout>
  );
};

export default IndexPage;
