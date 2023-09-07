<script lang="ts">
	import { projects } from "./data";
</script>

{#each projects as project}
<section
  class="h-[200vh]">
  <div class="sticky h-screen top-0 bg-cover flex flex-col p-14 pt-32"
    style="background-image: url(/imgs/{project.bg}); background-opacity: .3">
    <h1 class="text-4xl">
      {project.name}
    </h1>
  </div>
</section>
{/each}