<script lang="ts">
	import Card from '$lib/Card.svelte';
  import ChangingLogo from '$lib/ChangingLogo.svelte';
	import { onMount } from 'svelte';

	let changingLogo: ChangingLogo;
	let currentBG = `hsl(${Math.floor(Math.random() * 360)}deg, 100%, 40%)`;
	let windowY = 0;
  let speed = 0;

	function randomizeBG() {
		return `hsl(${Math.floor(Math.random() * 360)}deg, 100%, ${
			40 + (window.scrollY / window.innerHeight) * 150
		}%)`;
	}

	function manageScroll() {
		if (Math.round((window.scrollY / window.innerHeight) * 100) % 4 === 0)
			changingLogo.getRandomLogo();
		if (Math.round((window.scrollY / window.innerHeight) * 100) % 2 === 0)
			currentBG = randomizeBG();
	}

	function manageSpeed() {
		speed = (window.scrollY - windowY) * 0.3;
    windowY = window.scrollY;
		window.requestAnimationFrame(manageSpeed);
	}

	onMount(() => window.requestAnimationFrame(manageSpeed));
</script>

<svelte:window on:scroll={manageScroll} />

<main style:background-color={currentBG}>
	<div class="h-[150vh]">
		<div class="sticky h-[100vh] top-0 flex justify-center p-[10%]">
			<ChangingLogo bind:this={changingLogo} />
		</div>
	</div>
	<div class="h-[200vh] flex flex-col items-center">
		<Card {speed} />
	</div>
</main>
