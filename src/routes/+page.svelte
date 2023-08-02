<script lang="ts">
	import ChangingLogo from '$lib/ChangingLogo.svelte';
	import { onMount } from 'svelte';

	let changingLogo: ChangingLogo;
	let bgColors = [
		'#1fad9dff',
		'#2d3047ff',
		'#fffb0aff',
		'#ff9b71ff',
		'#e84855ff',
		'#090809ff',
		'#f40000ff',
		'#f44e3fff',
		'#f4796bff',
		'#f4998dff'
	];

  onMount(() => manageImages())

	function manageImages() {
  	setInterval(function () {
      changingLogo.getRandomLogo();
      }, 500);
	}

</script>


<div class="h-[150vh]">
	<div class="sticky h-[100vh] top-0 flex justify-center p-[10%]" transition:fade={{ duration: 200 }}>
		<ChangingLogo bind:this={changingLogo} />
	</div>
</div>
<div class="h-[200vh] bg-red-500 -mt-[50vh]">xxx</div>
