//source: Richard Deeming https://www.codeproject.com/Answers/5288238/How-do-you-save-a-change-to-CSS-using-local-storag#answer1

let colors = parseInt(localStorage.getItem("colors")) || 0;

const toggle = ["#b3b4b5", "#8e96a3", "#94a899", "#cfc5b6", "#b2b0b8", "#9eadab"];  // array of colors

const newColor = function() {
    document.querySelector("body").style.background = toggle[colors];    // sets color in CSS depending on localStorage index
    document.querySelector(".caro").style.background = toggle[colors];
};
document.querySelector("button").addEventListener("click", function() {  // increments index value on click
    ++colors;
    colors%=toggle.length;
    localStorage.setItem("colors", colors);   // saves current index value using localStorage
    newColor();
});
newColor();
