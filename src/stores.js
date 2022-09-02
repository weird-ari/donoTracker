import { writable } from 'svelte/store';

export const settingsStore = writable({
    channel: "noticethez",
    socketToken: '',
    goal: 2500,
    primeValue: 2.5,
    t1Value: 2.5,
    t2Value: 5.0,
    t3Value: 12.5,
});

export const currentValueStore = writable(0.0);