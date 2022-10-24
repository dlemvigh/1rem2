<script lang="ts">
	import { calcOneRepMaxRatio, calcOneRepMaxWeight } from "../lib/calc-one-rep-max";
  const REPS_LIST = [1, 2, 4, 6, 8, 10, 12, 15, 18, 24, 30]
  
  export let reps = 0;
  export let weight = 0;

  $: oneRepMax = weight > 0 && reps > 0 && calcOneRepMaxWeight(weight, reps)
</script>

<style>
  .right {
    text-align: right;
  }
</style>

<table>
  <thead>
    <tr>
      <th>Reps</th>
      <th class="right">Weight</th>
    </tr>
  </thead>
  <tbody>
    {#each REPS_LIST as REP}
      <tr>
        <td>{REP}</td>
        <td class="right">{oneRepMax === false ? "-" : (oneRepMax / calcOneRepMaxRatio(REP)).toFixed(1)} kg</td>
      </tr>
    {/each}
  </tbody>
</table>