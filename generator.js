"use strict"

// Confirms that the user actually wants to go back|forward|refresh
/*              window.onbeforeunload = function() {
                return "Leaving this page will reset the wizard";
            }; */


// EDUCATION

function addEducationItem(){
	let educationList = document.getElementById("educationList")
	let newItem = document.createElement("li")
	newItem.innerHTML = '<div>\
                            <div class="left">\
                                <button class="removeItem" onclick="removeEducationItem(this)">X</button>\
                            </div>\
                            <div class="right">\
                                <select class="form-control degreeType">\
                                    <option value="Bachelors">Bachelors</option>\
                                    <option value="Masters">Masters</option>\
                                    <option value="Ph.D.">Ph.D.</option>\
                                </select>\
                                <input type="text" class="form-control schoolName" placeholder="School Name">\
                                <input type="text" class="form-control degreeName" placeholder="Major">\
                                <label for="startDate">Start Date:&nbsp;</label><input type="date" name="startDate" class="form-control date" placeholder="Start Date">\
                                <label for="endDate">End Date:&nbsp;&nbsp;</label><input type="date" name="endDate" class="form-control date" placeholder="End Date">\
                            </div>\
                        </div>'

	educationList.appendChild(newItem)
}

function removeEducationItem(education_element){
	let educationList = document.getElementById("educationList")
	let listItem = education_element.parentNode.parentNode.parentNode
	educationList.removeChild(listItem)
}



// EXPERIENCE
function addExperienceItem(){
	let educationList = document.getElementById("experienceList")
	let newItem = document.createElement("li")
	newItem.innerHTML = '<div class="experienceItem">\
                            <div class="left">\
                                <button class="removeItem" onclick="removeExperienceItem(this)">X</button>\
                            </div>\
                            <div class="right">\
                                <input type="text" class="form-control jobTitle" placeholder="Job Title">\
                                <input type="text" class="form-control companyName" placeholder="Company Name"><br>\
                                <label for="startDate">Start Date:&nbsp;</label><input type="date" name="startDate" class="form-control date" placeholder="Start Date">\
                                <label for="endDate">End Date:&nbsp;&nbsp;</label><input type="date" name="endDate" class="form-control date" placeholder="End Date">\
                                <textarea type="text" class="form-control jobDescription" placeholder="Job Description"></textarea>\
                            </div>\
                        </div>'
    experienceList.appendChild(newItem)
}

function removeExperienceItem(experience_element){
	let experienceList = document.getElementById("experienceList")
	let listItem = experience_element.parentNode.parentNode.parentNode
	experienceList.removeChild(listItem)
}


// PROJECTS
function addProjectItem(){
	let projectList = document.getElementById("projectList")
    let newProjectItem = document.createElement("li")

    // Set the innerHTML of the new Project Item
    newProjectItem.innerHTML = '<div class="experienceItem">\
                            <div class="left">\
                                <button class="removeItem" onclick="removeProjectItem(this)">X</button>\
                            </div>\
                            <div class="right">\
                                <input type="text" class="form-control" placeholder="Project Title"><br>\
                                <textarea class="form-control" placeholder="Project Description"></textarea>\
                            </div>\
                        </div>'

    // Add newProjectItem to parent list
    projectList.appendChild(newProjectItem)
}

function removeProjectItem(project_element){
	let projectList = document.getElementById("projectList")
    let projectItem = project_element.parentNode.parentNode.parentNode
    // remove projectItem from projectList
    projectList.removeChild(projectItem)
}


// SKILLS
function addSkillItem(){
	let skillList = document.getElementById('skillList')
    let skillItem = document.createElement("li")
    skillItem.innerHTML = '<div class="skillItem">\
                            <div class="left">\
                                <button class="removeItem" onclick="removeSkillItem(this)">X</button>\
                            </div>\
                            <div class="right">\
                                <input type="text" class="form-control jobTitle" placeholder="Skill Name">\
                                <input type="range" class="skillSlider" min="1" max="100" value="1">\
                            </div>\
                        </div>'
    skillList.appendChild(skillItem)
}

