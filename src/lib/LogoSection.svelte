<script lang="ts">
	import ChangingLogo from './ChangingLogo.svelte';

	export let windowPercent: number;
	let logo: ChangingLogo;
  let size = 100;

	$: windowPercent, manageScroll();

  function manageScroll() {
    if (Math.round(windowPercent * 100) % 4 === 0) changeLogo()
    size = setHeight()
  }

	function changeLogo() {
    if(!logo) return
		logo.getRandomLogo();
	}

  function setHeight() {
    return Math.min(Math.max((3 - windowPercent * 2) * 100, 0), 100)
  }
</script>

<div
  class="fixed w-full flex items-center left-0"
  style="height: {Math.max(size, 10)}vh; top: {Math.max(size/2, 4)}%; transform: translateY(-{size/2}%)">
    <ChangingLogo bind:this={logo} fixed={size < 20} />
</div>
<section class="h-[175vh] -mb-[25vh]">
</section>
