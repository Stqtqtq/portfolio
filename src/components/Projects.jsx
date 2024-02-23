export default function Projects() {
  return (
    <section
      id='projects'
      className='mx-auto mt-20 flex w-2/3 flex-col items-center lg:w-4/5'
    >
      <h1 className='font-BebasNeue text-4xl text-black lg:text-5xl 2xl:text-6xl'>
        // <span className='underline'>Featured Works</span>
      </h1>
      <div className='my-20 mr-auto text-black lg:w-3/4 2xl:w-2/3'>
        <h1 className='mb-4 font-BebasNeue text-xl lg:text-3xl 2xl:text-4xl'>
          <span className='mb-2 inline-block bg-black text-white'>01</span>
          <br />
          Design of Steady State Visually Evoked Potential (SSVEP) based BCI
          Game for Attention and Executive Function Training
        </h1>
        <p className='font-Gudea text-sm leading-6 lg:text-xl 2xl:text-lg'>
          Final Year Project to study if gaming could be leveraged to improve an
          individual's attention and executive function, specifically for
          individuals that are diagnosed with Autism Spectrum Disorder.
          <br /> <br />
          To achieve this goal, a prototype game was designed and developed by
          making use of core game design concepts and principles alongside
          SSVEP.
          {/* An experiment was then conducted to record and analyse the data
          using the individual's EEG and EMG signals. The designed experiment
          protocol consists of two separate sessions. The 1st session is to
          assess the cognitive skills of Joint Attention, Spatial Awareness and
          Executive Functions, and baseline cognitive modelling (pre-game). The
          2nd session consists of the actual gameplay and tries to assess if
          improvements were made to user's cognitive skills (post-game). */}
        </p>
        <p className='mt-12 text-sm italic lg:text-xl 2xl:text-lg'>
          Official Poster:{' '}
          <a
            href='https://www.ntu.edu.sg/docs/librariesprovider118/technovationposter/apr2023/sim-tian-quan_design-of-a-steady-state-visual-evoked-potential-(ssvep).pdf?sfvrsn=8a6457cb_3'
            target='_blank'
            rel='noreferrer'
          >
            Click Here
          </a>
        </p>
        <p className='text-sm italic lg:text-xl xl:text-lg'>
          Presentation on Youtube:{' '}
          <a
            href='https://www.youtube.com/watch?v=1hpX2442g_I&ab_channel=SCSEMarketing'
            target='_blank'
            rel='noreferrer'
          >
            Click Here
          </a>
        </p>
      </div>
      <div className='h-[12rem] w-full lg:ml-auto lg:h-[20rem] lg:w-2/3 2xl:h-[30rem] '>
        <img
          src='./images/fyp-exp.jpg'
          alt='FYP Project'
          className='h-full w-full object-cover'
        />
      </div>

      <div className='my-20 text-black lg:mr-auto lg:w-3/4'>
        <h1 className='mb-4 font-BebasNeue text-xl lg:text-3xl 2xl:text-4xl'>
          <span className='mb-2 inline-block bg-black text-white'>02</span>
          <br />
          Designing of SAF C4 Command Logo & Training Singlet
        </h1>
        <p className='font-Gudea text-sm leading-6 lg:text-xl 2xl:text-lg'>
          Member of an in-house media team responsible for designing the
          official logo for SAF's C4 Command since its inauguration. The logo is
          now prominently featured on the official formation patch and Physical
          Training attire for all C4 Command personnel.
        </p>
        <p className='mt-12 text-sm italic lg:text-xl 2xl:text-lg'>
          Logo Design:{' '}
          <a
            href='http://tinyurl.com/5yk58asb'
            target='_blank'
            rel='noreferrer'
          >
            Click Here
          </a>
        </p>
        <p className='text-sm italic lg:text-xl 2xl:text-lg'>
          Singlet Design:{' '}
          <a
            href='http://tinyurl.com/2jrcrdbx'
            target='_blank'
            rel='noreferrer'
          >
            Click Here
          </a>
        </p>
      </div>
      <div className='mx-auto h-[12rem] w-full lg:h-[20rem] lg:w-2/3 2xl:h-[30rem]'>
        <img
          src='./images/TQ-SAF1.jpg'
          alt='Media Featured'
          className='h-full w-full object-cover'
        />
      </div>
    </section>
  );
}
