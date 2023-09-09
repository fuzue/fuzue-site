<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string;
	let currentText = '';
	let startingFrame = 0;
	let mounted = false;

	const frequency = 100;

	$: text, animate();

	function animate() {
		if (mounted) window.requestAnimationFrame(writeText);
		currentText = '';
		startingFrame = 0;
	}

	function writeText(frame: number) {
		if (currentText.length >= text.length) return;
		if (startingFrame === 0) startingFrame = frame;
		if (frame - startingFrame >= frequency) {
			currentText = text.substring(0, currentText.length + 1);
			startingFrame = frame;
		}
		window.requestAnimationFrame(writeText);
	}

	onMount(() => {
		mounted = true;
		animate();
	});
</script>

{@html currentText}
