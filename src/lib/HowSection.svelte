<script lang="ts">
	import { claims } from "./data";

  export let windowPercent: number;
  let claim = 0

  $: windowPercent, changeClaim()

  function changeClaim() {
    claim = Math.floor(windowPercent / .25)
    while(claim > 2) claim = claim - 3
  }
</script>

<section class="h-[200vh] flex justify-center -mb-[50vh]">
  <div class="sticky top-0 h-screen flex flex-col justify-center text-4xl w-96 max-w-full">
    <div>We are</div>
    <div class="ml-auto">{claims[claim]}</div>
  </div>
</section>