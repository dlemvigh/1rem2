<script>
	import CalculatorForm from './calculator-form.svelte';
	import CalculatorResults from './calculator-results.svelte';
	import { parseNumberLocale } from '../lib/parse-number-locale';

	let reps = '1';
	let weight = '100';
</script>

<CalculatorForm bind:reps bind:weight />
<CalculatorResults reps={Number(reps)} weight={Number(weight)} />
