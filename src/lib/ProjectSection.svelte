<script lang="ts">
  export let project: {name: string, bg: string};
  export let scrollPosition: number;
  let container: HTMLElement;

  $: currentProgress = container ? scrollPosition - (container.offsetTop / window.innerHeight): 0;
</script>

<section
  bind:this={container}
  class="h-[200vh]">
  <div class="sticky h-screen top-0 bg-cover flex flex-col p-14 pt-32"
    style="background-image: url(/imgs/{project.bg}); background-opacity: .3">
    <h1 class="text-4xl">
      {project.name} {Math.round(currentProgress*100)}%
    </h1>
  </div>
</section>
