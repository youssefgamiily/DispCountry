// let onLoad = (thiss) => {
//   console.log(thiss);
//   let [entry] = JSON.parse(thiss.responseText);
//   console.log(entry);
// };

// request.addEventListener("load", onLoad(this));

let inputTxt = document.querySelector("#inputTxt");
let submitBtn = document.querySelector("#submitBtn");

let Entry;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = inputTxt.value;
  inputTxt.value = "";
  addCountry(value);
});

let addCountry = (name) => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${name}`);
  request.send();
  request.addEventListener("load", () => {
    let countriesContainer = document.querySelector(".countries");
    console.log(this);
    let [entry] = JSON.parse(request.responseText);
    console.log(entry);
    Entry = entry;

    let [index] = entry.languages;
    console.log(index);
    html = `<div class="country">
        <div class="top">
          <img src="${entry.flag}" />
        </div>
        <div class="second---half">
          <div class="mid">
            <h1>${entry.name}</h1>
            <h2>${entry.region}</h2>
          </div>
          <div class="btm">
            <div class="property" id="population">
              <img class="propertyIcon" />
              <h3 class="propertyData">Population : ${(
                entry.population / 1000000
              ).toFixed(2)} million</h3>
            </div>
            <div class="property" id="language">
              <img class="propertyIcon" />
              <h3 class="propertyData">Language : ${
                Entry.languages[0].name
              }</h3>
            </div>
            <div class="property" id="currency">
              <img class="propertyIcon" />
              <h3 class="propertyData">Currency: ${
                Entry.currencies[0].name
              }</h3>
            </div>
          </div>
        </div>
      </div>`;

    countriesContainer.insertAdjacentHTML("beforeend", html);
  });
};
