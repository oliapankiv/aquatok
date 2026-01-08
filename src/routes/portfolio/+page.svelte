<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { onMount } from 'svelte'
  import PhotoSwipeLightbox from 'photoswipe/lightbox'

  import 'photoswipe/style.css'

  let container: HTMLDivElement

  onMount(() => {
    new PhotoSwipeLightbox({
      gallery: `#${container.id}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    }).init()
  })

  const images: Pick<HTMLImageElement, 'src' | 'width' | 'height' | 'alt'>[] = []
</script>

<section class="py-20">
  <div class="container">
    <div class="pswp-gallery grid grid-cols-[2fr_1fr_1fr] gap-3" bind:this={container} id="gallery-container">
      {#each images as image}
        <a
          class="relative overflow-hidden pb-[100%] first:row-span-2"
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            class="absolute h-full w-full object-cover"
            width={image.width}
            height={image.height}
            src={image.src}
            alt={image.alt}
          />
        </a>
      {/each}
    </div>
  </div>
</section>
