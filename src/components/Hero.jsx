import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        // '<span class="bg-gradient-to-r from-green-400 to-slate-400 bg-clip-text pl-4 font-SCPro text-4xl text-transparent">Programmer</span>',
        // '<span class="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text pl-4 font-PS2P text-4xl text-transparent">Video Gamer</span>',
        '<span class="pl-4 font-SCPro">Programmer</span>',
        '<span class="pl-4 font-PS2P text-sm lg:text-[2rem]">Video Gamer</span>',
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      contentType: 'html',
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section
      id='hero'
      className='flex h-screen select-none flex-col items-center justify-center bg-contain bg-center bg-no-repeat'
      style={{ backgroundImage: 'url(./images/rainbow-splatter-70.png)' }}
    >
      <h1 className='font-BebasNeue text-[#100C08] lg:text-[7rem] 2xl:text-[8rem]'>
        Hello! Call me <span className='text-orange-600 '>TQ</span>.
      </h1>
      <h2 className='font-BebasNeue text-xl text-[#100C08] lg:text-[3rem]'>
        I'm a &nbsp; {'{'}
        <span ref={el} />
        {'}'}
      </h2>
      <p className='relative top-24 text-xs italic text-[#100C08] lg:top-32 lg:text-lg'>
        Crafting Digital Experiences with Code and Design
      </p>
    </section>
  );
}
