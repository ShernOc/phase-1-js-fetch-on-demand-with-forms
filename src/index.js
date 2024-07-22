const init = () => {
  const inputForm = document.querySelector("form");
inputForm.addEventListener("submit", (event)=>{
  event.preventDefault(); // stops the page from refreshing. 

const inputForm = event.target.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies"/${inputForm.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
    const summary = document.querySelector("section#movieDetails p");
    
    title.innerText = data.title;
    summary.innerText = data.summary;

    inputForm.value = ""; 

});
});
}

document.addEventListener('DOMContentLoaded', init);




