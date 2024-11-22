import HeroAnimation from "./HeroAnimation";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div>
      <p className="mb-6 font-semibold">
        <span className="text-transparent sm:bg-gradient-to-r to-foreground bg-gradient-to-t from-muted-foreground bg-clip-text lg:text-[54px] text-[40px]">
          Hi, I&apos;m Allen
        </span>
      </p>
      <div className="h-10 mb-8 sm:mb-10">
        <HeroAnimation runningtext={['<Developer />', '<Player />', '<dramaLover />']}/>
      </div>
      <p className="mb-8 text-xl text-transparent sm:mb-10 sm:text-[26px] bg-gradient-to-r from-green-200 via-green-100 opacity-60 to-green-200 bg-clip-text w-fit">
        #Allen
      </p>

      <p className="mb-4 text-sm text-transparent sm:mb-6 sm:text-base bg-gradient-to-b to-muted-foreground from-foreground bg-clip-text">
        {/* I&apos;m an undergraduate student at University of Minnesota Twin Cities
        majoring in Computer Science. Passionate about developing applications
        that merge purpose with aesthetics. */}
        I&apos;m a front-end engineer with 7 years of experience, passionate about technology and skilled in building high-quality web applications. Proficient in mainstream frameworks like Vue and React, I have in-depth expertise in front-end performance optimization, component-based development, and cross-platform adaptation. With extensive hands-on experience from various projects, I excel at transforming complex requirements into user-friendly interfaces. Beyond technology, I focus on user experience and engineering efficiency, aiming to create value through code and make technology truly serve businesses and users.
      </p>

      <Socials />
    </div>
  );
}
