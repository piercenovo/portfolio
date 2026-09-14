'use client'

import { sfmono } from '@/app/font'
import { Check, Copy, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

type CopyEmailButtonProps = {
  email: string
  copyLabel: string
  copiedLabel: string
}

export function CopyEmailButton({ email, copyLabel, copiedLabel }: CopyEmailButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return
    const timeout = setTimeout(() => setIsCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [isCopied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className='relative'>
      <span
        role='status'
        className={`${sfmono.className} absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-secondary/30 bg-primary-darker px-2.5 py-1 text-xs text-secondary transition-opacity duration-200 ${isCopied ? 'opacity-100' : 'opacity-0'}`}
      >
        {isCopied ? copiedLabel : ''}
      </span>
      <button
        type='button'
        onClick={handleCopy}
        title={copyLabel}
        className={`${sfmono.className} flex items-center gap-2.5 rounded-full border border-secondary/30 px-5 py-2.5 text-sm text-primary-light transition-all duration-200 hover:border-secondary hover:text-secondary`}
      >
        <Mail size={13} className='shrink-0 fill-none' aria-hidden />
        <span>{email}</span>
        {isCopied
          ? <Check size={13} className='shrink-0 fill-none text-secondary' aria-hidden />
          : <Copy size={13} className='shrink-0 fill-none' aria-hidden />}
      </button>
    </div>
  )
}
