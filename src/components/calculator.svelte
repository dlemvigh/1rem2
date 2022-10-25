<script lang="ts">
	import CalculatorForm from './calculator-form.svelte';
	import CalculatorResults from './calculator-results.svelte';

	let reps: number | undefined = undefined;
	let weight: number | undefined = undefined;
</script>

<CalculatorForm bind:reps bind:weight />
<CalculatorResults reps={parseNumberLocale(reps)} weight={parseNumberLocale(weight)} />
