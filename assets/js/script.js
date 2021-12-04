// const country = document.getElementById("country");
const textSearch = document.getElementById("textSearch");
const selectSearch = document.getElementById("selectSearch");
const getDataFromApi = async () => {
  const data = await axios.get("https://restcountries.com/v2/all");
  const countList = [];
  for (let i = 0; i < 12; i++) {
    countList.push(data.data[i]);
  }
  if (data.data.length > 0) {
    country.innerHTML = "";
  }
  countList.forEach((cont) => {
    country.innerHTML += `<div class="card">
     <div class="img">
       <a href="./single.html?name=${cont.name}" aria-label='${cont.name}' ><img src="${cont.flag}" alt=""></a>
     </div>
     <div class="info">
         <h2>${cont.name}</h2>
         <p> <span>Population:</span>  ${cont.population}</p>
         <p><span>Region:</span> ${cont.region}</p>
         <p><span>Capital:</span> ${cont.capital}</p>
     </div>
    </div>`;
  });
  if(data.data.length>0){
    checkMode()
  }
};

textSearch.addEventListener("input", async (e) => {
  const searchText = textSearch.value;
  if (!Boolean(searchText)) {
    getDataFromApi();
    return;
  }
  const uri = `https://restcountries.com/v2/name/${searchText}`;
  const data = await axios.get(uri);
  const finalData = data?.data;
 
  country.innerHTML = "";
  const counter = finalData.length > 12 ? 12 : finalData.length;
  for (let i = 0; i < counter; i++) {
    country.innerHTML += `<div class="card">
     <div class="img">
        <a href='./single.html?name=${finalData[i].name}' aria-label='${finalData[i].name}' > <img src="${finalData[i].flag}" alt=""></a>
     </div>
     <div class="info">
         <h2>${finalData[i].name}</h2>
         <p> <span>Population:</span>  ${finalData[i].population}</p>
         <p><span>Region:</span> ${finalData[i].region}</p>
         <p><span>Capital:</span> ${finalData[i].capital}</p>
     </div>
    </div>`;
  }
  if(finalData.length>0){
    checkMode()
  }

});

selectSearch.addEventListener("change", async () => {
  const regionCode = selectSearch.value;
  const url = `https://restcountries.com/v2/regionalbloc/${regionCode}`;
  const data = await axios.get(url);
  console.log(data.data);
  const finalData = data.data;
  if (finalData.length > 0) {
    country.innerHTML = "";
  }
  finalData.forEach((singleCountry) => {
    country.innerHTML += `<div class="card">
     <div class="img">
        <a href='./single.html?name=${singleCountry.name}' aria-label='${singleCountry.name}' > <img src="${singleCountry.flag}" alt=""></a>
     </div>
     <div class="info">
         <h2>${singleCountry.name}</h2>
         <p> <span>Population:</span>  ${singleCountry.population}</p>
         <p><span>Region:</span> ${singleCountry.region}</p>
         <p><span>Capital:</span> ${singleCountry.capital}</p>
     </div>
    </div>`;
  });
  if(finalData.length>0){
    checkMode()
  }
});

getDataFromApi();

