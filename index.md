---
title: Lara J. Martin
layout: default
---
<!-- https://www.free-css.com/free-css-templates/page278/freefolio -->

<!--TOC skip from https://www.aleksandrhovhannisyan.com/blog/jekyll-table-of-contents/-->
<div style="position: relative;">
    <a href="#home" class="screen-reader-only" aria-label="skip navigation">Skip navigation</a>
</div>	

<!-- Navbar Start -->
<nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
<a href="index.html" class="navbar-brand ml-lg-3">
    <h1 class="m-0 display-5"><span class="text-primary">Lara J.</span> Martin</h1>
</a>
<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    <span class="navbar-toggler-icon"></span>
</button>



<div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
    <div class="navbar-nav m-auto py-0">
        <a href="#home" class="nav-item nav-link active">Home</a>
        <a href="#news" class="nav-item nav-link">News</a>
        <a href="#contact" class="nav-item nav-link">Contact</a>
        <a href="#research" class="nav-item nav-link">Research Accounts</a>
        <a href="/lab" class="nav-item nav-link">LARA Lab</a>
	<a href="/LaTeSS" class="nav-item nav-link">LaTeSS (Seminar)</a>
        <a href="#bio" class="nav-item nav-link">Bio</a>
        <a href="/lab/publications" class="nav-item nav-link">Publications</a>
        <a href="#teaching" class="nav-item nav-link">Teaching</a>
        <a href="#media" class="nav-item nav-link">Media</a>
        <a href="#talks" class="nav-item nav-link">Talks</a>
        <a href="#blog" class="nav-item nav-link">Blog</a>
        <a href="#random" class="nav-item nav-link">Fun Facts</a>
    </div>
</div>
</nav>
<!-- Navbar End -->


<!-- Header Start -->
<div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 100vh;">
<div class="container">
    <div class="row align-items-center">
        <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            <img class="img-fluid w-100 rounded-circle shadow-sm" src="assets/img/lara2022.jpg" alt="Picture of Lara with purple asymmetric hair, dangly earrings, and a blue/maroon striped dress">
        </div>
        <div class="col-lg-7 text-center text-lg-left">
            <h1 class="display-3 text-uppercase text-primary mb-2 name-header">Lara J. Martin, PhD</h1>

            
           
            <h2 class="d-inline font-weight-lighter text-white">
            Assistant Professor at the <br> <a href="https://www.csee.umbc.edu/" aria-label="UMBC's Computer Science and Electrical Engineering department">University of Maryland, Baltimore County</a></h2>
            <br>
            <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
            <div class="typed-text d-none">Human-Centered AI, Applied NLP, Neurosymbolic Methods, Automated Story Generation, AAC, Dungeons and Dragons AI</div>
            <h1 class="d-inline font-weight-lighter text-white post-typed"> Researcher</h1>
            
        <h5 style="text-transform:none;"><a href="http://ipa-reader.xyz/?text=l%C9%91%C9%B9.%C9%99&voice=Joanna" aria-label="hear how Lara is said">How to say Lara <i class="fa-solid fa-volume-high"></i></a></h5>
        I make systems that improve how people talk <em>with</em> computers and to each other <em>through</em> computers.
        Most of my career so far has been teaching computers how to tell stories (also known as automated story generation) and working my way towards an <a href="https://www.wired.com/story/forget-chess-real-challenge-teaching-ai-play-dandd/" aria-label="Wired article on Lara's work about teaching AI to play D\&D">AI Dungeon Master</a>.
        I am also currently working on <a href="https://arxiv.org/abs/2404.17730" aria-label="my AAC paper interviewing autistic adults">Augmentative and Alternative Communication (AAC)</a> and speech technologies.
	<br>
	I run the <a href="./lab/">LARA Lab</a> and am a member of the <a href="http://iral.cs.umbc.edu/">Interactive Robotics and Language Lab (IRAL)</a>. My pronouns are <a aria-label="How to use she/they pronouns" href="https://en.pronouns.page/she&they">she/they</a>.

		
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start">
            <br>
                <a aria-label="Lara&#39;s CV" href="https://github.com/lara-martin/CV/raw/main/LaraMartinCV.pdf" class="btn btn-outline-light mr-5"> CV</a>
                
                <a aria-label="Lara&#39;s lab page" href="/lab" class="btn btn-outline-light mr-5"> LARA Lab</a>
                
                <a aria-label="Lara&#39;s UMBC page" href="https://www.csee.umbc.edu/lara-j-martin/ " class="btn btn-outline-light mr-5"> UMBC Personal Page</a>
                
                <a aria-label="interactive fiction and story generation resource list" href="/resources.html" class="btn btn-outline-light mr-5"> Interactive Fiction and Story Generation Resources</a>               
            </div>
            <br>
        </div>
        
    </div>
