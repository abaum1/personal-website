<script>
	// /** @type {import('./$types').PageData} */
	// export let data;
</script>

<svelte:head>
	<title>Assignment 3</title>
</svelte:head>

	<header>
		<h1>Assignment 3 Visualization Design</h1>

		<p>
			<strong>Amelia Baum</strong> — <em>amelia_b@mit.edu</em>
		</p>
	</header>

	<main>
		<section>
			<h2>Phase One: Sketching Visualizations</h2>

			<figure>
				<img src="../images/A3/viz1.jpeg" width="800" alt="" />
			</figure>

			<h3>Design Rationale for Sketch 1:</h3>

			<ul>
				<li>
					This double bar chart is a popular way to display population
					trends by age and sex. In this one in particular we add the
					dimension of time to compare 1990 and 2000.
				</li>
				<li>
					In some ways this visualization is rich since it conveys 3
					dimensions of information (age, sex, and time), but I don’t
					think it is very easy to get a global sense of how the
					population has changed over time. The age distributions of
					1990 and 2000 are washed out because they are interleaved in
					the bar chart.
				</li>
				<li>
					I started with this design because I wanted to encompass all
					aspects and present the data in a raw format before getting
					more complicated with data transformations. I think the bar
					chart is an excellent way of displaying the age
					distribution, and I will try to bring that component into my
					future visualizations.
				</li>
			</ul>

			<figure>
				<img src="../images/A3/viz2.jpeg" width="800" alt="" />
				<figcaption>BRIEF CAPTION HERE.</figcaption>
			</figure>

			<h3>Design Rationale for Sketch 2:</h3>

			<ul>
				<li>
					This is a Kernel Density Estimation plot of age for 2
					different population distributions (years 1900 and 2000). A
					KDE plot best shows the relative distribution of the
					population between the different ages in a normalized way
					such that the differences in magnitude of the population are
					not distracting.
				</li>
				<li>
					The motivation here is to show how population distribution
					amongst the different age groups differs between the two
					time periods. The space between the curves shows where the
					differences are.
				</li>
				<li>
					This visualization doesn’t encompass any information about
					Sex, which is one of the dimensions of the original dataset.
				</li>
			</ul>

			<figure>
				<img src="../images/A3/viz3.jpeg" width="800" alt="" />
				<figcaption>BRIEF CAPTION HERE.</figcaption>
			</figure>

			<h3>Design Rationale for Sketch 3:</h3>

			<ul>
				<li>
					This waffle plot aims to show similar information to a pie
					chart- the breakdown of the age groups over the two time
					periods. The population in each age bucket is normalized,
					and the squares are color-coded based on the population
					percentage in each group. I condensed the buckets into 10
					year groups instead of 5 year, so that the chart wouldn’t
					have too many colors.
				</li>
				<li>
					The strengths of this visualization are that it shows at a
					glance that the population has shifted older - we see that
					the orange section of the 2000 graph is significantly
					smaller than that of the 1990 graph.
				</li>
				<li>
					I think overall, this visualization requires more mental
					work than it should to compare the two distributions. There
					is a lot more color than is really necessary, which is
					distracting. There is also no place for the sex population
					distribution to be displayed.
				</li>
			</ul>

			<h3>Reflection</h3>

			<p>
				Each of these sketches has different strengths and weaknesses.
				Overall, the first sketch includes the most information.
				However, it is less interpretable than the second and third
				sketches, which makes it easier to interpret general trends at a
				glance. I like the density estimation in sketch 2 because it
				normalizes the population distributions, which are very
				different in magnitude. Because I am primarily interested in
				looking at the relative distributions across age and gender
				(rather than the absolute population growth), this normalization
				makes sense. However, the second sketch lacks information on sex
				distribution. In my final sketch, I will try to incorporate the
				density estimation of the second sketch and the more granular
				sex distribution of the first sketch.
			</p>
		</section>

		<section>
			<h2>Phase Two: Final Design</h2>
			<h3>
				Research Question: How has the age distribution of the U.S.
				Population changed over the 20th century, and are the male and
				female populations experiencing similar or different trends?
			</h3>

			<figure>
				<img src="../images/A3/A3_final_viz.jpg" width="800" alt="" />
				<figcaption>
					Comparing the U.S. population distributions between 1900 and
					2000.
				</figcaption>
			</figure>
		</section>

		<section>
			<h2>Design Process & Design Decisions</h2>

			<ul>
				<li>
					In this chart, the population is normalized for the total
					population for that age-sex category. This is done so that
					the side-by-side bar charts are more easily comparable.
				</li>
				<li>
					The chart is simple in terms of color, which is easier to
					digest visually and makes it easier to see the differences
					in shapes of the distribution right away, as well as
					visualize the male and female distributions separately and
					together.
				</li>
				<li>
					Since there are only 2 years, I rejected a line chart or
					other time series visualization as there is not enough
					variation in the time to justify that framing. Instead, the
					x-axis shows the age groupings.
				</li>
			</ul>

			<h3>Reflection</h3>

			<p>
				For the final visualization, I wanted to incorporate three
				design aspects: 1) comparing the year 1900 with the year 2000,
				2) comparing the male and female population distributions, and
				3) normalizing the populations between the two years so that an
				effective comparison could be made in terms of the age
				distributions between the two years. To do this, I created this
				visualization, which compares the density estimation charts of
				the two years of the female and male populations. To calculate
				the density, I divided the population in each year-age-sex group
				by the total population in that year-sex group. For example, to
				get the density estimation for females aged 0-5 in 1990, I
				divided the number of females aged 0-5 in 1990 by the total
				female population in 1990. This visualization shows that the
				population's age structure is very different in 1990 vs. 2000.
				Ordering the x-axis by age makes these patterns easier to
				visualize. In 1990, the population skewed much younger, with a
				concentration of the population as children. By 2000, the
				population is concentrated in the middle ages (40-50). The
				oldest age groups have the lowest density in both years, but
				there are significantly more older people in 2000 vs. 1990. From
				this visualization, differences in the allocation of male vs.
				female populations are harder to decipher. The split is about
				50/50 for more age categories, except for in the middle ages of
				2000, when the proportion of the female population looks a bit
				higher. The sketching exercise in part 1 helped develop a final
				design. Specifically, it helped me get all of my ideas on paper
				without overthinking them and then allowed me to determine the
				strengths and weaknesses of each one objectively. Ultimately, my
				final design incorporated different aspects, particularly
				visualizations 1 and 2. Sketch 3 was intentionally a bit diverse
				from the first 2 in that it was more artistic but less
				informative. Ultimately I preferred the bar chart in my final
				design to provide a more rigorous display of the respective
				distributions.
			</p>
		</section>
	</main>
