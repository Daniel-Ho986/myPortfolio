import { Button, HeaderSmall } from '@shared-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';

export default function Landing(): JSX.Element {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 80
  };
  const personalDetails: PersonalDetails = useContext(PersonalDetailsContext);
  const router = useRouter();
  return (
    <>
      <img
        src="/images/vectors/ellipse.svg"
        alt="Ellipse Vector"
        className="absolute bottom-0 right-0 w-2/3 pointer-events-none md:w-50p lg:w-35p"
      />
      <img
        src="/images/vectors/triangle.svg"
        alt="Triangle 3d Vector"
        className="absolute block w-1/4 pointer-events-none md:hidden right-1/3 top-28 md:w-16 animate-spin"
      />
      <motion.div
        transition={config}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
        exit={{ x: 0, opacity: 0 }}>
        <div className="grid grid-cols-12 gap-4 h-84.5vh ml-4 sm:mx-12 md:mx-16">
          <div className="flex flex-col items-center justify-center col-span-12 md:col-span-7 lg:col-span-6">
            {/* Hero Header */}
            <div className="relative items-center w-3/4 -mt-10">
              <img
                src="/images/vectors/triangle.svg"
                alt="Triangle 3d Vector"
                className="absolute top-0 right-0 hidden w-2/3 md:block md:w-16 animate-spin"
              />
              <HeaderSmall text="Who am I?" />
              <h1 className="mb-3 text-3xl font-extrabold leading-none text-white sm:text-2xl xl:text-1xl">
                {personalDetails.name}
              </h1>
              <h5 className="font-light text-justify text-7xl text-violet">
                {personalDetails.about}
              </h5>
              <div className="grid gap-4 mt-6 sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2">
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="solid"
                    text="Know More"
                    onClickHandler={() => router.push('#skills')}
                  />
                </div>
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="outlined"
                    text="Download Resume"
                    // eslint-disable-next-line no-return-assign
                    onClickHandler={() => window.open(personalDetails.resume, '_blank')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="items-end justify-end hidden text-justify text-white md:flex md:col-span-5 lg:col-span-6 ">
            <img
              src={personalDetails.profile_img}
              alt="Daniel Ho"
              className="ml-auto text-right pointer-events-none w-100 lg:w-3/7"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
