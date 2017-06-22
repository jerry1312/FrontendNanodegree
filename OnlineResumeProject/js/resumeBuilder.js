
var formattedrole=HTMLheaderRole.replace("%data%","WEB DEVELOPER");
$("#header").prepend(formattedrole);
var formattedname=HTMLheaderName.replace("%data%","KUNAL SURYAWANSHI");
$("#header").prepend(formattedname);


var bio={
	"name":"KUNAL SURYAWANSHI",
	"role":"WEB DEVELOPER",
	"contacts":{
		"email":"kts8427185@gmail.com",
		"github":"ksuryawanshi",
		"mobile":"8283909695",
		"location":"chandigarh"
	},
	"welcomeMessage":"THERE IS NO EXCUSE FOR NOT TRYING",
	"Skills":["HTML","Bootstrap","CSS","C/C++","Python"],
	"biopic":"images/me.jpg"
};
 $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
 
 $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
 $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github)); 
 $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
 
 $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
 
 if(bio.Skills.length>0){
 	$("#header").append(HTMLskillsStart);
 	for(var i in bio.Skills)
 	$("#skills").append(HTMLskills.replace("%data%",bio.Skills[i]))
 };

 var work={
"jobs":[{
	"employer":"chitkara university",
	"title":"student",
	"location":"Punjab",
	"dates":"2017 in progress",
	"description":"Persuing my degree"
}]
 };

 var workdisplay=function(){
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title), HTMLworkDates.replace("%data%", work.jobs[job].dates), HTMLworkLocation.replace("%data%", work.jobs[job].location), HTMLworkDescription.replace("%data%", work.jobs[job].description));
    };};
 workdisplay();

 

var education={
  "school":[{
	"name":"Valley Public School",
	"degree":"High School",
	"date":"2014",
	"major":"PCM",
	"location":"Chandigarh",
	"years":"7"
}],
"onlineclasses":[{
	"title": " Front End Developer Nanodegree",
        "school": "Udacity",
        "date": "2017"
}]
 };
 
 var educationdisplay=function(){
 	for(var i in education.school){
     $("#education").append(HTMLschoolStart);
     $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.school[i].name)+HTMLschoolDegree.replace("%data%",education.school[i].degree)
     +HTMLschoolDates.replace("%data%",education.school[i].date)+HTMLschoolMajor.replace("%data%",education.school[i].major)+HTMLschoolLocation.replace("%data%",education.school[i].location));
 	}
 $("#education").append(HTMLonlineClasses);;
 	for(var i in education.onlineclasses)
{
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineclasses[i].title)+HTMLonlineSchool.replace("%data%",education.onlineclasses[i].school)+HTMLonlineDates.replace("%data%",education.onlineclasses[i].date));

}};

educationdisplay();


var projects={
	"project":[{
		"title":"Portfolio Project",
		"date":"2017",
		"description":"Made it with the help of html and css",
		"images":["images/p1.jpg"]
	},
	{
		"title":"Responsive Project",
		"date":"2017",
		"description":"Made it as a part of nanodegree",
		"images":["images/p2.jpg"]
	}]

};

 projects.display=function(){
 	for(var i in projects.project){
     $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[i].title)+HTMLprojectDates.replace("%data%", projects.project[i].date)+HTMLprojectDescription.replace("%data%", projects.project[i].description)
    	+HTMLprojectImage.replace("%data%",projects.project[i].images));
 	}

};


projects.display();
 
 $("#mapDiv").append(googleMap);

 $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
 $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github)); 
 $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));