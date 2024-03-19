<script>
    import * as d3 from "d3";

    let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

    export let data = [];

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

    let sliceGenerator = d3.pie().value((d) => d.value);

    let arcs;
    $: {
        arcData = sliceGenerator(data);
        arcs = arcData.map((d) => arcGenerator(d));
    }
    let colors = d3.scaleOrdinal(d3.schemeTableau10);

    export let selectedIndex = -1;

    function toggleWedge(index, event) {
        if (!event.key || event.key === "Enter") {
            selectedIndex = index;
        }
    }
</script>

<div class="container">
    <svg viewBox="-50 -50 100 100">
        {#each arcs as arc, index}
            <path
                d={arc}
                fill={colors(index)}
                class:selected={selectedIndex === index}
                on:click={(e) => toggleWedge(index, e)}
                on:keyup={(e) => toggleWedge(index, e)}
                tabindex="0"
                role="button"
                aria-label
            />
        {/each}
    </svg>
    <ul class="legend">
        {#each data as d, index}
            <li style="--color: {colors(index)}">
                <span class="swatch"></span>
                {d.label} <em>({d.value})</em>
            </li>
        {/each}
    </ul>
</div>

<style>
    svg {
        max-width: 20em;
        margin-block: 2em;
    }

    svg:has(path:hover, path:focus-visible) {
        path:not(:hover, :focus-visible) {
            opacity: 50%;
        }
    }

    path {
        transition: 300ms;
        cursor: pointer;
        outline: none;
    }

    .selected {
        --color: oklch(60% 40% 200) !important;

        &:is(path) {
            fill: var(--color);
        }
    }

    .container {
        display: flex;
        align-items: center; /* Center items vertically */
    }

    .legend {
        /* flex: 1; */
        list-style: none;
        border: 1px solid black;
        padding: 10px;
        border-radius: 5px;
        /* align-items: 'flex-start'; */
        margin-left: 20px;
    }

    .legend li .swatch {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 0px solid black;
        margin-right: 5px;
        background-color: var(--color);
    }
</style>
