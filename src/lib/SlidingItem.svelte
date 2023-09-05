<script lang="ts">
  let currentItem: HTMLElement;
  let translation = 100;

  function getScreenPosition() {
    if(!window || !currentItem) return
    const screenPercentage = (window.innerHeight - currentItem.getBoundingClientRect().top) / window.innerHeight
    translation = screenPercentage > .8 ? 
      (screenPercentage - .8) * 400 :
      Math.max((1 - screenPercentage * 3) * 100, 0);
  }
</script>

<svelte:window on:scroll={getScreenPosition} />

<li bind:this={currentItem} style="transform: translateX({translation}vw);">
  <slot />
</li>