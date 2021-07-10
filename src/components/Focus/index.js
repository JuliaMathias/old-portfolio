import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Focus = () => {
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "focus section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(filter: { frontmatter: { category: { eq: "focus" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              description
            }
          }
        }
      }
    }
  `);

  const sectionTitle = mdx.frontmatter;
  const focus = allMdx.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Focus>
        {focus.map((item) => {
          const {
            id,
            frontmatter: { title, icon, description }
          } = item.node;

          return (
            <Styled.FocusItem key={id}>
              <InfoBlock icon={icon} title={title} content={description} />
            </Styled.FocusItem>
          );
        })}
      </Styled.Focus>
    </Container>
  );
};

export default Focus;
