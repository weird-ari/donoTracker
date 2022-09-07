<script>
    import { settingsStore } from "../stores.js";
    import { currentValueStore } from "../stores.js";

    let settings;
    settingsStore.subscribe((value) => {
        settings = value;
    });

    let currentValue;
    currentValueStore.subscribe((value) => {
        currentValue = value;
    });

    let descriptors = {
        channel: "Twitch channel:",
        socketToken: "Streamlabs API Socket Token:",
        currentValue: "Current Value:",
        goal: "Donation Goal:",
        primeValue: "Value of Prime Sub:",
        t1Value: "Value of Tier 1 Sub:",
        t2Value: "Value of Tier 2 Sub:",
        t3Value: "Value of Tier 3 Sub:",
    };

    function saveSettings() {
        settingsStore.set(settings);
        window.localStorage.setItem(
            "donoTrackerSettings",
            JSON.stringify(settings)
        );
        location.reload();
        console.log(settings);
    }

    function saveCurrentValue() {
        currentValueStore.set(currentValue);
        window.localStorage.setItem("donoTrackerCurrentValue", currentValue);
        location.reload();
        console.log(currentValue);
    }
</script>

<button
    type="button"
    on:click={() => {
        location.reload();
    }}>refresh</button
>

<setting>
    <descriptor> Current Value: </descriptor>
    <input type="text" bind:value={currentValue} on:change={saveCurrentValue} />
</setting>

{#each Object.entries(settings) as [setting, value]}
    <setting>
        <descriptor> {descriptors[setting] || setting + ":"} </descriptor>
        <input
            type="text"
            bind:value={settings[setting]}
            on:change={saveSettings}
        />
    </setting>
{/each}

<style>
    setting {
        display: block;
    }
</style>
