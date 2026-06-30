import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ConnectSection from '@/components/ConnectSection';
import FeaturedSection from '@/components/FeaturedSection';

export default function Home() {
  return (
    <main>
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <FeaturedSection/>
      <ConnectSection/>
    </main>
  );
}