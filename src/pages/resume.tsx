import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Projects from 'components/Projects';
import Education from 'components/Education';
import Skills from 'components/Skills';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Projects />
    <hr />
    <Education />
    <hr />
    <Skills />
  </Layout>
);

export default ResumePage;
