import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

const Slide = styled.img`
  width: 100%;
  height: 100%;
  scroll-snap-align: start;

`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index:2;

  &:hover {
    color: #eab84b;
  }

  ${({ direction }) => direction === 'right' ? `
    right: 0;
  ` : `
    left: 0;
  `}
`;

const CarouselSlider = ({ images }) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const slideWrapperRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - slideWrapperRef.current.offsetLeft);
    setScrollLeft(slideWrapperRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slideWrapperRef.current.offsetLeft;
    const walk = x - startX;
    slideWrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleButtonClick = (direction) => {
    const slideWidth = slideWrapperRef.current.clientWidth;
    const currentScrollLeft = slideWrapperRef.current.scrollLeft;

    if (direction === 'right') {
      slideWrapperRef.current.scrollLeft += slideWidth;
    } else if (direction === 'left') {
      slideWrapperRef.current.scrollLeft -= slideWidth;
    }
  };

  return (
    <SliderWrapper>
      <Button direction="left" onClick={() => handleButtonClick('left')}>&lt;</Button>
      <SlideWrapper
        ref={slideWrapperRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((image, index) => (
          <Slide src={image.img} key={index} />
        ))}
      </SlideWrapper>
      <Button direction="right" onClick={() => handleButtonClick('right')}>&gt;</Button>
    </SliderWrapper>
  );
};

export default CarouselSlider;
