<script>
    export let info = {};
    export let hLevel = 2;
    let p = info;
</script>



<article>
    <svelte:element this={"h" + hLevel}>{p.title}</svelte:element>
    <a href={p.url}>
        <img src={p.image} alt={p.alt} />
    </a>
    <div class="description-container">{p.description}</div>
    <div class="year-container">Year:{p.year}</div>
</article>

<style>
    article {
        display: grid;
        grid-template-rows: subgrid;
        grid-row: span 3;
        padding: 1em;
    }
    .year-container {
    margin-top: 10px; /* Adjust margin top to create space */
    margin-bottom: 10px;
    font-style: italic; /* Optionally, italicize the year text */
    color: #888; /* Optionally, change the color of the year text */
    }
    .description-container {
    margin-top: 40px; /* Adjust margin top to create space */
    margin-bottom: 10px;
    }
</style>
