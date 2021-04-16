import React, { ReactNode } from 'react';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops.cjs';

interface Props {
  from: number;
  to: number;
  children: ReactNode;
}

const InitXSlide = ({ from, to, children }: Props) => {
  return (
    <Spring from={{ number: from }} to={{ number: to }}>
      {(props) => (
        <animated.div style={{ transform: `translateX(${props.number}px)` }}>
          {children}
        </animated.div>
      )}
    </Spring>
  );
};

export default InitXSlide;
