<script lang="ts">
	import { onMount } from 'svelte';
	import { claims } from './data';
	import TypedText from './TypedText.svelte';

	const frequency = 3000;
	let currentClaim = 0;
	let startingFrame = 0;

	function animate(frame: number) {
		if (startingFrame === 0) startingFrame = frame;
		if (frame - startingFrame > frequency) changeClaim();
		window.requestAnimationFrame(animate);
	}

	function changeClaim() {
		startingFrame = 0;
		currentClaim = currentClaim < claims.length - 1 ? currentClaim + 1 : 0;
	}

	onMount(() => window.requestAnimationFrame(animate));
</script>

<section class="flex justify-center">
	<div class="sticky top-0 h-screen flex flex-col justify-center currentClaim-4xl w-full max-w-3xl">
		<p>We <TypedText text={claims[currentClaim]} />.</p>
    <p>We are small group with great accomplishments. We are experienced in front end and back end development. We are agnostic in languages. We can write in any framework, because we have broad understanding of algorithms.</p>
    <p>Together we have over 20 years of experience in software development.</p>
    <p>We are creative coders: we have developed experimental web docs, immersive experiences in events and even more traditional works such as apps and websites :D</p>
	</div>
</section>

<style lang="postcss">
  p {@apply py-2 text-lg}
</style>