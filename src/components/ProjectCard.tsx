import { sfmono } from '@/app/font'
import { gitHubProject, linkProject } from '@/data/svg'
import { ProjectType } from '@/types/global'
import Image from 'next/image'
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
      className='block group bg-primary-dark w-full max-w-[25rem]  shadow-xl rounded-md overflow-hidden transition-all duration-200 grayscale hover:grayscale-0 group'
    >
      <div
        className='overflow-hidden h-[200px]'
      >
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            className='w-full h-full object-cover group-hover:scale-[1.05] transition duration-300 ease-in-out'
          />
        </a>
      </div>
      <div className='p-4 py-3 flex flex-col gap-2 justify-center'>
        <div className={`${sfmono.className} flex justify-between items-center`}>
          <p className='text-[0.82rem]'>{tags.join(' | ')}</p>
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
        <h4 className='flex justify-between capitalize font-medium text-lg xl:text-xl duration-200 group-hover:text-secondary'>
          <span>{name}</span>
          <span className='mr-1'>{year}</span>
        </h4>
        <p className='mt-1 text-base md:text-lg'>
          {description}
        </p>
      </div>
    </div>
  )
}
