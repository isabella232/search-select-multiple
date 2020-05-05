// References to the elements in the field
var checkBoxesContainer = document.getElementById("checkboxes-container");
var choicesEl = document.getElementsByClassName("choice-container");
var buttons = document.querySelectorAll('input[name="opt"]');
var input = document.getElementById('filter-text');

// Detect right-to-left languages
function isRTL(s){
  var ltrChars    = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF'+'\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
      rtlChars    = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
      rtlDirCheck = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');

  return rtlDirCheck.test(s);
}

if (fieldProperties.LANGUAGE !== null && isRTL(fieldProperties.LANGUAGE)) {
  checkBoxesContainer.dir = "rtl";
}
// Add filtering of response options
input.addEventListener('keyup', function(e) {
  var query = $.trim($('#filter-text').val()).toLowerCase();
  $('div.radio .search').each(function(){
         var $this = $(this);
         if($this.text().toLowerCase().indexOf(query) === -1)
             $this.closest('div.radio').fadeOut();
        else $this.closest('div.radio').fadeIn();
    });
});

// Define what happens when the user attempts to clear the response

function clearAnswer() {
  // go through each choice
  for (var i = 0; i < choicesEl.length; i++) {
    choicesEl[i].querySelector('input').checked = false; // uncheck the checkbox input element
    fieldProperties.CHOICES[i].CHOICE_SELECTED = false; // update the current answer 
  }
}

// Save the user's response (update the current answer)

function change() {
  var selected = [];
  // go through each choice
  for (var i = 0; i < fieldProperties.CHOICES.length; i++) {
    var choice = fieldProperties.CHOICES[i];
    if (choice.CHOICE_VALUE === this.value) { // check/uncheck based on the value of the choice
      choice.CHOICE_SELECTED = !choice.CHOICE_SELECTED;
    }
    if (choice.CHOICE_SELECTED) { // include only selected options in the final answer
      selected.push(choice.CHOICE_VALUE);
    }
  }

  setAnswer(selected.join(" "));
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onchange = change;
}

// If the field label or hint contain any HTML that isn't in the form definition, then the < and > characters will have been replaced by their HTML character entities, and the HTML won't render. We need to turn those HTML entities back to actual < and > characters so that the HTML renders properly. This will allow you to render HTML from field references in your field label or hint.
function unEntity(str){
  return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
if (fieldProperties.LABEL) {
  document.querySelector(".label").innerHTML = unEntity(fieldProperties.LABEL);
}
if (fieldProperties.HINT) {
  document.querySelector(".hint").innerHTML = unEntity(fieldProperties.HINT);
}