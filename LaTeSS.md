---
title: UMBC Language Technology Seminar Series
layout: seminar
---

<div class="topbar">
<div class="head">
<h1>UMBC Language Technology Seminar Series (LaTeSS)</h1>
</div>
</div>

<!--TOC skip from https://www.aleksandrhovhannisyan.com/blog/jekyll-table-of-contents/-->
<div style="position: relative;">
    <a href="#toc-skipped" class="screen-reader-only" aria-label="skip table of contents">Skip table of contents</a>
</div>



<ul id="navbar">
	<li><a href="#upcoming">Upcoming Talks</a></li>
	<li><a href="#past">Past Talks</a></li>
	<!--<li style="border-right: 1px #CCC solid;"><a href="https://laramartin.net" aria-label="link back to Lara's main site">Back to Home</a></li>
	<li class="dropdown">
		<a class="dropbtn" ><i class="fa fa-caret-down"></i> Datasets</a>
		<div class="dropdown-content">
			{% for link in site.data.nav.data %}
				<a href="{{link.link}}" aria-label="jump to {{link.text}}">{{link.text}}</a>
			{% endfor %}
		</div>
	</li>-->

</ul>

<div id="toc-skipped"></div>



<div class="main">
<div class="intro" style="font-family: Lato, Helvetica, arial, sans-serif;">
<p>
UMBC's Language Technology Seminar Series (LaTeSS -- pronounced lattice) showcases talks from experts researching various language technologies, including but not limited to natural language processing, computational linguistics, speech processing, and digital humanities.
</p>

</div>

<div class="wrapper">


<h2 id="upcoming"> Schedule</h2>
<div id="table-wrapper">
<div id="table-scroll">



<div class="col-md-12 mb-3" style="font-size:16px;font-family: Lato, Helvetica, arial, sans-serif;">
{% for talk in site.data.seminar %}
  <hr/>
	<div class="row paper-block rounded justify-content-center">
		<div class="col-md-2 date-center" >
			<big><b>{{ talk.date | date: "%A, %B %-d, %Y" }}</b></big>
			<br>{{talk.time}}
			<br>{{talk.location}}
			<br><br><a href="{{talk.web}}" class="badge badge-web badge-sm text-decoration-none mb-1">Webex Link</a>
		</div>
		<div class="col-md-2-person mb-3">
			<img class="person-img" src="{{talk.img}}">
		</div>
		<div class="col-md-7 mb-3">
			<br/>
			<big><b> <a href="{{talk.url}}" aria-label="{{talk.name}}'s website">{{talk.name}}</a> <br/> {{talk.position}}</b></big>
			<br/><br/>
			<p> <b>{{talk.talk_title}}</b><br/>
				{{talk.abstract}}
			</p>
			<details><summary><b>Bio</b></summary>
				<small>
					{{talk.bio}}
				</small>
			</details>
			</div>
		</div>

  





	<!--<tr>
	<td>
	 {% if talk.person.url %}
	 <a href="{{talk.person.url}}" aria-label="{{talk.person.name}}'s website">{{talk.person.name}}</a> {% if dataset.info %} &ndash; {{dataset.info}} {% endif %}
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
	
	</tr>-->
{% endfor %}
</div>


</div>
</div>

<h2 id="past"> Past Talks</h2>

</div>
</div>



