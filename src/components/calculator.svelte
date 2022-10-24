<script>
  import CalculatorForm from "./calculator-form.svelte";
	import CalculatorResults from "./calculator-results.svelte";

  let reps = "1";
  let weight = "100";
</script>

<CalculatorForm bind:reps={reps} bind:weight={weight} />
<CalculatorResults reps={Number(reps)} weight={Number(weight)} />