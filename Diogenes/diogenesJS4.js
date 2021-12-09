
var StructureLibrary;

$.getJSON("http://127.0.0.1:5500/Diogenes%20JSON%20Comment%20Banks/structure_comments.json", (StructureLibraryJSON) => {
  StructureLibrary = StructureLibraryJSON;
});

console.log(StructureLibrary)


function printOutput() {

  
    
  
  
  
  $.getJSON("http://127.0.0.1:5500/Diogenes%20JSON%20Comment%20Banks/demonstration_of_knowledge_comments.json", (DemonstrationOfKnowledgeLibraryJSON) => {
    var DemonstrationOfKnowledgeLibrary = DemonstrationOfKnowledgeLibraryJSON
    console.log(DemonstrationOfKnowledgeLibrary)
  });
  
  $.getJSON("http://127.0.0.1:5500/Diogenes%20JSON%20Comment%20Banks/engagement_with_theory_comments.json", (EngagementWithTheoryLibraryJSON) => {
    var EngagementWithTheoryLibrary = EngagementWithTheoryLibraryJSON
    console.log(EngagementWithTheoryLibrary)
  });
  
  $.getJSON("http://127.0.0.1:5500/Diogenes%20JSON%20Comment%20Banks/writing_comments.json", (WritingLibraryJSON) => {
    var WritingLibrary = WritingLibraryJSON
    console.log(WritingLibrary)
  });
  





var Criteria1Val = document.getElementById("Criteria-1").value
var Criteria2Val = document.getElementById("Criteria-2").value    
var Criteria3Val = document.getElementById("Criteria-3").value    
var Criteria4Val = document.getElementById("Criteria-4").value         
var Slider1Val = document.getElementById('criteria-1-slider').value
var Slider2Val = document.getElementById('criteria-2-slider').value
var Slider3Val = document.getElementById('criteria-3-slider').value
var Slider4Val = document.getElementById('criteria-4-slider').value
var OutputTextBox = document.getElementById("textBox")


if (Criteria1Val == "structure")
  
  
if (Criteria1Val == "demonstration_of_knowledge")
  var data1 = DemonstrationOfKnowledgeLibrary
if (Criteria1Val == "engagement_with_theory")
  var data1 = EngagementWithTheoryLibrary
if (Criteria1Val == "writing")
  var data1 = WritingLibrary  

if (Slider1Val == "1") 
  var Criteria1Variable = 1


else if (Slider1Val == "2")  
  var Criteria1Variable = 2


else if (Slider1Val == "3") 
  var Criteria1Variable = 3


else if (Slider1Val == "4") 
  var Criteria1Variable = 4

else if (Slider1Val == "5") { 
  var Criteria1Variable = 5
}




  if (Criteria1Variable == 1)  
  OutputTextBox.value = OutputTextBox.value + data1.NeedsImprovement[Math.floor(Math.random()*data1.NeedsImprovement.length)];

  else if (Criteria1Variable == 2)
  OutputTextBox.value = OutputTextBox.value + data1.Developing[Math.floor(Math.random()* data1.Developing.length)] 

  else if (Criteria1Variable == 3)
  OutputTextBox.value = OutputTextBox.value + data1.Developed[Math.floor(Math.random()* data1.Developed.length)]

  else if (Criteria1Variable == 4)
  OutputTextBox.value = OutputTextBox.value + data1.Comprehensive[Math.floor(Math.random()* data1.Comprehensive.length)]

  else if (Criteria1Variable == 5)
  OutputTextBox.value = OutputTextBox.value + data1.Exceptional[Math.floor(Math.random()* data1.Exceptional.length)]

    else 
  OutputTextBox.value = OutputTextBox.value + "There is a problem here..."
}




function ClearTextBox(){
  var OutputTextBox = document.getElementById("textBox")
  OutputTextBox.value = ""; 
}
