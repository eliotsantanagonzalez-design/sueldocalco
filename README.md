# SueldoCalco.es

Calculadora de sueldo neto, finiquito/indemnización y tablas de IRPF para España.
Next.js 14 + TypeScript + Tailwind. 100% cálculo en el cliente (no hay backend ni base de datos).

## Poner en marcha en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Generar la versión de producción (exportación estática)

El proyecto está configurado con `output: 'export'` en `next.config.mjs`, así que
`npm run build` genera una carpeta `out/` con HTML/CSS/JS estático, sin necesidad
de un servidor Node en producción. Eso significa que puedes subirlo a **cualquier
hosting estático** (Hostinger, Netlify, GitHub Pages, Cloudflare Pages, Vercel...).

```bash
npm install
npm run build
```

Sube el contenido de `out/` a la raíz de tu hosting.

## Desplegar gratis en Vercel (recomendado, cero configuración)

1. Sube este proyecto a un repositorio de GitHub.
2. Entra en vercel.com, "Add New Project", conecta el repo.
3. Vercel detecta Next.js automáticamente y lo despliega. Gratis en el plan Hobby.
4. Dominio propio: lo puedes conectar después desde el panel de Vercel (gratis, solo pagas el dominio si no lo tienes ya).

## Antes de publicar con tráfico real

- `.env.example` → cópialo a `.env.local` y pon tu ID real de Google AdSense
  (`NEXT_PUBLIC_ADSENSE_CLIENT_ID`) y actualiza `public/ads.txt` con tu publisher ID real.
- `AdBanner.tsx` usa `testMode` en desarrollo (muestra placeholders); en producción
  (`npm run build`) ya carga los anuncios reales si el usuario acepta cookies.
- Los tramos de IRPF/Seguridad Social están hardcodeados en `lib/engine/constants.ts`
  con los valores 2025 conocidos en el momento de generar este proyecto — revísalos
  contra los boletines oficiales (BOE, Seguridad Social) antes de publicar, porque
  cambian cada año y esto es lo único que no puedo verificar en tiempo real por ti.
- Revisa `app/aviso-legal`, `app/privacidad` y `app/cookies`: tienen contacto de
  ejemplo (`contacto@sueldocalco.es`) y deberías poner tus datos reales si vas a
  operar la web (obligatorio en España por la LSSI-CE y el RGPD).
