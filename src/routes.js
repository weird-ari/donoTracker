import Home from "./routes/Home.svelte";
import Settings from "./routes/Settings.svelte";
import Overlay from "./routes/Overlay.svelte";
import OAuthSuccess from "./routes/OAuthSuccess.svelte";

export const routes = {
    "/settings": Settings,
    "/success": OAuthSuccess,
    "/overlay": Overlay,
    "*": Home
};