export default function About() {
  return (
    <section id='about' className='mt-24'>
      <div className='h-full text-black lg:hidden'>
        <h1 className='text-center font-BebasNeue text-4xl lg:text-5xl'>
          // <span className='underline'>About Me</span>
        </h1>
        <div
          className='mx-auto h-96 w-96 bg-contain bg-no-repeat lg:h-[44rem] lg:w-[44rem]'
          style={{ backgroundImage: 'url(src/assets/TQ-polaroid.png)' }}
        ></div>
        <p className='mx-auto mt-8 w-2/3 font-Gudea text-sm leading-6 lg:text-xl'>
          Graduated from Nanyang Technological University (NTU) in 2023 with a
          major in Computer Science and minors in "Data Science & Analytics" and
          "Artificial Intelligence". I have experience in a wide variety of
          areas, such as web/software development, data analytics and media
          design.
          <br />
          <br />
          Coming from a family with a background in the arts, I have an interest
          and a keen eye for good design. I like to bring design elements into
          the work I do to create visually appealing products that enhances the
          overall value and experience for my users.
          <br />
          <br />I am also a cancer survivor. Throughout my treatment, I
          witnessed firsthand the transformative impact of machine learning and
          artificial intelligence on medical diagnosis and treatment. This
          experience ignited my passion in hopes that one day I could also
          contribute to the advancement of medical technology and help others in
          need.
        </p>
      </div>
      <div className='hidden h-full grid-cols-2 lg:grid'>
        <div className='col-span-1 w-4/5 self-center justify-self-end text-black'>
          <h1 className='font-BebasNeue 2xl:text-6xl'>
            // <span className='underline'>About Me</span>
          </h1>
          <p className='mt-8 font-Gudea leading-7 2xl:text-lg'>
            Graduated from Nanyang Technological University (NTU) in 2023 with a
            major in Computer Science and minors in "Data Science & Analytics"
            and "Artificial Intelligence". I have experience in a wide variety
            of areas, such as web/software development, data analytics and media
            design.
            <br />
            <br />
            Coming from a family with a background in the arts, I have an
            interest and a keen eye for good design. I like to bring design
            elements into the work I do to create visually appealing products
            that enhances the overall value and experience for my users.
            <br />
            <br />I am also a cancer survivor. Throughout my treatment, I
            witnessed firsthand the transformative impact of machine learning
            and artificial intelligence on medical diagnosis and treatment. This
            experience ignited my passion in hopes that one day I could also
            contribute to the advancement of medical technology and help others
            in need.
          </p>
        </div>
        <div className='col-span-1 mx-auto self-center justify-self-center 2xl:w-3/4'>
          <img
            src='./images/TQ-polaroid.png' // Make sure this path is correct
            alt='Media Featured'
            className='h-full w-full object-contain'
          />
        </div>
      </div>
    </section>
  );
}
