<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Assignment 4</title>
</svelte:head>

	<header>
		<h1>
			<small>Assignment 4: Deceptive Design</small>
		</h1>

		<p>
			<strong>Amelia Baum</strong> — <em>amelia_b@mit.edu</em>
		</p>
	</header>

	<h3>Proposition:</h3>
	<p>The New York Police Department has started taking complaints about their officers from the public
		more seriously over the last 20 years.</p>
	<h3>Dataset:</h3>
	<p>Civilian Complaints Against New York City Police Officers. Source: ProPublica</p>

	<main>
		<section>
			<h3>Visualization 1 (Agree with Proposition)</h3>
			<figure>
				<img src="../images/A4/A4_agree.png" alt="" />
				<figcaption>
					Of all substantiated complaints, the percentage that resulted in no action has decreased markedly over the last two decades. 
				</figcaption>
			</figure>

			<h3>
				Design Decisions:
			</h3>

			<ul>
				<li>I intentionally exaggerate the change in actionability of substantiated claims by exploiting the
					relative differences between the percentages of substantiated - no action type claims, which have
					very low rates across all three time frames.</li>
				<li>I excluded data from the 1980s (0 records of substantiated - no action claims, which disrupts the
					narrative I am trying to show here) and data from the 2020s since there were only a few
					observations, so the data was on a different scale.
				</li>
				<li>I used a dark blue hue to call attention to the bar on the bottom, which is the Complaint Outcome I
					am emphasizing. The use of a dark color draws the reader's eyes immediately to this part of the
					chart, and it exaggerates the difference in area between the substantiated - no action part of the
					1990s bar relative to that of the 2000s and 2010s bars.
				</li>
				<li>I intentionally used only the substantiated claims in this visualization to mask the very small
					percentage of claims in the substantiated - no action category.
				</li>
				<li>I used annotations to guide the user to the claim I am trying to make - and also to present new
					statistics (22x and 47x) that are not easily interpretable directly from the chart.
				</li>
			</ul>

			<h3>Visualization 2 (Disagree with Proposition)</h3>

			<figure>
				<img src="../images/A4/A4_disagree.png" alt="" />
				<figcaption>
					The number of Complaints about NYPD officers that were labeled as unsubstantiated or resulted in officers being exonerated has increased over the last 20 years.
				</figcaption>
			</figure>

			<h3>
				Design Decisions:
			</h3>

			<ul>
				<li>In this chart, I selectively use only two categories, substantiated and exonerated, intentionally eliminating the context of the other categories. Similarly, I am using absolute numbers instead of percentages. Because the number of complaints went up overall, I can exaggerate the changes in these categories. 
				</li>
				<li>A red vertical line draws the reader's attention to the point where the lines start increasing, which is especially important because the trends are not monotonically increasing, and there is some variation. 
				</li>
				<li>With the color choice, I aim for maximum contrast between the lines and the background and between the categories since they are not related. 
				</li>
			</ul>


			<h3>Reflection</h3>

			<p>
				The hardest part of the design process for these visualizations was exploring the dataset sufficiently to find an easily reversible claim and where I could find evidence to support either side. After I began doing some initial exploratory analysis, I realized that this would be challenging, so I took a step back to brainstorm different ways in general that data could be presented deceptively. From that process, I landed on exaggerating a slight difference in percentage by labeling it as a change of “x times.” From there, I found that the percentages of “Substantiated - Action” and “Substantiated - No Action” claims fit this description, and I designed the first visualization around this principle and showed a reduction over time in the “Substantiated - No Action” claims relative to the “Substantiated - Action” claims. Then, I thought about devising a narrative that would allow me to create a second visualization using the same data, offering the opposite conclusion. I landed on a proposition that was a bit broader than the data, which gave me the additional flexibility needed to create a second graphic with the opposite claim. 
				For the second visualization, I tried to think about data supporting the opposite perspective that the NYPD was becoming less responsive to civilian complaints. I found two other categories that showed a lack of action being taken, “exonerated” and “unsubstantiated,” and that these categories were going up over time.  Using actual counts instead of percentages, I could further exaggerate the increase over time. I sketched a few different versions for both of these visualizations, similar to what we did in assignment 3. I made the visualizations using Python visualization libraries, but I didn’t touch the code until I knew exactly what I wanted to visualize and how I wanted to represent it. This was a helpful process because it allowed me to iterate on the design a few times to ensure it showed two different claims with the same data. It also allowed me to make several tweaks to the design to maximize the visualization effect I was going for. 
			</p>

		</section>
</main>