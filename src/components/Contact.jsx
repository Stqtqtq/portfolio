import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal';

export default function Contact() {
  let [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSuccess(true);
          setIsOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSuccess(false);
          setIsOpen(true);
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id='contact'
      className='mx-auto flex h-full w-4/5 flex-col items-center pt-20 font-Gudea'
    >
      <h2 className='mb-4 text-center font-BebasNeue text-4xl text-[#100C08] lg:text-5xl 2xl:text-6xl'>
        Contact Me
      </h2>
      <p className='mb-8 text-center text-base font-light text-gray-500 lg:text-lg 2xl:text-xl'>
        Would like to get in touch with me? <br /> Click on one of my socials
        links or send me a message below!
      </p>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className='flex w-3/4 justify-center'>
          <div className='mr-16 flex items-center'>
            <FaGithub className='text-xl' />
            <a
              href='https://github.com/Stqtqtq'
              target='_blank'
              rel='noreferrer'
              className='pl-0.5 pt-1 font-BebasNeue text-xl text-[#100C08]'
            >
              Github
            </a>
          </div>
          <div className='flex items-center'>
            <FaLinkedin className='text-xl' />
            <a
              href='https://www.linkedin.com/in/tian-quan/'
              target='_blank'
              rel='noreferrer'
              className='pl-0.5 pt-1 font-BebasNeue text-xl text-[#100C08]'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </IconContext.Provider>
      ;
      <div className='mb-20 text-[#100C08] lg:text-lg 2xl:text-lg'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col items-center'
        >
          <div className='mb-4'>
            <label className='mb-1 flex flex-col'>Your email:</label>
            <input
              type='email'
              name='from_email'
              placeholder='example@email.com'
              className='w-80 cursor-text border-b border-slate-400 bg-transparent caret-slate-900 focus:border-b-2 focus:border-slate-900 focus:outline-none lg:w-[28rem] 2xl:mb-2 2xl:w-[32rem]'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='mb-1 flex flex-col'>Your name:</label>
            <input
              type='text'
              name='from_name'
              placeholder='John Doe'
              className='w-80 cursor-text border-b border-slate-400 bg-transparent caret-slate-900 focus:border-b-2 focus:border-slate-900 focus:outline-none lg:w-[28rem] 2xl:mb-2 2xl:w-[32rem]'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='mb-1 flex flex-col'>Subject:</label>
            <input
              type='text'
              name='subject'
              placeholder='Let me know what it is about'
              className='w-80 cursor-text border-b border-slate-400 bg-transparent caret-slate-900 focus:border-b-2 focus:border-slate-900 focus:outline-none lg:w-[28rem] 2xl:mb-2 2xl:w-[32rem]'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='mb-1 flex flex-col'>Your message:</label>
            <textarea
              name='message'
              placeholder='Enter your message...'
              className='h-32 w-80 cursor-text resize-none border-b border-slate-400 bg-transparent focus:border-b-2 focus:border-slate-900 focus:outline-none lg:w-[28rem] 2xl:mb-2 2xl:h-28 2xl:w-[32rem]'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            value='Send'
            className='w-2/3 rounded-full bg-black text-white'
            disabled={isSending}
            // onClick={openModal}
          >
            {isSending ? <span>Sending...</span> : <span>Send message</span>}
          </button>
        </form>
        <Modal isOpen={isOpen} closeModal={closeModal} isSuccess={isSuccess} />
      </div>
      <footer className='absoulte bottom-0 z-10 mt-10 w-full text-center font-BebasNeue text-sm text-black 2xl:text-xl'>
        &copy; 2024, Ver 1.0.1
      </footer>
    </section>
  );
}
