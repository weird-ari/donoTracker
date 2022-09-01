<script>
    import Router, { link } from "svelte-spa-router";
    import { routes } from "./routes.js";
    import { settingsStore } from "./stores.js";
    import { currentValueStore } from "./stores.js";

    let settings;
    settingsStore.subscribe((value) => {
        settings = value;
    });

    let currentValue;
    currentValueStore.subscribe((value) => {
        currentValue = value;
    });

    function loadSettingsFromStorage() {
        let cachedSettings = JSON.parse(
            window.localStorage.getItem("donoTrackerSettings")
        );

        if (cachedSettings) {
            for (const prop in settings) {
                if (cachedSettings[prop]) {
                    settings[prop] = cachedSettings[prop];
                }
            }
            settingsStore.set(settings);
        }
    }
    function loadCurrentValueFromStorage() {
        currentValueStore.set(
            window.localStorage.getItem("donoTrackerCurrentValue") ||
                currentValue
        );
    }

    loadSettingsFromStorage();
    loadCurrentValueFromStorage();

    window.addEventListener("storage", () => {
        loadSettingsFromStorage();
    });

    function saveCurrentValue() {
        currentValueStore.set(currentValue);
        window.localStorage.setItem("donoTrackerCurrentValue", currentValue);
        console.log(currentValue);
    }

    function addDono(amount) {
        console.log(amount);
        currentValue = parseFloat(currentValue) + amount;
        saveCurrentValue();
    }

    function addSub(plan) {
        let ratio = 0;
        if (plan === "Prime") {
            ratio = settings["primeValue"];
        } else if (plan === "1000") {
            ratio = settings["t1Value"];
        } else if (plan === "2000") {
            ratio = settings["t2Value"];
        } else if (plan === "3000") {
            ratio = settings["t3Value"];
        }
        addDono(ratio);
    }

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
    twitchClient.connect().then(() => console.log("CONNECTED"));

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

<Router {routes} />
