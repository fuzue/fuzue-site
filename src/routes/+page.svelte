<script lang="ts">
	import HowSection from '$lib/HowSection.svelte';
	import MenuBar from '$lib/MenuBar.svelte';
	import ProjectSection from '$lib/ProjectSection.svelte';
	import { onMount } from 'svelte';

	let main: HTMLElement;
	let scrollPosition = 0;

	function getScroll() {
		scrollPosition = main.scrollTop / window.innerHeight;
	}

	onMount(getScroll);
</script>

<MenuBar {scrollPosition} />
<main bind:this={main} on:scroll={getScroll}>
	<section class="w-full h-[150vh]" />
	<HowSection />
  <ProjectSection {scrollPosition} />
  <section />
</main>
