<!-- Portfolio Start -->
<div class="container-fluid pt-5 pb-3" id="portfolio">
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Publications</h1>
        <h1 class="position-absolute text-uppercase text-primary">Select Publications</h1>
    </div>
    <center>For a full list, please refer to my <a aria-label="Lara's Google Scholar page" href="http://scholar.google.com/citations?user=YjiWURYAAAAJ"><i class="icon ai ai-google-scholar-square ai-2x"></i> Google Scholar</a> page.
    
            <div class="mb-2">        	
			<a aria-label="Research Gate page" href="https://www.researchgate.net/profile/Lara_Martin7"><i class="icon ai ai-researchgate-square ai-2x"></i></a>
			<a aria-label="Semantic Scholar page" href="https://www.semanticscholar.org/author/Lara-J.-Martin/145262322"><i class="icon ai ai-semantic-scholar-square ai-2x"></i></a>
			<a aria-label="Publons page" href="https://publons.com/researcher/2375735/lara-j-martin"><i class="icon ai ai-publons-square ai-2x"></i></a>
			<a aria-label="Academia.edu page" href="https://upenn.academia.edu/LaraMartin"><i class="icon ai ai-academia-square ai-2x"></i></a>
			<a aria-label="ORCID ID" href="https://orcid.org/0000-0002-0623-599X"><i class="icon ai ai-orcid-square ai-2x"></i></a>
	</div></center><br>
	
    <div class="row">    
        <div class="col-12 text-center mb-2">
        <h3>Sort by Topic</h3>
            <ul class="list-inline mb-4" id="portfolio-flters">
                <li class="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li>
                <li class="btn btn-sm btn-outline-primary m-1" data-filter=".speech">Speech</li>
                <li class="btn btn-sm btn-outline-primary m-1" data-filter=".story">Story Generation</li>
                <li class="btn btn-sm btn-outline-primary m-1" data-filter=".social">Social Media</li>
                <li class="btn btn-sm btn-outline-primary m-1" data-filter=".dnd">Dungeons & Dragons</li>                
            </ul>
        </div>
    </div>
    <div class="row">    
        <div class="col-12 text-center mb-2">
        <h3>Sort by Year</h3>
            <ul class="list-inline mb-4" id="portfolio-flters">
            	<li class="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li>
            	{% for year in (2014..now) %}
                <li class="btn btn-sm btn-outline-primary m-1" data-filter=".{{year}}">{{year}}</li>
          {% endfor %}
            </ul>
        </div>
    </div>
    <div class="row portfolio-container">
    
    
    
    
    
    

	{% for paper in site.data.papers %}
	{% if paper.img %}
		{% capture list %}
		{% if paper.official_pdf %}
		<a aria-label="{{ paper.title }} official publication" href="{{ paper.official_pdf }}" class="paperlink">paper</a>
		{% endif %}
		{% if paper.pdf %}
		 <a aria-label="{{ paper.title }} pdf" href="{{ paper.pdf }}" class="paperlink">paper</a>{% endif %}
		 {% if paper.arxiv %}
		 <a aria-label="{{ paper.title }} arXiv" href="{{ paper.arxiv }}" class="paperlink arxiv">arXiv</a>
		 {% endif %}
		 {% if paper.slides %}
		 <a aria-label="{{ paper.title }} slides" href="{{ paper.slides }}" class="paperlink slides">slides</a>
		 {% endif %}
		 {% if paper.poster %} 
		 <a aria-label="{{ paper.title }} poster" href="{{ paper.poster }}" class="paperlink poster">poster</a>
		 {% endif %}
		 {% if paper.code %}
		  <a aria-label="{{ paper.title }} code" href="{{ paper.code }}" class="paperlink code">code</a>
		  {% endif %}
		  {% if paper.data %} 
		  <a aria-label="{{ paper.title }} data" href="{{ paper.data }}" class="paperlink data">data</a>
		  {% endif %}
		{% endcapture %}
		{% assign l = list | strip%}
             
                
                    
                    
    
    
        <div class="col-lg-4 col-md-6 mb-4 portfolio-item {{paper.tag}} {{paper.year}}">
            <div class="position-relative overflow-hidden mb-2" >
                <img class="img-fluid rounded w-100" src="assets/img/{{paper.img}}" style="width:500px;" alt="Diagram from the paper {{paper.title}}">
                <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                    <a href="assets/img/{{paper.img}}" data-lightbox="portfolio">
                        <i class="fa fa-plus text-white" style="font-size: 50px;"></i>
                    </a>
                </div>
                  
            </div>
            
            {% assign aut = paper.authors | split: "," %}{% capture author_list %}{% for a in aut %}{% assign y = a |strip %}{% assign found = site.data.authors | find: "name", y %}{% if found %}, <a aria-label="{{found.name}}" href="{{found.link}}">{{found.name}}</a>{% else %}, {{y}}{% endif %}{% endfor %}{% endcapture %}
															
               

		{% if paper.type %}<mark>{{paper.type}}</mark>{% endif%}

           	<h5 class="font-weight-bold mb-1">{{paper.title}}</h5>
                {{ author_list | remove_first: "," |strip | replace: "Lara J. Martin", "<strong>Lara J. Martin</strong>" }}. <em>{{paper.venue}}</em>{%if paper.location%}, {{paper.location}}{%endif%}.
            
            

            {{ l }}  <a type="a" class="collapsible paperlink bib" aria-label="{{ paper.title }} BibTex" >bibTex</a><div class="highlight">{{ paper.bib }}</div>
        </div>
        {% endif %}
        {% endfor %}

    </div>
</div>
</div>
<!-- Portfolio End -->
