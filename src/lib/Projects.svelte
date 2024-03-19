<script>
    import Project from "$lib/Project.svelte";
    export let data = []; // Projects list passed in as a prop - don't reimport from projects.json
    export let highlight = 0;
</script>

{#if highlight == 1}
    <div class="projects highlights">
        {#each data.slice(0, 3) as p}
            <Project info={p} hLevel="3" />
        {/each}
    </div>
{:else}
    <div class="projects">
        <!-- specify that the title is the unique identifier so that it filteres on title -->
        {#each data as p (p.title)} 

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