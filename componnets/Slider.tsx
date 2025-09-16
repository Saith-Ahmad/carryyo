import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// ✅ Data Array
const caseStudies = [
    {
       
        image: '/asset/frame_1.png',
        additionalClasses: "top-[13%]",
    },
    {
        image: '/asset/frame_2.png',
        additionalClasses: "top-[26%]",
    },
    {
       
        additionalClasses: "top-[39%]",
        image: '/asset/frame_3.png',
    },
];

function CaseStudies() {
    return (
        <div>
              <div className="sticky inset-0 -z-10">
                    <img
                        src="/asset/framebg.png"
                        alt="lines"
                        className="w-full h-full object-cover"
                    />
                </div>
            <div className="container max-w-[1400px] mt-32 space-y-20" id='about'>

              

                <div className="sticky top-0 z-[0] py-5">
                    <h2 className="text-4xl md:text-7xl mx-auto text-center font-bold">
                        Making It Simply <span className="text-primary">Yooo</span>
                    </h2>
                </div>
                {caseStudies.map((cs, idx) => (
                    <div
                        key={idx}
                        className={`bg-transparent ${cs.additionalClasses} sticky overflow-hidden  flex flex-col md:flex-row justify-between items-center`}

                    >

                        <img
                            src={cs.image}
                            alt="casestudy"
                            className="relative w-full md:max-w-[80%] mx-auto z-10"
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default CaseStudies;
