<script lang="ts">
	export let scrollPosition: number;
	let container: HTMLElement;

	$: currentProgress = container ? scrollPosition - container.offsetTop / window.innerHeight : 0;
</script>

<section bind:this={container} class="flex flex-col justify-center">
	<div class="transition-all flex items-center justify-around">
		<div
			class="transition-all border border-white w-52 h-52 transform translate-y-96"
			class:translate-y-96={currentProgress < -0.1}
			class:opacity-0={currentProgress < -0.1}
		/>
		<div
			class="transition-all delay-100 border border-white w-52 h-52 transform translate-y-96"
			class:translate-y-96={currentProgress < -0.1}
			class:opacity-0={currentProgress < -0.1}
		/>
		<div
			class="transition-all delay-200 border border-white w-52 h-52 transform translate-y-96"
			class:translate-y-96={currentProgress < -0.1}
			class:opacity-0={currentProgress < -0.1}
		/>
	</div>
</section>
