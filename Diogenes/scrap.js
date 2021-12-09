

var StructureExceptional = [ 
    "The response had an exceptional structure, easily guiding the reader through the ideas presented by the candidate. \n",
    "The response was exceptionally well-structured, demonstrating a clear progression of ideas for the reader to follow. \n",
    "The response featured an incredibly well-written structure, demonstrating a progression of ideas in a logical order. \n",
    "The structure of the response was exceptional, detailing a clear and logical progression of ideas in an easily readable format. \n",
    "The structure of the response was exceptionally well-designed, with the reader able to clearly see the relationship between different ideas. \n",
    "Your use of structure was compelling, demonstrating a clear progression of ideas and appropriate connections between key themes. \n"
  ]
  
  var StructureComprehensive = [
    "The response followed a comprehensive structure, easily guiding the reader through the ideas presented by the candidate. \n",
    "The response was comprehensively structured, demonstrating a clear progression of ideas for the reader to follow. \n",
    "The response featured a generally comprehensive structure, demonstrating a progression of ideas in a logical order. \n",
    "The structure of the response was comprehensive, detailing a clear and logical progression of ideas in a digestible format. \n",
    "The structure of the response was comprehensively designed, with the reader able to clearly see the relationship between different ideas. \n",
    "Your use of structure was comprehensive, demonstrating a clear progression of ideas and appropriate connections between key themes. \n"
  ]
  
  var StructureDeveloped = [
    "The response featured a developed structure, effectively guiding the reader through the logic of the paper. \n",
    "The structure of the response was developed, with a mostly clear progression of ideas for the reader to follow. \n",
    "The structure of the response was reasonably well developed, with relatively clear progression of logic and transitions between arguments. \n",
    "The paper structure was suitable, with ideas following a relatively logical path. The response effectively guided the reader through the arguments of the author. \n",
    "The paper was structurally sound, with ideas presented to the reader in a relatively logical fashion. The developed structure provided an easy way to effectively interpret the arguments put forth in the response. \n"
  ]
  
  var StructureDeveloping = [ 
    "The response featured a developing structure; arguments in the paper were not always effective or clear, and the logic connecting sections or ideas was not always apparent. \n",
    "The structure of the response was not always clear; certain sections of the paper provided information in a confusing or haphazard manner. A clearly written introduction, providing a structural basis or 'blueprint' for the paper can be an effective way of communicating the order of arguments to the reader. \n",
    "The structure of the response was developing; it can help to the reader in mind. Consider how a reader approaches a paper, and how you can present information in a way that guides the reader through your arguments.  \n",
    "The response featured a relatively developing structure; with either the overall logic of the paper requiring improvement or connections between ideas suffering from a lack of transparency. A clearly defined introduction, outlining your arguments and the order they will take place in can be an effective means of circumventing this issue. \n",
    "Structurally, the response could have been improved. The order of arguments and the connections between them was not always clear; this can be circumvented by the inclusion of an explicit and highly descriptive introduction, which outlines the order and content of the arguments that you will be putting forth in the remainder of the paper. \n",
    "Structurally, the response required some improvement. The key arguments of the paper were either difficult to define or were ambiguous in their presentation and overall relevance; a common symptom of a lack of structural strength. It can help to begin your paper with a clearly defined introduction, outlining the order and key points of your argument, so that the reader is never 'lost' in your response. \n"
    
  ]
  
  var StructureNeedsImprovement = [
    "The structure of the response required significant improvement, lacking any structural information in the introduction which could give the reader a chance to understand how the order of the arguments would take place. Connections between sections or ideas may have been loose, with a failure to adequately transition between ideas or illustrate their overall relevance to the thesis of the paper. \n",
    "The response was not adequately structured, with little connection between ideas, and a general absence of any logical framework in the paper. A clearly written introduction can be useful to alleviate this problem, where you carefully outline the key ideas, arguments or points that you will be making in the body of the paper, effectively introducing your thesis to the reader. \n",
    "The response required a greater structure to fully guide the reader through ideas. Connections between ideas were not obvious, or ideas themselves did not contribute to an overall identifiable thesis, which is a common symptom of structural problems in a paper. Ensure you have included a clear introduction, which effectively outlines your key ideas and the order you will be presenting them in. \n"
          
  ]
  
  
  
  // //get correct JSON for Criteria
  // var Criteria1Val = document.getElementById("criteria-1"); 
  
  // if (Criteria1Val = "structure") {
  //   //load Structure JSON as object
  //   var Criteria1 = StructureJSON
  // } else if (Criteria1Val = "Demonstration of Knowledge"){
  //   //load Demo of Knowledge JSON
  // } else if (Criteria1Val = "Engagement with Theory"){
  //   //load Eng with Theory JSOn
  // } else if (Criteria1Val = "Writing"){
  //   //load Writing JSON
  // }
  
  
  // // function criteria2value() {
  // //   document.getElementById("Criteria 2").innerHTML = val
  
  // // }
  
  // // function criteria3value() {
  // // document.getElementById("Criteria 3").innerHTML = val
  
  // // }
  
  // // function criteria4value() {
  // // document.getElementById("Criteria 4").innerHTML = val
  
  // // }
  
  
  
  
  //get range slider value
  
  let Slider1Val = document.getElementById('criteria-1-slider'); //get
  
  if (Slider1Val = "1"){
    var Criteria1SendVar = StructureNeedsImprovement[Math.floor(Math.random()*StructureNeedsImprovement.length)];
    
  }
  
  // function slider2change(val) {
  //   document.getEementById('criteria-2-slider').innerHTML= val; //get
  
  // }
  
  // function slider3change(val) {
  //   document.getElementById('criteria-3-slider').innerHTML= val; //get
  
  // }
  
  // function slider4change(val) {
  //   document.getElementById('criteria-4-slider').innerHTML= val; //get
  
  
  
  function printStuff(){
    let OutputTextBox = document.getElementById("textBox")
    OutputTextBox.value = OutputTextBox.value + Criteria1SendVar 
    
  }