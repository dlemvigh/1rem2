<script lang="ts">
	import CalculatorForm from './calculator-form.svelte';
	import CalculatorResults from './calculator-results.svelte';
	import { parseNumberLocale } from "../lib/parse-number-locale"

	let reps: string = "";
	let weight: string = "";
</script>

<CalculatorForm bind:reps bind:weight />
<CalculatorResults reps={parseNumberLocale(reps)} weight={parseNumberLocale(weight)} />
