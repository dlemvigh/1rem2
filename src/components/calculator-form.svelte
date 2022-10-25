<script lang="ts">
	export let reps: string = "";
	export let weight: string = "";
</script>

<form>
	<label>
		Reps
		<input type="text" inputmode="numeric" bind:value={reps} min="1" max="30" />
	</label>
	<label>
		Weight
		<input type="text" inputmode="decimal" bind:value={weight} min="0" max="999" />
	</label>
</form>

<style>
	form {
		max-width: 8rem;

		display: grid;
		grid-template-columns: 2fr 3fr;
		column-gap: 1rem;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	input {
		width: 100%;
	}
</style>
