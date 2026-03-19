import { useState } from 'react'

export default function useNavbarCollapsed () {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false)

  return {
    navbarCollapsed,
    setNavbarCollapsed
  }
}
