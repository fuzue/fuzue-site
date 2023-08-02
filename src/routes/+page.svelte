<script lang="ts">
	import ChangingLogo from '$lib/ChangingLogo.svelte';
	import { onMount } from 'svelte';

	let changingLogo: ChangingLogo;
	let randomNum = Math.floor(Math.random() * 360);

	onMount(() => window.requestAnimationFrame(animate));

	let prevTimeStampLogo: number, prevTimeStampColor: number;

		function animate(timeStamp: number) {
		if (prevTimeStampColor === undefined) {
			prevTimeStampColor = timeStamp;
		}
		if (timeStamp >= prevTimeStampColor + 1200) {
			randomNum = Math.floor(Math.random() * 360);
			prevTimeStampColor = timeStamp
		}
		if (prevTimeStampLogo === undefined) {
			prevTimeStampLogo = timeStamp;
		}
		if (timeStamp >= prevTimeStampLogo + 500) {
			changingLogo.getRandomLogo();
			prevTimeStampLogo = timeStamp
		}
		window.requestAnimationFrame(animate);
	}
	
</script>


<div class="h-[150vh]" style:background-color="hsl({randomNum}, 100%, 40%)">
	<div class="sticky h-[100vh] top-0 flex justify-center p-[10%]">
		<ChangingLogo bind:this={changingLogo} />
		<div class="absolute bottom-10 text-slate-950 font-sans text center flex flex-col items-center">
			<p class="text-3xl">fuzue@fuzue.tech</p>
			<p class="text-xl">site coming soon</p>
		</div>
	</div>
</div>

