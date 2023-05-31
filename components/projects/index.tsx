import { ProjectCard } from '@shared-components';
import { projectsDefault } from '@utils/constants';
import { useEffect, useState } from 'react';
import { Project } from 'shared/utils/types';

const ProjectsPage = (): JSX.Element => {
  const projects = projectsDefault;

  const category = [{ value: 'all', label: 'ALL' }];
  projects?.forEach((p) =>
    p?.category?.forEach((cat) => {
      if (!category.find((c) => c.value === cat))
        category.push({ value: cat, label: cat.toUpperCase() });
    })
  );
  const [active, setActive] = useState('all');

  function changeProjects(c) {
    setActive(c.value);
  }
  useEffect(() => {}, [active]);
  return (
    <>
      <div className="pb-20 bg-blue pt-28">
        <div className="overflow-x-hidden">
          <div className="pt-10 ml-4 sm:mx-12 md:mx-16">
            <div className="mb-10">
              <h1 className="mb-6 text-3xl font-extrabold leading-none text-center text-white sm:text-2xl xl:text-3xl">
                Something that I have built
              </h1>
              <p className="mb-6 text-sm font-light leading-none text-center text-white sm:text-7xl">
                with love, expertise and pinch of magical ingredients
              </p>
            </div>
            <div>
              <div className="mx-auto text-center">
                {category.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => changeProjects(c)}
                    className={`${
                      active === c.value
                        ? 'text-blue bg-pink border-transparent'
                        : 'text-white border-pink'
                    } w-32 mx-4
                    border-2 py-2 rounded-xl lg:mx-4 outline-none mb-2 focus:outline-none transition-all hover:shadow-light-3xl
                    `}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 place-items-center">
              {projects &&
                projects.map((project: Project) => (
                  <ProjectCard
                    project={project}
                    key={project.slug}
                    filter={{ key: 'category', value: active }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
