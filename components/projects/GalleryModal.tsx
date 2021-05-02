import React from 'react';
import styles from '../../styles/Projects.module.scss';
import Images from './Images';
import { IoMdClose } from 'react-icons/io';
import { animated } from 'react-spring';
import { palette } from '../../styles/theme';

interface Props {
  images?: string[] | null;
  currentImageIndex: number;
  closeModal: () => void;
}

const GalleryModal = ({ images, currentImageIndex, closeModal }: Props) => {
  if (!images) return null;
  return (
    <animated.div className={styles.modalBackground}>
      <Images
        images={images}
        select={() => {}}
        selectedImageIndex={currentImageIndex}
        withCounter
      />

      <button className={styles.closeButton} onClick={closeModal}>
        <IoMdClose color={palette.text.primary} size={30} />
      </button>
    </animated.div>
  );
};

export default GalleryModal;
