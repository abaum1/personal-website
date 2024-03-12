

<script>
    let pages = [
        { url: "./", title: "Home" },
        { url: "./projects", title: "Projects" },
        { url: "./contact", title: "Contact" },
        { url: "./resume", title: "Resume" },
    ];
    import { page } from "$app/stores";
    let localStorage = globalThis.localStorage ?? {};
    let colorScheme = localStorage.colorScheme ?? "light dark";

    // let colorScheme = "light dark";
    $: localStorage.colorScheme = colorScheme;

	let root = globalThis?.document?.documentElement;
	$: root?.style.setProperty("color-scheme", colorScheme);

</script>

<label class="color-scheme">
    Theme:
    <select bind:value={colorScheme}>
        <option value="light dark">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</label>

<nav>
    {#each pages as p}
        <a href={p.url} class:current={"." + $page.route.id === p.url}
            >{p.title}</a
        >
    {/each}
</nav>

<slot />

<style>
    nav {
        display: flex;
        color: inherit;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: var(--border-color);
        margin-bottom: 1em;
        --border-color: oklch(50% 10% 200 / 40%);

        a {
            flex: 1;
            text-decoration: none;
            color: inherit;
            text-align: center;
            padding: 0.5em;
        }
        ol {
            display: contents;
        }
        li {
            display: contents;
        }

        a:hover {
            border-bottom: 2px solid var(--color-accent);
            background-color: color-mix(
                in oklch,
                var(--color-accent),
                canvas 85%
            );
        }
        
    }
    .color-scheme {
            position: absolute;
            top: 2rem;
            right: 1rem;
        }
</style>
