import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/utils/projects";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="Projects" className="w-full px-3 py-(--space-xl)">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 160,
          modifier: 1,
          slideShadows: false,
          scale: 0.9,
        }}
        className="pb-14"
      >
        {projects.map((p) => (
          <SwiperSlide
            key={p.id}
            className="w-[90%] max-w-xl overflow-hidden rounded-3xl"
          >
            <article
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-purple-500/20
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-purple-500/40
                hover:shadow-[0_20px_60px_rgba(124,58,237,.35)]
              "
            >
              {/* Image */}

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.images[1]}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Content */}

              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>

                  <p className="mt-1 text-sm text-purple-300">
                    {p.subTitle}
                  </p>
                </div>

                <Button
                  onClick={() => navigate(`/details/${p.id}`)}
                  className="
                    rounded-xl
                    bg-purple-600
                    px-5
                    transition-all
                    duration-300
                    hover:bg-purple-700
                    hover:shadow-lg
                    hover:shadow-purple-600/40
                  "
                >
                  Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
