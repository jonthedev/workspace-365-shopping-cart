import { useState, useEffect } from 'react'

export const useSetView = () => {
  const [view, setView] = useState(() => {
    const hash = window.location.hash
    if (hash?.length > 0 && hash[0] === '#') {
      return hash.substring(1)
    }

    return 'home'
  })

  useEffect(() => {
    window.history.replaceState(null, '', `#${view}`)
  }, [view])

  return { view, setView }
}