</div>
</div>
<!-- Header End -->


<!-- News Start -->
<div class="container-fluid py-5" id="news">
<div class="container">
    <!-- News Section -->
	<div class="gallery">
		<h3 class="mb-4">News</h3>
		<div style="position: relative;">
		    <a href="#contact" class="screen-reader-only" aria-label="skip news">Skip news</a>
		</div>	
		<ul class="news">
			{% for news in site.data.news %}
			<li future-date="{{ news.date | date: '%Y%m%d' }}" {% if news.highlight %}style="background: rgb(194, 242, 182);"{% endif %}><strong>{{ news.date | date: '%-m/%-d/%Y' }}{% if news.end %} - {{ news.end | date: '%-m/%-d/%Y' }}{%endif%}</strong> - {{ news.text }} {% if news.location %}  &ndash; <em>{{news.location}}</em>{%endif%}</li>				
			{% endfor %}							
		</ul>
	</div>
</div>
</div>
	
<!-- News End -->

<!-- Contact Start -->
<div class="container-fluid py-5" id="contact">
<div class="container">	
    <div class="row align-items-center">
        <div class="col-lg-8">
            <h3 class="mb-4">Contact</h3>
            <div class="row mb-3">
                    <div class="col-sm-6 py-2"><h6>Online <i class="fa-solid fa-globe" aria-label="globe icon"></i></h6>
                    <a rel="me" href="https://sigmoid.social/@laramar" aria-label="Mastodon"><i class="icon brands fa-mastodon"><span class="tooltiptext">Mastodon</span></i></a>
                    <span class="text-secondary"><a aria-label="LinkedIn page" href="https://www.linkedin.com/in/lara-j-martin"><i class="icon brands fa-linkedin"><span class="tooltiptext">LinkedIn</span></i></a></span>                   
                    <span class="text-secondary"><a aria-label="Twitter account" href="https://twitter.com/LangTechLara"><i class="icon brands fa-square-x-twitter"><span class="tooltiptext">Twitter/X</span></i></a></span>
                    </div>
                <div class="col-sm-6 py-2"><h6>Email <i class="fa fa-envelope" aria-label="email icon"></i> </h6><span class="text-secondary">
                	<div id="email" style="display:inline;"> 
			  <noscript><i>Please enable Javascript to view</i></noscript>
			</div>
			</span></div>

                <div class="col-sm-6 py-2"><h6>In Person <i class="fa-solid fa-people-roof" aria-label="people under roof icon"></i> </h6><span class="text-secondary">
			Information Technology and Engineering (ITE) Building, Room 216
			<br>
			1000 Hilltop Circle, Baltimore, MD 21250</span>
		</div>
		
            </div>
        </div>
       
       <div class="col-lg-8" id="research">
        <h3 class="mb-4">Research Accounts</h3>
        <div class="row mb-3">
        		<div class="col-sm-6 py-2">
			<h6>Google Scholar</h6> <a aria-label="Google Scholar" href="http://scholar.google.com/citations?user=YjiWURYAAAAJ"><i class="icon ai ai-google-scholar-square ai-2x"><span class="tooltiptext research">Google Scholar</span></i></a>
			</div>
			<div class="col-sm-6 py-2">
			<h6>Everything else</h6>
			<a aria-label="Github" href="https://github.com/lara-martin"><i class="icon fa-brands fa-square-github ai-2x"><span class="tooltiptext research">Github</span></i></a>
			<a aria-label="Research Gate" href="https://www.researchgate.net/profile/Lara_Martin7"><i class="icon ai ai-researchgate-square ai-2x"><span class="tooltiptext research">Research Gate</span></i></a>
			<a aria-label="Semantic Scholar" href="https://www.semanticscholar.org/author/Lara-J.-Martin/145262322"><i class="icon ai ai-semantic-scholar-square ai-2x"><span class="tooltiptext research">Semantic Scholar</span></i></a>
			<a aria-label="Academia.edu" href="https://umbc.academia.edu/LaraMartin"><i class="icon ai ai-academia-square ai-2x"><span class="tooltiptext research">Academia.edu</span></i></a>
			<a aria-label="ORCID ID" href="https://orcid.org/0000-0002-0623-599X"><i class="icon ai ai-orcid-square ai-2x"><span class="tooltiptext research">ORCID</span></i></a>
			<a aria-label="Web of Science" href="https://www.webofscience.com/wos/author/record/HII-3738-2022"><i class="icon ai ai-clarivate-square ai-2x"><span class="tooltiptext research">Web of Science</span></i></a>
			<a aria-label="dblp" href="https://dblp.uni-trier.de/pid/175/8906.html?q=Lara%20J.%20Martin"><i class="icon ai ai-dblp-square ai-2x"><span class="tooltiptext research">dblp</span></i></a>
			<a aria-label="arXiv" href="https://arxiv.org/a/martin_l_2.html"><i class="icon ai ai-arxiv-square ai-2x"><span class="tooltiptext research">arXiv</span></i></a>			
			<a aria-label="Scopus" href="https://www.scopus.com/authid/detail.uri?authorId=57225818647"><i class="icon ai ai-scopus-square ai-2x"><span class="tooltiptext research">Scopus</span></i></a>
			<!--<a aria-label="Papers with Code" href="https://paperswithcode.com/search?q=author%3ALara+J.+Martin"><i class="icon fa-solid fa-brackets-square"></i></a>-->
			<!--<a aria-label="Association for Computational Linguistics profile" href="https://aclanthology.org/people/l/lara-martin/"><img class="acl" src="assets/fonts/ACL.svg" alt="ACL logo"><span class="tooltiptext research">ACL</span></a>-->
			<!--<a aria-label="IEEE profile" href="https://ieeexplore-ieee.org/author/37085522265"></a>-->
			
			</div>
	</div>
	</div>
	
        
        
    </div>
