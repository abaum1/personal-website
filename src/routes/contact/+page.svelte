
<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<h1>Contact Me</h1>
<form action="mailto:amelia_b@mit.edu" method="POST" enctype="text/plain">
    <label for="email">Email:</label>
    <input type="email">
    <label for="text">Subject:</label>
    <input type="text">
    <label for="">Message:</label>
    <textarea name="body" rows="4" cols="50" required></textarea>
</form>
<button>Submit</button>