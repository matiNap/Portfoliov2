import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styles from '../../styles/Projects.module.scss';

interface Props {
  images?: string[];
  selected: boolean;
  select: () => void;
}

const Images = ({ images, selected, select }: Props) => {
  const props = useSpring({
    position: selected ? 'fixed' : 'absolute',
    scale: selected ? 1.5 : 1,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  return (
    <>
      {images &&
        images.map((imgUri, index) => {
          const isImageSelected = index === currentImageIndex;
          const imageProps = useSpring({
            opacity: isImageSelected ? 1 : 0,
          });
          return (
            <animated.img
              style={imageProps}
              key={imgUri}
              className={styles.imageContainer}
              alt={imgUri}
              src={imgUri}
            />
          );
        })}
    </>
  );
};

export default Images;
