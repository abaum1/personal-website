<script>
    let pages = [
        { url: "./", title: "Home" },
        { url: "./projects", title: "Projects" },
        { url: "./contact", title: "Contact" },
        { url: "./resume", title: "Resume" },
    ];
    import { page } from '$app/stores';

</script>


<nav>
    {#each pages as p}
    <a href={ p.url } class:current={ "." + $page.route.id === p.url }>{ p.title }</a>
    
    {/each}
</nav>

<slot />