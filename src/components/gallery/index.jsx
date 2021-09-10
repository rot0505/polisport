/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useResize } from '../../hooks'
import { AppActionType } from '../../effects/types'
import { useDispatch } from 'react-redux'
import { getImage } from '../../utils'
import { Text } from '..'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, BsChevronLeft } from 'react-icons/all';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Image, Wrapper, WrapperImages, Images, ButtonsContainer, CloseButton } from './index.styled';
import { ASSETS_FOLDER } from '../../assets'

function GalleryComponent({ images, closeHandler = () => {} }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [position, setPosition] = useState({ x: 80 });

  const dispatch = useDispatch();

  const { isMobile, width } = useResize();

  useEffect(() => {
    // const posicao = (202 + 9) * -(currentImage - 1);
    const point = isMobile ? -180 : (width / 2) - 650;

    let posicao = point + ((isMobile? 250 : 400 + (currentImage * .2)) * -(currentImage -1));

    const positions = {
      x: posicao,
    };
    setPosition(positions);
  }, [currentImage, width, isMobile]);

  const handlerNext = () => {
    if (currentImage < images.length - 1) setCurrentImage(currentImage + 1);
  };

  const handlerPrev = () => {
    if (currentImage > 0) setCurrentImage(currentImage - 1);
  };

  const handleCloseGallery = () => {
    closeHandler();
  }

  useEffect(() => {
    dispatch({ type: AppActionType.UPDATE_HIDDEN_SHOW_CLOSE_BUTTON, payload: false });

    return () => {
      dispatch({ type: AppActionType.UPDATE_HIDDEN_SHOW_CLOSE_BUTTON, payload: true });
    }
  }, [])

  return (
    <Wrapper>
      <CloseButton key="closeButton" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut', delay: .2 }} onClick={handleCloseGallery}>
        <BsChevronLeft
          size={14}
          color="#FFFFFF"
        />
        <Text textTransform="uppercase" letterSpacing="1.8px" fontSize="14px" fontSizeMobile="14px" fontWeight="400" textId="timeline.button-close" />
      </CloseButton>
      <WrapperImages>
        {!isMobile &&
          <div style={{ width: '30px' }}>
            <AnimatePresence>
              {currentImage > 0 && (
                <motion.div
                  key="prev"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, type: 'tween', ease: 'easeOut' }}
                >
                  <MdKeyboardArrowLeft
                    size={30}
                    color="#FFF"
                    onClick={handlerPrev}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        }
        <Container>
          <Images
            initial={{ x: 500, opacity: 0, y: 10 }}
            animate={{ opacity: 1, ...position }}
            transition={{ duration: 0.3, type: 'tween', ease: 'easeOut' }}
          >
            {images.map((img, index) => {
              const isCurrent = index === currentImage;

              let _scale = isCurrent ? 1.1 : 0.96;
              let _opacity = isCurrent ? 1 : 0.8;
              let _class = isCurrent ? 'active' : '';
              let _left = 0;

              if(_class === ''){
                _class = 'deactive';
                if(index < currentImage) {
                  _left = 100;
                } else {
                  _left = -100;
                }
              }

              let _z = 0;

              if (_scale === 0.96) {
                if (index < currentImage - 1) {
                  _scale = 0.4;
                  _opacity = 0;
                }
                if (index > currentImage + 1) {
                  _scale = 0.4;
                  _opacity = 0;
                }
              }

              if (index > currentImage) _z = 30;
              if (index < currentImage) _z = -30;

              return (
                <Image
                  className={_class}
                  initial={{ scale: 0.8, rotateY: 0, opacity: 0.5, x: 0, perspective: 600}}
                  animate={{
                    scale: _scale,
                    rotateY: _z,
                    perspective: 600,
                    x: _left,
                    opacity: _opacity,
                  }}
                  onClick={() => setCurrentImage(index)}
                  transition={{ duration: 0.3, type: 'tween', ease: 'easeOut' }}
                  key={img + index}
                  image={getImage(`${ASSETS_FOLDER}/images/timeline/${img}`)} 
                >
                </Image>
              );
              /*
              return (
                <Image
                  className={_class}
                  initial={{ scale: 0.8, rotateY: 0, opacity: 0.5, x: 0, perspective: 600}}
                  animate={{
                    scale: _scale,
                    rotateY: _z,
                    perspective: 600,
                    x: _left,
                    opacity: _opacity,
                  }}
                  onClick={() => setCurrentImage(index)}
                  transition={{ duration: 0.3, type: 'tween', ease: 'easeOut' }}
                  key={img + index}
                  image={`/images/timeline/${img}`} 
                >
                </Image>
              );
              */
            })}
          </Images>
        </Container>
        {!isMobile &&
          <div style={{ width: '30px' }}>
            <AnimatePresence>
              {currentImage < images.length - 1 && (
                <motion.div
                  key="next"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, type: 'tween', ease: 'easeOut' }}
                >
                  <MdKeyboardArrowRight
                    size={30}
                    color="#FFFFFF"
                    onClick={handlerNext}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        }
      </WrapperImages>
      {isMobile &&
        <ButtonsContainer>
          <div style={{ width: '30px' }}>
            <AnimatePresence>
              {currentImage > 0 && (
                <motion.div
                  key="prev-mobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, type: 'tween', ease: 'easeOut' }}
                >
                  <MdKeyboardArrowLeft
                    size={30}
                    color="#FFFFFF"
                    onClick={handlerPrev}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div style={{ width: '30px' }}>
            <AnimatePresence>
              {currentImage < images.length - 1 && (
                <motion.div
                  key="next-mobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, type: 'tween', ease: 'easeOut' }}
                >
                  <MdKeyboardArrowRight
                    size={30}
                    color="#FFFFFF"
                    onClick={handlerNext}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ButtonsContainer>
      }
    </Wrapper>
  );
}

export default GalleryComponent;
