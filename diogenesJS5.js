//solve out of sequence generation
// load to server


function checkReferencing(){
   var passCheck = document.getElementById("RefPass").checked
   var failCheck = document.getElementById("RefFail").checked 
    
   if (passCheck == true){
    
    var refVar = 1
    return refVar
    }
  if (failCheck == true){
    
     refVar = 2
    return refVar
  }
        
}


function removeReferencingCheck1(){
  var passCheck = document.getElementById("RefPass").checked
    if (passCheck == true){
    document.getElementById("RefFail").checked = false
    
  }

}

function removeReferencingCheck2(){
  
  var failCheck = document.getElementById("RefFail").checked
  if (failCheck == true){
    document.getElementById("RefPass").checked = false
    
  }
    
}


referencingPassButton = document.getElementById("RefPass")
referencingFailButton = document.getElementById("RefFail")

referencingPassButton.addEventListener("change", removeReferencingCheck1)
referencingFailButton.addEventListener("change", removeReferencingCheck2)




//////////////////////////////////////

function removeFinalComplimentCheck1(){
  var complimentCheck = document.getElementById("GiveCompliment").checked 
  if (complimentCheck == true){
    document.getElementById("NeedsImprovement").checked = false
    
  }
}

function removeFinalComplimentCheck2(){
  var improveCheck = document.getElementById("NeedsImprovement").checked
  if (improveCheck == true){
    document.getElementById("GiveCompliment").checked = false
    
  }
}

complimentButton = document.getElementById("GiveCompliment")
improveButton = document.getElementById("NeedsImprovement")

complimentButton.addEventListener("change", removeFinalComplimentCheck1)
improveButton.addEventListener("change", removeFinalComplimentCheck2)

function finalComment(){
  var complimentCheck = document.getElementById("GiveCompliment").checked 
  var improveCheck = document.getElementById("NeedsImprovement").checked
  if (complimentCheck == true){
  var commentVar = 1
    return commentVar
  }
  if (improveCheck == true){
    commentVar = 2
    return commentVar
  }
}



function latePenalty(){
  var checkLate = document.getElementById("lateSubmission").checked
  if (checkLate == true){
    var lateSubmission = 1
    return lateSubmission
  }
  if (checkLate == false){
    var lateSubmission = 0
    return lateSubmission
  }

}


function checkSentiment(){
  var sentimentSelection = document.getElementById("sentimentSelect").value
  if (sentimentSelection == "Excellent"){
    var sentimentVar = 1
    return sentimentVar
  }
  else if (sentimentSelection == "Interesting"){
    sentimentVar = 2
    return sentimentVar
  }

  else if (sentimentSelection == "Persuasive"){
    var sentimentVar = 3
    return sentimentVar
  }
  else if (sentimentSelection == "Problematic"){
    var sentimentVar = 4
    return sentimentVar
  }
  else if (sentimentSelection == "Reasonable"){
    var sentimentVar = 5
    return sentimentVar
  }
}

//////////////////////////////////////////////////////
var Criteria1Val = document.getElementById("Criteria-1").value
var Criteria2Val = document.getElementById("Criteria-2").value    
var Criteria3Val = document.getElementById("Criteria-3").value    
var Criteria4Val = document.getElementById("Criteria-4").value  

var OutputTextBox = document.getElementById("textBox")


const criteria1Box = document.getElementById('Criteria-1');
const criteria2Box = document.getElementById('Criteria-2');
const criteria3Box = document.getElementById('Criteria-3');
const criteria4Box = document.getElementById('Criteria-4');


function checkCriteria(criteriaNoBox) {
  if (criteriaNoBox.value == "structure"){
    var CriteriaVal = 1  
    return CriteriaVal    
    }
  else if (criteriaNoBox.value == "demonstration_of_knowledge"){
    CriteriaVal = 2
    
    
    return CriteriaVal
    }
  else if (criteriaNoBox.value == "engagement_with_theory"){
    CriteriaVal = 3
    
    return CriteriaVal
    }
  else if (criteriaNoBox.value == "writing"){
    CriteriaVal = 4
    
    
    return CriteriaVal
    }  
  }

