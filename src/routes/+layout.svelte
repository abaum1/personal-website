<script>
    let pages = [
        { url: "./", title: "Home" },
        { url: "./projects", title: "Projects" },
        { url: "./contact", title: "Contact" },
        { url: "./resume", title: "Resume" },
    ];
</script>

YOLO <slot />

<nav>
    {#each pages as p}
        <a href={p.url}>{p.title}</a>
    {/each}
</nav>
