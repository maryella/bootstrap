const chuckQuotesForm = document.querySelector("#chuckQuotesForm")
const modalClose = document.querySelector(".modal__close")

function get(url){
    return fetch(url)
        .then(function(response){
           return response.json();
          })
        .then(function(data){
          return data;
          })
}

function toggleModal(){
    const modalWrapper = document.querySelector(".wrapper--modal");
    modalWrapper.classList.toggle("open");
}



chuckQuotesForm.addEventListener("submit", function(event){
    event.preventDefault();
    const categoryValue = chuckQuotesForm.querySelector("select").value;
    updateChuckSays(categoryValue);
})

function updateChuckSays(category) {
    const chuckSays = document.getElementById("chuckSays");
    get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(function(response){
         chuckSays.innerHTML = response.value;
         
    //     chuckImage.src = quote.icon_url;
    })

}

function getCategories(){
    const categoryList = document.createElement("select");
    const selectWrapper = document.querySelector("#selectWrapper")
    get(`https://api.chucknorris.io/jokes/categories`)
        .then(function(response){
            response.forEach(function(category){
                const categoryOption = document.createElement("option")
                categoryOption.text = category;
                categoryOption.value = category;

                if (category !== "explicit"){
                    categoryList.append(categoryOption);
                }
            });
        })
    selectWrapper.append(categoryList)
    }

//create IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
(function(){
    const defaultCategory = "dev"
    getCategories();
    updateChuckSays(defaultCategory);
})()
