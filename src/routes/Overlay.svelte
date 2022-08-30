<script>
	export let data = {
		totalDonoAmount: 0.0,
	};

	let cachedData = JSON.parse(window.localStorage.getItem("donoTracker"));
	//console.log(cachedData["totalDonoAmount"]);

	if (cachedData) {
		for (const prop in data) {
			if (cachedData[prop]) {
				data[prop] = cachedData[prop];
			}
		}
	}

	console.log(data["totalDonoAmount"]);

	//setInterval(() => {
	//	addDono(0.1);
	//}, 1000);

	function addDono(amount) {
		console.log(amount);
		data["totalDonoAmount"] += amount;
		window.localStorage.setItem("donoTracker", JSON.stringify(data));
	}

	function addSub(plan) {
		addDono(ratios[plan]);
	}

	let ratios = { Prime: 2.5, "1000": 2.5, "2000": 5.0, "3000": 12.5 };

	let twitchClient;

	twitchClient = new window.tmi.Client({
		channels: [
			"elspreen",
			"paulinholokobr",
			"elmariana",
			"roshtein",
			"hasanabi",
			"juansguarnizo",
			"kaicenat",
			"xqc",
			"tarik",
			"cdawgva",
			"yourragegaming",
			"luquet4",
			"loltyler1",
			"summit1g",
			"kyedae",
		],
	});
	twitchClient.connect();

	twitchClient.on("message", async (channel, tags, message, self) => {
		//console.log(message);
	});

	twitchClient.on(
		"subscription",
		(channel, username, method, message, userstate) => {
			addSub(userstate["msg-param-sub-plan"]);
		}
	);

	twitchClient.on(
		"resub",
		(channel, username, months, message, userstate, methods) => {
			//let cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
			addSub(userstate["msg-param-sub-plan"]);
		}
	);

	twitchClient.on(
		"subgift",
		(channel, username, streakMonths, recipient, methods, userstate) => {
			//let senderCount = ~~userstate["msg-param-sender-count"];
			addSub(userstate["msg-param-sub-plan"]);
		}
	);

	twitchClient.on("cheer", (channel, userstate, message) => {
		//let senderCount = ~~userstate["msg-param-sender-count"];
		let bits = userstate.bits;
		console.log(bits);
		addDono(bits / 100.0);
	});
</script>

<main>Donos: ${data["totalDonoAmount"].toFixed(2)}</main>

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