function removeSkillItem(skill_element){
	let skillList = document.getElementById('skillList')
    let skillItem = skill_element.parentNode.parentNode.parentNode
    skillList.removeChild(skillItem)
}



// Add function to String.prototype
String.prototype.replaceAll = function(this_string, search, replace){
    let target = this_string
    while(target.indexOf(search) >= 0){
        target = target.replace(search, replace)
    }
    return target
}



///////////////////////////////
// GATHER data and CREATE HTML page from template

function gatherData(){
    return {
        "personalName": document.getElementById("name").value.trim(),
        "personalTitle": document.getElementById("title").value.trim(),
        "personalPhone": document.getElementById("phone").value.trim(),
        "personalEmail": document.getElementById("email").value.trim(),
        "personalSummary": document.getElementById("summary").value.trim(),
        "siteUrl": document.getElementById("siteUrl").value.trim(),
        "linkedInUrl": document.getElementById("linkedInUrl").value.trim(),
        "githubUrl": document.getElementById("githubUrl").value.trim(),
        "photoUrl": document.getElementById("photoUrl").value.trim(),
        
        // Education
        "education": () => {
            const educationList = document.getElementById("educationList").getElementsByTagName("li")
            let myEdList = []
            for(let i = 0; i < educationList.length; i++){
                let education = {
                    "degreeType": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("select")[0].value.trim(),
                    "schoolName": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[0].value.trim(),
                    "degreeName": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[1].value.trim(),
                    "startDate": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[2].value,
                    "endDate": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[3].value
                }
                myEdList.push(education)
            }
            return myEdList
        },

        "experience": () => {
            const experienceList = document.getElementById("experienceList").getElementsByTagName("li")
            let myExpList = []
            for(let i = 0; i < experienceList.length; i++){
                let experience = {
                    "jobTitle": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[0].value.trim(),
                    "companyName": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[1].value.trim(),
                    "startDate": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[2].value,
                    "endDate": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[3].value,
                    "jobDescription": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("textarea")[0].value.trim()
                }
                myExpList.push(experience)
            }
            return myExpList
        },

        "projects": () => {
            const projectList = document.getElementById("projectList").getElementsByTagName("li")
            let myProjList = []
            for(let i = 0; i < projectList.length; i++){
                let project = {
                    "projectName": projectList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[0].value.trim(),
                    "projectDescription": projectList[i].getElementsByClassName("right")[0].getElementsByTagName("textarea")[0].value.trim()
                }
                myProjList.push(project)
            }
            return myProjList
        },

        "skills": () => {
            const skillList = document.getElementById("skillList").getElementsByTagName("li")
            let mySkillList = []
            for(let i = 0; i < skillList.length; i++){
                let skill = {
                    "skillName": skillList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[0].value.trim(),
                    "skillProficiency": skillList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[1].value.trim()
                }
                mySkillList.push(skill)
            }
            return mySkillList
        }
    }
}

function addEducationToResume(resume, outputHTML){
    let gen_text = ""

    resume.education().forEach((element) => {
        let startDate = (element["startDate"] != "") ? element["startDate"].slice(0,4) : ""
        let endDate = (element["endDate"] != "") ? element["endDate"].slice(0,4) : ""

        gen_text += '<div class="item">\
                        <h4 class="degree">' + element["degreeType"] + ' in ' + element["degreeName"] + '</h4>\
                        <h5 class="meta">' + element["schoolName"] + '</h5>\
                        <div class="time">'+startDate+' - '+endDate+'</div>\
                    </div>\n'
    })
    outputHTML = outputHTML.replace('{{EDUCATION-ITEMS}}', gen_text)
    return outputHTML
}

