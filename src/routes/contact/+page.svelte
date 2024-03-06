<svelte:head>
	<title>Contact</title>
</svelte:head>
<body>
    <script type="module" src="../global.js"></script>
  
  <h1>Contact Me</h1>
  
  <form action="mailto:foo@example.com" method="POST" enctype="text/plain">
      <label for="email">Email:</label><br>
      <input type="text" id="email" name="name" required><br><br>
  
      <label for="subject">Subject:</label><br>
      <input type="subject" id="subject" name="subject" required><br><br>
  
      <label for="message">Message:</label><br>
      <textarea id="message" name="body" rows="4" cols="50" required></textarea><br><br>
  
      <input type="submit" value="Submit">
  </form>
  
  </body>