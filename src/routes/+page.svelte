<script lang="ts">
	import ChangingLogo from "$lib/ChangingLogo.svelte";

  let changingLogo: ChangingLogo;

	function manageScroll() {
		if (Math.round(window.scrollY/window.innerHeight*100)%4 === 0) changingLogo.getRandomLogo();
	}
</script>

<svelte:window on:scroll={manageScroll} />

<div class="h-[150vh]">
  <div class="sticky h-[100vh] top-0 flex justify-center p-[10%]">
    <ChangingLogo bind:this={changingLogo} />
  </div>
</div>
<div class="h-[200vh] bg-red-500 -mt-[50vh]">
  xxx
</div>
