'use client'

import { Check, Copy } from 'lucide-react'
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
    <button
      type='button'
      onClick={handleCopy}
      title={isCopied ? copiedLabel : copyLabel}
      className={`relative z-10 inline-flex shrink-0 items-center gap-2 rounded-[3px] border px-3 py-2 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 ${isCopied ? 'border-live bg-live-soft text-live' : 'border-line-strong text-ink-muted hover:border-live hover:text-live'}`}
    >
      <span className='relative grid h-3.5 w-3.5 place-items-center' aria-hidden>
        <Copy
          size={14}
          strokeWidth={2}
          className={`absolute transition-[opacity,transform] duration-300 ease-(--ease-out-expo) ${isCopied ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}
        />
        <Check
          size={14}
          strokeWidth={2.25}
          className={`absolute transition-[opacity,transform] duration-300 ease-(--ease-out-expo) ${isCopied ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
        />
      </span>
      <span aria-live='polite' className='sr-only sm:not-sr-only'>{isCopied ? copiedLabel : copyLabel}</span>
    </button>
  )
}
