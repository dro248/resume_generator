
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
                                    <option value="bachelors">Bachelors</option>\
                                    <option value="masters">Masters</option>\
                                    <option value="phd">Ph.D.</option>\
                                </select>\
                                <input type="text" class="form-control schoolName" placeholder="School Name">\
                                <input type="text" class="form-control degreeName" placeholder="Degree Name">\
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
                    "degreeName": educationList[i].getElementsByClassName("right")[0].getElementsByTagName("input")[1].value
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


function downloadFile() {
    let resume = gatherData()
    resume.education()
    resume.experience()
    resume.projects()
    resume.skills()
    return

    filename = resume["personalName"] + "_resume.html"
    text = "<h1>HELLO WORLD</h1><p>This is a generated html file.</p>"

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}
