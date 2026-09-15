type TooltipProps = {
  label: string
  align?: 'center' | 'end'
}

const alignments = {
  center: 'left-1/2 -translate-x-1/2',
  end: 'right-0'
}

// Visual label only: the trigger keeps its own accessible name. The trigger
// needs the `group/tip relative` classes; the label rises in on hover or focus.
export function Tooltip({ label, align = 'center' }: TooltipProps) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute bottom-full z-20 mb-2 translate-y-1 rounded-[2px] border border-line-strong bg-raised px-2 py-1 font-mono text-[0.625rem] tracking-[0.08em] whitespace-nowrap text-ink uppercase opacity-0 shadow-[0_6px_16px_-8px_var(--color-shadow)] transition-[opacity,translate] duration-200 ease-(--ease-out-expo) group-hover/tip:translate-y-0 group-hover/tip:opacity-100 group-focus-visible/tip:translate-y-0 group-focus-visible/tip:opacity-100 ${alignments[align]}`}
    >
      {label}
    </span>
  )
}
