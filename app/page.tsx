import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Teaching } from "@/components/sections/teaching";
import { Media } from "@/components/sections/media";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Hobbies } from "@/components/sections/hobbies";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Teaching />
        <Media />
        <Skills />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
