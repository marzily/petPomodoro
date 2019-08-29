// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };
let catButton = document.getElementById("cat");
let dogButton = document.getElementById("dog");

xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://api.petfinder.com/v2/oauth2/token", true);
// xhttp.setRequestHeader("grant_type", "");
xhttp.send("grant_type=client_credentials&client_id=" + keys.petFinderKey + "&client_secret=" + keys.petFinderSecret);

console.log(xhttp.responseText);
