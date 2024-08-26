---
title: Lara's List of Resources
layout: extra
active_tab: resources 
---

<div class="topbar">
<div class="head">
<h1>Lara's Storytelling Resources</h1>
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

<h2> Mixed Visual & Textual Datasets </h2>

<div id="table-wrapper">
<div id="table-scroll">
<table id="visual">
  <thead>
    <tr>
      <th onclick="sortTable(0,'visual')" aria-label="sort by dataset">Dataset<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'visual')" aria-label="sort by year">Year<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(2,'visual')" aria-label="sort by paper">Papers<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(3,'visual')" aria-label="sort by paper code">Paper Code<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(4,'visual')" aria-label="sort by hugging face link">Hugging Face Link<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(5,'visual')" aria-label="sort by leaderboard link">Leaderboard<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.vision %}
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


<h2> Story Evaluation, Understanding, & Cloze Tests </h2>
<div id="table-wrapper">
<div id="table-scroll">
<table id="tests">
  <thead>
    <tr>
      <th onclick="sortTable(0,'tests')" aria-label="sort by name">Test<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(1,'tests')" aria-label="sort by year">Year<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(2,'tests')" aria-label="sort by paper">Papers<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(3,'tests')" aria-label="sort by leaderboard">Leaderboard<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>

{% for dataset in site.data.resources.eval %}
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



<h2> Data Scrapers & Processors </h2>
<div id="table-wrapper">
<div id="table-scroll">


<table id="scrapers">
  <thead>
    <tr>
      <th onclick="sortTable(0,'scrapers')" aria-label="sort by dataset name">Dataset<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'scrapers')">Info<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>

{% for dataset in site.data.resources.scrapers %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a>
	 {% else %}
	 {{dataset.name}}
	 {% endif %}
	</td>
	
	<td>
	{{dataset.info}}
	</td>
	
	</tr>
{% endfor %}

</tbody>
</table>

</div>
</div>



<h2> Interactive Fiction Environments</h2>
<div id="table-wrapper">
<div id="table-scroll">
<table id="if">
  <thead>
    <tr>
      <th onclick="sortTable(0,'if')" aria-label="sort by name">Environment<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'if')" aria-label="sort by year">Year<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(2,'if')" aria-label="sort by paper">Papers<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.if %}
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
	
	
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>

<h2>Interactive Fiction Agents</h2>
<div id="table-wrapper">
<div id="table-scroll">
<table id="agents">
  <thead>
    <tr>
      <th onclick="sortTable(0,'agents')" aria-label="sort by name">Agent<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'agents')" aria-label="sort by year">Year<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(2,'agents')" aria-label="sort by paper">Papers<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.agents %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} code">{{dataset.name}}</a> {% if dataset.info %} &ndash; {{dataset.info}} {% endif %}
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
	
	
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>



<h2> Story Planning Systems</h2>
<div id="table-wrapper">
<div id="table-scroll">
<table id="planning">
  <thead>
    <tr>
      <th onclick="sortTable(0,'planning')">Planner<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'planning')">Year<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(2,'planning')">Papers<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.planning %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a> {% if dataset.info %} - {{dataset.info}} {% endif %}
	 {% else %}
	 {{dataset.name}} {% if dataset.info %} - {{dataset.info}} {% endif %}
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
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>




<h2> Story Generation Code </h2>
<div id="table-wrapper">
<div id="table-scroll">
<table id="code">
  <thead>
    <tr>
      <th onclick="sortTable(0,'code')">Code<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'code')">Year<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(2,'code')">Papers<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.code %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a> {% if dataset.info %} - {{dataset.info}} {% endif %}
	 {% else %}
	 {{dataset.name}} {% if dataset.info %} - {{dataset.info}} {% endif %}
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
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>

<h3> Libraries & Toolkits</h3>
<div id="table-wrapper">
<div id="table-scroll">
<table id="libraries">
  <thead>
    <tr>
      <th onclick="sortTable(0,'libraries')">Library<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'libraries')">Info<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.libraries %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a>
	 {% else %}
	 {{dataset.name}}
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.info %}
	 {{dataset.info}}
	 {% endif %}
	</td>
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>


<h2> Knowledge Bases &amp; Commonsense Reasoning</h2>
<div id="table-wrapper">
<div id="table-scroll">
<table id="kb">
  <thead>
    <tr>
      <th onclick="sortTable(0,'kb')">Knowledge Base<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'kb')">Year<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(2,'kb')">Papers<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(3,'kb')">Hugging Face Link<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.knowledge %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a> {% if dataset.info %} - {{dataset.info}} {% endif %}
	 {% else %}
	 {{dataset.name}} {% if dataset.info %} - {{dataset.info}} {% endif %}
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
	 {% if dataset.hugging_face %}
	 <a href="{{dataset.hugging_face}}" aria-label="{{dataset.name}} Hugging Face repository">{{dataset.hugging_face}}</a>
	 {% endif %}
	</td>
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>


<h2> Extras </h2>

<h3>Programming Languages & Authoring Tools for Writing Interactive Fiction</h3>
<div id="table-wrapper">
<div id="table-scroll">
<table id="langs">
  <thead>
    <tr>
      <th onclick="sortTable(0,'langs')">Language<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'langs')">Repo<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.langs %}
	<tr>
	<td width="16%">
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a>
	 {% else %}
	 {{dataset.name}}
	 {% endif %}
	</td>
	
	<td width="50%">
	 {% if dataset.code %}
	 <a href="{{dataset.code}}" aria-label="{{dataset.name}} code">{{dataset.code}}</a>
	 {% endif %}
	</td>
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>

