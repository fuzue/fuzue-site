<script lang="ts">
	export let top: number;
	let section: HTMLElement;
	$: relativeTop = section ? (top - section.offsetTop) / window.innerHeight : 0;
  $: scrollPercentage = section ? (top - section.offsetTop + window.innerHeight) / section.offsetHeight : 0;
</script>

<section bind:this={section}>
	<div class="sticky top-0">{top} {relativeTop} {scrollPercentage}</div>
	<slot />
</section>
