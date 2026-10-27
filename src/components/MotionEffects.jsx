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

  return null
}
