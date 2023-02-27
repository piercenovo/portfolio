/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */

/**
 * Hides the navbar while scrolling down
 * @param {Object} config
 * @param {String} [config.id=navbar] - id of navbar
 * @param {Number} [config.offset=100] - offset of navbar in px
 */

export const getId = (): string => `id${Math.random().toString(16).slice(2)}`

export const hideNavWhileScrolling = ({
  id = 'navbar',
  offset = 100,
  when = true
}: {
  id?: string;
  offset?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id)
  if (!nav) return

  let prevScrollPos = window.pageYOffset

  window.onscroll = () => {
    if (when) {
      const curScrollPos = window.pageYOffset
      if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`
      else nav.style.top = '0'
      prevScrollPos = curScrollPos
    }
  }
}
