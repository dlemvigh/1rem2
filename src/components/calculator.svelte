<script>
	import CalculatorForm from './calculator-form.svelte';
	import CalculatorResults from './calculator-results.svelte';
	import { parseNumberLocale } from '../lib/parse-number-locale';

	let reps = '';
	let weight = '';
</script>

<CalculatorForm bind:reps bind:weight />
<CalculatorResults reps={Number(reps)} weight={Number(weight)} />
