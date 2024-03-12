<script>
    export let info = {};
    export let hLevel = 2;
    let p = info;
</script>

<style>
    article {
        display: grid;
        grid-template-rows: subgrid;
        grid-row: span 3;
        padding: 1em;
    }
</style>

<article>
    <svelte:element this={"h" + hLevel}>{ p.title }</svelte:element>
    <a href={p.url}>
        <img src={p.image} alt={p.alt}>
    </a>
    <p>{p.description}</p>
</article> 


<!-- add arrow emoji -->