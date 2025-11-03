import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://therapycraft.io',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://therapycraft.io/minecraft-therapy-teens',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://therapycraft.io/complete-system',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://therapycraft.io/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://therapycraft.io/blog/getting-started-minecraft-therapy',
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://therapycraft.io/blog/why-resistant-teens-open-up-in-minecraft',
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://therapycraft.io/blog/minecraft-therapy-anxiety-trauma',
      lastModified: new Date('2025-01-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://therapycraft.io/blog/why-therapists-should-offer-minecraft-therapy-2025',
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://therapycraft.io/blog/minecraft-coaching-for-teens-life-coaches',
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}