<h3> Notable IF Games</h3>
<div id="table-wrapper">
<div id="table-scroll">

<table id="notable">
  <thead>
    <tr>
      <th onclick="sortTable(0,'notable')">Game<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(1,'notable')">Year<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(2,'notable')">Authors<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(3,'notable')">Papers<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.notable %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a>
	 {% else %}
	 {{dataset.name}}
	 {% endif %}
	</td>
	<td>
	 {{dataset.year}}
	</td>
	<td>
	 {% if dataset.author1 %}
		 {% if dataset.author_url1 %}
		 <a href="{{dataset.author_url1}}" aria-label="{{dataset.author1}}'s website">{{dataset.author1}}</a>
		 {% else %}
		 {{dataset.author1}}
		 {% endif %}
	 {% endif %}
	 {% if dataset.author2 %}
	 &amp;
		 {% if dataset.author_url2 %}
		 <a href="{{dataset.author_url2}}" aria-label="{{dataset.author2}}'s website">{{dataset.author2}}</a>
		 {% else %}
		 {{dataset.author2}}
		 {% endif %}
	 {% endif %}
	</td>
	<td>
	 {% if dataset.paper1 %}
		 {% if dataset.paper_url1 %}
		 <a href="{{dataset.paper_url1}}" aria-label="{{dataset.paper1}}'s website">{{dataset.paper1}}</a>
		 {% else %}
		 {{dataset.paper1}}
		 {% endif %}
	 {% endif %}
	 {% if dataset.paper2 %}
	 <br/>
		 {% if dataset.paper_url2 %}
		 <a href="{{dataset.paper_url2}}" aria-label="{{dataset.paper2}}'s website">{{dataset.paper2}}</a>
		 {% else %}
		 {{dataset.paper2}}
		 {% endif %}
	 {% endif %}
	</td>	
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>



<h3>Tutorials </h3>
<div id="table-wrapper">
<div id="table-scroll">
<table id="tutorials">
  <thead>
    <tr>
      <th onclick="sortTable(0,'tutorials')">Tutorial<div class="fa fa-fw fa-sort"/></th> 
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.tutorials %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a> {% if dataset.info %} - {{dataset.info}} {% endif %}
	 {% else %}
	 {{dataset.name}} {% if dataset.info %} - {{dataset.info}} {% endif %}
	 {% endif %}
	 {% if dataset.year %}({{dataset.year}}){% endif %}
	</td>
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>


<h3>RPG/IF Inspiration</h3>
<div id="table-wrapper">
<div id="table-scroll">
<table id="inspo">
  <thead>
    <tr>
      <th onclick="sortTable(0,'inspo')">Name<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'inspo')">Info<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.inspo %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a>
	 {% else %}
	 {{dataset.name}}
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.info %}
	 {{dataset.info}}
	 {% endif %}
	</td>
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>


<h3> Related Courses</h3>
<div id="table-wrapper">
<div id="table-scroll">
<table id="courses">
  <thead>
    <tr>
      <th onclick="sortTable(0,'courses')">Course<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'courses')">Taught By<div class="fa fa-fw fa-sort"/></th>
      <th onclick="sortTable(2,'courses')">Year<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
     <a href="https://nickm.com/classes/interactive_narrative/2019_fall/" aria-label="MIT's Interactive Narrative course">Interactive Narrative</a>
    </td>
    <td>
    Nick Montfort
    </td>
    <td>
    2019 (Fall)
    </td>
  </tr>
  <tr>
    <td>
     <a href="https://interactive-fiction-class.org/" aria-label="UPenn's Interactive Fiction and Text Generation course">Interactive Fiction and Text Generation</a>
    </td>
    <td>
    Lara J. Martin & Chris Callison-Burch
    </td>
    <td>
    2022 (Spring)
    </td>
  </tr>
    <tr>
  <td>
     <a href="https://catalog.gatech.edu/coursesaz/cs/" aria-label="GT's AI Storytelling in Virtual Worlds course">AI Storytelling in Virtual Worlds</a>
    </td>
    <td>
    Mark Riedl
    </td>
    <td>
    2022 (Spring)
    </td>
  </tr>
  <tr>
  <td>
     <a href="https://kaaathy.com/comppoetics/" aria-label="RISD's Computational Poetics course">Computational Poetics</a>
    </td>
    <td>
    Kathy Wu
    </td>
    <td>
    2021 (Spring & Fall)
    </td>
  </tr>
  

</tbody>
</table>
</div>
</div>


<h3> Generators for TRPGs and IF </h3>
<div id="table-wrapper">
<div id="table-scroll">
<table id="gen">
  <thead>
    <tr>
      <th onclick="sortTable(0,'gen')">Name<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'gen')">Info<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.gen %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a>
	 {% else %}
	 {{dataset.name}}
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.info %}
	 {{dataset.info}}
	 {% endif %}
	</td>
	
	</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>






<h3>Various Tools</h3>
<div id="table-wrapper">
<div id="table-scroll">
<table id="tools">
  <thead>
    <tr>
      <th onclick="sortTable(0,'tools')">Name<div class="fa fa-fw fa-sort"/></th> 
      <th onclick="sortTable(1,'tools')">Info<div class="fa fa-fw fa-sort"/></th>
    </tr>
  </thead>
  <tbody>


{% for dataset in site.data.resources.tools %}
	<tr>
	<td>
	 {% if dataset.url %}
	 <a href="{{dataset.url}}" aria-label="{{dataset.name}} website">{{dataset.name}}</a>
	 {% else %}
	 {{dataset.name}}
	 {% endif %}
	</td>
	
	<td>
	 {% if dataset.info %}
	 {{dataset.info}}
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



