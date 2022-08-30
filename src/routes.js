import Overlay from "./routes/Overlay.svelte";
import OAuthSuccess from "./routes/OAuthSuccess.svelte";

export const routes = {
    "/success": OAuthSuccess,
    "*": Overlay
};