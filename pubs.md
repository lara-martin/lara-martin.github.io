<!-- Pubs Start -->
<div class="container-fluid py-5" id="publications">
<div class="container">
    <div class="position-relative d-flex align-items-center justify-content-center">
        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Publications</h1>
        <h1 class="position-absolute text-uppercase text-primary">Select Publications</h1>
    </div>
    <center>For a full list, please refer to <a aria-label="Lara's Google Scholar page" href="http://scholar.google.com/citations?user=YjiWURYAAAAJ">my Google Scholar page</a>.</center>
    <div class="row align-items-center">


            
            <!--<font size="5"><strong>
		{% assign now = 'now'  | date: "%Y" %}
		{% for year in (2014..now ) %}
			<a aria-label="Scroll to {{ year }} publications" onclick="window.location.href='#{{ year }}';">[{{ year }}]</a>
		{% endfor %}
	     </strong></font>-->
	     
	     {% for year in (2014..now) reversed %}
       
        
        <div class="col-lg-6">
        <h3 class="mb-4">{{year}}</h3>
        <div class="border-left border-primary pt-2 pl-4 ml-2">
        	{% assign papers = site.data.papers  | where: "year", year %}
			{% if papers[0] %}
			{% for paper in papers %}
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
					{% assign aut = paper.authors | split: "," %}{% capture author_list %}{% for a in aut %}{% assign y = a |strip %}{% assign found = site.data.authors | find: "name", y %}{% if found %}, <a aria-label="{{found.name}}" href="{{found.link}}">{{found.name}}</a>{% else %}, {{y}}{% endif %}{% endfor %}{% endcapture %}
															
                <div class="position-relative mb-4 {{paper.tag}}">                   
					{% if paper.img %}<header><img src="assets/img/{{paper.img}}" width="200"></header>{% endif %}
					{% if paper.type %}<mark>{{paper.type}}</mark>{% endif%}

                    <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                    <h5 class="font-weight-bold mb-1">{{paper.title}}</h5>
                    {{ author_list | remove_first: "," |strip | replace: "Lara J. Martin", "<strong>Lara J. Martin</strong>" }}. <em>{{paper.venue}}</em>{%if paper.location%}, {{paper.location}}{%endif%}. {{ l }}
                    <a type="a" class="collapsible paperlink bib" aria-label="{{ paper.title }} BibTex" >bibTex</a><div class="highlight">{{ paper.bib }}</div>
					
                </div>
                
                	{% endfor %}
			{% else %}
			Stay tuned!
			{% endif %}
        

            </div>
            
        </div>
        {% endfor %}

</div>
</div>
<!-- Pubs End -->

