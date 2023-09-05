<script lang="ts">
	import { claims } from './data';

	export let windowPercent: number;
	let currentClaim = 0;
  let currentText = '';
  let startingFrame = 0;

	$: windowPercent, manageScroll();

	function manageScroll() {
		let newClaim = Math.floor(windowPercent / 0.25);
		while (newClaim > claims.length - 1) newClaim = newClaim - claims.length;
    if(currentClaim !== newClaim) changeClaim(newClaim)
	}

  function changeClaim(newClaim: number) {
    currentClaim = newClaim;
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

</script>

<section class="h-[150vh] flex justify-center -mb-[50vh]">
	<div class="sticky top-0 h-screen flex flex-col justify-center text-4xl w-96 max-w-full">
		<div>We are</div>
		<div class="ml-auto text-right whitespace-nowrap">{currentText}</div>
	</div>
</section>
