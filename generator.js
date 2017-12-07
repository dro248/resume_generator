
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