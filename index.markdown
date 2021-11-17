---
title: Lara J. Martin
layout: default
---

<!-- Section -->
<section class="intro">
	<header>
		<h1>Lara J. Martin, PhD</h1>
		<!--<h3><a href="https://www.cc.gatech.edu/academics/degree-programs/phd/human-centered-computing" target="_blank">Human-Centered Computing</a> PhD candidate at Georgia Tech</h3>-->
		<h3><button aria-label="CI Fellows 2020 page" onclick="window.open('https://cifellows2020.org/','_blank');">Computing Innovation Fellow</button> postdoc at the University of Pennsylvania</h3>
		
		
		<h3 style="text-transform:none;">How to say Lara: /'lɑɹ.ə/</h3>
		<!--<strong>I'm on the faculty job market this fall!</strong><br><br>-->
		I teach computers how to <em>tell stories</em> (also known as <strong>automated story generation</strong>).
		<br>More generally, I do <button aria-label="Mark Riedl's Medium article on Human-Centered AI" onclick="window.open('https://medium.com/@mark_riedl/human-centered-artificial-intelligence-70b019f956d1','_blank');">Human-Centered Artificial Intelligence</button> with a focus on natural language. I look at how humans communicate and design/create artificially intelligent agents to leverage that.
		<br>Professionally interested in cognition and computational creativity; personally interested in AI equity and science communication.
		<br>My pronouns are <button aria-label="Why list the pronoun 'she'?" onclick="window.open('http://mypronouns.org/she','_blank');">she</button>/<button aria-label="Why list the pronoun 'they'?" 
		onclick="window.open('http://mypronouns.org/they','_blank');">they</button>.
		<p />
		<h3><button aria-label="Lara&#39;s CV" onclick="window.open('CV/LaraMartinCV.pdf','_blank');" class="fa fa-2x fa-address-card cv"><font style="font-family:Helvetica;">CV</font><span class="label">CV</span></button> (updated 8/12/21)</h3>
		
	</header>
	
	<div class="content">
		<span class="image fill" data-position="center">
			<img src="images/lara2021.jpg" alt="Lara's picture" />
		</span>
		<center><h2 style="margin:0;">Navigation</h2></center>
		<ul class="actions" style="justify-content:center;">
			<li><button aria-label="Scroll to Publications" onclick="window.location.href='#publications';" class="arrow"><h3>Publications</h3></button></li>						
			<li><button aria-label="Scroll to Biography" onclick="window.location.href='#bio';" class="arrow"><h3>Biography</h3></button></li>
									
			<li><button aria-label="Scroll to Talks by Lara" onclick="window.location.href='#talks';" class="arrow"><h3>Talks</h3></button></li>		
							
			<li><button aria-label="Scroll to Media about Lara" onclick="window.location.href='#media';" class="arrow"><h3>Media</h3></button></li>								
			<li><button aria-label="Scroll to Random Info about Lara" onclick="window.location.href='#random';" class="arrow"><h3>Random</h3></button></li>
		</ul>								
		
		<!-- News Section -->
		<div class="gallery">
			<h2>News</h2>
			<ul class="news">
				{% for news in site.data.news %}
				<li><strong>{{ news.date | date: '%-m/%-d/%Y' }}</strong> - {{ news.text }}</li>				
				{% endfor %}							
			</ul>
		</div>
	</div>
	
	<footer>
		<h2>Contact</h2>
		<ul class="items">
			<li>
				<h3>Online</h3>
				<strong>Email:</strong>
				<div id="email" style="display:inline;">
				  <noscript><i>Please enable Javascript to view</i></noscript>
				</div>
				<ul class="icons">
					<li><button aria-label="Twitter account" onclick="window.open('https://twitter.com/LangTechLara','_blank');" class="icon brands fa-twitter-square"><span class="label">Twitter</span></button></li>
					<li><button aria-label="LinkedIn page" onclick="window.open('https://www.linkedin.com/in/lara-j-martin','_blank');" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></button></li>								
				</ul>							
			</li>
			<li>
				<h3>In Person</h3>
					Moore School Building, Room 103 (SIG Lab) <br>200 South 33rd Street, Philadelphia PA, 19104
			</li>
			<li>
				<h3>Research</h3>
				<ul class="icons">
					<li><button aria-label="Google Scholar page" onclick="window.open('http://scholar.google.com/citations?user=YjiWURYAAAAJ','_blank');" class="icon ai ai-google-scholar-square ai-2x"><span class="label">Google Scholar</span></button></li>
					<li><button aria-label="Research Gate page" onclick="window.open('https://www.researchgate.net/profile/Lara_Martin7','_blank');" class="icon ai ai-researchgate-square ai-2x"><span class="label">ResearchGate</span></button></li>
					<li><button aria-label="Semantic Scholar page" onclick="window.open('https://www.semanticscholar.org/author/Lara-J.-Martin/145262322','_blank');" class="icon ai ai-semantic-scholar-square ai-2x"><span class="label">Semantic Scholar</span></button></li>
					<li><button aria-label="Publons page" onclick="window.open('https://publons.com/researcher/2375735/lara-j-martin','_blank');" class="icon ai ai-publons-square ai-2x"><span class="label">Publons</span></button></li>
					<li><button aria-label="Academia.edu page" onclick="window.open('https://upenn.academia.edu/LaraMartin','_blank');" class="icon ai ai-academia-square ai-2x"><span class="label">Academia.edu</span></button></li>
					<li><button aria-label="ORCID ID" onclick="window.open('https://orcid.org/0000-0002-0623-599X','_blank');" class="icon ai ai-orcid-square ai-2x"><span class="label">ORCID ID</span></button></li>
				</ul>
			</li>
		</ul>
	</footer>
	
