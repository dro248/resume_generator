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
	console.log(educationList)
}

function removeEducationItem(element){
	console.log(element)
	let educationList = document.getElementById("educationList")
	let listItem = element.parentNode.parentNode.parentNode

	educationList.removeChild(listItem)
}