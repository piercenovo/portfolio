import { hideNavWhileScrolling } from '@/utils/helper'
import { useEffect, useState } from 'react'

export default function useNavbarCollapsed () {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false)

  useEffect(() => {
    hideNavWhileScrolling({ when: !navbarCollapsed })
  }, [navbarCollapsed])

  return {
    navbarCollapsed,
    setNavbarCollapsed
  }
}
