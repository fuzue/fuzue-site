<script lang="ts">
	export let project: { name: string; bg: string };
	export let scrollPosition: number;
	let container: HTMLElement;
	let transform = 'transform: skew(0);';

	$: currentProgress = container ? scrollPosition - container.offsetTop / window.innerHeight : 0;
	$: currentProgress, getTransform();

	function getTransform() {
    const isOut = currentProgress < 0 || currentProgress > 1;
    if (transform === 'transform: skew(0);' && isOut) {
    	transform = `transform: skew(${Math.random() * 20 - 10}deg, ${Math.random() * 20 - 10}deg) scale(.75);`;
    } else if (!isOut) {
        transform = 'transform: skew(0);'
    }
  }
</script>

<section bind:this={container} class="h-[200vh]">
	<div
		class="sticky h-screen top-0 bg-cover flex flex-col p-14 pt-32 transition-transform"
		style="
      background-image: url(/imgs/{project.bg});
      background-opacity: .3;
      {transform}
    "
	>
		<h1 class="text-4xl">
			{project.name}
			{Math.round(currentProgress * 100)}%
		</h1>
		<p>
			{#if currentProgress < 0.5}
				Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
				ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi animcupidatat excepteur
				officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate
				dolor minim nulla est proident. Nostrud officia pariatur ut officia.
			{:else}
				Tags and techs
			{/if}
		</p>
	</div>
</section>
