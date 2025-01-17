

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">Hello I'm <br /> <span className="text-accent">HuyAnh</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80" > My name is Huy and I'm developer with language: JavaScript, TypeScript and NodeJs. Email: nguyenanhhuy2004@gmail.com Phone Number: 0346674072 </p>
            <div className="flex flex-col xl:flex-row  items-center gap-8">
              <Button className="upercase flex items-center gap-2" size="lg" variant="outline">
                <span>Download CV</span>
                <FiDownload></FiDownload>
              </Button>
              {/* Social */}
              <div className="mb-8 xl:mb-0">
                <Social ContainerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats></Stats>
    </section>
  );
}
