const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const singleCountryData = document.getElementById("singleCountryData");
const countryName =urlParams.get('name') 
const getCountryData = async (countryName)=>{
  const uri = `https://restcountries.com/v2/name/${countryName}`;

   const data = await axios.get(uri)
   if(data.data.status == 404){

   }else{
       const finalData = data.data[0]
    singleCountryData.innerHTML = `<div class="container">
    <a href="/" class="back"><i class="fas fa-arrow-left"></i>Back</a>
    <div class="countryInfo">
      <div class="img">
        <img src="${finalData.flags.svg}" alt="">
      </div>
      <div class="info">
        <h1>${finalData.name}</h1>
        <div class="infoList">
          <div class="l1">
            <p><span>Native Name:</span>${finalData.nativeName}</p>
            <p><span>Population:</span>${finalData.population}</p>
            <p><span>Region:</span>${finalData.region}</p>
            <p><span>Sub Region:</span>${finalData.subregion}</p>
            <p><span>capital:</span>${finalData.capital}</p>
          </div>
          <div class="l2">
            <p><span>Top Level Domain:</span>${finalData.altSpellings[0]}</p>
            <p><span>Currencies:</span>${finalData.currencies[0].name}</p>
            <p><span>Languages:</span>${finalData.languages[0].name}</p>
          </div>
        </div>
      </div>
    </div>
</div>`
   }
}
getCountryData(countryName);