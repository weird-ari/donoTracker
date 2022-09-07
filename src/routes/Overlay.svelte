<script>
	import { missing_component } from "svelte/internal";

	import { currentValueStore } from "../stores.js";
	import { settingsStore } from "../stores.js";

	let currentValue;
	currentValueStore.subscribe((value) => {
		currentValue = parseFloat(value);
	});

	let settings;
	settingsStore.subscribe((value) => {
		settings = value;
	});
</script>

<main>
	<div class="title">NoticeTheTwitchconathon</div>
	<bar class="total">
		<bar
			class="dono"
			style="width:{Math.min(
				(100 * currentValue) / settings['goal'],
				100
			)}%"
		/>
		<div class="total">
			${currentValue.toFixed(2)}
			{"(" +
				((100 * currentValue) / parseFloat(settings["goal"])).toFixed(
					2
				) +
				"%)"}
		</div>
		<div class="markers">
			<div class="marker zero">
				${(0).toFixed(2)}
			</div>
			<div class="marker goal">
				${parseFloat(settings["goal"]).toFixed(2)}
			</div>
		</div>
	</bar>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
	@font-face {
		font-family: Fortnite;
		src: url("../fortnite.otf");
		font-weight: bold;
	}
	main {
		font-family: Fortnite;
		font-weight: bold;
		text-align: center;

		display: block;

		padding: 0;
		margin: auto auto;
		width: 95vw;
	}
	bar {
		display: block;
		height: 3rem;
	}

	bar.dono {
		position: relative;
		background-color: rgb(85, 205, 252);
	}

	bar.total {
		text-align: center;
		width: 100%;
		background-color: rgba(196, 196, 196, 0.625);
		border: 0.05rem solid grey;
	}

	div.title {
		text-align: center;
		font-size: 2rem;
		color: white;
		-webkit-text-stroke: 0.075rem black;
		width: 100%;
	}

	div.total {
		font-size: 2rem;
		color: black;
		position: relative;
		top: -3rem;
		vertical-align: bottom;
		padding: 0.75rem 0 0rem;
	}

	div.markers {
		position: relative;
		top: -2.25rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	div.marker {
		font-size: 1.5rem;
		color: white;
		-webkit-text-stroke: 0.075rem black;

		position: relative;
		display: inline-block;
		padding: 0;
		margin: 0;
	}

	div.marker.zero {
		text-align: left;
		left: 0;
		top: 0rem;
	}

	div.marker.goal {
		text-align: right;
		right: 0;
	}
</style>
