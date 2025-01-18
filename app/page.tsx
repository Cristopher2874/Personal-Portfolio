import Image from "next/image";
import Link from 'next/link';
import { SliderSection } from '@/components/custom/SliderSection';
import { AboutSection } from '@/components/custom/AboutSection';
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
    <>
      <SliderSection />
      <AboutSection />
      <section>
        <h1>Projects</h1>
      </section>
      <section>
        <h1>Skills</h1>
      </section>
      <section>
        <h1>Education</h1>
      </section>
      <section>
        <h1>Contact</h1>
      </section>
    </>
  );
}
