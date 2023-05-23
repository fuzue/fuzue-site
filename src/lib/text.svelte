<script lang="ts">
  let texto = 'lalala'

  export let newText: string;

  function changeText() {
    texto = newText
  }
</script>

<div class="w-full h-full flex items-center justify-center">
  <button on:click={changeText}>{texto}</button>
</div>
