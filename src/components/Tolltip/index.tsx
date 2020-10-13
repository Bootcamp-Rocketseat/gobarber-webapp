import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title?: string;
  className?: string;
}

const Tolltip: React.FC<TooltipProps> = ({ children, className, title }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tolltip;
