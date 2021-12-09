var Criteria1Val = document.getElementById("Criteria-1").value
var Criteria2Val = document.getElementById("Criteria-2").value    
var Criteria3Val = document.getElementById("Criteria-3").value    
var Criteria4Val = document.getElementById("Criteria-4").value  

var OutputTextBox = document.getElementById("textBox")


const criteria1Box = document.getElementById('Criteria-1');
  

async function checkCriteria1() {
  if (criteria1Box.value == "structure"){
    Criteria1Val = 1
    console.log("Structure");
    console.log(Criteria1Val)
    fetch("http://127.0.0.1:5500/Diogenes%20JSON%20Comment%20Banks/structure_comments.json")
    .then(response => response.json())
    .then(data => OutputTextBox.value = "" + (data.NeedsImprovement[Math.floor(Math.random()*data.NeedsImprovement.length)]))
    
    }
  else if (criteria1Box.value == "demonstration_of_knowledge"){
    Criteria1Val = 2
    console.log("Demonstration of Knowledge");
    console.log(Criteria1Val)
    fetch("http://127.0.0.1:5500/Diogenes%20JSON%20Comment%20Banks/demonstration_of_knowledge_comments.json")
    .then(response => response.json())
    .then(data => OutputTextBox.value = "" + (data.NeedsImprovement[Math.floor(Math.random()*data.NeedsImprovement.length)]))
       
    }
  else if (criteria1Box.value == "engagement_with_theory"){
    Criteria1Val = 3
    console.log("Engagement with Theory");
    console.log(Criteria1Val)
    fetch("http://127.0.0.1:5500/Diogenes%20JSON%20Comment%20Banks/engagement_with_theory_comments.json")
    .then(data => OutputTextBox.value = "" + (data.NeedsImprovement[Math.floor(Math.random()*data.NeedsImprovement.length)]))
    
     
    }
  else if (criteria1Box.value == "writing"){
    Criteria1Val = 4
    console.log("Writing");
    console.log(Criteria1Val)
    fetch("http://127.0.0.1:5500/Diogenes%20JSON%20Comment%20Banks/writing_comments.json")
    .then(data => OutputTextBox.value = "" + (data.NeedsImprovement[Math.floor(Math.random()*data.NeedsImprovement.length)]))
    
       
    }  
  
  }

criteria1Box.addEventListener("change", checkCriteria1)


const criteria1Slider = document.getElementById('criteria-1-slider')


function checkSlider1() {
  if (criteria1Slider.value == "1"){ 
  var Criteria1Variable = 1
  console.log(Criteria1Variable)
  return Criteria1Variable
  }
  else if (criteria1Slider.value == "2")  {
    var Criteria1Variable = 2
    console.log(Criteria1Variable)
    return Criteria1Variable
  }
  else if (criteria1Slider.value == "3") {
    var Criteria1Variable = 3
    console.log(Criteria1Variable)
    return Criteria1Variable
  }
  else if (criteria1Slider.value == "4") {
    var Criteria1Variable = 4
    console.log(Criteria1Variable)
    return Criteria1Variable
  }
  else if (criteria1Slider.value == "5") { 
    var Criteria1Variable = 5
    console.log(Criteria1Variable)
    return Criteria1Variable
  }
}

criteria1Slider.addEventListener("change", checkSlider1)


///////////////////////////////////////////////
  


function printOutput() {
  var CriteriaTestVar = checkSlider1()
  var TestVal = checkCriteria1()
  console.log(TestVal)
  
    if (CriteriaTestVar == 1){
    OutputTextBox.value = OutputTextBox.value + data.NeedsImprovement[Math.floor(Math.random()*data.NeedsImprovement.length)];
    }  
    else if (CriteriaTestVar == 2){
    OutputTextBox.value = OutputTextBox.value + data.Developing[Math.floor(Math.random()* data.Developing.length)] 
    }
    else if (CriteriaTestVar == 3){
    OutputTextBox.value = OutputTextBox.value + data.Developed[Math.floor(Math.random()* data.Developed.length)]
    }
    else if (CriteriaTestVar == 4){
    OutputTextBox.value = OutputTextBox.value + data.Comprehensive[Math.floor(Math.random()* data.Comprehensive.length)]
    }
    else if (CriteriaTestVar == 5){
    OutputTextBox.value = OutputTextBox.value + data.Exceptional[Math.floor(Math.random()* data.Exceptional.length)]
    }
      else 
    OutputTextBox.value = OutputTextBox.value + "There is a problem here..."
    }
  




function ClearTextBox(){
   OutputTextBox.value = ""; 
}
