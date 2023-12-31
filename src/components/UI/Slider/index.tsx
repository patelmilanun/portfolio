'use client';
import { FC, MutableRefObject } from 'react';
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

interface Props {
  images: string[];
}

const Slider: FC<Props> = (props) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const { images } = props;

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide self-center">
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              className="mb-6 w-full rounded-lg object-cover object-top custom-transition"
              onLoadingComplete={(img) => {
                img.style.height =
                  img.offsetHeight < 500 ? `${img.offsetHeight}px` : '500px';
                img.style.transitionDuration =
                  (img.offsetHeight / 430) * 2 + 's';
              }}
              alt={image}
            />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {images.map((image, index) => (
          <div key={index} className="keen-slider__slide">
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-lg object-contain"
              alt={image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
