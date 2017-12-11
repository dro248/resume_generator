
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
                                <input type="text" class="form-control degreeName" placeholder="Degree Name">\
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



///////////////////////////////

// GATHER data and CREATE HTML page from template

function gatherData(){
    return {
        "personalName": document.getElementById("name").value,
        "personalTitle": document.getElementById("title").value,
        "personalPhone": document.getElementById("phone").value,
        "personalEmail": document.getElementById("email").value,
        "siteUrl": document.getElementById("siteUrl").value,
        "linkedInUrl": document.getElementById("linkedInUrl").value,
        "githubUrl": document.getElementById("githubUrl").value,
        
        // Education
        "education": () => {
            const educationList = document.getElementById("educationList").getElementsByTagName("li")
            let myEdList = []
            for(let i = 0; i < educationList.length; i++){
                let education = {
                    "degreeType": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("select")[0].value,
                    "schoolName": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[0].value,
                    "degreeName": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[1].value,
                    "startDate": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[2].value,
                    "endDate": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[3].value
                }
                myEdList.push(education)
            }
            console.log(myEdList)
            return myEdList
        },

        "experience": () => {
            const experienceList = document.getElementById("experienceList").getElementsByTagName("li")
            let myExpList = []
            for(let i = 0; i < experienceList.length; i++){
                let experience = {
                    "jobTitle": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[0].value,
                    "companyName": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[1].value,
                    "startDate": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[2].value,
                    "endDate": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[3].value,
                    "jobDescription": experienceList[i].getElementsByClassName("right")[0].getElementsByTagName("textarea")[0].value
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
                    "projectName": projectList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[0].value,
                    "projectDescription": projectList[i].getElementsByClassName("right")[0].getElementsByTagName("textarea")[0].value
                }
                myProjList.push(project)
            }
            return myProjList
        },

        "skills": () => {
            const skillList = document.getElementById("skillList").getElementsByTagName("li")
            let mySkillList = []
            for(let i = 0; i < skillList.length; i++){
                // console.log(skillList[i].getElementsByClassName("right")[0].getElementsByTagName("inpu")[0].value)
                let skill = {
                    "skillName": skillList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[0].value,
                    "skillProficiency": skillList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[1].value
                }
                mySkillList.push(skill)
            }
            return mySkillList
        }
    }
}

function generateResumeText(resume){
    output_text = getTestHTML()
    output_text = addEducationToResume(resume, output_text)
// TODO: Add the rest of the sections to output_text


    return output_text
}

function addEducationToResume(resume, outputHTML){
    gen_text = ""

    resume.education().forEach((element) => {
        let startDate = (element["startDate"] != "") ? element["startDate"].slice(0,4) : ""
        let endDate = (element["endDate"] != "") ? element["endDate"].slice(0,4) : ""

        gen_text += '<div class="item">\
                        <h4 class="degree">' + element["degreeType"] + ' in ' + element["degreeName"] + '</h4>\
                        <h5 class="meta">' + element["schoolName"] + '</h5>\
                        <div class="time">'+startDate+' - '+endDate+'</div>\
                    </div>\n'
    })
    console.log(gen_text)


    outputHTML = outputHTML.replace('{{EDUCATION-ITEMS}}', gen_text)
    return outputHTML
}


