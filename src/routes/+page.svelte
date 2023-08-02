<script lang="ts">
	import ChangingLogo from '$lib/ChangingLogo.svelte';
	import { onMount } from 'svelte';

	let changingLogo: ChangingLogo;

	
  onMount(() => manageImages())

	function manageImages() {
  	setInterval(function () {
      changingLogo.getRandomLogo();
      
      }, 500);
	}
  let randomColor = Math.floor(Math.random() * (360));
</script>


<div class="h-[150vh]" style:background-color='hsl({randomColor}, 100%, 40%)'>
	<div class="sticky h-[100vh] top-0 flex justify-center p-[10%]">
		<ChangingLogo bind:this={changingLogo} />
    <div class="absolute bottom-10 text-2xl font-sans">Coming soon</div>
	</div>
  
</div>
<!-- <div class="h-[200vh] bg-red-500 -mt-[50vh]">xxx</div> -->
