<script lang="ts">
	import { projects } from "./data";

  export let scrollPosition: number;
  let section: HTMLElement;

  $: animationPos = scrollPosition - Math.floor(scrollPosition);
  $: currentPos = 1.5+Math.sin((animationPos-.25)*2*Math.PI)
</script>

<section bind:this={section} style="height: {projects.length * 100}vh;">
  <div class="sticky top-0 w-full h-screen flex flex-col justify-center items-center text-4xl overflow-hidden">
    <div
      class="absolute w-2/3 h-2/3 bg-gray-500"
      style="
        width: max(min({currentPos*100}%, 100%), 50%);
        height: max(min({currentPos*100}%, 100%), 50%);
        transform: skew(min({currentPos-2}deg, 0deg), min({currentPos-2}deg, 0deg))
      ">
      {currentPos} / {animationPos}

    </div>
  </div>
</section>