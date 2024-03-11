console.log("working")

const API="https://65ede37908706c584d9ad0d7.mockapi.io/naruto"
const Data=document.querySelector("#naruto-data")
//reading all data
function getNarutoQuotes(){
      fetch(API,{
        method:"GET",
      })
      .then((res) =>res.json())
      .then((quotes)=>renderAllData(quotes))
      .catch((err)=>console.log("error",err))
} 
getNarutoQuotes();

function deleteData(){
  fetch(`${API}/${id}`,{
    method:"DELETE",
    headers:{
      "content-type":"applications/json"
    }
  })
  .then(()=>parent)
  .catch((err)=>console.log(err))
}

//render the data  
function aniWatch(naruto){
    const animeDiv= document.createElement("div");
    animeDiv.Data="card1";
    animeDiv.innerHTML +=`
  <div class="card">
  <div class="card-body">
  <h6 class="card-text">${naruto.quote}</h6>
  <h2 class="card-title">${naruto.character}</h2>
  <button data-id=${naruto.id} class="del-btn">Danger</button>
  </div>
</div>
    `;
    Data.append(animeDiv);
}     

function renderAllData(quote){
    quote.forEach
        ((render)=> {
        aniWatch(render)
    });
}

Data.addEventListener("click",(event)=>{
  if(event.target.className==="del-btn"){
    const id=event.target.dataset.id;
    const parent=event.target.parentNode;
    console.log(parent)
    parent.remove();
  }
})