let QuestionLimit = 0;
let QuestionData = null;
let i = 0;
let AnswerLimit = 0;
let AnswerData = null;
let Final_Result = [];
let Submit_Form = [];


$(document).ready(function () {
  fetch("./Question.json") //string
    .then(function (response) {
      return response.json(); //object
    })
    .then(function (dt) {
      QuestionData = dt;
      QuestionLimit = QuestionData.length;
      Final_Result.length = QuestionData.length;
      Final_Result.fill(0);
      Submit_Form.length = QuestionData.length;
      Submit_Form.fill(0);
      //console.log("SubmitForm : "+Submit_Form);
      question_bind(i);
    });
});

$(document).ready(function () {
  fetch("./Answer.json") //string
    .then(function (response) {
      return response.json(); //object
    })
    .then(function (dt) {
      AnswerData = dt;
      AnswerLimit = AnswerData.length;
    });
});

$(document).on("click", ".nxtBtn", function () {
  ++i == QuestionLimit ? (i = i - 1) : i;
  if (i < QuestionLimit) {
    question_bind(i);
    //alert($("#opt1").val());
    //alert(Submit_Form[i]);
    if ($("#opt1").val() == Submit_Form[i]) {
      document.getElementById("opt1").checked = true;
    } else if ($("#opt2").val() == Submit_Form[i]) {
      document.getElementById("opt2").checked = true;
    } else if ($("#opt3").val() == Submit_Form[i]) {
      document.getElementById("opt3").checked = true;
    } else if ($("#opt4").val() == Submit_Form[i]) {
      document.getElementById("opt4").checked = true;
    }
  }
});

$(document).on("click", ".prevBtn", function () {
  $("#btnSubmit").attr('id', 'nextQuestion');
  if (i > 0 && i < QuestionLimit) {
    question_bind(--i);
    if ($("#opt1").val() == Submit_Form[i]) {
      document.getElementById("opt1").checked = true;
    } else if ($("#opt2").val() == Submit_Form[i]) {
      document.getElementById("opt2").checked = true;
    } else if ($("#opt3").val() == Submit_Form[i]) {
      document.getElementById("opt3").checked = true;
    } else if ($("#opt4").val() == Submit_Form[i]) {
      document.getElementById("opt4").checked = true;
    }
  }
});

function question_bind(i) {
  if (i < QuestionData.length && i >= 0) {
    var j=0;
    document.getElementById("t1").innerHTML =
      "<h1>Q." +
      (i + 1) +
      " " +
      QuestionData[i].QUESTION +
      "</h1><div class='line_h'><input type='radio' id='opt1' name='options' value='" +
      QuestionData[i].OPITION[j] +
      "'><span id='optt1'>" +
      QuestionData[i].OPITION[j++] +
      "</span></div></h1><div class='line_h'><input type='radio' id='opt2' name='options' value='" +
      QuestionData[i].OPITION[j] +
      "'><span id='optt2'>" +
      QuestionData[i].OPITION[j++] +
      "</span></div></h1><div class='line_h'><input type='radio' id='opt3' name='options' value='" +
      QuestionData[i].OPITION[j] +
      "'><span id='optt3'>" +
      QuestionData[i].OPITION[j++] +
      "</span></div></h1><div class='line_h'><input type='radio' id='opt4' name='options' value='" +
      QuestionData[i].OPITION[j] +
      "'><span id='optt3'>" +
      QuestionData[i].OPITION[j++] +
      "</span></div>";
  }
  $("#opt1,#opt2,#opt3,#opt4").change(function () {
    var Result = 0;
    //alert($(this).val() == AnswerData[i].ANSWER);
    if ($(this).val() == AnswerData[i].ANSWER) {
      Final_Result[i] = ++Result;
      //alert($(this).val());
      // Submit_Form[i] = $(this).val();
      //alert(Result);
    } else if ($(this).val() == AnswerData[i].ANSWER) {
      Final_Result[i] = ++Result;
      // Submit_Form[i] = $(this).val();
      //alert(Result);
    } else if ($(this).val() == AnswerData[i].ANSWER) {
      Final_Result[i] = ++Result;
      // Submit_Form[i] = $(this).val();
      //alert(Result);
    } else if ($(this).val() == AnswerData[i].ANSWER) {
      Final_Result[i] = ++Result;
      // Submit_Form[i] = $(this).val();
      //alert(Result);
    } else {
      if (Result == 0) {
        Result = 0;
        Final_Result[i] = Result;
      } else {
        Final_Result[i] = --Result;
      }
      Submit_Form[i] = 0;
      //alert(Result);
    }
    //alert(Final_Result);
    Submit_Form[i] = $(this).val();
    // alert(Result);
    // alert(Submit_Form);
    // alert(Final_Result);
  });
  if (i == 0) {
    $("#prevQuestion").hide();
  } else {
    $("#prevQuestion").show();
  }
  if (i == QuestionLimit - 1) {
    $("#nextQuestion").text("SUBMIT");
    $("#nextQuestion").attr('id', 'btnSubmit');
    //$("#nextQuestion").hide();
    //$("#nextQuestion").html("<button class='btnSubmit btn btn-success' id='submitQuestion'>SUBMIT</button>");
    //$("button").removeClass(".nxtBtn");
  } else {
    $("#nextQuestion").show();
    $("#nextQuestion").text("next");
  }
}

$(document).on("click","#btnSubmit",function() {

  var Test_Data = [ Final_Result, Submit_Form ];
  sessionStorage.setItem("Test_Data", JSON.stringify(Test_Data));
  
  window.location.href = "Result_page.html";
  // function disableBack() { window.history.forward() }
  // window.onload = disableBack();
  // window.onpageshow = function(evt) { if (evt.persisted) disableBack() }
});