function addExperienceToResume(resume, outputHTML){
    let gen_text = ""

    resume.experience().forEach((element) => {
        let endDate = (element["endDate"] != "") ? element["endDate"] : "Present"
        gen_text += '<div class="item">\
                        <div class="meta">\
                            <div class="upper-row">\
                                <h3 class="job-title">'+element["jobTitle"]+'</h3>\
                                <div class="time">'+element["startDate"]+' - '+endDate+'</div>\
                            </div><!--//upper-row-->\
                            <div class="company">'+element["companyName"]+'</div>\
                        </div><!--//meta-->\
                        <div class="details">\
                            <p>'+element["jobDescription"]+'</p>\
                        </div><!--//details-->\
                    </div><!--//item-->\n'
    })
    outputHTML = outputHTML.replace('{{EXPERIENCE-ITEMS}}', gen_text)
    return outputHTML
}

function addProjectsToResume(resume, outputHTML){
    let gen_text = ""

    resume.projects().forEach((element) => {
        gen_text += '<div class="item">\
                        <span class="project-title">'+element["projectName"]+'</span> - <span class="project-tagline">'+element["projectDescription"]+'</span>\
                    </div><!--//item-->\n'
    })
    outputHTML = outputHTML.replace('{{PROJECT-ITEMS}}', gen_text)
    return outputHTML
}

function addSkillsToResume(resume, outputHTML){
    let gen_text = ""

    resume.skills().forEach((element) => {
        gen_text += '<div class="item">\
                        <h3 class="level-title">'+element["skillName"]+'</h3>\
                        <div class="level-bar">\
                            <div class="level-bar-inner" data-level="'+element["skillProficiency"]+'%">\
                            </div>\
                        </div><!--//level-bar-->\
                    </div><!--//item-->\n'
    })
    outputHTML = outputHTML.replace('{{SKILL-ITEMS}}', gen_text)
    return outputHTML
}

function addPersonalData(resume, outputHTML){

    outputHTML = outputHTML.replaceAll(outputHTML, '{{NAME}}', resume["personalName"])
    outputHTML = outputHTML.replaceAll(outputHTML, '{{PERSONAL-TITLE}}', resume["personalTitle"])
    outputHTML = outputHTML.replaceAll(outputHTML, '{{PERSONAL-PHONE}}', resume["personalPhone"])
    outputHTML = outputHTML.replaceAll(outputHTML, '{{PERSONAL-EMAIL}}', resume["personalEmail"])
    outputHTML = outputHTML.replaceAll(outputHTML, '{{SUMMARY}}', resume["personalSummary"])
    outputHTML = outputHTML.replaceAll(outputHTML, '{{PERSONAL-SITE}}', resume["siteUrl"])
    outputHTML = outputHTML.replaceAll(outputHTML, '{{LINKEDIN-URL}}', resume["linkedInUrl"])
    outputHTML = outputHTML.replaceAll(outputHTML, '{{GITHUB-URL}}', resume["githubUrl"])
    outputHTML = (resume["photoUrl"] != "") ? outputHTML.replaceAll(outputHTML, '{{PHOTO-URL}}', resume["photoUrl"]) 
                                            : outputHTML.replaceAll(outputHTML, '{{PHOTO-URL}}', "https://www.w3schools.com/howto/img_avatar.png")
    return outputHTML
}

function generateResumeText(resume){
    let output_text = getTestHTML()
    output_text = addEducationToResume(resume, output_text)
    output_text = addExperienceToResume(resume, output_text)
    output_text = addProjectsToResume(resume, output_text)
    output_text = addSkillsToResume(resume, output_text)
    output_text = addPersonalData(resume, output_text)
    return output_text
}

function downloadFile() {
    let resume = gatherData(),
        filename = resume["personalName"] + "_resume.html",
        element = document.createElement('a')

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(generateResumeText(resume)));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}

function preview() {
    let resume = gatherData(),
        html = generateResumeText(resume),
        iframe = document.getElementById("previewFrame"),
        iframeDoc = iframe.contentDocument || iframe.contentWindow.document

    iframeDoc.body.innerHTML = html
}



