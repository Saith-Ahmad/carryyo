

// 'use client'
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// function MovingForward() {
//     const containerRef = useRef(null);
//     const planeRef = useRef(null); // This will now reference the plane's container

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             gsap.to(planeRef.current, {
//                 x: '100%', 
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: 'top center',
//                     end: 'bottom start',
//                     scrub: 3 
//                 },
//             });
//         }
//     }, []); 

//     return (
//         <div className='max-w-7xl mx-auto'>
//             <h2 className="text-4xl md:text-7xl mt-10 mx-auto text-center font-bold">
//                 OUR PLAN
//                 <br />MOVING <span className="text-primary">FORWARD</span>
//             </h2>

//             <div className='p-10'>
//                 <div ref={containerRef} className='md:my-7 relative overflow-hidden flex flex-col md:flex-row w-full justify-center items-center mx-auto  rounded-4xl shadow-2xl'>

//                     <div className='bg-white md:w-[50%] p-10 md:p-20 flex flex-col justify-start items-start gap-3'>
//                         <p className='text-3xl font-bold'>Foundation</p>
//                         <p className='max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, lacus at cursus tempus, justo massa elementum odio, sit amet aliquam nisl turpis eu massa. Duis iaculis sollicitudin mattis. Proin magna arcu, consectetur eget tristique a, tempus vitae sem. Nulla convallis lorem id risus ullamcorper dignissim.</p>
//                         <p className='text-[#cdd1d8] text-5xl md:text-7xl font-black mt-10 md:mt-20 ms-20'>Q3<br />2025</p>
//                     </div>

//                     {/* This is the corrected structure for the line and plane */}
//                     <div className='absolute w-full top-[50%]'>
//                         <img src={'/asset/line.png'} alt='line' className='w-full max-h-[3px]' />
                        
//                         {/* The plane's container. This is what we animate. */}
//                         <div ref={planeRef} className='absolute top-1/2 w-full left-0 transform -translate-y-1/2'>
//                              <img src={'/asset/plane.png'} alt='plane' className='w-[200px]' />
//                         </div>
//                     </div>

//                     <div className='bg-primary md:w-[50%] p-10 md:p-20 flex flex-col justify-start items-start gap-3'>
//                         <p className='text-3xl font-bold'>Heading Here</p>
//                         <p className='max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, lacus at cursus tempus, justo massa elementum odio, sit amet aliquam nisl turpis eu massa. Duis iaculis sollicitudin mattis. Proin magna arcu, consectetur eget tristique a, tempus vitae sem. Nulla convallis lorem id risus ullamcorper dignissim.</p>
//                         <p className='text-[#c45236] text-5xl md:text-7xl  font-black mt-10 md:mt-20 ms-20'>Q1<br />2026</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default MovingForward;












'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function MovingForward() {
    const containerRef = useRef(null);
    const planeRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Check if the screen is smaller than the 'md' breakpoint (768px)
            const isMobile = window.matchMedia('(max-width: 767px)').matches;

            let startValue, endValue;

            if (isMobile) {
                // Adjust start and end values for a longer scroll duration on mobile
                startValue = 'top 40%'; // Starts when the top of the container is 70% down from the viewport top
                endValue = 'bottom 20%'; // Ends when the bottom of the container is 30% down from the viewport top
            } else {
                // Keep desktop values
                startValue = 'top center';
                endValue = 'bottom start';
            }

            // Kill any existing ScrollTrigger to prevent duplicates
            // This is important for re-renders and hot reloading
            const scrollTriggerInstance = ScrollTrigger.getById('plane-animation');
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }

            gsap.to(planeRef.current, {
                x: '100%', 
                scrollTrigger: {
                    id: 'plane-animation',
                    trigger: containerRef.current,
                    start: startValue,
                    end: endValue,
                    scrub: 3, 
                },
            });
        }
    }, []); 

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className="text-4xl md:text-7xl mt-10 mx-auto text-center font-bold">
                OUR PLAN
                <br />MOVING <span className="text-primary">FORWARD</span>
            </h2>

            <div className='md:p-10 p-5'>
                <div ref={containerRef} className='md:my-7 relative overflow-hidden flex flex-col md:flex-row w-full justify-center items-center mx-auto rounded-4xl shadow-2xl'>

                    <div className='bg-white md:w-[50%] p-10 md:p-20 flex flex-col justify-start items-start gap-3'>
                        <p className='text-3xl font-bold'>Foundation</p>
                        <p className='max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, lacus at cursus tempus, justo massa elementum odio, sit amet aliquam nisl turpis eu massa. Duis iaculis sollicitudin mattis. Proin magna arcu, consectetur eget tristique a, tempus vitae sem. Nulla convallis lorem id risus ullamcorper dignissim.</p>
                        <p className='text-[#cdd1d8] text-5xl md:text-7xl font-black mt-10 md:mt-20 ms-20'>Q3<br />2025</p>
                    </div>

                    <div className='absolute w-full top-[50%]'>
                        <img src={'/asset/line.png'} alt='line' className='w-full max-h-[3px]' />
                        
                        <div ref={planeRef} className='absolute top-1/2 left-0 transform -translate-y-1/2'>
                             <img src={'/asset/plane.png'} alt='plane' className='w-[200px]' />
                        </div>
                    </div>

                    <div className='bg-primary md:w-[50%] p-10 md:p-20 flex flex-col justify-start items-start gap-3'>
                        <p className='text-3xl font-bold'>Heading Here</p>
                        <p className='max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices, lacus at cursus tempus, justo massa elementum odio, sit amet aliquam nisl turpis eu massa. Duis iaculis sollicitudin mattis. Proin magna arcu, consectetur eget tristique a, tempus vitae sem. Nulla convallis lorem id risus ullamcorper dignissim.</p>
                        <p className='text-[#c45236] text-5xl md:text-7xl font-black mt-10 md:mt-20 ms-20'>Q1<br />2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovingForward;