<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

	export let speed: number;

  let isFlipped = false;
  const flip = tweened(0, {
		duration: 500,
    easing: cubicOut
	});

  $: $flip, flipStatus()

  function flipImage() {
    isFlipped ? flip.set(0) : flip.set(180)
  }

  function flipStatus() {
    if(isFlipped && $flip < 90) isFlipped = false
    if(!isFlipped && $flip > 90) isFlipped = true
  }
</script>

<button
  class="relative w-96 h-72 rounded-lg overflow-hidden text-white flex items-start text-left
          {isFlipped ? 'bg-blue-900' : 'bg-black'}"
  style="transform: perspective(24rem)rotateX({speed}deg)rotateY({$flip}deg);"
  on:click={flipImage}
  >
  {#if !isFlipped}
    <img
      src="/imgs/coisa-lida-2.jpg"
      class="absolute object-cover w-full h-full opacity-50"
      alt="alt text"
    />
    <div class="absolute w-full h-full flex flex-col">
      <h1 class="uppercase font-bold text-6xl leading-[0.8]">Read thing</h1>
      <div class="mt-auto text-justify">
        Art installation created with Lucas Bambozzi, a Brazilian artist where poems were shown in
        FIESP building's LED façade, a landmark in São Paulo's famous "Avenida Paulista". The poem
        rhythm and distortion of its words were dictated by the flux of people passing by on the
        street, captured by a Kinect camera hidden on the sidewalk.
      </div>
    </div>
  {:else}
    <div class="absolute w-full h-full flex flex-col" style="transform: rotateY(180deg)">
      <div class="h-4 w-full flex text-opacity-50 text-white">
        <div class="w-4 h-full"></div>
        <div class="flex justify-between w-full pr-4">
          {#each {length: 9} as _}
            <div class="border-current border-l h-2/3" />
            {#each {length: 4} as _}
            <div class="border-current border-l h-1/2" />
            {/each}
          {/each}
          <div class="border-current border-l h-2/3" />
        </div>
      </div>
      <div class="flex h-full">
          <div class="flex flex-col justify-between w-4 h-full pb-4 text-opacity-50 text-white">
            {#each {length: 8} as _}
              <div class="border-current border-b w-2/3" />
              {#each {length: 4} as _}
              <div class="border-current border-b w-1/2" />
              {/each}
            {/each}
            <div class="border-current border-b w-2/3" />
          </div>
        <div class="relative w-full border-2 border-current mr-4 mb-4">
          <div class="absolute flex top-0 left-0 w-full h-full text-opacity-20 text-white">
          {#each {length: 45} as _}
            <div class="border-current border-l flex-grow" />
          {/each}
          </div>
          <div class="absolute flex flex-col top-0 left-0 w-full h-full text-opacity-20 text-white">
            {#each {length: 40} as _}
              <div class="border-current border-b flex-grow" />
            {/each}
            </div>
          <div class="absolute flex flex-col top-0 left-0 w-full h-full p-4">
            <div class="flex justify-between">
              {#each ['Poetry', 'Art', 'Installation', 'Interactive'] as tag}
                <span class="px-2 border-current border-2 text-sm">{tag}</span>
              {/each}
            </div>
            <div class="flex-grow py-4">
              The work was done in C++ language using openFrameworks library and the people movement was captured using a Kinect camera.
            </div>
            <div><button class="underline mb-1">know more</button></div>
            <div class="text-xs text-right mb-1">Techs used:</div>
            <div class="flex space-x-2 justify-end">
              {#each ['Kinect', 'LED Screen', 'C++'] as tag}
                <span class="px-2 border-2 text-sm">{tag}</span>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</button>
