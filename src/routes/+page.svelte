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
<img src="images/sloth.png" alt="a sloth relaxing" />
<br />
<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
	feugiat, molestie ipsum et, consequat nibh. The best way to reach me is
	either through the contact form or through LinkedIn <a
		href="https://www.linkedin.com/in/amelia-baum/">@amelia.baum</a
	>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
	molestie ipsum et, consequat nibh.
</p>

{#await fetch("https://api.github.com/users/abaum1")}
	<p>Loading...</p>
{:then response}
	{#await response.json()}
		<p>Decoding...</p>
	{:then data}
		<section>
			<h2>GitHub Stats</h2>
			<dl>
				<dt>Username: {data.login}</dt>
				<dd id="username"></dd>
				<dt>Number of Public Repositories: {data.public_repos}</dt>
				<dd id="public_repos"></dd>
				<dt>Number of Followers: {data.followers}</dt>
				<dd id="followers"></dd>
				<dt>Following: {data.following}</dt>
				<dd id="following"></dd>
			</dl>
		</section>
	{:catch error}
		<p class="error">
			Something went wrong: {error.message}
		</p>
	{/await}
{:catch error}
	<p class="error">
		Something went wrong: {error.message}
	</p>
{/await}


<br />
<h2>Latest Projects</h2>
<br />
<div class="projects">
	{#each projects.slice(0, 3) as p}
		<Project info={p} />
	{/each}
</div>

<style>
	dl {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: auto;
		gap: 8px; /* Adjust as needed */
	}

	dt,
	dd {
		grid-row: 2;
	}

	dt {
		grid-column: span 1;
		font-weight: bold;
	}

	dd {
		grid-column: span 3;
	}
</style>
