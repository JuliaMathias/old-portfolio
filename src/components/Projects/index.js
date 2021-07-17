import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Projects = () => {
  const { mdx, allMdx } = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { category: { eq: "blog" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMdx(
        filter: { frontmatter: { category: { eq: "blog" }, tags: {eq: "Projects"}, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            body
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle = mdx.frontmatter;
  const projects = allMdx.edges;

  return (
    <Container section>
      <TitleSection title="Projects" subtitle="What I've been working on" center />
      <Styled.Projects>
        {projects.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags }
          } = item.node;

          return (
            <Styled.Project key={id}>
              <Link to={slug}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <Styled.Card>
                    <Styled.Image>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.Image>
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tags.map((item) => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </Link>
            </Styled.Project>
          );
        })}
      </Styled.Projects>
    </Container>
  );
};

export default Projects;
