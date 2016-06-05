var bio = {
    "name" : "Galina Ilchenco",
    "role" : "  Web Developer",
    "contacts": {
        "mobile" : "650-924-8286",
        "email" : "g.ilchenco@gmail.com",
        "github": "https://github.com/galina7",
        "twitter": "fakeTwitter",
        "location" : "San Francisco, USA",
        "linkedin": "https://www.linkedin.com/in/galina-ilchenco-b3a57a15"
    },
    "welcomeMessage" : "Be who you are and say what you feel because " +
        "those who mind don't matter and those who matter don't mind. -- Dr.Suess",
    "skills" : ["HTML", "CSS", "jQuery", "Javascript", "Selenium", "Appium"],
    "biopic" : "images/me.JPG",

    display: function() {
        var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%url%", bio.contacts.github);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email).replace("%url%", "mailto:g.ilchenco@gmail.com");
        var formattedLinkedIn = HTMLcontactGeneric.replace("%contact%","linkedin").replace("%data%", bio.contacts.linkedin).replace("%url%", bio.contacts.linkedin);

        $("#header").prepend(formattedImg).prepend(formattedRole).prepend(formattedName);
        $("#header").append(HTMLskillsStart);
        $("#header").append(formattedHTMLwelcomeMsg);

        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%",skill);
            $("#skills").append(formattedSkills);
        });

        $("#footerContacts").append(formattedHTMLgithub, formattedHTMLemail, formattedLinkedIn);
    }
};
bio.display();

var education = {
    "schools": [
    {
        "name": "College of NYIT",
        "location": "New York, NY",
        "degree": "MBA",
        "majors": ["fake1", "fake2"],
        "dates": "2005-2007",
        "url": "http://www.nyit.edu/"
    },
    {
        "name": "Diablo Valley College",
        "location": "Pleasant Hill, CA",
        "degree": "CS",
        "majors": ["fake1", "fake2"],
        "dates": "1992-1994",
        "url": "http://www.dvc.edu/"
    },
    {
        "name": "State Art College",
        "location": "Minsk, Belarus",
        "degree": "Graphic Design",
        "majors": ["fake1", "fake2"],
        "dates": "1980-1985",
        "url": "http://bdam.by/"
    }],

    "onlineCourses": [
    {
        "title": "Front-End Developer",
        "school": "Udacity",
        "date": "March-August 2016",
        "url": "https://www.udacity.com/"
    }],

    display: function() {
        $("#education").append(HTMLschoolStart);
        $("#education").append(HTMLonlineClassesStart);

        education.schools.forEach(function(school){
            var formattedHTMLschoolName = HTMLschoolName.replace("%url%", school.url).replace("%data%", school.name);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

            $(".education-entry:last").append(formattedHTMLschoolName+formattedHTMLschoolDegree, formattedHTMLschoolDates, formattedHTMLschoolMajor);
        });

        education.onlineCourses.forEach(function(course){
            $(".courses-entry").append(HTMLonlineClasses);
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", course.date);
            var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", course.url).replace("%url%", course.url)
            $(".courses-entry:last").append(formattedHTMLonlineTitle, formattedHTMLonlineSchool, formattedHTMLonlineDates,formattedHTMLonlineURL);
        });
    }
};
education.display();

var work = {
    "jobs": [
    {
        "employer": "Financial Freedom Network",
        "title": "QA Engineer",
        "location": "San Mateo, CA",
        "dates": "March 2016 - Present",
        "description": "",
        "url": "http://www.freedomdebtrelief.com/"
    },
    {
        "employer": "Yuzu",
        "title": "QA Engineer",
        "location": "Mountain View, CA",
        "dates": "January 2015 - January 2016",
        "description": "Defined end-to-end QA processes, created and maintained QA Wiki page, created templates test case and test plans used throughout team. Represented QA team to Development, Design and Product teams, and maintained relationships and communication with all groups. Planned and executed all aspects of testing and delivering the first MacOS version of Yuzu product. Developed automated XCUITest suite for iOS app using Swift 2.0 in XCode.",
        "url": "https://www.yuzu.com/"
    },
    {
        "employer": "Barnes & Noble, Digital Education Division",
        "title": "QA Engineer",
        "location": "Palo Alto, CA",
        "dates": "April 2012 - January 2015",
        "description": "Developed and implemented the test plans and test cases for Library area. Conducted Smoke and Functionality testing for Course and Terms Views areas. Closely involved in the design and overall review of Accessibility functionality. Actively utilized Xcode for debugging software failures and conducting performance testing on iOS platform. Utilized ADB and DDMS tools for debugging purposes and logs collection on Android platform.",
        "url": "http://www.barnesandnoble.com/"
    },
    {
        "employer": "Lab 126",
        "title": "QA Engineer",
        "location": "Cupertino, CA",
        "dates": "August 2011 - April 2012",
        "description": "Documented, designed and developed test plans for platform functionality of Android based wireless consumer devices (Kindle Fire). Analyzed business requirements, software requirement specifications to create test cases for manual and automated testing. . Actively working with the core platform team to ensure the device quality and core API functionality.. Used ADB and DDMS to analyze defects, collect the logs and various debugging purposes.",
        "url": "http://lab126.com/"
    }],

    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("%url%", job.url);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var fromattedEmplTitle = formattedEmployer + "  " + formattedTitle;
            var formattedDate = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(fromattedEmplTitle, formattedDate, formattedLocation, formattedDescription);
        });
    }
};
work.display();

var projects = {
    "projects": [
    {
    "title": "Waterfalls Trading Card",
    "dates": "2016",
    "description": "Udacity CSS project",
    "images": ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"],
    //the images are from the following sites:
    //http://www.appszoom.com/android_applications/health/pretty-waterfall-pics_bcxak.html
    //http://traverseworld.com/Takachiho/Takachiho-Gorge.html
    //http://www.appszoom.com/android_applications/photography/most-beautiful-waterfall-hd_ixmwd.html
    }],

    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedHTMLprojectTitle, formattedHTMLprojectDates, formattedHTMLprojectDescription);

            if (project.images.length > 0){
                project.images.forEach(function(img) {
                    var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", img);
                     $(".project-entry:last").append(formattedHTMLprojectImage);
                });
            }
        });
    }
};
projects.display();






//jQUERY EFECTS

//internationalize the name
$("#name").hover(
    function() {
        var n = $(this).text();
        var names = n.split(" ");
        names[1] = names[1].toUpperCase();
        names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
        var finalName = names.join(" ");
        $("#name").text(finalName);
    },
    function() {
        $("#name").text(bio.name);
    }
);

//toggle the bio picture
$(".biopic").click(
    function(){
        if($(this).attr("src") === "images/me.JPG"){
            $(this).attr("src", "images/me2.JPG");  //image from http://www.icuong.com/html/painting_03.htm
        }else{
            $(this).attr("src", "images/me.JPG");
        }
});

//bounce text
$(".bounce").click(
    function() {
        $(this).effect( "bounce", "slow" );
});

//to display the map
$("#mapDiv").append(googleMap);