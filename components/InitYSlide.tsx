import React, { ReactNode } from 'react';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops.cjs';

interface Props {
  from: number;
  to: number;
  children: ReactNode;
}

const InitYSlide = ({ from, to, children }: Props) => {
  return (
    <Spring from={{ number: from }} to={{ number: to }}>
      {(props) => (
        <animated.div style={{ transform: `translateY(${props.number}px)` }}>
          {children}
        </animated.div>
      )}
    </Spring>
  );
};

export default InitYSlide;
