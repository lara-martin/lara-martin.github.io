---
title: UMBC Language Technology Seminar Series
layout: seminar
---

<div class="topbar">
<div class="head">
<h1>UMBC Language Technology Seminar Series (LaTeSS)</h1>
<h5 style="text-transform:none;">Hosted by <a href="https://laramartin.net" aria-label="Lara's website">Lara J. Martin</a> at <a href="https://www.csee.umbc.edu/" aria-label="UMBC's computer science and electrical engineering department">UMBC</a></h5>
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

{% capture now %}{{'now' | date: '%s'}}{% endcapture %}

<div class="main">
<div class="intro" style="font-family: Lato, Helvetica, arial, sans-serif;">
<p>
UMBC's Language Technology Seminar Series (LaTeSS &ndash; pronounced lattice) showcases talks from experts researching various language technologies, including but not limited to natural language processing, computational linguistics, speech processing, and digital humanities. Join the group on myUMBC here: <a href="https://my3.my.umbc.edu/groups/langtech">https://my3.my.umbc.edu/groups/langtech</a>
</p>

</div>

<div class="wrapper">


<h2 id="upcoming"> Schedule</h2>
<div id="table-wrapper">
<div id="table-scroll">


<div class="col-md-12 mb-3" style="font-size:16px;font-family: Lato, Helvetica, arial, sans-serif;">
{% for talk in site.data.seminar %}
{% capture talk_date %}{{talk.date | date: '%s'}}{% endcapture %}
{% if talk_date >= now %}
  <hr/>
	<div class="row paper-block rounded justify-content-center">
		<div class="col-md-2 date-center" >
			<big><b>{{ talk.date | date: "%A, %B %-d, %Y" }}</b></big>
			<br>{{talk.time}}
			<br>{{talk.location}}
			<br><br><a href="{{talk.web}}" class="badge badge-web badge-sm text-decoration-none mb-1">Webex Link</a>
			<br><br><a href="{{talk.rsvp}}" class="badge badge-web badge-sm text-decoration-none mb-1">RSVP</a>
		</div>
		<div class="col-md-2-person mb-3">
			<img class="person-img" src="{{talk.img}}">
		</div>
		<div class="col-md-7 mb-3">
			<br/>
			<big><b> <a href="{{talk.url}}" aria-label="{{talk.name}}'s website">{{talk.name}}</a> <br/> {{talk.position}} at {{talk.institute}}</b></big>
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
{% endif %}
{% endfor %}
</div>


</div>
</div>

<h2 id="past"> Past Talks</h2>


<div id="table-wrapper">
<div id="table-scroll">


<div class="col-md-12 mb-3" style="font-size:16px;font-family: Lato, Helvetica, arial, sans-serif;">
{% for talk in site.data.seminar %}
{% capture talk_date %}{{talk.date | date: '%s'}}{% endcapture %}
{% if talk_date < now %}
  <hr/>
	<div class="row paper-block rounded justify-content-center">
		<div class="col-md-2 date-center" >
			<big><b>{{ talk.date | date: "%A, %B %-d, %Y" }}</b></big>
			<br>{{talk.time}}
			<br>{{talk.location}}
			<br><br><a href="{{talk.recording}}" class="badge badge-web badge-sm text-decoration-none mb-1">Recording</a>
		</div>
		<div class="col-md-2-person mb-3">
			<img class="person-img" src="{{talk.img}}">
		</div>
		<div class="col-md-7 mb-3">
			<br/>
			<big><b> <a href="{{talk.url}}" aria-label="{{talk.name}}'s website">{{talk.name}}</a> <br/> {{talk.position}} at {{talk.institute}}</b></big>
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
{% endif %}
{% endfor %}
</div>


</div>
</div>


</div>
</div>



