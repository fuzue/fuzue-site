<script lang="ts">
	import ChangingLogo from '$lib/ChangingLogo.svelte';
	import { onMount } from 'svelte';

	let changingLogo: ChangingLogo;
  let randomColor = Math.floor(Math.random() * 360);

	onMount(() => manageImages());
  onMount(() => changeBgColor());

	function manageImages() {
		setInterval(function () {
			changingLogo.getRandomLogo();
		}, 500);
	}

  function changeBgColor () {
    setInterval(function () {
			randomColor = Math.floor(Math.random() * 360);
		}, 1200);
  }
</script>

<div class="h-[150vh]" style:background-color="hsl({randomColor}, 100%, 40%)">
	<div class="sticky h-[100vh] top-0 flex justify-center p-[10%]">
		
		<ChangingLogo bind:this={changingLogo} />
		<div class="absolute bottom-10 text-slate-950 font-sans text center flex flex-col items-center">
			<p class="text-3xl">fuzue@fuzue.tech</p>
			<p class="text-xl">site coming soon</p>
			
		</div>
	</div>
</div>
<!-- <div class="h-[200vh] bg-red-500 -mt-[50vh]">xxx</div> -->
