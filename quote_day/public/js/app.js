'use strict';

var names = document.getElementById('name');
var qoute = document.getElementById('quote');
var brithday = document.getElementById('birthday');
var iMG = document.getElementById('image');

//default data
names.innerHTML = quotes[0].name;
qoute.innerHTML = quotes[0].quote;
birthday.innerHTML = quotes[0].birthday;
iMG.innerHTML = "<img src='" + quotes[0].image_url + "'/>";

//buttons
function rotateData(e) {
  var i = void 0,
      item = void 0;
  var lp = 10;
  for (i = 0; i < 1; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[1].name;
      qoute.innerHTML = quotes[1].quote;
      birthday.innerHTML = quotes[1].birthday;
      iMG.innerHTML = "<img src='" + quotes[1].image_url + "'/>";
    };
  };
};
function rotateData1(e) {
  var i = void 0,
      item = void 0;
  var lp = 1;
  for (i = 0; i < quotes.length; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[2].name;
      qoute.innerHTML = quotes[2].quote;
      birthday.innerHTML = quotes[2].birthday;
      iMG.innerHTML = "<img src='" + quotes[2].image_url + "'/>";
    };
  };
};

function rotateData2(e) {
  var i = void 0,
      item = void 0;
  var lp = 1;
  for (i = 0; i < quotes.length; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[3].name;
      qoute.innerHTML = quotes[3].quote;
      birthday.innerHTML = quotes[3].birthday;
      iMG.innerHTML = "<img src='" + quotes[3].image_url + "'/>";
    };
  };
};
function rotateData3(e) {
  var i = void 0,
      item = void 0;
  var lp = 1;
  for (i = 0; i < quotes.length; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[4].name;
      qoute.innerHTML = quotes[4].quote;
      birthday.innerHTML = quotes[4].birthday;
      iMG.innerHTML = "<img src='" + quotes[4].image_url + "'/>";
    };
  };
};
function rotateData4(e) {
  var i = void 0,
      item = void 0;
  var lp = 1;
  for (i = 0; i < quotes.length; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[5].name;
      qoute.innerHTML = quotes[5].quote;
      birthday.innerHTML = quotes[5].birthday;
      iMG.innerHTML = "<img src='" + quotes[5].image_url + "'/>";
    };
  };
};
function rotateData5(e) {
  var i = void 0,
      item = void 0;
  var lp = 1;
  for (i = 0; i < quotes.length; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[6].name;
      qoute.innerHTML = quotes[6].quote;
      birthday.innerHTML = quotes[6].birthday;
      iMG.innerHTML = "<img src='" + quotes[6].image_url + "'/>";
    };
  };
};
function rotateData6(e) {
  var i = void 0,
      item = void 0;
  var lp = 1;
  for (i = 0; i < quotes.length; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[7].name;
      qoute.innerHTML = quotes[7].quote;
      birthday.innerHTML = quotes[7].birthday;
      iMG.innerHTML = "<img src='" + quotes[7].image_url + "'/>";
    };
  };
};
function rotateData7(e) {
  var i = void 0,
      item = void 0;
  var lp = 1;
  for (i = 0; i < quotes.length; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[8].name;
      qoute.innerHTML = quotes[8].quote;
      birthday.innerHTML = quotes[8].birthday;
      iMG.innerHTML = "<img src='" + quotes[8].image_url + "'/>";
    };
  };
};
function rotateData8(e) {
  var i = void 0,
      item = void 0;
  var lp = 1;
  for (i = 0; i < quotes.length; i++) {
    for (item in quotes[i]) {
      names.innerHTML = quotes[0].name;
      qoute.innerHTML = quotes[0].quote;
      birthday.innerHTML = quotes[0].birthday;
      iMG.innerHTML = "<img src='" + quotes[0].image_url + "'/>";
    };
  };
};

//Jump links
function scrollToQuote(e) {
  document.getElementById("quoteSection").scrollIntoView({
    behavior: 'smooth'
  });
  return true;
};
function scrollToSubmit(e) {
  document.getElementById("submitquote").scrollIntoView({
    behavior: 'smooth'
  });
  return true;
};
function scrollToAbout(e) {
  document.getElementById("about").scrollIntoView({
    behavior: 'smooth'
  });
  return true;
};

//Form Validation
function formValidation(e) {
  if (document.subForm.author.value == "") {
    alert("Enter Author");
    return false;
  }
  if (document.subForm.date.value == "") {
    alert("Enter Date");
    return false;
  }
  if (document.subForm.quoteBox.value == "") {
    alert("Enter Quote Box");
    return false;
  }
  return true;
};
