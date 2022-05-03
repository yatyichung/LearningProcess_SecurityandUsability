/*LAB 1-2: CONSTRUCTOR FUNCTIONS*/
//FAVE FRIEND CONSTRUCTOR FUNCTION
window.onload = function(){
	var faveThree = [];//FAVE 3 ARRAY
	

	//get elements from html and set variables
	const formHandler = document.forms.fave_form;
	const outPut = document.querySelector("#faveBlock"); 
	const ol = document.querySelector("#faveList");

	//set onsubmit even for form
	formHandler.onsubmit = processForm;	

	//when form is submit, execute the code inside
	function processForm(){
		//==THIS IS WHERE WE WILL PUT FORM VALIDATIONS USING IF ELSEIF STATEMENTS==

		//Friend constructor function that holds two parameters
		function Friend(friendName, friendPhone){ 
			this.name = friendName;
			this.phone = friendPhone;
		}

		//assign new varaibels for each friend as a new Friend
		//pass in the two parameters for each friend
		var friend1 = new Friend(formHandler.name1.value,formHandler.phone1.value);
		var friend2 = new Friend(formHandler.name2.value,formHandler.phone2.value);
		var friend3 = new Friend(formHandler.name3.value,formHandler.phone3.value);
		
		//push the object into the array - faveThree
		faveThree.push(friend1,friend2,friend3);
		
		//loop through the array
		for (let i=0;i<faveThree.length;i++){
			console.log(faveThree[i]); //console log each friend
			ol.innerHTML += `<li>${faveThree[i].name}</li>`; //only display the name for each Friend and place them into an individual list 
		}


		formHandler.style.display = "none"; //form disappear
		outPut.style.display = "block"; //output content appear
		return false;//remain the same page
	} //end of processForm function
	

}//END OF onload FUNCTION