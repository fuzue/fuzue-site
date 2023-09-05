<script lang="ts">
	import HowSection from '$lib/HowSection.svelte';
  import LogoSection from '$lib/LogoSection.svelte';
	import ProjectSection from '$lib/ProjectSection.svelte';
	import { onMount } from 'svelte';

	let windowPercent = 0;

	function manageScroll() {
		windowPercent = window.scrollY / window.innerHeight;
	}

  onMount(manageScroll)
</script>

<svelte:window on:scroll={manageScroll} />

<main class="text-white h-[180vh]">
  <div class="fixed right-0 top-0">{windowPercent}</div>
	<LogoSection {windowPercent} />
  <HowSection {windowPercent} />
  <ProjectSection />
  <div class="h-[300vh]"></div>
</main>
