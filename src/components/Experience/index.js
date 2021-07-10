import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

const Experience = () => {
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "experiences section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(
        filter: { frontmatter: { category: { eq: "experiences" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            body
            frontmatter {
              company
              position
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle = mdx.frontmatter;
  const experiences = allMdx.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {experiences.map((item) => {
        const {
          id,
          body,
          frontmatter: { company, position, startDate, endDate }
        } = item.node;

        return (
          <Timeline
            key={id}
            title={company}
            subtitle={position}
            content={<FormatHtml content={body} />}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Experience;
