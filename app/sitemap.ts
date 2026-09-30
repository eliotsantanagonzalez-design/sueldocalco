import { MetadataRoute } from 'next';
import { COMMUNITIES_LIST } from '@/lib/engine/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sueldocalco.es';
  const currentDate = new Date();

  const communityRoutes: MetadataRoute.Sitemap = COMMUNITIES_LIST.map((c) => ({
    url: baseUrl + '/sueldo-neto/' + c.slug,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: baseUrl + '/calculadora-finiquito', lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: baseUrl + '/tablas-irpf', lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    ...communityRoutes,
    { url: baseUrl + '/aviso-legal', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: baseUrl + '/privacidad', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: baseUrl + '/cookies', lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ];
}