<script lang="ts">
  import { _ } from 'svelte-i18n'

  import { PUBLIC_BASE_URL, PUBLIC_CAPTCHA, PUBLIC_GTAG_ID } from '$env/static/public'

  import '../app.css'

  import faviconsvg from '$lib/assets/favicon/favicon.svg'
  import faviconpng from '$lib/assets/favicon/favicon.png'

  import Header from '$lib/ui/molecules/Header.svelte'
  import LayoutBackground from '$lib/ui/atoms/LayoutBackground.svelte'
  import Testimonials from '$lib/ui/molecules/Testimonials.svelte'
  import Faq from '$lib/ui/molecules/Faq.svelte'
  import Footer from '$lib/ui/molecules/Footer.svelte'

  import NotificationContainer from '$lib/components/molecules/NotificationContainer.svelte'

  const { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={faviconsvg} type="image/svg+xml" />
  <link rel="icon" href={faviconpng} type="image/png" sizes="64x64" />
  <title>{$_('title.default')}</title>
  <meta name="title" property="og:title" content={$_('meta.title')} />
  <meta name="description" property="og:description" content={$_('meta.description')} />
  <meta name="keywords" content={$_('meta.keywords')} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={`${PUBLIC_BASE_URL}/opengraph.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:alt" content={$_('meta.imagealt')} />

  <script async src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GTAG_ID}`}></script>
  <script async src={`https://www.google.com/recaptcha/api.js?render=${PUBLIC_CAPTCHA}`}></script>
</svelte:head>

<NotificationContainer />

<LayoutBackground />

<Header />

{@render children?.()}

<Testimonials />

<Faq />

<Footer />
