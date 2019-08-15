const init = () => {

  const inputSearch = document.querySelector('#search');
  const allAdvices = document.querySelectorAll("li p.section-paragraph");
  const toShowSearchSection = document.querySelector(".searchText");


  searchText = (e) => {
    if (e.target.value) {
      const searchText = e.target.value.toLowerCase();
      let advices = [...allAdvices];

      
      advices = advices.filter(adv => adv.textContent.toLowerCase().includes(searchText));

      toShowSearchSection.textContent = "";
      advices.forEach(adv => toShowSearchSection.appendChild(adv));
      const main = document.querySelector("main");

      main.textContent = "";

    } else {
      toShowSearchSection.textContent = "";
    }
  }

  inputSearch.value = "";
  
  
  inputSearch.addEventListener('input', searchText);
 
};

document.addEventListener("DOMContentLoaded", init);