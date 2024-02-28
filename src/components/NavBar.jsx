import { useEffect } from 'react';

export default function NavBar() {
  useEffect(() => {
    // Add event listeners to all anchor tags with hash fragments
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1); // Get the target section ID
        const targetElement = document.getElementById(targetId); // Find the target section element

        if (targetElement) {
          // const stickyHeight = document.querySelector('.sticky').offsetHeight; // Get the height of the sticky component
          const marginTop = parseInt(getComputedStyle(targetElement).marginTop); // Get the margin top of the target section
          const offset = targetElement.getBoundingClientRect().top - marginTop; // Adjusted offset. Minus away stickyHeight if required.

          window.scrollTo({
            top: window.scrollY + offset, // Scroll to the adjusted position
            behavior: 'smooth',
          });
        }
      });
    });
  }, []);

  return (
    <section className='z-1 fixed top-4 flex w-full select-none justify-center'>
      <div className='w-[20rem] rounded-2xl bg-white p-3 shadow-md shadow-slate-400/50 sm:w-[20rem] '>
        <ul className='flex justify-center divide-x divide-black font-BebasNeue'>
          <li>
            <a href='#hero' className='pr-4 text-black hover:text-orange-500'>
              <span className='hover:border-b-2 hover:border-orange-500'>
                Main
              </span>
            </a>
          </li>
          <li>
            <a href='#about' className='px-4 text-black hover:text-orange-500'>
              <span className='hover:border-b-2 hover:border-orange-500 '>
                About
              </span>
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='px-4 text-black hover:text-orange-500'
            >
              <span className='hover:border-b-2 hover:border-orange-500'>
                Works
              </span>
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='pl-4 text-black hover:text-orange-500'
            >
              <span className='hover:border-b-2 hover:border-orange-500'>
                Contact
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
