<script>
    import projects from "$lib/projects.json";
    import Project from "$lib/Project.svelte";
    export let list = []; // Projects list passed in as a prop
    export let highlight = 0;
</script>

{#if highlight == 1}
    <div class="projects highlights">
        {#each projects.slice(0, 3) as p}
            <Project info={p} hLevel="3" />
        {/each}
    </div>
{:else}
    <div class="projects">
        {#each projects as p}
            <Project info={p} />
        {/each}
    </div>
{/if}

<style>
    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    }
</style>