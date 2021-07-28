import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/ui/Icon';

import * as Styled from './styles';

const InfoBlock = ({ icon, title, content, link, center }) => (
  <Styled.InfoBlock center={center}>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content><a href={link} target="_blank" rel="noreferrer">{content}</a></Styled.Content>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

InfoBlock.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default InfoBlock;
