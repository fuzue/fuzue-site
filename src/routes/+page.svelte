<script lang="ts">
	import ScrollSection from "$lib/scrollSection.svelte";

	let top = 0;

	function manageScroll() {
		top = window.pageYOffset;
	}
</script>

<svelte:window on:scroll={manageScroll} />

<div class="h-[200vh]">
  <ScrollSection {top} />
  <ScrollSection {top}>
    <div class="h-[300vh] bg-red-400">
      
    </div>
  </ScrollSection>
  <ScrollSection {top} />
</div>