</div>
</div>
<!-- Contact End -->



<!-- Bio Start -->
<div class="container-fluid py-5" id="bio">
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Biography</h1>
        <h1 class="position-absolute text-uppercase text-primary">Biography</h1>
    </div>
    
	
	
    <div class="row align-items-center">
    <div class="col-lg-8">
    <h3 class="mb-4">About Me</h3>
    My research interests include:
        <div class="row mb-3">
		<div class="col-sm-6 py-2">
			
			<b>human-AI communication/collaboration</b>
			<ul>
				<li>computational creativity</li> 
				<li>interactive narrative</li>
				<li>narrative generation &amp; understanding</li>
				<li>dialog systems &amp; conversational agents</li>
				<li>cognitive systems</li>
			</ul>
		</div>
		<div class="col-sm-6 py-2">
			and <b>computer-mediated human-human communication</b>
			<ul>
				<li><a aria-label="augmentative alternative communication (AAC) description by ASHA" href="https://www.asha.org/public/speech/disorders/aac/">augmentative &amp; alternative communication (AAC)</a></li>
				<li>prosody &amp; emotion (affective computing)</li>
				<li>speech synthesis (text-to-speech)</li>
				<li>social media analysis</li>
			</ul>	
		</div>
	</div>
	
	I work from a blend of research and methods from various fields:
	<ul id="list">
		<li>natural language processing/language technologies,</li> 
		<li>linguistics,</li>
		<li>human-computer interaction,</li>
		<li>cognitive science,</li>
		<li>and artifical intelligence.</li>

	</ul>
	

	<!--<p>I am currently a <a aria-label="CI Fellows 2020 page" href="https://cifellows2020.org/">CIFellow</a> at the University of Pennsylvania, working with <a aria-label="Chris Callison-Burch" href="https://www.cis.upenn.edu/~ccb/">Dr. Chris Callison-Burch</a>. I earned my PhD in <a aria-label="HCC Program at Georgia Tech" href="https://www.cc.gatech.edu/degree-programs/phd-human-centered-computing">Human-Centered Computing</a> in the <a aria-label="School of Interactive Computing at Georgia Tech" href="https://www.ic.gatech.edu/">School of Interactive Computing</a> at the Georgia Institute of Technology. I worked with <a aria-label="Mark O. Riedl" href="http://eilab.gatech.edu/mark-riedl">Dr. Mark Riedl</a> in the <a aria-label="EI Lab" href="http://eilab.gatech.edu/">Entertainment Intelligence Lab</a>, doing automated story generation.</p>-->
	<!--<p>I have a Masters in Language Technologies from <a aria-label="Language Technologies Institute" href="https://www.lti.cs.cmu.edu/">LTI at Carnegie Mellon University</a> in their School of Computer Science. I received my BS in Computer Science and Linguistics from Rutgers University &mdash; New Brunswick.</p>-->
	<p>Some of my non-research passions include AI equity, science communication, and educating children about computer science and technology.</p>
	<p><a href="https://github.com/lara-martin/CV/raw/main/LaraMartinCV.pdf" aria-label="Lara's CV pdf">Check out my CV</a> for more information.</p>
	
	            <h3 class="mb-4">Third-Person Bio</h3>
            <p>Dr. Lara J. Martin (she/they) is an assistant professor at the University of Maryland, Baltimore County in the CSEE department, researching human-centered artificial intelligence with a focus on natural language processing applications. They have worked in the areas of automated story generation, augmentative and alternative communication (AAC) tools, AI for tabletop roleplaying games, speech processing, and affective computing&mdash;publishing in top-tier conferences such as AAAI, ACL, EMNLP, and IJCAI.
            They have also been featured in <a href="https://www.wired.com/story/forget-chess-real-challenge-teaching-ai-play-dandd/" aria-text="wired article: Forget Chess—the Real Challenge Is Teaching AI to Play D&D">Wired</a> and <a href="https://www.sciencefocus.com/magazine/dark-stars/" aria-label="BBC Science Focus article: Alexa, tell me a story">BBC Science Focus magazine</a>.
            <br>
             Previously, Dr. Martin was a 2020 Computing Innovation Fellow (<a aria-label="CI Fellows 2020 page" href="https://cifellows2020.org/">CIFellow</a>) postdoctoral researcher at the University of Pennsylvania working with Dr. Chris Callison-Burch. She earned her PhD in Human-Centered Computing from the Georgia Institute of Technology, where she worked with Dr. Mark Riedl. She also has a MS in Language Technologies from Carnegie Mellon University and a BS in Computer Science & Linguistics from Rutgers University—New Brunswick. 
             
             </p>
        </div>
    </div>
