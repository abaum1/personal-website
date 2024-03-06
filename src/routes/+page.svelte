<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import projects from "$lib/projects.json";
	import Project from "$lib/Project.svelte";
  </script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Welcome to my page</h1>
<p>My name is Amelia and I am a Masters of Transportation student.</p>
<img src="images/sloth.png" alt="Kittens"/>
<br/>
<p>
		Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.
		The best way to reach me is either through the contact form or 
		through LinkedIn <a href="https://www.linkedin.com/in/amelia-baum/">@amelia.baum</a>
		Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.

</p>
<br/>
<h2>Latest Projects</h2>
<br/>
<div class="projects">
	{#each projects.slice(0,3) as p}
	  <Project info={p} />
	{/each}
  </div>