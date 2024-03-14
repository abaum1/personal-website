<script>
    import * as d3 from "d3";
    let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

    let data = [1, 2, 3, 4, 5, 5];

    let total = 0;

    for (let d of data) {
        total += d;
    }
    let angle = 0;
    let arcData = [];

    for (let d of data) {
        let endAngle = angle + (d / total) * 2 * Math.PI;
        arcData.push({ startAngle: angle, endAngle });
        angle = endAngle;
    }
    let arcs = arcData.map((d) => arcGenerator(d));
    let colors = d3.scaleOrdinal(d3.schemeTableau10);

</script>

<svg viewBox="-50 -50 100 100">
    {#each arcs as arc, i}
        <path d={arc} fill={colors(i)} />
    {/each}
</svg>

<style>
    svg {
        max-width: 20em;
        margin-block: 2em;

        /* Do not clip shapes outside the viewBox */
        overflow: visible;
    }
</style>
