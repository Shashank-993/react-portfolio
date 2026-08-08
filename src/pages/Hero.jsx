import HeroContent from "../components/HeroContent";
import HeroImage from "../components/HeroImage";
const Hero = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col items-center rounded-b-2xl px-(--space-s) py-(--space-l)  gap-(--space-m) md:flex-row-reverse md:items-stretch md:justify-around md:px-(--space-m) lg:py-(--space-l-xl)">
      <HeroImage />
      <HeroContent />
    </div>
  );
};

export default Hero;