function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}



function getTestHTML(){
    return '<!DOCTYPE html>\
                <!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->\
                <!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->\
                <!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->\
                <head>\
                    <title>{{NAME}} Resume</title>\
                    <meta charset="utf-8">\
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">\
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
                    <meta name="author" content="David Ostler">\
                    <meta name="description" content="Responsive HTML5 Resume/CV Template">\
                    <!-- <link rel="shortcut icon" href="favicon.ico"> -->\
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic" rel="stylesheet" type="text/css">\
                    <!-- Global CSS -->\
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\
                    <!-- Plugins CSS -->\
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">\
                    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->\
                    <!--[if lt IE 9]>\
                      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>\
                      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>\
                    <![endif]-->\
                </head>\
                <body>\
                    <!-- Theme CSS -->\
                    <style>\
                        .email .fa, .phone. .fa, .website .fa, .linkedin .fa, .github .fa { display: inline !important; }\
                        body { font-family: "Roboto", sans-serif; color: #545E6C; background: #f5f5f5; font-size: 14px; padding: 30px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\
                        h1, h2, h3, h4, h5, h6 { font-weight: 700; }\
                        a { color: #2d7788; -webkit-transition: all 0.4s ease-in-out; -moz-transition: all 0.4s ease-in-out; -ms-transition: all 0.4s ease-in-out; -o-transition: all 0.4s ease-in-out; }\
                        a:hover { text-decoration: underline; color: #1a454f; }\
                        a:focus { text-decoration: none; }\
                        p { line-height: 1.5; }\
                        .wrapper { background: #42A8C0; max-width: 960px; margin: 0 auto; position: relative; -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); }\
                        .sidebar-wrapper { background: #42A8C0; position: absolute; right: 0; width: 240px; height: 100%; min-height: 800px; color: #fff; }\
                        .sidebar-wrapper a { color: #fff; word-wrap: break-word; }\
                        .sidebar-wrapper .profile-container { padding: 30px; background: rgba(0, 0, 0, 0.2); text-align: center; color: #fff; }\
                        .sidebar-wrapper .name { font-size: 32px; font-weight: 900; margin-top: 0; margin-bottom: 10px; }\
                        .sidebar-wrapper .tagline { color: rgba(255, 255, 255, 0.6); font-size: 16px; font-weight: 400; margin-top: 0; margin-bottom: 0; }\
                        .sidebar-wrapper .profile { margin-bottom: 15px; width:100%; border-radius: 100%;}\
                        .sidebar-wrapper .contact-list .fa { margin-right: 5px; font-size: 18px; vertical-align: middle; display: block; }\
                        .sidebar-wrapper .contact-list li { margin-bottom: 15px; }\
                        .sidebar-wrapper .contact-list li:last-child { margin-bottom: 0; }\
                        .sidebar-wrapper .contact-list .email .fa { font-size: 14px; }\
                        .sidebar-wrapper .container-block { padding: 30px; }\
                        .sidebar-wrapper .container-block-title { text-transform: uppercase; font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 15px; }\
                        .sidebar-wrapper .degree { font-size: 14px; margin-top: 0; margin-bottom: 5px; }\
                        .sidebar-wrapper .education-container .item { margin-bottom: 15px; }\
                        .sidebar-wrapper .education-container .item:last-child { margin-bottom: 0; }\
                        .sidebar-wrapper .education-container .meta { color: rgba(255, 255, 255, 0.6); font-weight: 500; margin-bottom: 0px; margin-top: 0; }\
                        .sidebar-wrapper .education-container .time { color: rgba(255, 255, 255, 0.6); font-weight: 500; margin-bottom: 0px; }\
                        .sidebar-wrapper .languages-container .lang-desc { color: rgba(255, 255, 255, 0.6); }\
                        .sidebar-wrapper .languages-list { margin-bottom: 0; }\
                        .sidebar-wrapper .languages-list li { margin-bottom: 10px; }\
                        .sidebar-wrapper .languages-list li:last-child { margin-bottom: 0; }\
                        .sidebar-wrapper .interests-list { margin-bottom: 0; }\
                        .sidebar-wrapper .interests-list li { margin-bottom: 10px; }\
                        .sidebar-wrapper .interests-list li:last-child { margin-bottom: 0; }\
                        .main-wrapper { background: #fff; padding: 60px; padding-right: 300px; }\
                        .main-wrapper .section-title { text-transform: uppercase; font-size: 20px; font-weight: 500; color: #2d7788; position: relative; margin-top: 0; margin-bottom: 20px; }\
                        .main-wrapper .section-title .fa { width: 30px; height: 30px; margin-right: 8px; display: inline-block; color: #fff; -webkit-border-radius: 50%; -moz-border-radius: 50%; -ms-border-radius: 50%; \
                            -o-border-radius: 50%; border-radius: 50%; -moz-background-clip: padding; -webkit-background-clip: padding-box; background-clip: padding-box; background: #2d7788; text-align: center; \
                            padding-top: 8px; font-size: 16px; position: relative; top: -2px; }\
                        .main-wrapper .section { margin-bottom: 60px; }\
                        .main-wrapper .experiences-section .item { margin-bottom: 30px; }\
                        .main-wrapper .upper-row { position: relative; overflow: hidden; margin-bottom: 2px; }\
                        .main-wrapper .job-title { color: #3F4650; font-size: 16px; margin-top: 0; margin-bottom: 0; font-weight: 500; }\
                        .main-wrapper .time { position: absolute; right: 0; top: 0; color: #97AAC3; }\
                        .main-wrapper .company { margin-bottom: 10px; color: #97AAC3; }\
                        .main-wrapper .project-title { font-size: 16px; font-weight: 400; margin-top: 0; margin-bottom: 5px; }\
                        .main-wrapper .projects-section .intro { margin-bottom: 30px; }\
                        .main-wrapper .projects-section .item { margin-bottom: 15px; }\
                        .skillset .item { margin-bottom: 15px; overflow: hidden; }\
                        .skillset .level-title { font-size: 14px; margin-top: 0; margin-bottom: 12px; }\
                        .skillset .level-bar { height: 12px; background: #f5f5f5; }\
                        .skillset .level-bar-inner { height: 12px; background: #7bc2d3; }\
                        .footer { padding: 30px; padding-top: 60px; }\
                        .footer .copyright { line-height: 1.6; color: #545E6C; font-size: 13px; }\
                        .footer .fa-heart { color: #fb866a; }\
                        /* Extra small devices (phones, less than 768px) */\
                        @media (max-width: 767px) { \
                          .sidebar-wrapper { position: static; width: inherit; }\
                          .main-wrapper { padding: 30px; }\
                          .main-wrapper .time { position: static; display: block; margin-top: 5px; }\
                          .main-wrapper .upper-row { margin-bottom: 0; }\
                        }\
                        /* Small devices (tablets, 768px and up) */\
                        /* Medium devices (desktops, 992px and up) */\
                        @media (min-width: 992px) {\
                          .skillset .level-title { display: inline-block; float: left; width: 30%; margin-bottom: 0; }\
                          .skillset .level-bar { display: inline-block; width: 70%; float: left; position: relative; top: 1px; }\
                        }\
                        /* Large devices (large desktops, 1200px and up) */\
                        /* Ex-Large devices (large desktops, 1200px and up) */\
                    </style>\
\
\
\
\
\
                    <div class="wrapper">\
                        <div class="sidebar-wrapper">\
                            <div class="profile-container">\
                                <!-- <img class="profile" src="assets/images/profile.png" alt="" /> -->\
                                <!-- <img class="profile" src="assets/images/avatar-icon.svg" alt="profile_icon" /> -->\
                                <!-- <img class="profile" src="https://www.w3schools.com/howto/img_avatar.png" alt="profile_icon" /> -->\
                                <img class="profile" src="{{PHOTO-URL}}" alt="profile_icon" />\
                                <!-- <img class="profile" src="https://avatars0.githubusercontent.com/u/11342204?s=460&v=4" alt="profile_icon" /> -->\
                                <h1 class="name">{{NAME}}</h1>\
                                <h3 class="tagline">{{PERSONAL-TITLE}}</h3>\
                            </div><!--//profile-container-->\
                            <div class="contact-container container-block">\
                                <ul class="list-unstyled contact-list">\
                                    <li class="email"><i class="fa fa-envelope"></i><a href="mailto: {{PERSONAL-EMAIL}}">{{PERSONAL-EMAIL}}</a></li>\
                                    <li class="phone"><i class="fa fa-phone"></i><a href="tel:{{PERSONAL-PHONE}}">{{PERSONAL-PHONE}}</a></li>\
                                    <li class="website"><i class="fa fa-globe"></i><a href="{{PERSONAL-SITE}}" target="_blank">{{PERSONAL-SITE}}</a></li>\
                                    <li class="linkedin"><i class="fa fa-linkedin"></i><a href="{{LINKEDIN-URL}}" target="_blank">{{LINKEDIN-URL}}</a></li>\
                                    <li class="github"><i class="fa fa-github"></i><a href="{{GITHUB-URL}}" target="_blank">{{GITHUB-URL}}</a></li>\
                                </ul>\
                            </div><!--//contact-container-->\
\
                            <!-- EDUCATION -->\
                            <div class="education-container container-block">\
                                <h2 class="container-block-title">Education</h2>\
                                {{EDUCATION-ITEMS}}\
                            </div><!--//education-container-->\
                        </div><!--//sidebar-wrapper-->\
\
                        <div class="main-wrapper">\
                            <section class="section summary-section">\
                                <h2 class="section-title"><i class="fa fa-user"></i>Summary</h2>\
                                <div class="summary">\
                                    {{SUMMARY}}\
                                </div><!--//summary-->\
                            </section><!--//section-->\
\
\
\
                            <!-- EXPERIENCES -->\
                            <section class="section experiences-section">\
                                <h2 class="section-title"><i class="fa fa-briefcase"></i>Experiences</h2>\
                                {{EXPERIENCE-ITEMS}}\
                            </section><!--//section-->\
\
\
\
                            <!-- PROJECTS -->\
                            <section class="section projects-section">\
                                <h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>\
                                {{PROJECT-ITEMS}}\
                            </section><!--//section-->\
\
\
\
                            <!-- SKILLS -->\
                            <section class="skills-section section">\
                                <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>\
                                <div class="skillset">\
                                    {{SKILL-ITEMS}}\
                                </div>\
                            </section><!--//skills-section-->\
                            \
                        </div><!--//main-body-->\
                    </div>\
                 \
                    <footer class="footer">\
                        <div class="text-center">\
                                  <small class="copyright">Designed by <a href="http://dro248.github.io" target="_blank">David Ostler</a>.</small>\
                        </div><!--//container-->\
                    </footer><!--//footer-->\
                 \
                    <!-- Javascript -->          \
                    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>\
                    <a href="http://dro248.github.io"></a>\
                    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>    \
                    <!-- custom js -->\
                    <script type="text/javascript">\
                        jQuery(document).ready(function($) {\
                            /*======= Skillset *=======*/\
                            $(".level-bar-inner").css("width", "0");\
                            $(window).on("load", function() {\
                                $(".level-bar-inner").each(function() {\
                                    var itemWidth = $(this).data("level");\
                                    $(this).animate({\
                                        width: itemWidth\
                                    }, 800); \
                                });\
                            });\
                        });\
                    </script>\
                </body>\
                </html>'
}