</section>

<hr>


<!-- Pub Section -->
<section id="publications">
	<header>
		<h2>Publications</h2>
	</header>
	<div class="content">
		<font size="5"><strong>
		{% assign now = 'now'  | date: "%Y" %}
		{% for year in (2014..now ) %}
			<button aria-label="Scroll to {{ year }} publications" onclick="window.location.href='#{{ year }}';">[{{ year }}]</button>
		{% endfor %}
		</strong></font>
		
			{% for year in (2014..now) reversed %}
			<section>								
				<header>
					<h3><div id="{{ year }}">{{ year }}</div></h3>
				</header>
				<div class="content">
					<ul>
					{% for paper in site.data.papers %}
						{% if paper.year and paper.year == year %}
						<li>						
							{% capture list %}
							{% if paper.official_pdf %}, <button aria-label="{{ paper.title }} official publication" onclick="window.open('{{ paper.official_pdf }}','_blank');">official publication</button>{% endif %}
							{% if paper.pdf %}, <button aria-label="{{ paper.title }} pdf" onclick="window.open('{{ paper.pdf }}','_blank');">pdf</button>{% endif %}
							{% if paper.arxiv %}, <button aria-label="{{ paper.title }} arXiv" onclick="window.open('{{ paper.arxiv }}','_blank');">arXiv</button>{% endif %}
							{% if paper.slides %}, <button aria-label="{{ paper.title }} slides" onclick="window.open('{{ paper.slides }}','_blank');">slides</button>{% endif %}
							{% if paper.poster %}, <button aria-label="{{ paper.title }} poster" onclick="window.open('{{ paper.poster }}','_blank');">poster</button>{% endif %}
							{% if paper.code %}, <button aria-label="{{ paper.title }} code" onclick="window.open('{{ paper.code }}','_blank');">code</button>{% endif %}
							{% if paper.data %}, <button aria-label="{{ paper.title }} data" onclick="window.open('{{ paper.data }}','_blank');">data</button>{% endif %}
							{% endcapture %}							
							{% assign l = list | remove_first: "," | strip %}
							
<<<<<<< HEAD
							{% assign l = list | remove_first: "," |strip%}
=======
>>>>>>> 71a237dd5ae5a97916ce597936059cb4d9122958
							<!--{% assign aut = paper.authors | split: "," %}
								{% capture author_list %}
								{% for a in aut %}
									{% assign y = a |strip %}
									{% assign found = site.data.authors | find: "name", y %}
									{% if found %}
									, <button aria-label="{{found.name}}" onclick="window.open('{{found.link}}','_blank');">{{found.name}}</button>
									{% else %}
									, {{y}}
									{% endif %}
								{% endfor %}
								{% endcapture %}
							
							{{ author_list | remove_first: "," | strip | replace: "LJ Martin", "<strong>LJ Martin</strong>" }}. <em>{{paper.title}}</em>, {{paper.venue}}. ({{ l }})-->
							{{ paper.authors | replace: "LJ Martin", "<strong>LJ Martin</strong>" }}. <em>{{paper.title}}</em>, {{paper.venue}}. ({{ l }})

						</li>

						{% endif %}
					{% endfor %}
					</ul>
				</div>
			</section>
			
			{% endfor %}
	</div>
</section>


