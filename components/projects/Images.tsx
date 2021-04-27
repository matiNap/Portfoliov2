import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styles from '../../styles/Projects.module.scss';
import Indicator from './Indicators';

interface Props {
  images?: string[];
  selected: boolean;
  select: () => void;
}

const Images = ({ images, selected, select }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  return (
    <>
      <animated.div className={styles.imagesContainer}>
        {images &&
          images.map((imgUri, index) => {
            const isImageSelected = index === currentImageIndex;
            const imageProps = useSpring({
              opacity: isImageSelected ? 1 : 0,
            });
            return (
              <animated.img
                onClick={select}
                style={imageProps}
                key={imgUri}
                className={styles.imageContainer}
                alt={imgUri}
                src={imgUri}
              />
            );
          })}

        <Indicator
          selectedIndex={currentImageIndex}
          data={images}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      </animated.div>
    </>
  );
};

export default Images;
