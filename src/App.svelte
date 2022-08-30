<script>
    import { Router, Link, Route } from "svelte-routing";
    import Overlay from "./routes/Overlay.svelte";
    import OAuthSuccess from "./routes/OAuthSuccess.svelte";

    export let url = "";

    //<nav>
    //    <Link to="/">Home</Link>
    //    <Link to="success">success</Link>
    //</nav>;
</script>

<Router {url}>
    <div>
        <Route path="/"><Overlay /></Route>
        <Route path="success" component={OAuthSuccess} />
    </div>
</Router>