criteria1Box.addEventListener("change", checkCriteria(criteria1Box))
criteria2Box.addEventListener("change", checkCriteria(criteria2Box))
criteria3Box.addEventListener("change", checkCriteria(criteria3Box))
criteria4Box.addEventListener("change", checkCriteria(criteria4Box))


///////////////////////////////////////
const criteria1Slider = document.getElementById('criteria-1-slider')
const criteria2Slider = document.getElementById('criteria-2-slider')
const criteria3Slider = document.getElementById('criteria-3-slider')
const criteria4Slider = document.getElementById('criteria-4-slider')




function checkSlider(criteriaNoSlider) {
  if (criteriaNoSlider.value == "1"){ 
    var CriteriaVariable = 1
    
    return CriteriaVariable
  }
  else if (criteriaNoSlider.value == "2")  {
    var CriteriaVariable = 2
    
    return CriteriaVariable
  }
  else if (criteriaNoSlider.value == "3") {
    var CriteriaVariable = 3
    
    return CriteriaVariable
  }
  else if (criteriaNoSlider.value == "4") {
    var CriteriaVariable = 4
    
    return CriteriaVariable
  }
  else if (criteriaNoSlider.value == "5") { 
    var CriteriaVariable = 5
    
    return CriteriaVariable
  }
}

criteria1Slider.addEventListener("change", checkSlider(criteria1Slider))
criteria2Slider.addEventListener("change", checkSlider(criteria2Slider))
criteria3Slider.addEventListener("change", checkSlider(criteria3Slider))
criteria4Slider.addEventListener("change", checkSlider(criteria4Slider))

const criteria1SliderLabel = document.getElementById('criteria-1-slider-label')
const criteria2SliderLabel = document.getElementById('criteria-2-slider-label')
const criteria3SliderLabel = document.getElementById('criteria-3-slider-label')
const criteria4SliderLabel = document.getElementById('criteria-4-slider-label')


function changeSliderLabel1(){
  if (criteria1Slider.value == "0"){
    criteria1SliderLabel.innerHTML = "No value"
    
  
  }
  if (criteria1Slider.value == "1"){
    criteria1SliderLabel.innerHTML = "Needs Improvement 50% - 59%"
  
  }
  if (criteria1Slider.value == "2"){
    criteria1SliderLabel.innerHTML = "Developing 60% - 69%"
  
  }
  if (criteria1Slider.value == "3"){
    criteria1SliderLabel.innerHTML = "Developed 70% - 74%"
    
  }
  if (criteria1Slider.value == "4"){
    criteria1SliderLabel.innerHTML = "Comprehensive 74% - 79%"
    
  }
  if (criteria1Slider.value == "5"){
    criteria1SliderLabel.innerHTML = "Exceptional 80% - 100%"
    
  }

}




function changeSliderLabel2(){
  if (criteria2Slider.value == "0"){
    criteria2SliderLabel.innerHTML = "No value"
    
  
  }
  if (criteria2Slider.value == "1"){
    criteria2SliderLabel.innerHTML = "Needs Improvement 50% - 59%"
  
  }
  if (criteria2Slider.value == "2"){
    criteria2sliderLabel.innerHTML = "Developing 60% - 69%"
  
  }
  if (criteria2Slider.value == "3"){
    criteria2SliderLabel.innerHTML = "Developed 70% - 74%"
    
  }
  if (criteria2Slider.value == "4"){
    criteria2SliderLabel.innerHTML = "Comprehensive 74% - 79%"
    
  }
  if (criteria2Slider.value == "5"){
    criteria2SliderLabel.innerHTML = "Exceptional 80% - 100%"
    
  }

}


function changeSliderLabel3(){
  if (criteria3Slider.value == "0"){
    criteria3SliderLabel.innerHTML = "No value"
    
  
  }
  if (criteria3Slider.value == "1"){
    criteria3SliderLabel.innerHTML = "Needs Improvement 50% - 59%"
  
  }
  if (criteria3Slider.value == "2"){
    criteria3SliderLabel.innerHTML = "Developing 60% - 69%"
  
  }
  if (criteria3Slider.value == "3"){
    criteria3SliderLabel.innerHTML = "Developed 70% - 74%"
    
  }
  if (criteria3Slider.value == "4"){
    criteria3SliderLabel.innerHTML = "Comprehensive 74% - 79%"
    
  }
  if (criteria3Slider.value == "5"){
    criteria3SliderLabel.innerHTML = "Exceptional 80% - 100%"
    
  }

}


