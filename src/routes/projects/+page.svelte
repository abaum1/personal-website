<script>
  import * as d3 from "d3";

  /** @type {import('./$types').PageData} */
  export let data;
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import Pie from "$lib/Pie.svelte";
  let query = "";

  let filteredProjects;

  // Make sure the variable definition is *outside* the block
  let pieData;
  let projectsToShow;
  let selectedYearIndex = -1;
  let selectedYear;

  $: {
    // Initialize to an empty object every time this runs
    pieData = {};

    // Calculate rolledData and pieData based on filteredProjects here
    let rolledData = d3.rollups(
      filteredProjects,
      (v) => v.length,
      (d) => d.year,
    );
    pieData = rolledData.map(([year, count]) => {
      return { value: count, label: year };
    });
  }

  $: filteredProjects = projects.filter((project) => {
    let values = Object.values(project).join("\n").toLowerCase();
    return values.includes(query.toLowerCase());
  });

  $: {
    let filteredByYear = projects.filter((project) => {
      return project.year === selectedYear;
    });

    selectedYear =
      selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;

    projectsToShow =
      selectedYear != undefined ? filteredByYear : filteredProjects;

    console.log("Year", selectedYear, "type:", typeof selectedYear);

    console.log("selectedYearIndex", selectedYearIndex);
    console.log("projects", projects)
    console.log("projectsToShow", projectsToShow);
  }
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<Pie data={pieData} bind:selectedIndex={selectedYearIndex} />

<input
  type="search"
  bind:value={query}
  aria-label="Search projects"
  placeholder="🔍 Search projects…"
/>

<h1>
  {projectsToShow.length} Projects
</h1>
<div class="projects">
  {#each projectsToShow as p}
    <Project info={p} />
  {/each}
</div>
