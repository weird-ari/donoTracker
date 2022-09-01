<script>
	import { currentValueStore } from "../stores.js";

	let currentValue;
	currentValueStore.subscribe((value) => {
		currentValue = parseFloat(value);
	});
</script>

<main>Donos: ${currentValue.toFixed(2)}</main>

<style>
	main {
		font-size: 5rem;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		color: red;
	}
</style>
