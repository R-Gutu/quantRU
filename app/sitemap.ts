import type { MetadataRoute } from 'next'

const LANGUAGES = ['en', 'ru', 'ro'] as const
type Language = typeof LANGUAGES[number]

const ROUTES = {
  home: '',
  services: 'services',
  projects: 'projects',
  process: 'process',
  about: 'about-us',
  careers: 'careers',
  termsOfUse: 'terms-of-use',
  privacyPolicy: 'privacy-policy'
} as const
type Route = keyof typeof ROUTES

const PRIORITIES = {
  HIGH: 1.0,
  MEDIUM: 0.8,
  LOW: 0.5,
} as const
type Priority = typeof PRIORITIES[keyof typeof PRIORITIES]

const generateUrl = (lang: Language, path: string): string => 
  `https://${'www.quant-apps.ru'}/${lang}${path ? `/${path}` : ''}`

const generateAlternates = (path: string): { languages: Record<Language | 'x-default', string> } => {
  const alternates = {
    'x-default': generateUrl('en', path)
  } as Record<Language | 'x-default', string>

  LANGUAGES.forEach(lang => {
    alternates[lang] = generateUrl(lang, path)
  })

  return { languages: alternates }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2025-01-25')

  const pages: Array<{
    route: Route
    priority: Priority
  }> = [
    { route: 'home', priority: PRIORITIES.HIGH },
    { route: 'services', priority: PRIORITIES.HIGH },
    { route: 'projects', priority: PRIORITIES.MEDIUM },
    { route: 'careers', priority: PRIORITIES.MEDIUM },
    { route: 'about', priority: PRIORITIES.MEDIUM },
    { route: 'process', priority: PRIORITIES.LOW },
    { route: 'termsOfUse', priority: PRIORITIES.LOW },
    { route: 'privacyPolicy', priority: PRIORITIES.LOW },
  ]

  return pages.flatMap(({ route, priority }) => 
    LANGUAGES.map(lang => ({
      url: generateUrl(lang, ROUTES[route]),
      lastModified,
      priority,
      alternates: generateAlternates(ROUTES[route]),
    }))
  )
}