function downloadFile() {
    let resume = gatherData()
    resume.education()
    resume.experience()
    resume.projects()
    resume.skills()

    filename = resume["personalName"] + "_resume.html"
    // text = "<h1>HELLO WORLD</h1><p>This is a generated html file.</p>"

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(generateResumeText(resume)));

    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
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
                    <!-- Theme CSS -->  \
                    <style>\
                        body { font-family: "Roboto", sans-serif; color: #545E6C; background: #f5f5f5; font-size: 14px; padding: 30px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\
                        h1, h2, h3, h4, h5, h6 { font-weight: 700; }\
                        a { color: #2d7788; -webkit-transition: all 0.4s ease-in-out; -moz-transition: all 0.4s ease-in-out; -ms-transition: all 0.4s ease-in-out; -o-transition: all 0.4s ease-in-out; }\
                        a:hover { text-decoration: underline; color: #1a454f; }\
                        a:focus { text-decoration: none; }\
                        p { line-height: 1.5; }\
                        .wrapper { background: #42A8C0; max-width: 960px; margin: 0 auto; position: relative; -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); }\
                        .sidebar-wrapper { background: #42A8C0; position: absolute; right: 0; width: 240px; height: 100%; min-height: 800px; color: #fff; }\
                        .sidebar-wrapper a { color: #fff; }\
                        .sidebar-wrapper .profile-container { padding: 30px; background: rgba(0, 0, 0, 0.2); text-align: center; color: #fff; }\
                        .sidebar-wrapper .name { font-size: 32px; font-weight: 900; margin-top: 0; margin-bottom: 10px; }\
                        .sidebar-wrapper .tagline { color: rgba(255, 255, 255, 0.6); font-size: 16px; font-weight: 400; margin-top: 0; margin-bottom: 0; }\
                        .sidebar-wrapper .profile { margin-bottom: 15px; }\
                        .sidebar-wrapper .contact-list .fa { margin-right: 5px; font-size: 18px; vertical-align: middle; }\
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
                                <img class="profile" src="assets/images/avatar-icon.svg" alt="profile_icon" />\
                                <h1 class="name">Alan Doe</h1>\
                                <h3 class="tagline">Full Stack Developer</h3>\
                            </div><!--//profile-container-->\
                            <div class="contact-container container-block">\
                                <ul class="list-unstyled contact-list">\
                                    <li class="email"><i class="fa fa-envelope"></i><a href="mailto: yourname@email.com">alan.doe@website.com</a></li>\
                                    <li class="phone"><i class="fa fa-phone"></i><a href="tel:0123 456 789">0123 456 789</a></li>\
                                    <li class="website"><i class="fa fa-globe"></i><a href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/" target="_blank">portfoliosite.com</a></li>\
                                    <li class="linkedin"><i class="fa fa-linkedin"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>\
                                    <li class="github"><i class="fa fa-github"></i><a href="#" target="_blank">github.com/username</a></li>\
                                    <li class="twitter"><i class="fa fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>\
                                </ul>\
                            </div><!--//contact-container-->\
\
\
                            <!-- EDUCATION -->\
                            <div class="education-container container-block">\
                                <h2 class="container-block-title">Education</h2>\
\
                                {{EDUCATION-ITEMS}}\
                                \
                                <!-- <div class="item">\
                                    <h4 class="degree">MSc in Computer Science</h4>\
                                    <h5 class="meta">University of London</h5>\
                                    <div class="time">2011 - 2012</div>\
                                </div>\
                                \
                                <div class="item">\
                                    <h4 class="degree">BSc in Applied Mathematics</h4>\
                                    <h5 class="meta">Bristol University</h5>\
                                    <div class="time">2007 - 2011</div>\
                                </div> -->\
\
                            </div><!--//education-container-->\
                        </div><!--//sidebar-wrapper-->\
\
                        <div class="main-wrapper">\
\
                            <section class="section summary-section">\
                                <h2 class="section-title"><i class="fa fa-user"></i>Career Profile</h2>\
                                <div class="summary">\
                                    <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>\
                                </div><!--//summary-->\
                            </section><!--//section-->\
\
\
\
                            <!-- EXPERIENCES -->\
                            <section class="section experiences-section">\
                                <h2 class="section-title"><i class="fa fa-briefcase"></i>Experiences</h2>\
\
                                <div class="item">\
                                    <div class="meta">\
                                        <div class="upper-row">\
                                            <h3 class="job-title">Lead Developer</h3>\
                                            <div class="time">2015 - Present</div>\
                                        </div><!--//upper-row-->\
                                        <div class="company">Startup Hubs, San Francisco</div>\
                                    </div><!--//meta-->\
                                    <div class="details">\
                                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  \
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>\
                                    </div><!--//details-->\
                                </div><!--//item-->\
\
                                <div class="item">\
                                    <div class="meta">\
                                        <div class="upper-row">\
                                            <h3 class="job-title">Senior Software Engineer</h3>\
                                            <div class="time">2014 - 2015</div>\
                                        </div><!--//upper-row-->\
                                        <div class="company">Google, London</div>\
                                    </div><!--//meta-->\
                                    <div class="details">\
                                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  \
\
                                    </div><!--//details-->\
                                </div><!--//item-->\
\
                                <div class="item">\
                                    <div class="meta">\
                                        <div class="upper-row">\
                                            <h3 class="job-title">UI Developer</h3>\
                                            <div class="time">2012 - 2014</div>\
                                        </div><!--//upper-row-->\
                                        <div class="company">Amazon, London</div>\
                                    </div><!--//meta-->\
                                    <div class="details">\
                                        <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  \
                                    </div><!--//details-->\
                                </div><!--//item-->\
                                \
                            </section><!--//section-->\
\
\
\
\
                            <!-- PROJECTS -->\
                            <section class="section projects-section">\
                                <h2 class="section-title"><i class="fa fa-archive"></i>Projects</h2>\
                                <div class="intro">\
                                    <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>\
                                </div><!--//intro-->\
                                <div class="item">\
                                    <span class="project-title"><a href="#hook">Velocity</a></span> - <span class="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>\
                                </div><!--//item-->\
                                <div class="item">\
                                    <span class="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> - \
                                    <span class="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>\
                                </div><!--//item-->\
                                <div class="item">\
                                    <span class="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" target="_blank">Tempo</a></span> - <span class="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>\
                                </div><!--//item-->\
                                <div class="item">\
                                    <span class="project-title"><a href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" target="_blank">Atom</a></span> - <span class="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>\
                                </div><!--//item-->\
                                <div class="item">\
                                    <span class="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">Delta</a></span> - <span class="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>\
                                </div><!--//item-->\
                            </section><!--//section-->\
\
\
\
\
\
                            <!-- SKILLS -->\
                            <section class="skills-section section">\
                                <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>\
                                <div class="skillset">\
                                    <div class="item">\
                                        <h3 class="level-title">Python &amp; Django</h3>\
                                        <div class="level-bar">\
                                            <div class="level-bar-inner" data-level="98%">\
                                            </div>\
                                        </div><!--//level-bar-->\
                                    </div><!--//item-->\
                                    \
                                    <div class="item">\
                                        <h3 class="level-title">Javascript &amp; jQuery</h3>\
                                        <div class="level-bar">\
                                            <div class="level-bar-inner" data-level="98%">\
                                            </div>\
                                        </div><!--//level-bar-->\
                                    </div><!--//item-->\
                                    \
                                    <div class="item">\
                                        <h3 class="level-title">Angular</h3>\
                                        <div class="level-bar">\
                                            <div class="level-bar-inner" data-level="98%">\
                                            </div>\
                                        </div><!--//level-bar-->\
                                    </div><!--//item-->\
                                    \
                                    <div class="item">\
                                        <h3 class="level-title">HTML5 &amp; CSS</h3>\
                                        <div class="level-bar">\
                                            <div class="level-bar-inner" data-level="95%">\
                                            </div>\
                                        </div><!--//level-bar-->\
                                    </div><!--//item-->\
                                    \
                                    <div class="item">\
                                        <h3 class="level-title">Ruby on Rails</h3>\
                                        <div class="level-bar">\
                                            <div class="level-bar-inner" data-level="85%">\
                                            </div>\
                                        </div><!--//level-bar-->\
                                    </div><!--//item-->\
                                    \
                                    <div class="item">\
                                        <h3 class="level-title">Sketch &amp; Photoshop</h3>\
                                        <div class="level-bar">\
                                            <div class="level-bar-inner" data-level="60%">\
                                            </div>\
                                        </div><!--//level-bar-->\
                                    </div><!--//item-->\
                                    \
                                </div>  \
                            </section><!--//skills-section-->\
                            \
                        </div><!--//main-body-->\
                    </div>\
                 \
                    <footer class="footer">\
                        <div class="text-center">\
                                  <small class="copyright">Designed by <a href="http://dro248.github.io" target="_blank">David Ostler</a> for developers</small>\
                        </div><!--//container-->\
                    </footer><!--//footer-->\
                 \
                    <!-- Javascript -->          \
                    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>\
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