function changeSliderLabel4(){
  if (criteria4Slider.value == "0"){
    criteria4SliderLabel.innerHTML = "No value"
    
    }
  if (criteria4Slider.value == "1"){
    criteria4SliderLabel.innerHTML = "Needs Improvement 50% - 59%"
  
  }
  if (criteria4Slider.value == "2"){
    criteria4SliderLabel.innerHTML = "Developing 60% - 69%"
  
  }
  if (criteria4Slider.value == "3"){
    criteria4SliderLabel.innerHTML = "Developed 70% - 74%"
    
  }
  if (criteria4Slider.value == "4"){
    criteria1SliderLabel.innerHTML = "Comprehensive 74% - 79%"
    
  }
  if (criteria4Slider.value == "5"){
    criteria1SliderLabel.innerHTML = "Exceptional 80% - 100%"
    
  }

}








criteria1Slider.addEventListener("change", changeSliderLabel1)
criteria2Slider.addEventListener("change", changeSliderLabel2)
criteria3Slider.addEventListener("change", changeSliderLabel3)
criteria4Slider.addEventListener("change", changeSliderLabel4)


///////////////////////////////////////////////
  


function printOutput() {
  

  OutputTextBox.value = ""

  var subjectCode = document.getElementById("subject").value
  var studentName = document.getElementById("studentName").value
  
  console.log(studentName)

  OutputTextBox.value = OutputTextBox.value + "Thank you for your submission to " + subjectCode + ", " + studentName + "." + "\n"
  
  

////////////////////////////////////
  
  var sentimentVar = checkSentiment()


  var SentimentJSON = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/opening_comments.json")

  if (sentimentVar == 1){
    SentimentJSON
    .then(response => response.json())
    .then(SentimentJSON => OutputTextBox.value = OutputTextBox.value + SentimentJSON.Excellent[Math.floor(Math.random()*SentimentJSON.Excellent.length)] )
  }
  if (sentimentVar == 2){
    SentimentJSON
    .then(response => response.json())
    .then(SentimentJSON =>OutputTextBox.value = OutputTextBox.value + SentimentJSON.Interesting[Math.floor(Math.random()*SentimentJSON.Interesting.length)] )
  }
  if (sentimentVar == 3){
    SentimentJSON
    .then(response => response.json())
    .then(SentimentJSON => OutputTextBox.value = OutputTextBox.value + SentimentJSON.Persuasive[Math.floor(Math.random()*SentimentJSON.Persuasive.length)] )
  }
  if (sentimentVar == 4){
    SentimentJSON
    .then(response => response.json())
    .then(SentimentJSON => OutputTextBox.value = OutputTextBox.value + SentimentJSON.Problematic[Math.floor(Math.random()*SentimentJSON.Problematic.length)] )
  }
  if (sentimentVar == 5){
    SentimentJSON
    .then(response => response.json())
    .then(SentimentJSON => OutputTextBox.value = OutputTextBox.value + SentimentJSON.Reasonable[Math.floor(Math.random()*SentimentJSON.Reasonable.length)] )
  }






////////////////////////////////////


  var CriteriaVar1 = checkCriteria(criteria1Box)
  var CriteriaVar2 = checkCriteria(criteria2Box)
  var CriteriaVar3 = checkCriteria(criteria3Box)
  var CriteriaVar4 = checkCriteria(criteria4Box)

 
  
  if (CriteriaVar1 == 1) {
  var data1 = fetch("http://192.168.1.117/Diogenes JSON Comment Banks/structure_comments.json")
  }

  if (CriteriaVar1 == 2){
  data1 = fetch("http://192.168.1.117/Diogenes JSON Comment Banks/demonstration_of_knowledge_comments.json")
  }

  if (CriteriaVar1 == 3){
  data1 = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/engagement_with_theory_comments.json")
  }
  if (CriteriaVar1 == 4){
  data1 = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/writing_comments.json")
  }


  if (CriteriaVar2 == 1) {
  var data2 = fetch("http://192.168.1.117/Diogenes JSON Comment Banks/structure_comments.json")
    }
  
  if (CriteriaVar2 == 2){
  data2 = fetch("http://192.168.1.117/Diogenes JSON Comment Banks/demonstration_of_knowledge_comments.json")
  }

  if (CriteriaVar2 == 3){
  data2 = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/engagement_with_theory_comments.json")
  }
  if (CriteriaVar2 == 4){
  data2 = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/writing_comments.json")
  }

  if (CriteriaVar3 == 1) {
  var data3 = fetch("http://192.168.1.117/Diogenes JSON Comment Banks/structure_comments.json")
  }

  if (CriteriaVar3 == 2){
  data3 = fetch("http://192.168.1.117/Diogenes JSON Comment Banks/demonstration_of_knowledge_comments.json")
  }

  if (CriteriaVar3 == 3){
  data3 = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/engagement_with_theory_comments.json")
  }
  if (CriteriaVar3 == 4){
  data3 = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/writing_comments.json")
  }

  
  if (CriteriaVar4 == 1) {
  var data4 = fetch("http://192.168.1.117/Diogenes JSON Comment Banks/structure_comments.json")
    }
  
  if (CriteriaVar4 == 2){
  data4 = fetch("http://192.168.1.117/Diogenes JSON Comment Banks/demonstration_of_knowledge_comments.json")
  }

  if (CriteriaVar4 == 3){
  data4 = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/engagement_with_theory_comments.json")
  }
  if (CriteriaVar4 == 4){
  data4 = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/writing_comments.json")
  }



    var SliderVar1 = checkSlider(criteria1Slider)
    var SliderVar2 = checkSlider(criteria2Slider)
    var SliderVar3 = checkSlider(criteria3Slider)
    var SliderVar4 = checkSlider(criteria4Slider)
    
    
  if (SliderVar1 == 1){
    data1
    .then(response => response.json())
    .then(data1 => OutputTextBox.value = OutputTextBox.value + data1.NeedsImprovement[Math.floor(Math.random()*data1.NeedsImprovement.length)])
    }  
  if (SliderVar1 == 2){
    data1
    .then(response => response.json())
    .then(data1 => OutputTextBox.value = OutputTextBox.value + data1.Developing[Math.floor(Math.random()*data1.Developing.length)]) 
  }
  if (SliderVar1 == 3){
  data1
    .then(response => response.json())
    .then(data1 => OutputTextBox.value = OutputTextBox.value + data1.Developed[Math.floor(Math.random()* data1.Developed.length)])
  }
  if (SliderVar1 == 4){
    data1
    .then(response => response.json())
    .then(data1 => OutputTextBox.value = OutputTextBox.value  + data1.Comprehensive[Math.floor(Math.random()* data1.Comprehensive.length)])
  }
    if (SliderVar1 == 5){
    data1
    .then(response => response.json())
    .then(data1 => OutputTextBox.value = OutputTextBox.value + data1.Exceptional[Math.floor(Math.random()* data1.Exceptional.length)])
  }
    
    

  if (SliderVar2 == 1){
    data2
    .then(response => response.json())
    .then(data2 => OutputTextBox.value = OutputTextBox.value + data2.NeedsImprovement[Math.floor(Math.random()*data2.NeedsImprovement.length)])
    }  
  if (SliderVar2 == 2){
    data2
    .then(response => response.json())
    .then(data2 => OutputTextBox.value = OutputTextBox.value + data2.Developing[Math.floor(Math.random()*data2.Developing.length)]) 
  }
    if (SliderVar2 == 3){
    data2
    .then(response => response.json())
    .then(data2 => OutputTextBox.value = OutputTextBox.value + data2.Developed[Math.floor(Math.random()* data2.Developed.length)])
  }
    if (SliderVar2 == 4){
    data2
    .then(response => response.json())
    .then(data2 => OutputTextBox.value = OutputTextBox.value  + data2.Comprehensive[Math.floor(Math.random()* data2.Comprehensive.length)])
  }
    if (SliderVar2 == 5){
    data2
    .then(response => response.json())
    .then(data2 => OutputTextBox.value = OutputTextBox.value + data2Exceptional[Math.floor(Math.random()* data2.Exceptional.length)])
    }


  if (SliderVar3 == 1){
    data3
    .then(response => response.json())
    .then(data3 => OutputTextBox.value = OutputTextBox.value + data3.NeedsImprovement[Math.floor(Math.random()*data3.NeedsImprovement.length)])
    }  
  if (SliderVar3 == 2){
  data3
  .then(response => response.json())
  .then(data3 => OutputTextBox.value = OutputTextBox.value + data3.Developing[Math.floor(Math.random()*data3.Developing.length)]) 
  }
    if (SliderVar3 == 3){
    data3
    .then(response => response.json())
    .then(data3 => OutputTextBox.value = OutputTextBox.value + data3.Developed[Math.floor(Math.random()* data3.Developed.length)])
  }
    if (SliderVar3 == 4){
  data3
  .then(response => response.json())
  .then(data3 => OutputTextBox.value = OutputTextBox.value  + data3.Comprehensive[Math.floor(Math.random()* data3.Comprehensive.length)])
  }
    if (SliderVar3 == 5){
  data3
  .then(response => response.json())
  .then(data3 => OutputTextBox.value = OutputTextBox.value + data3.Exceptional[Math.floor(Math.random()* data3.Exceptional.length)])
  }
    
  

if (SliderVar4 == 1){
  data4
  .then(response => response.json())
  .then(data4 => OutputTextBox.value = OutputTextBox.value + data4.NeedsImprovement[Math.floor(Math.random()*data4.NeedsImprovement.length)])
  }  
if (SliderVar4 == 2){
  data4
  .then(response => response.json())
  .then(data4 => OutputTextBox.value = OutputTextBox.value + data4.Developing[Math.floor(Math.random()*data4.Developing.length)]) 
}
  if (SliderVar4 == 3){
  data4
  .then(response => response.json())
  .then(data4 => OutputTextBox.value = OutputTextBox.value + data4.Developed[Math.floor(Math.random()* data4.Developed.length)])
}
  if (SliderVar4 == 4){
  data4
  .then(response => response.json())
  .then(data4 => OutputTextBox.value = OutputTextBox.value  + data4.Comprehensive[Math.floor(Math.random()* data4.Comprehensive.length)])
}
  if (SliderVar4 == 5){
  data4
  .then(response => response.json())
  .then(data4 => OutputTextBox.value = OutputTextBox.value + data4Exceptional[Math.floor(Math.random()* data4.Exceptional.length)])
  }

  ///////////////////////////////////////

  refVar = checkReferencing()
  var refData = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/referencing.json")

  if (refVar == 1) {
    refData
    .then(response => response.json())
    .then(refData => OutputTextBox.value = OutputTextBox.value + refData.ReferencingPass)
  }
  if (refVar == 2){
    refData
    .then(response => response.json())
    .then(refData  => OutputTextBox.value = OutputTextBox.value + refData.ReferencingFail)

  }
  ///////////////////////////////////

  var finalCommentVar = finalComment()
  var finalCommentData = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/last_comments.json")

  if (finalCommentVar == 1){
  finalCommentData
  .then(response => response.json())
  .then(finalCommentData => OutputTextBox.value = OutputTextBox.value + finalCommentData.Compliment[Math.floor(Math.random()*finalCommentData.Compliment.length)])
  }
  if (finalCommentVar == 2){
    finalCommentData
    .then(response => response.json())
    .then(finalCommentData => OutputTextBox.value = OutputTextBox.value + finalCommentData.NoteForImprovement[Math.floor(Math.random()*finalCommentData.NoteForImprovement.length)])
    }

  var lateSubmissionCheck = latePenalty()
  var latePenaltyData = fetch("http://192.168.1.117/Diogenes JSON Comment Bank/latesubmission.json") 
  if (lateSubmissionCheck == 1){
    latePenaltyData
    .then(response => response.json())
    .then(latePenaltyData => OutputTextBox.value = OutputTextBox.value + "\n" + "\n" + latePenaltyData.LateSubmission)
  }
  


}

function ClearTextBox(){
   OutputTextBox.value = ""; 
}

function CopyToClipboard(){
  var copyText = OutputTextBox

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value)

  }