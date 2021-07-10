import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from "gatsby-plugin-mdx"

const FormatHtml = ({ content }) => (
  <MDXRenderer>{content}</MDXRenderer>
);

FormatHtml.propTypes = {
  content: PropTypes.any.isRequired
};

export default FormatHtml;
