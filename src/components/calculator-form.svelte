<script lang="ts">
  export let reps: string = "";
  export let weight: string = "";
</script>

<style>
  label {
    display: inline-flex;
    flex-direction: column;
  }
</style>

<form>
  <label>
    Reps
    <input type="number" bind:value={reps} min=1 max=30 />
  </label>
  <label>
    Weight
    <input type="number" bind:value={weight} min=0 max=999 />
  </label>
</form>