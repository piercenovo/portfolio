import React from 'react'

export default function Counter({ count } : {count: number}) {
  return (
    <span className='text-secondary mx-auto pr-1.5 sm:pb-1.5 text-sm md:text-xs'>
      {`${(count + 1).toLocaleString('en-US', {
                    minimumIntegerDigits: 2
                })}.`}
    </span>
  )
}
