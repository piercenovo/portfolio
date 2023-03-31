import { sfmono } from '@/app/font'
import { gitHubProject, linkProject } from '@/data/svg'
import { ProjectType } from '@/types/global'
import { useEffect, useState } from 'react'

export function ProjectCard({
  name,
  description,
  url,
  repo,
  year,
  img,
  tags
}: ProjectType) {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return <></>

  return (
    <div
      className='block group bg-primary-dark w-full max-w-[25rem] hover:drop-shadow-white shadow-sm rounded-md overflow-hidden transition-all duration-200 grayscale hover:grayscale-0 group'
    >
      <div
        className='overflow-hidden h-[200px]'
      >
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={img}
            alt={name}
            className='w-full h-full object-cover group-hover:scale-[1.05] transition duration-300 ease-in-out'
          />
        </a>
      </div>
      <div className='p-4 py-3 flex flex-col gap-1 justify-center'>
        <div className={`${sfmono.className} flex justify-between items-center`}>
          <div className='flex gap-4 items-center'>
            {tags.map(({ name, svg, hover }) => (
              <button key={name} data-tip={name} className='group flex flex-col items-center gap-1 relative before:z-10 before:absolute before:left-[15%] before:-bottom-2 before:-translate-x-[15%] before:translate-y-full before:rounded-lg before:bg-gray-800 before:px-3 before:py-2 before:text-white before:text-xs before:invisible before:content-[attr(data-tip)] hover:before:visible'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox={svg.viewBox}
                  className={`${hover.fill} group-hover:drop-shadow-white w-6 transition-all duration-300`}
                >
                  <path d={svg.path} />
                </svg>
              </button>
            ))}
          </div>
          <div className='flex items-center space-x-1.5'>
            <a
              href={repo}
              className='block'
              target='_blank' rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox={gitHubProject.viewBox}
                className='h-5 w-5 transition-colors duration-200 hover:fill-github'
              >
                <path fillRule='evenodd' d={gitHubProject.path} />
              </svg>
            </a>
            <a
              href={url}
              className='block'
              target='_blank' rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox={linkProject.viewBox}
                className='h-5 w-5 transition-colors hover:fill-github'
              >
                <path fillRule='evenodd' d={linkProject.path} />
              </svg>
            </a>
          </div>
        </div>
        <div className='flex justify-between capitalize font-medium text-lg xl:text-xl duration-200 group-hover:text-secondary mt-3'>
          <span>{name}</span>
          <span className='mr-1'>{year}</span>
        </div>
        <p className='text-base md:text-lg'>
          {description}
        </p>
      </div>
    </div>
  )
}