</div>
</div>
<!-- Bio End -->




<!-- Teaching Start -->
<div class="container-fluid pt-5" id="teaching">
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Teaching</h1>
        <h1 class="position-absolute text-uppercase text-primary">Teaching</h1>
    </div>
    <center>I have a <a aria-label="Tech to Teaching" href="https://ctl.gatech.edu/tech-teaching">teaching certificate</a> from Georgia Tech, Summer 2018.</center>
    <br>
    <div class="row pb-3">
	{% for m in site.data.teaching %}
	
	<div class="col-lg-4 col-md-6 text-center mb-5">
	<!--<div style="object-fit:cover;"><img src="/assets/img/{{m.img}}" style="width:100%;" aria-label="{{m.img_ref}}"></div><br>-->
	<h5 class="font-weight-bold mb-1">{% if m.link %}<a aria-label="{{ m.course }}" href="{{ m.link }}">{{ m.course }}</a>{% else %} {{m.course}} {% endif %}</h5> <em>{{m.semester}}</em><br>{{ m.school}}<br> <small>{{m.note}}</small></div>
	{% endfor %}

    </div>
</div>
</div>
<!-- Teaching End -->



<!-- Media Start -->
<div class="container-fluid pt-5" id="media">
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Media</h1>
        <h1 class="position-absolute text-uppercase text-primary">Media</h1>
    </div>
    <div class="row pb-3">
	{% for m in site.data.media %}
	
	<div class="col-lg-4 col-md-6 text-center mb-5">
	<div style="object-fit:cover;"><img src="{{m.img}}" style="width:100%;"></div><br>
	<em><a aria-label="{{ m.label }}" href="{{ m.link }}">{{ m.text }}</a></em> by {{ m.author }} for {{ m.publication }}.<br>{{ m.date | date: "%b %e, %Y" }}.</div>
	{% endfor %}

    </div>

</div>
</div>
<!-- Media End -->


<!-- Talks Start -->
<div class="container-fluid pt-5 pb-3" id="talks">
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Talks</h1>
        <h1 class="position-absolute text-uppercase text-primary">Talks</h1>
    </div>
    <div class="row">
    {% for talk in site.data.talks %}
        <div class="col-12 text-center mb-2">

		<h3>{{talk.date | date: '%-m/%-d/%Y'}} - {{talk.venue}}</h3>
		<div class="content video" id="{{ talk.id }}"><div class="video-container">
			<iframe aria-label="{{talk.venue}}" src="{{talk.link}}" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
			

		</div></div>
		<br>
		
		
		
        </div> 
        {% endfor %}   
    </div>
</div>
</div>
<!-- Talks End -->


