"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";

export default function VisionMission() {
    return (
        <section
            className="relative w-full py-32 text-center text-white max-sm:min-h-[50vh] flex items-center"
            style={{
                backgroundImage: "url('/assets/visionbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-primary opacity-70"></div>
            <div className="absolute top-0 left-[50%] translate-x-[-50%]">
                <img src="/assets/lamp.png" alt="Decorative design" className="md:w-[100px] w-[80px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">

               
                {/* Heading */}
                <TextAnimate animation="blurIn" by="word" duration={0.6} as="h2" className="text-2xl md:text-4xl -mt-3 font-bold mb-2 text-white">
                    Our Vision & Mission
                </TextAnimate>

                {/* Divider */}
                <img src="/assets/arrow.png" alt="Decorative arrow" className="w-[250px] text-center mx-auto mb-2" />

                {/* Paragraph */}
                <p className=" text-gray-200">
                    Our mission is to ensure the utmost safety and operational integrity of industrial boiler and pressure systems through expert inspection and quality assurance. Our vision is to be the leading partner in the industry, trusted for our unwavering commitment to excellence, technological innovation, and preventing costly failures and hazards worldwide.
                </p>
            </div>
        </section>
    );
}