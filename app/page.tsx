import Image from "next/image";
import Link from 'next/link';
import { SliderSection } from '@/components/custom/SliderSection';
import { AboutSection } from '@/components/custom/AboutSection';
import { ProjectSection } from '@/components/custom/ProjectSection';
import { SkillsSection } from '@/components/custom/SkillsSection';
import { ContactSection } from '@/components/custom/ContactSection';
//font-[family-name:var(--font-geist-mono)]
/*
UX orientado a objetos, linux

Bio, CV, cobre mi, proyectos, Skills, Contact, Info de creación de página
Slider inicial para ver los proyectos o información
Achievements
nav bar

Responsive, UX; UI, Paleta de colores, uniforme, imágenes proporcionadas, siempre que el usuario tenga algo que hacer, SEO?

Nombre, habilidad principal, Contacto(email), CV(descargar, ver), proyectos principales(descripción, tecnología, imagen, código), habilidades técnicas, educación
Recomendado- linkedin, github, foto, otros proyectos, softskill, hobbies??/aficiones, dominio personalizado .dev, experiencia laboral, roles desempeñados
Desaconsejado - redes no relacionadas
Optional - dark/light, idiomas, estoy aprendiendo..., contribuciones, divulgación, RECONOCIMIENTOS

Chat de IA que consteste preguntas acerca de mi
*/
export default function Home() {
  return (
    <div className="w-2/3 space-y-4">
      <SliderSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
