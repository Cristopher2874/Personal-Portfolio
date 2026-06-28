import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ConnectSection from '@/components/ConnectSection';
import FeaturedSection from '@/components/FeaturedSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <FeaturedSection/>
      <ConnectSection/>
    </main>
  );
}