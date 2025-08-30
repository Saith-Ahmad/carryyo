"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Safety() {
    return (
        <section className="py-20 bg-white relative overflow-hidden" id="safety">
            {/* Decorative Lamp */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
                className="absolute md:-top-2 -top-4 md:right-10 right-2">
                <img src="/assets/home/lamp.png" alt="lamp" className=" max-w-[70px] md:max-w-[200px]" />
            </motion.div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Top Section */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <TextAnimate animation="blurIn" by="word" duration={0.6} as="h2" className="text-2xl md:text-4xl font-bold text-primary">
                        Our Commitment to Safety
                    </TextAnimate>

                    <img src="/assets/arrow.png" alt="Decorative arrow" className="w-[250px] text-center mx-auto mb-2" />

                    <p className="text-gray-600">
                        At Boiler Services & Inspection, LLC, safety isn't just a policy—it's our core principle. We pride ourselves on an outstanding safety record and are dedicated to ensuring the highest standards of compliance and risk mitigation for your operations.
                    </p>
                </div>

                {/* Content Grid + Image */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    {/* Left Grid */}
                    <div className="md:max-w-[50%] grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="p-6 shadow-md rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                            <h3 className="font-semibold text-lg mb-2">Certified Expertise</h3>
                            <p className="text-gray-600 text-sm">
                                Our inspectors are highly trained and hold industry-recognized certifications, including OSHA 10-hour course certification and ISNetworld certified with 'A' standing. This ensures every inspection is conducted with unparalleled professionalism and knowledge.
                            </p>
                            <Link
                                href="#contact"
                                className="text-accent text-sm font-medium mt-2 inline-block"
                            >
                                Contact Us →
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="p-6 shadow-md rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                            <h3 className="font-semibold text-lg mb-2">Preventive Risk Mitigation</h3>
                            <p className="text-gray-600 text-sm">
                                Our meticulous inspections help you identify potential issues before they escalate into major failures or dangerous incidents. We provide detailed reports to ensure your boiler systems remain compliant with all safety standards.
                            </p>
                            <Link
                                href="#services"
                                className="text-accent text-sm font-medium mt-2 inline-block"
                            >
                                View Our Services →
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div className="p-6 shadow-md rounded-xl bg-white border border-gray-200 md:col-span-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                            <h3 className="font-semibold text-lg mb-2">Comprehensive Compliance</h3>
                            <p className="text-gray-600 text-sm">
                                We stay up-to-date with all state and federal regulations, including ASME Boiler and Pressure Vessel Code and National Board Inspection Code (NBIC). Our services ensure your equipment meets all legal requirements, protecting your business from fines and liability.
                            </p>
                            <Link
                                href="#contact"
                                className="text-accent text-sm font-medium mt-2 inline-block"
                            >
                                Get a Quote →
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:max-w-[50%] justify-center overflow-hidden rounded-md flex">
                        <img
                            src="/assets/boiler.png"
                            alt="A boiler inspection"
                            className="rounded-xl max-w-sm w-full transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}