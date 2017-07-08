var bio={
	"name":"KUNAL SURYAWANSHI",
	"role":"WEB DEVELOPER",
	"contacts":{
		"email":"kts8427185@gmail.com",
		"github":"jerry1312",
		"mobile":"8283909695",
		"location":"chandigarh"
	},
	"welcomeMessage":"THERE IS NO EXCUSE FOR NOT TRYING",
	"skills":["HTML","Bootstrap","CSS","C/C++","Python"],
	"biopic":"images/me.jpg"
};
 bio.display=function(){
	var formattedrole=HTMLheaderRole.replace("%data%","WEB DEVELOPER");
	$("#header").prepend(formattedrole);
	var formattedname=HTMLheaderName.replace("%data%","KUNAL SURYAWANSHI");
	$("#header").prepend(formattedname);

	$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
 
 	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
 	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github)); 
 	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
 
 	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
 
 	if(bio.skills.length>0){
 	$("#header").append(HTMLskillsStart);
 	for(var i=0;i<bio.skills.length;i++)
 	$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
 }
 $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
 $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github)); 
 $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

 bio.display();

 var work={
"jobs":[{
	"employer":"chitkara university",
	"title":"student",
	"location":"Punjab",
	"dates":"2017 in progress",
	"description":"Persuing my degree"
}]
 };

 work.display=function(){
    for (var job=0;job<work.jobs.length;job++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title), HTMLworkDates.replace("%data%", work.jobs[job].dates), HTMLworkLocation.replace("%data%", work.jobs[job].location), HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }};
 work.display();

 

var education={
  "schools":[{
	"name":"Valley Public School",
	"degree":"High School",
	"dates":"2014",
	"majors":"PCM",
	"location":"Chandigarh",
	"years":"7",
	"url":"valleypublicschool.com"
}],
"onlineCourses":[{
	"title": " Front End Developer Nanodegree",
	"url":"udacity.com",
        "school": "Udacity",
        "date": "2017"
}]
 };
 
 education.display=function(){
 	for(var i=0;i<education.schools.length;i++){
     $("#education").append(HTMLschoolStart);
     $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i].name)+HTMLschoolDegree.replace("%data%",education.schools[i].degree)+HTMLschoolDates.replace("%data%",education.schools[i].dates)+HTMLschoolMajor.replace("%data%",education.schools[i].majors)+HTMLschoolLocation.replace("%data%",education.schools[i].location));
 	}
    $("#education").append(HTMLonlineClasses);
 	for( i=0;i<education.onlineCourses.length;i++)
{
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title)+HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school)+HTMLonlineDates.replace("%data%",education.onlineCourses[i].date));

}};

education.display();


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
 	for(var i=0;i<projects.project.length;i++){
     $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.project[i].title)+HTMLprojectDates.replace("%data%", projects.project[i].date)+HTMLprojectDescription.replace("%data%", projects.project[i].description)+HTMLprojectImage.replace("%data%",projects.project[i].images));
 	}

};


projects.display();
 
 $("#mapDiv").append(googleMap);

