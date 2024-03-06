<!-- <script>
  import projects from "/Users/ameliabaum/Library/Mobile Documents/com~apple~CloudDocs/MIT/6.C35/personal-website/src/lib/projects.json";
  import Project from "$lib/Project.svelte";
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<body>
  <h1>{projects.length} projects</h1>
    <div class="projects">
      {#each projects as p}
        <Project info={p} />
      {/each}
    </div>
 
</body> -->



<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
</script>

<svelte:head>
<title>Projects</title>
</svelte:head>

<h1>{ projects.length } Projects</h1>
<div class="projects">
  {#each projects as p}
	<Project info={p} />

{/each}

</div>
<!-- <Projects {projects}></Projects> -->

