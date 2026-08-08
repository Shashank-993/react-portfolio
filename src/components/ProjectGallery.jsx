import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

const ThumbsGallery = ({ project }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="mx-auto flex grow w-full lg:max-w-lg xl:max-w-2xl flex-col gap-4">
      {/* Main Gallery */}
      <Swiper
        modules={[Thumbs, Navigation]}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="aspect-video w-full overflow-hidden rounded-2xl border border-purple-500/20"
      >
        {project.images.map((image) => (
          <SwiperSlide key={project.id}>
            <div className="h-full w-full bg-purple-950/20">
              <img
                src={image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          480: { slidesPerView: 4, spaceBetween: 12 },
          768: { slidesPerView: 5, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 16 },
        }}
        className="w-full [&_.swiper-wrapper]:justify-center"
      >
        {project.images.map((image) => (
          <SwiperSlide key={project.id}>
            <div
              className="aspect-square cursor-pointer overflow-hidden rounded-lg border border-purple-500/20
                         opacity-60 transition-all duration-300 hover:opacity-100
                         [.swiper-slide-thumb-active_&]:border-purple-500 [.swiper-slide-thumb-active_&]:opacity-100"
            >
              <img
                src={image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbsGallery;
