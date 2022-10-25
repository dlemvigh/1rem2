<script lang="ts">
	export let reps: number | undefined = undefined;
	export let weight: number | undefined = undefined;
</script>

<form>
	<label>
		Reps
		<input type="number" inputmode="numeric" bind:value={reps} min="1" max="30" />
	</label>
	<label>
		Weight
		<input type="number" inputmode="decimal" bind:value={weight} min="0" max="999" />
	</label>
</form>

<style>
	label {
		display: inline-flex;
		flex-direction: column;
	}
</style>
