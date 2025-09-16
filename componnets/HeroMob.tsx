"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import gsap from "gsap";

function HeroMob() {
  useEffect(() => {
    const buttons = gsap.utils.toArray<HTMLElement>(".float-btn");

    buttons.forEach((btn, i) => {
      const tl = gsap.timeline({ delay: i * 0.2 }); // stagger fade-ins

      // Phase 1: fade + scale
      tl.fromTo(
        btn,
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );

      // Phase 2: floating after 2s
      const floatDistance = gsap.utils.random(20, 60);
      const direction = Math.random() > 0.5 ? 1 : -1; // left or right
      const duration = gsap.utils.random(1, 3);

      tl.to(
        btn,
        {
          x: floatDistance * direction,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration,
        },
        ">-0.5" // start floating just as fade-in ends
      );
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-950 to-secondary min-h-[100vh] w-full rounded-b-[100px] relative flex justify-center items-center">
      <div className="absolute inset-0">
        <img src={"/asset/lines.png"} alt="lines" className="w-full h-full " />
      </div>

      {/* Left div */}
      <>
        <Button className="absolute float-btn bg-[#777E9D] hover:bg-[#6e77a1] hover:scale-[1.03] transition-all duration-300 rounded-full top-[16%] left-[5%] px-10">
          + Paris
        </Button>
        <Button className="absolute float-btn bg-[#FCD6CA] hover:bg-[#fdc2b0] hover:scale-[1.03] transition-all duration-300 text-black rounded-full top-[255] left-[25%] px-10">
          + Amsterdam
        </Button>
        <Button className="absolute float-btn bg-[#FFEBE4] hover:bg-[#fde5dc] hover:scale-[1.03] transition-all duration-300 text-black rounded-full top-[22%] left-[3%] px-10">
          + Riyadh
        </Button>
        <Button className="absolute float-btn bg-[#7B8DAE] hover:bg-[#6f84ac] hover:scale-[1.03] transition-all duration-300 text-white rounded-full bottom-[25%] left-[5%] px-10">
          + Barcelona
        </Button>
        <Button className="absolute float-btn bg-[#F7A487] hover:bg-[#fc9975] hover:scale-[1.03] transition-all duration-300 text-black rounded-full top-[80%] left-[10%] px-10">
          + Brazil
        </Button>
      </>

      {/* Right div */}
      <>
        <Button className="absolute float-btn bg-[#777E9D] hover:bg-[#6e77a1] hover:scale-[1.03] transition-all duration-300 rounded-full top-[16%] right-[10%] px-10">
          + London
        </Button>
        <Button className="absolute float-btn bg-[#FCD6CA] hover:bg-[#fdc2b0] hover:scale-[1.03] transition-all duration-300 text-black rounded-full top-[22%] right-[5%] px-10">
          + NewYork
        </Button>
        <Button className="absolute float-btn bg-[#FFEBE4] hover:bg-[#fde5dc] hover:scale-[1.03] transition-all duration-300 text-black rounded-full bottom-[22%] right-[7%] px-10">
          + Islamabad
        </Button>
        <Button className="absolute float-btn bg-[#7B8DAE] hover:bg-[#6f84ac] hover:scale-[1.03] transition-all duration-300 text-white rounded-full bottom-[8%] right-[35%] px-10">
          + Melbourne
        </Button>
        <Button className="absolute float-btn bg-[#F7A487] hover:bg-[#fc9975] hover:scale-[1.03] transition-all duration-300 text-black rounded-full bottom-[13%] right-[15%] px-10">
          + Dubai
        </Button>
      </>

      {/* Text content */}
      <div className="max-w-5xl relative z-10 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold md:text-7xl text-primary text-center leading-[1.1]">
          Delivery Powered <br />
          by <span className="text-white">people</span>
        </h1>
        <p className="text-white text-xl my-3">
          Earn Anywhere, Get Anything
        </p>
        <Button size={"lg"} className="bg-primary max-w-xl font-normal text-xl">
          How it works?
        </Button>
      </div>
    </div>
  );
}

export default HeroMob;
