const eventTemplate = querySelectorElement(".eventsTemplate").content;
const venuestemplate = querySelectorElement(".venuesTemplate").content;


fetch("https://timidesign.org/kea/wordpress-excersize/wordpress/wordpress/wp-json/wp/v2/categories").then(res => {
  return res.json()
}).then(data => {
  data.forEach(cerateCategories)
})


const cerateCategories = (cat) => {
  if (cat.parent == 0) {
    return false
  } else {
    let clnInput = inputTemplate.cloneNode(true);
    let checkboxName = clnInput.querySelector(".checkboxName")
    let check = clnInput.querySelector(".check");
    checkboxName.textContent = cat.name;
    check.name = cat.name.toLowerCase().split(' ').join('');
    checkboxName.onclick = function () {
      checkIfChecked(check);
    }
    querySelectorElement(".options").appendChild(clnInput);
  }
}
function getFrontpagedata(){

fetch("https://timidesign.org/kea/wordpress-excersize/wordpress/wordpress/wp-json/wp/v2/schedule?_embed&per_page=100").then(res => {
  return res.json()
}).then(data => {
  data.sort(compare);
  data.forEach(showData)
}).then(filterData)
}