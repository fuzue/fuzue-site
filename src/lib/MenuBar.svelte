<script lang="ts">
	import ChangingLogo from './ChangingLogo.svelte';

  export let scrollPosition: number;
	let logo: ChangingLogo;
  let size = 100;

  $: scrollPosition, manageScroll();

  function manageScroll() {
    if (Math.round(scrollPosition * 100) % 4 === 0) changeLogo()
    size = setHeight()
  }

	function changeLogo() {
    if(!logo) return
		logo.getRandomLogo();
	}

  function setHeight() {
    return Math.min(Math.max((scrollPosition - .5) * 100, 0), 100)
  }

</script>

<header class="fixed h-20 w-full flex items-end justify-end md:justify-center z-50">
  <div
    class="absolute top-3 left-0 flex justify-center pointer-events-none transition-all duration-500"
    style="
      width: max({100 - size}vw, 10rem);
      height: max({100 - size}vh, 5rem);
    "
    >
    <ChangingLogo bind:this={logo} fixed={size === 100} />
  </div>
  <button
    class="opacity-0"
    class:opacity-100={size === 100}>
    ITEM
  </button>
  <button
    class="opacity-0 delay-300"
    class:opacity-100={size === 100}>
    ITEM
  </button>
  <button
    class="opacity-0 delay-700"
    class:opacity-100={size === 100}>
    ITEM
  </button>
</header>

<style lang="postcss">
  button {@apply px-2 transition-opacity duration-150;}
</style>
