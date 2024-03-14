
<script>
    // /** @type {import('./$types').PageData} */
    // export let data;
</script>

<svelte:head>
	<title>Assignment 2</title>
</svelte:head>


	<header>
		<h1>
			Assignment 2 Exploratory Data Analysis
		</h1>

		<p>
			Amelia Baum _ <em>amelia_b@mit.edu</em>
		</p>
	</header>
	<main>
		<section>
			<h2>Subtheme: Housing Speculation in the Boston Metro Area</h2>

			<h3>Overall Analysis Questions</h3>
			<ol>
				<li>What are the spatial and temporal distributions of the sales transactions included in the dataset?</li>
				<li>What is the relationship between certain physical features of residential properties and price?</li>
				<li>What is the spatial distribution of residential properties purchased by LLCs and private equity companies?</li>
				<li>How has the volume of properties purchased by businesses and LLCs changed over time?</li>
				<li>What kinds of properties do businesses and LLCs tend to purchase?</li>
				<li>What is the spatial distribution of the flip horizon for flipped properties?</li>
			</ol>
		</section>

		<section>
			<h2>Discoveries & Insights</h2>

			For this analysis, we are interested in understanding trends related to housing speculation in the Boston area. 
			Housing speculation is a pervasive problem in many U.S. housing markets, particularly in Boston. 
			Speculative practices can contribute to gentrification and displacement trends and exacerbate the housing crisis. 
			In order to enact effective regulation to prevent the worst impacts of speculation, we need to understand the nature of its effect on 
			the Boston Housing market. To that end, this initial exploratory data analysis attempts to validate the nature of a given 
			dataset of disaggregated property sales and 26 characteristics associated with each sale. This analysis will focus on the 
			following attributes of the property sales transactions: sale price, previous sale price, if the property was flipped, 
			the flip horizon, and physical characteristics of the property, such as square footage and number of rooms. 

			In the first part of the analysis, we will look at some of the characteristics of the housing stock represented in the dataset, 
			including price, age, spatial distribution, and property type. Then, we will investigate some trends related to speculative 
			buyers and the idea of “flipping” a property- that is, buying a property with the intention to sell it within a short time frame at a profit. 


			<h3>Part 1: Housing Stock Characteristics</h3>

			<figure>
				<img src="../images/A2/Spatial Distribution of Average Last Sale Price.jpeg" width="1100" alt="" />
				<figcaption>
				As seen in this map, the dataset fully encompasses the metro Boston area. For some reason, it also includes one property in zip code 02190, which is 
				in Weymouth, MA, a city outside of Boston. In order to focus our analysis on the Boston Metro Area, this datapoint will be excluded from subsequent analysis
				in this report. 
				</figcaption>
			</figure>

			<figure>
				<img src="../images/A2/Temporal Distribution of Sales.jpg" width="1000" alt="" />
				<figcaption>
					The dataset spans 22 years, representing sales transaction data from 2000 to 2022. 
					There is no clear trend in either direction of the volume of transactions over this period, but there is substantial variation. 
					There were a minimum of 1516 transaction records from 2020 and a maximum of 3205 from 2004. 
				</figcaption>
			</figure>

			<figure>
				<img src="../images/A2/Year Built Distribution.jpg" width="1000" alt="" />
				<figcaption>
					Most of the properties represented in the dataset are fairly old, which provides a helpful understanding of the nature of the Boston housing market. 
					Only 7210 (15%) of properties in the dataset were built after the year 2000. 
					Excluded from this analysis are 66 records for which the YearBuilt data field was null, and 1369 records for 
					which it was 0 (combined, 2.9% of records).

				</figcaption>
			</figure>

			<figure>
				<img src="../images/A2/Year Built vs. Price by Zip  by size.jpg" width="1000" alt="" />
				<figcaption>
					Next, we analyze the relationship between property age and price, aggregated at the zip code level, to see the trends more clearly. 
					The size of the dataset makes it impossible to see trends when plotting individual properties. 
					The bubble size represents the number of properties in each zip code. There are two distinct clusters of properties by age - 
					those built between 1890-1930 and those built after 1970. One might expect newer properties to be more expensive. 
					However, this data does not reflect that expected trend, with properties in both age groups spanning prices from 
					$200,000 to $4 million. Likely, this is due to the diversity of property sizes in both these groups, 
					which we will explore in the following visualization. 

				</figcaption>
			</figure>

			<figure>
				<img src="../images/A2/Price vs. Median Lot Size and Interior Square Footage By Zip Code .jpg" width="1000" alt="" />
				<figcaption>
					These side by side scatterplots show the relationship between two measures of property size- interior square footage 
					and lot size- and sale price. There appears to be a relatively strong relationship between interior square footage and 
					price, which is expected. With lot size, the relationship is not as strong, and notably many properties have a lot size of 0. 
					This is an important finding that warrants further research to determine the cause of. Many records with lot size 0 are “high rises” 
					but some single family homes, and all have nonzero interior square footage. Thus, a lot size of 0 is nonsensical and likely a 
					data quality issue. 

				</figcaption>
			</figure>

			<h3>Part 2: Analysis of Housing Speculation Trends</h3>

			<figure>
				<img src="../images/A2/Investor Type Breakdown By Property Type.jpg" width="1000" alt="" />
				<figcaption>
					This table shows the breakdown of property type by investor category. The property types come from the proptype variable in the data, 
					which condenses usecode and usage into larger umbrella categories. The proptypes have been translated from abbreviations into human 
					readable categories. From the bar chart, we see that the residential-commercial development property type dominates, and the 
					non-investor investor category makes up the majority of the transactions in the dataset. This chart also shows that there is 
					not a clear preference for institutional or large investors for residential properties of any kind. This doesn’t mean that 
					speculation of residential properties isn’t a potential problem, but it does show that historically, they have not made up the 
					majority of investments by these types of investors. 

				</figcaption>
			</figure>

			<figure>
				<img src="../images/A2/Purchases by Speculative Buyers Over Time.jpg" width="1000" alt="" />
				<figcaption>
					The two lines on this chart show the trends of property purchases by buyers that might be speculative in nature (Businesses and LLCs). 
					Of course, not every purchase by an LLC or business implies speculative intent, but as a first look into the purchase trends,
					the chart shows a significant uptick in purchases by LLCs over the last 20 years. The number of purchases by businesses, 
					in contrast, as remained fairly constant.

				</figcaption>
			</figure>

			<figure>
				<img src="../images/A2/Types of Purchases by LLCs.jpg" width="1000" alt="" />
				<figcaption>
					Next, we investigate the types of properties that LLCs are purchasing specifically. 
					We see from this line chart which breaks out just the LLC purchases by property type 
					that purchases of residential-commerical properties are driving the uptick in total number of properties purchased by LLCs. 
					This is an interesting finding that warrants additional investigation about the spatial distribution and purpose of 
					these types of investments.
					
				</figcaption>
			</figure>

			<figure>
				<img src="../images/A2/Flip Horizon for Flipped Properties LLC.jpg" width="1000" alt="" />
				<figcaption>
					One way to investigate whether these purchases have speculative intent is to look at the flip horizon, or the time elapsed between 
					buying and selling a property. The orange distribution, representing small LLCs, is flatter, with a more even distribution than 
					the blue distribution, representing median and large LLCs (“investor purchases”), which has a peak near a shorter flip horizon. 
					A shorter flip horizon suggests that the investor purchaser bought the property with an intent to sell it within a short period of time,
					 indicative of a speculation practice. 

				</figcaption>
			</figure>

			<figure>
				<img src="../images/A2/Investor Purchases.jpg" width="1000" alt="" />
				<figcaption>
					Finally, we look at the spatial distribution of “investor purchases”, those properties purchased by LLCs. 
					This map shows that there is a concentration of investor purchases in the more expensive areas of Boston, specifically Fenway, 
					Back Bay and longwood. But, the map also indicates that there are some speculation pressures happening in historically less 
					expensive neighborhoods, like Roxbury. This is an important finding that merits further investigation, because a concentration of 
					investor property purchases in neighborhoods with more marginalized residents will have disproportionately negative equity impacts.

				</figcaption>
			</figure>
		</section>

		<section>
			<h2>Summary</h2>

			<p>Overall, this dataset shows several interesting trends in the nature of housing speculation in the Boston metro area and provides a 
				high-level overview of some important themes to analyze further. After removing marginal amounts of data due to data quality issues, 
				we look at several attributes of property sales, including size, price, age, and characteristics of the purchaser. First, we see that 
				properties in the dataset span the last 20 years and that the property price is not strongly correlated with age, suggesting a tight 
				property market with a lot of demand even for older properties. Next, we see an intense concentration of investor activity in specific 
				neighborhoods of Boston, primarily high-income but some lower-income ones. In addition, investor purchase activity has increased 
				substantially in the Boston area in recent years, particularly in the commercial-residential property type. Overall, this analysis 
				does not fully encapsulate the nuances in the role of speculation in the Boston housing market. Future research should explore the 
				role of residential-commercial zoned properties on neighborhood change and economic pressures since the data suggests that most investor 
				activity is concentrated in those property types. </p>
		</section>
	</main>
