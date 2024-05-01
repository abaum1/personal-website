<script>
  import * as d3 from "d3";

  /** @type {import('./$types').PageData} */
  export let data;
  import projects from "$lib/projects.json";
  // import Project from "$lib/Project.svelte";
  import Projects from "$lib/Projects.svelte";
  import Pie from "$lib/Pie.svelte";
  let query = "";

  let filteredProjects;

  // Make sure the variable definition is *outside* the block
  let pieData;
  let projectsToShow;
  let selectedYearIndex = -1;
  let selectedYear;
  let filteredByYear;
  let rolledData;

$: pieData = rolledData.map(([year, count]) => {
      return { value: count, label: year };
    });

  $: // Calculate rolledData and pieData based on filteredProjects here
    rolledData = d3.rollups(
      filteredProjects,
      (v) => v.length,
      (d) => d.year,
    );

  $: filteredProjects = projects.filter((project) => {
    let values = Object.values(project).join("\n").toLowerCase();
    return values.includes(query.toLowerCase());
  });

  $: selectedYear = selectedYearIndex > -1 ? pieData[selectedYearIndex].label : null;
  $: filteredByYear = projects.filter((project) => {
      return project.year === selectedYear;
    });


  $: projectsToShow = selectedYear != undefined ? filteredByYear : filteredProjects;

  
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
<Projects data={projectsToShow} />
