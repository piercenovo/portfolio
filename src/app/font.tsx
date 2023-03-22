import localFont from 'next/font/local'

export const calibre = localFont({
  src: [
    {
      path: './fonts/Calibre-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Calibre-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Calibre-Semibold.woff2',
      weight: '600',
      style: 'normal'
    }
  ]
})

export const sfmono = localFont({
  src: [
    {
      path: './fonts/SFMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/SFMono-Semibold.woff2',
      weight: '600',
      style: 'normal'
    }
  ]
})

export const signature = localFont({
  src: './fonts/Agustina-Signature.otf',
  display: 'swap'
})
