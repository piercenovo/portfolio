import { socials } from '@/data/sections'

export default function SocialIcons() {
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4 md:flex-col md:gap-6'>
      {
      socials.map(({ name, href, svg, hover }) => (
        <a
          key={name}
          aria-label={name}
          title={`¡Contáctame vía ${name}!`}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='group transition-transform duration-300 hover:-translate-y-1'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox={svg.viewBox}
            className={`h-6 w-6 transition-colors duration-300 ${hover.fill}`}
          >
            <path fillRule='evenodd' d={svg.path} />
          </svg>
        </a>
      ))
}
    </div>
  )
}
