---
title: Language Technology Seminar Series
layout: extra
---

<div class="topbar">
<div class="head">
<h1>Language Technology Seminar Series</h1>
</div>
</div>

<!--TOC skip from https://www.aleksandrhovhannisyan.com/blog/jekyll-table-of-contents/-->
<div style="position: relative;">
    <a href="#toc-skipped" class="screen-reader-only" aria-label="skip table of contents">Skip table of contents</a>
</div>



<ul id="navbar">
	<li style="border-right: 1px #CCC solid;"><a href="https://laramartin.net" aria-label="link back to Lara's main site">Back to Home</a></li>
	<li class="dropdown">
		<a class="dropbtn" ><i class="fa fa-caret-down"></i> Datasets</a>
		<div class="dropdown-content">
			{% for link in site.data.nav.data %}
				<a href="{{link.link}}" aria-label="jump to {{link.text}}">{{link.text}}</a>
			{% endfor %}
		</div>
	</li>
	<li class="dropdown">
		<a class="dropbtn" ><i class="fa fa-caret-down"></i> Environments/Planners</a>
		<div class="dropdown-content">
			{% for link in site.data.nav.env %}
				<a href="{{link.link}}" aria-label="jump to {{link.text}}">{{link.text}}</a>
			{% endfor %}
		</div>
	</li>

	<li class="dropdown">
		<a class="dropbtn" ><i class="fa fa-caret-down"></i> Code</a>
		<div class="dropdown-content">
			{% for link in site.data.nav.code %}
				<a href="{{link.link}}" aria-label="jump to {{link.text}}">{{link.text}}</a>
			{% endfor %}
		</div>
	</li>
	<li id="stay"><a href="#kb" aria-label="jump to knowledge bases">Knowledge Bases &amp; Commonsense</a></li>
	<li class="dropdown">
		<a class="dropbtn" ><i class="fa fa-caret-down"></i> Extras</a>
		<div class="dropdown-content">
			{% for link in site.data.nav.extra %}
				<a href="{{link.link}}" aria-label="jump to {{link.text}}">{{link.text}}</a>
			{% endfor %}
		</div>
	</li>
</ul>

<div id="toc-skipped"></div>



<div class="main">
<div class="intro">
<p>
Here is a non-exhaustive list of various resources you might want if you're interested in automated story generation, interactive fiction (IF), or related research areas (such as story understanding and tabletop roleplaying games&mdash;TRPGs). <!--This list was first created when I co-taught <a href="https://interactive-fiction-class.org/" aria-label="Interactive Fiction and Text Generation course website">Interactive Fiction and Text Generation</a> at UPenn with Chris Callison-Burch.-->

<br><br> I also made a list of <a href="https://docs.google.com/spreadsheets/d/1jlLdJj0NTOwv1JA2CvCLcKJ2_ogRQ3kK0nlAUzhinig/edit?usp=sharing" aria-label="Narrative Understanding & Generation Research People">related researchers</a>, and I try to keep up a list of <a href="https://docs.google.com/spreadsheets/d/1KZfkLMO0DdraeJwTTT4BEqJY0RlOBjunIKo1jzKiFkQ/edit?usp=sharing" aria-label="Academic Conference Deadlines spreadsheet">upcoming conference and workshop deadlines</a>.
If you want me to add or update anything on any of these lists, please let me know! You can unscramble my email address here: 
<div id="email" style="display:inline;padding-left: 2rem;"><noscript><i>Please enable Javascript to view</i></noscript></div>
<p>
Note: This is not a list of papers in the field, but rather a list of corpora &amp; code and their corresponding papers if they have it.
<br>
If you're looking for paper lists, you might be interested in <a href="https://arnicas.github.io/text-gen-arxiv-papers/" aria-label="list of text generation papers from arXiv">@arnicas's list of text generation papers found on arXiv</a>, <a href="http://cs.uky.edu/~sgware/reading/" aria-label="NIL reading list"> Stephen Ware's Narrative Intelligence Lab reading list</a>, or <a href="https://github.com/THUNLP-MT/TG-Reading-List" aria-text="Tsinghua Natural Language Processing Group's text generation list">the Tsinghua Natural Language Processing Group's text generation list</a>.
</p>

</p>
</div>

<div class="wrapper">


<h2> Story Datasets</h2>
<div id="table-wrapper">
<div id="table-scroll">
<table id="data">

  <thead>
    <tr>
      <th onclick="sortTable(0,'data')" aria-label="sort by dataset">Dataset<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'data')" aria-label="sort by year">Year<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(2,'data')" aria-label="sort by paper">Papers<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(3,'data')" aria-label="sort by paper code">Paper Code (Baselines)<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(4,'data')" aria-label="sort by hugging face link">Hugging Face Link<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(5,'data')" aria-label="sort by leaderboard">Leaderboard<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.datasets %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a> {% if dataset.info %} &ndash; {{dataset.info}} {% endif %}
	 {% else %}
	 {{dataset.name}} {% if dataset.info %} &ndash; {{dataset.info}} {% endif %}
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.year %}
	 {{dataset.year}}
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.paper1 %}
	 <a href="{{dataset.paper_url1}}" aria-label="link to the paper: {{dataset.paper1}}">{{dataset.paper1}}</a>
	 {% endif %}
	 {% if dataset.paper2 %}
	 and
	 <a href="{{dataset.paper_url2}}" aria-label="link to the paper:{{dataset.paper2}}">{{dataset.paper2}}</a>
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.code %}
	 <a href="{{dataset.code}}" aria-label="{{dataset.name}} code">{{dataset.code}}</a>
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.hugging_face %}
	 <a href="{{dataset.hugging_face}}" aria-label="{{dataset.name}} Hugging Face repository">{{dataset.hugging_face}}</a>
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.leaderboard %}
	 <a href="{{dataset.leaderboard}}" aria-label="{{dataset.name}} leaderboard">{{dataset.leaderboard}}</a>
	 {% endif %}
	</td>
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>




</div>
</div>