<!-- Bio Section -->
<section id="bio">
	<header>
		<h2>Brief Bio</h2>
	</header>
	<div class="content">
		My research interests include:
		<ul>
			<li>computational creativity,</li> 
			<li>interactive narrative and narrative generation &amp; understanding,</li>
			<li>prosody &amp; emotion (affective computing),</li>
			<li>dialog &amp; conversational agents,</li>
			<li>and cognitive systems.</li>
		</ul>
		
		<p>I am currently a <button aria-label="CI Fellows 2020 page" onclick="window.open('https://cifellows2020.org/','_blank');">CIFellow</button> at the University of Pennsylvania, working with <button aria-label="Chris Callison-Burch" onclick="window.open('https://www.cis.upenn.edu/~ccb/','_blank');">Dr. Chris Callison-Burch</button>.</p>
		<p>I earned my PhD in <button aria-label="HCC Program at Georgia Tech" onclick="window.open('https://www.cc.gatech.edu/academics/degree-programs/phd/human-centered-computing','_blank');">Human-Centered Computing</button> in the <button aria-label="School of Interactive Computing at Georgia Tech" onclick="window.open('https://www.ic.gatech.edu/','_blank');">School of Interactive Computing</button> at the Georgia Institute of Technology. I worked with <button aria-label="Mark O. Riedl" onclick="window.open('http://eilab.gatech.edu/mark-riedl','_blank');">Dr. Mark Riedl</button> in the <button aria-label="EI Lab" onclick="window.open('http://eilab.gatech.edu/','_blank');">Entertainment Intelligence Lab</button>, doing automated story generation.</p>
		<p>I have a <button aria-label="Tech to Teaching" onclick="window.open('https://www.ctl.gatech.edu/content/tech-teaching-0','_blank');">Tech to Teaching certificate</button> and have taught as instructor of record for an Intro to Cognitive Science class.</p>
	    <p>I have a Masters in Language Technologies from <button aria-label="Language Technologies Institute" onclick="window.open('https://www.lti.cs.cmu.edu/','_blank');">LTI at Carnegie Mellon University</button> in their School of Computer Science. I received my BS in Computer Science and Linguistics from Rutgers University &mdash; New Brunswick.</p>

		<p>One of my non-research passions is in educating children about computer science and technology &mdash; especially getting young girls and other minorities in tech interested, and I try to find as many local outreach opportunities as I can.</p>
		<p>I enjoy playing computer games and board games, petting dogs, hiking, SCUBA diving, playing piano and accordion, collecting accents, and doing random craft projects. And I'm married to <button aria-label="David Kent" onclick="window.open('https://dekent.github.io/','_blank');">Dr. David Kent, the best person</button>.</p>	

	</div>
</section>
	
<!--Recorded Talks -->
<section id="talks">
	<header>
		<h2>Recorded Talk(s)</h2>
	</header>
		{% for talk in site.data.talks %}
		<div class="content" id="{{ talk.id }}">
			<iframe aria-label="{{talk.label}}" width="560" height="315" src="{{talk.link}}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		{% endfor %}
			
</section>

<!-- Media -->
<section id="media">
	<header>
		<h2>Select Media</h2>
	</header>
	<div class="content">
	<ul>
	{% for m in site.data.media %}
	<li><em><button aria-label="{{ m.label }}" onclick="window.open('{{ m.link }}','_blank');">{{ m.text }}</button></em> by {{ m.author }} for {{ m.publication }}. {{ m.date | date: "%b %e, %Y" }}.</li>
	{% endfor %}
	</ul>	
	</div>
</section>


<!-- Random Section -->
<section id="random">
	<header>
		<h2>Random Side Projects </h2>
	</header>
	<div class="content">
		<ul>
			<li>I have been collecting a list of American English 
			<button aria-label="Idiom list" onclick="window.open('https://docs.google.com/spreadsheets/d/1hvuFG_Tg4IQIhMRMY1bZYV5yeJUUDb54W2QZWEHaL_U/edit?usp=sharing','_blank');">idioms</button> for my foriegn friends. 
			<button aria-label="Nora Reed on Twitter" onclick="window.open('https://twitter.com/NoraReed','_blank');">Nora Reed</button> had generously made it into a 
			<button aria-label="Idiom-o-Matic (removed from Twitter)" onclick="window.open('https://twitter.com/idiom_o_matic','_blank');">twitterbot</button>, which has since been removed. :c</li>
			
			<li>I created a machine translation system with Vivian Robison for translating the Bible from 
			<button aria-label="LOLspeak to English Bible MT project" onclick="window.open('./poster/MT-project.pdf','_blank');">LOLspeak to English</button>.</li>
			
			<li>I am a downloadable voice in the speech synthesis tool 
			<button aria-label="Festival" onclick="window.open('http://www.festvox.org/flite/','_blank');">Festival</button> (voice "
			<button aria-label="LJM voice in Festival (download)" onclick="window.open('http://www.festvox.org/flite/packed/flite-2.0/voices/cmu_us_ljm.flitevox','_blank');">US English Female LJM</button>")</li>
			
			<li>I presented at 
			<button aria-label="SIGBOVIK 2015" onclick="window.open('http://sigbovik.org/2015/','_blank');">SIGBOVIK 2015</button> (a fake conference) on "
			<button aria-label="Language Sequencing: Language as a Physical Entity slides" onclick="window.open('https://docs.google.com/presentation/d/1KRd6L_yGJgN6rNhW8EbOeNoDfRpnO4dMwptttT875jI/edit?usp=sharing','_blank');">Language Sequencing: Language as a Physical Entity</button>" with 
			<button aria-label="Meghana Kshirsagar" onclick="window.open('https://www.cs.cmu.edu/~mkshirsa/','_blank');">Meghana Kshirsagar</button>.</li>
		</ul>
	</div>
</section>


