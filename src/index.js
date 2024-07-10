console.log('%c HI', 'color: firebrick')

// function filterBreeds(breeds){
//     const select=document.querySelector("#breed-dropdown")
//     if(select.childNodes.values===letter){
//         for(let breed in breeds.message){
//             if(breed.slice(0,1)===letter){
//                 renderBreeds(breeds)
//             }
//         }
//     }
// }

function renderImage(elements){
    // console.log(elements);
    const ul=document.querySelector("ul")
    for(let element of elements.message){ 
    // console.log(element)
        
    let card=document.createElement("li")
    card.innerHTML=`
    <img src="${element}">
    `
    ul.appendChild(card);
}
    

}

function renderBreeds(breeds,letter){
    // console.log(breeds);
    const select=document.querySelector("#breed-dropdown")
    if(select.childNodes.values===letter){
        for(let breed in breeds.message){
            if(breed.slice(0,1)===letter){
                
    const ul=document.querySelector("ul")
    for(let breed in breeds.message){ 
    let list=document.createElement("li")
    list.textContent=breed;
    ul.appendChild(list);
    list.addEventListener("click", function(){
        list.style.color="blue";
    })
}
            }
        }
    }
    // filterBreeds(breeds);
    }
    

function fetchBreed(e){
    e.preventDefault();
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response=>response.json())
    .then(data=>renderBreeds(data))
    
}

function fetchImage(e){
    e.preventDefault();
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response=>response.json())
    .then(elements=>renderImage(elements))
       
    .then(()=>fetchBreed(e));
    }


document.addEventListener("DOMContentLoaded",fetchImage)

