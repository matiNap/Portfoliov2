import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styles from '../../styles/Projects.module.scss';
import Counter from './Counter';
import Indicator from './Indicators';

interface Props {
  images?: string[];
  select: (image: number) => void;
  selectedImageIndex?: null | number;
  withCounter?: boolean;
}

const Images = ({ images, select, selectedImageIndex, withCounter }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    if (selectedImageIndex) setCurrentImageIndex(selectedImageIndex);
  }, [selectedImageIndex]);
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
                onClick={() => select(currentImageIndex)}
                style={imageProps}
                key={imgUri}
                className={styles.imageContainer}
                alt={imgUri}
                src={imgUri}
              />
            );
          })}

        {!withCounter && (
          <Indicator
            selectedIndex={currentImageIndex}
            data={images}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        )}
        {withCounter && (
          <Counter
            currentIndex={currentImageIndex}
            maxCount={images ? images.length : 0}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        )}
      </animated.div>
    </>
  );
};

export default Images;
