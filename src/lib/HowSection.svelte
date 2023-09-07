<script lang="ts">
	import { onMount } from 'svelte';
	import { claims } from './data';

  const frequency = 1000;

	let currentClaim = 0;
  let currentText = '';
  let startingFrame = 0;

  function animate(frame: number) {
    if(startingFrame === 0) startingFrame = frame
    console.log(frame - startingFrame)
    if(frame - startingFrame > frequency) changeClaim();
    window.requestAnimationFrame(animate)
  }

  function changeClaim() {
    currentClaim = currentClaim < claims.length - 1 ? currentClaim + 1 : 0;
    currentText = '';
    startingFrame = 0;
    if(!window) return;
    window.requestAnimationFrame(writeClaim)
  }

  function writeClaim(frame: number) {
    if(currentText.length >= claims[currentClaim].length) return
    if(startingFrame === 0 || frame - startingFrame >= 100) {
      startingFrame = frame
      currentText = claims[currentClaim].substring(0, currentText.length + 1)
    }
    window.requestAnimationFrame(writeClaim)
  }

  onMount(() => window.requestAnimationFrame(animate))
</script>

<section class="flex justify-center">
	<div class="sticky top-0 h-screen flex flex-col justify-center text-4xl w-96 max-w-full">
		<div>We are</div>
		<div class="ml-auto text-right whitespace-nowrap">&nbsp;{currentText}</div>
	</div>
</section>
