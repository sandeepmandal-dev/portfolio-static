import { useEffect } from 'react'

export default function MotionEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return undefined

    const targets = document.querySelectorAll(
      '.hero-copy, .hero-photo-wrap, main .section-inner, .stat-card, .skill-card, .experience-card, .experience-empty, .project-card, .footer-inner',
    )
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' })

    targets.forEach((target) => {
      target.classList.add('motion-reveal')
      observer.observe(target)
    })
    document.body.classList.add('motion-ready')

    return () => {
      observer.disconnect()
      document.body.classList.remove('motion-ready')
      targets.forEach((target) => target.classList.remove('motion-reveal', 'is-visible'))
    }
  }, [])

  useEffect(() => {
    const pointerQuery = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    if (!pointerQuery.matches) return undefined

    const cards = document.querySelectorAll(
      '.stat-card, .skill-card, .project-card, .experience-card, .contact-form',
    )
    const cleanups = []

    cards.forEach((card) => {
      let frameId = 0
      let pointerX = 0
      let pointerY = 0

      const updateLight = (event) => {
        const bounds = card.getBoundingClientRect()
        pointerX = ((event.clientX - bounds.left) / bounds.width) * 100
        pointerY = ((event.clientY - bounds.top) / bounds.height) * 100
        if (frameId) return

        frameId = window.requestAnimationFrame(() => {
          card.style.setProperty('--card-light-x', `${pointerX}%`)
          card.style.setProperty('--card-light-y', `${pointerY}%`)
          frameId = 0
        })
      }

      card.addEventListener('pointermove', updateLight, { passive: true })
      cleanups.push(() => {
        card.removeEventListener('pointermove', updateLight)
        if (frameId) window.cancelAnimationFrame(frameId)
      })
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  return null
}
