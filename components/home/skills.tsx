import { HeaderSmall } from '@shared-components';
import SkillsIcons from './skills-icon';

export default function Skills(): JSX.Element {
  return (
    <>
      {/* FIXME Make this whole page dyanmic */}

      <div className="relative h-auto py-10 lg:py-20" id="skills">
        <img
          src="/images/vectors/cylinder.svg"
          alt="Cylinder Vector"
          className="absolute right-0 w-2/3 transition-all opacity-50 pointer-events-none top-16 sm:top-7 md:top-28 lg:top-7 md:w-50p lg:w-35p animate-absoluteright"
        />
        <img
          src="/images/vectors/l-vector.svg"
          alt="L Vector"
          className="absolute bottom-0 left-0 block opacity-50 pointer-events-none md:left-35p md:hidden lg:block w-75p md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3"
        />
        <div className="grid items-center h-auto grid-cols-12 gap-4 ml-4 sm:mx-12 md:mx-16 place-items-center">
          <div className="flex flex-col items-center justify-center col-span-12 md:col-span-7 lg:col-span-6">
            {/* Hero Header */}
            <div className="relative items-center w-3/4">
              <HeaderSmall text="What do I do?" />
              <h1 className="mt-1 mb-3 font-normal leading-normal tracking-wide text-white sm:w-4/5 text-7xl sm:text-5xl md:text-7xl lg:text-5xl lg:leading-7">
                I create elegant, logical web solutions.
              </h1>
              <h1 className="mt-6 mb-3 text-4xl font-extrabold leading-none text-white sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl ">
                Think. <span className="text-pink">Code.</span> Debug.
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-12 my-10 md:col-span-5 lg:col-span-6 sm:mt-0">
            <SkillsIcons />
          </div>
        </div>
      </div>
    </>
  );
}
