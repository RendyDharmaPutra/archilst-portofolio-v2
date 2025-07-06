import type { MetaFunction } from "@remix-run/node";
import { AboutContainer } from "~/home/components/about/about-container";
import { HeroContainer } from "~/home/components/hero/hero-container";
// import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <HeroContainer />
      <AboutContainer />
    </>
  );
}
