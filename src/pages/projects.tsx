import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Projects from 'components/Projects';

const ProjectsPage: React.FC = () => (
  <Layout>
    <SEO title="Projects" />
    <Projects />
  </Layout>
);

export default ProjectsPage;
