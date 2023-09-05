<script lang="ts">
	import SlidingItem from "./SlidingItem.svelte";
	import { projects } from "./data";

  let section: HTMLElement;
</script>

<section bind:this={section}>
  <div class="sticky top-0 pt-[20%] w-full h-screen flex flex-col justify-center text-4xl overflow-hidden">
    <ul class="flex flex-col h-full">
      {#each projects as project}
        <SlidingItem>
          <div
            class="relative w-full py-2"
            style="background-image: url(/imgs/{project.bg});">
            {project.name}
          </div>
        </SlidingItem>
      {/each}
    </ul>
  </div>
</section>