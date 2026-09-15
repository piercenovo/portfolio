import type { KeyboardEvent } from 'react'

type SegmentedOption<T extends string> = {
  id: T
  label: string
  count?: number
}

type SegmentedProps<T extends string> = {
  label: string
  idPrefix: string
  panelId: string | ((id: T) => string)
  options: SegmentedOption<T>[]
  value: T
  onChange: (id: T) => void
}

export function Segmented<T extends string>({ label, idPrefix, panelId, options, value, onChange }: SegmentedProps<T>) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    if (step === 0) return

    event.preventDefault()
    const next = options[(index + step + options.length) % options.length]
    onChange(next.id)
    document.getElementById(`${idPrefix}-${next.id}`)?.focus()
  }

  return (
    <div
      role='tablist'
      aria-label={label}
      className='inline-flex max-w-full flex-wrap self-start rounded-[3px] border border-line bg-panel p-1 font-mono text-xs tracking-[0.06em] uppercase'
    >
      {options.map((option, index) => {
        const isActive = option.id === value

        return (
          <button
            key={option.id}
            type='button'
            role='tab'
            id={`${idPrefix}-${option.id}`}
            aria-selected={isActive}
            aria-controls={typeof panelId === 'function' ? panelId(option.id) : panelId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(option.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`relative flex shrink-0 items-center gap-2 rounded-[2px] px-3.5 py-2.5 transition-colors duration-200 after:absolute after:inset-x-2 after:bottom-0.5 after:h-0.5 after:origin-left after:bg-live after:transition-transform after:duration-300 after:ease-(--ease-out-expo) ${isActive ? 'bg-raised text-ink after:scale-x-100' : 'text-ink-muted after:scale-x-0 hover:text-ink'}`}
          >
            {option.label}
            {option.count !== undefined && (
              <span className={`tabular ${isActive ? 'text-live' : 'text-ink-muted'}`}>{option.count}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
