import * as React from 'react';
import { CSSProperties } from 'react';

import './Logo.scss';

interface Props {
  src: string;
  alt?: string;
  style?: CSSProperties;
}

export const Logo: React.FC<Props> = ({ src, alt, style }) => {
  return (
    <div className="logo" style={style}>
      <img src={src} alt={alt} className="logo__img" />
    </div>
  )
}