<!-- Blog Start -->
<div class="container-fluid pt-5" id="blog">
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Blog</h1>
        <h1 class="position-absolute text-uppercase text-primary">Blog</h1>
    </div>
    <div class="row">
        
        {% for post in site.posts %}
        <div class="col-lg-4 mb-5">
            <div class="position-relative mb-4">
                <img class="img-fluid rounded w-100" src="/assets/img/{{post.img}}" alt="">
                <div class="blog-date">
                    <h4 class="font-weight-bold mb-n1">{{post.date | date: '%d'}}</h4>
                    <small class="text-white text-uppercase">{{post.date | date: '%b'}}</small>
                </div>
            </div>
            <h5 class="font-weight-medium mb-4">{{post.title}}</h5>
            
            <h6 class="font-weight-medium mb-4">{{post.description}} &middot; {% capture words %}{{ post.content | number_of_words }}{% endcapture %}{% unless words contains "-" %}{{ words | plus: 250 | divided_by: 250 | append: " minute read" }}{% endunless %}</h6>
            <p>{{ post.content | strip_html | truncatewords: 15 }}</p> 
            <a class="btn btn-sm btn-outline-primary py-2" href="{{post.url}}">Read More</a>
        </div>
	{% endfor %}

 
    </div>
</div>
</div>
<!-- Blog End -->


<!-- Fun Facts Start -->
<div class="container-fluid py-5" id="random">
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Fun Facts</h1>
        <h1 class="position-absolute text-uppercase text-primary">Fun Facts</h1>
    </div>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="owl-carousel testimonial-carousel">
                <div class="text-center">			
			<a href="https://thenounproject.com/icon/raining-cats-and-dogs-89894/"><img class="img-fluid rounded-circle mx-auto mb-3" src="assets/img/noun-raining-cats-and-dogs-89894.png" aria-label="icon of a cat and a dog raining onto an umbrella; created by Aenne Brielmann from the Noun Project" style="width: 80px; height: 80px;"></a>

                    <h4 class="font-weight-light mb-4">I have been collecting a list of American English <a aria-label="Idiom list" href="https://docs.google.com/spreadsheets/d/1hvuFG_Tg4IQIhMRMY1bZYV5yeJUUDb54W2QZWEHaL_U/edit?usp=sharing">idioms</a> for foreign friends.</h4>
                    
                </div>
                <div class="text-center">
                    <img class="img-fluid rounded-circle mx-auto mb-3" src="assets/img/LOLCat_Bible.jpg" style="width: 80px; height: 80px;" aria-label="LOL Cat Bible cover; taken from the Wikipedia page for 'LOLCat Bible Translation Project'">
                    <h4 class="font-weight-light mb-4">I created a machine translation system with Vivian Robison for translating the Bible from 
			<a aria-label="LOL speak to English Bible MT project" href="./poster/MT-project.pdf">LOLspeak to English</a>.</h4>
                    

                </div>
                <div class="text-center">
                    <img class="img-fluid rounded-circle mx-auto mb-3" src="assets/img/festvox.png" style="width: 80px; height: 80px;" aria-label="Festvox logo; taken from http://www.festvox.org">
                    <h4 class="font-weight-light mb-4">I am a downloadable voice in the speech synthesis tool 
			<a aria-label="Festvox" href="http://www.festvox.org/flite/">Festvox</a> (voice "<a aria-label="LJM voice in Festvox (download)" href="http://www.festvox.org/flite/packed/flite-2.0/voices/cmu_us_ljm.flitevox">US English Female LJM</a>").</h4>
                </div>
                <div class="text-center">
                <img class="img-fluid rounded-circle mx-auto mb-3" src="assets/img/achlogo.png" style="width: 80px; height: 80px;" aria-label="The Association for Computational Heresy logo (parody of the ACM logo); taken from https://sigbovik.org/">
                  <h4 class="font-weight-light mb-4">I presented at 
			<a aria-label="SIGBOVIK 2015" href="http://sigbovik.org/2015/">SIGBOVIK 2015</a> (a fake conference) on "<a aria-label="Language Sequencing: Language as a Physical Entity slides" href="https://docs.google.com/presentation/d/1KRd6L_yGJgN6rNhW8EbOeNoDfRpnO4dMwptttT875jI/edit?usp=sharing">Language Sequencing: Language as a Physical Entity</a>" with 
			<a aria-label="Meghana Kshirsagar" href="https://www.cs.cmu.edu/~mkshirsa/">Meghana Kshirsagar</a>.</h4>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<!-- Fun Facts End -->

