<!-- <svelte:head>
	<title>Resume</title>
</svelte:head>

<body>
    <header>
        <h1>Amelia Baum</h1>
        <p>Masters of Science in Transportation Student</p>
    </header>
    
    <div class="container">
    
        <section class="section">
            <h2>Summary</h2>
            <p>Former Software Developer, current grad student @ MIT Transit Lab. Interested in all things transit operations, policy and technology.</p>
        </section>
    
        <section class="section">
    
            <h2>Experience</h2>
            <h3>Master's Student - MIT JTL Urban Mobility-Transit Lab | August 2023-present</h3>
                <li>Working on a project with the Chicago Transit Authority on Schedule Design for Bus Operator Quality of Life/Retention.</li>
                
    
    
            <h2>Experience</h2>
            <h3>Software Engineer - Swiftly, Inc. | January 2020-July 2023</h3>
                <li>Developed an interactive dashboard and a suite of APIs for transit agencies to analyze their historical vehicle runtimes and optimize their transit schedules.</li>
                <li>Developed APIs to automate National Transit Database (NTD) reporting and provide a host of service metrics related to service delivery and layover utilization.</li>
                <li>Improved core prediction and stop arrival/departure detection algorithms, making historical trip data records 30% more complete. </li>
                <li>Regularly met with key transit agency stakeholders (e.g., WMATA, CTA, SEPTA, LA Metro, MTA Maryland) to understand their needs, develop product requirements, and receive feedback on features in progress. </li>
                <li>Led the development and maintenance of a business intelligence system to automate data exploration and data health reporting by non-technical team members.</li>
        </section>
    
        <section class="section">
            <h2>Education</h2>
            <h3>Massachusetts Institute of Technology | Masters of Science in Transporation</h3>
            <p>August 2023- present</p>
            
        
            <h3>University of California, Berkeley | B.A. in Urban Studies</h3>
            <p>Graduated: December 2019 | GPA: 3.8 / 4.0</p>
            <li>City Planning coursework: Urban and Regional Transportation, Data Science for Human Mobility (graduate), Community and Economic Development, Geographic Information Systems, Urban Data Analytics, Economic Analysis</li>
            <li>Data Science coursework: Data Science, Linear Algebra, Multivariable Calculus, Probability, Machine Learning for Energy and Environment</li>
        </section>
    
        <section class="section">
            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>R</li>
                <li>Python</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </section>
    
    </div>
    
    </body> -->





    <script>
        /** @type {import('./$types').PageData} */
        export let data;
    </script>
    
    <svelte:head>
        <title>Resume</title>
    </svelte:head>
    
    <section>
        <header>
            <h1>Riccardo's Resume</h1>
            <img src="images/profile_pic_square.png" class="profile_picture"/>
        </header>
    </section>
    <div class="cv">
        <section>
            <header>
                <h2>Personal Information</h2>
            </header>
            <p>Name: Riccardo</p>
            <p>Surname: Fiorista</p>
            <p>Address: 1234 Web Developer Street, 12345, Web City, Webland</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: <a href="mailto:fiorista@mit.edu">fiorista@mit.edu</a></p>
        </section>
        <section>
            <header>
                <h2>Education</h2>
            </header>
            <article>
                <p><strong>MIT</strong></p>
                <p>Current GPA: 5.0/5.0</p>
                <p>Master of Science in Transportation (MST)</p>
            </article>
            <article>
                <p><strong>University of Amsterdam</strong></p>
                <p>Grade: 8.3/10 | High Distinction</p>
                <p>Master of Science (MSc) in Data Science</p>
            </article>
            <article>
                <p><strong>University of Education</strong></p>
                <p>Grade: 73/100 | First Class</p>
                <p>Bachelor of Science (BSc Hons.) in Artificial Intelligence and Computer Science</p>
            </article>
        </section>
        <section>
            <header>
                <h2>Work Experience</h2>
            </header>
            <article>
                <p><strong>Continuum Industries</strong></p>
                <p>Software Engineer</p>
            </article>
        </section>
    </div>