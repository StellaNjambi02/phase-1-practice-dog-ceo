console.log('%c HI', 'color: firebrick')

function renderImage(elements)//function to display the images on the DOM
 {
   //iterate through elements object
    for (let element of elements.message) {
        let card = document.createElement("li");
        card.innerHTML = `<img src="${element}">`;
        document.querySelector("body").appendChild(card);//append images to body
    }
}


function renderBreeds(breeds) //function to display breeds on DOM and display filtered breeds
{
    const ul = document.querySelector("#dog-breeds");
    ul.innerHTML = ''; // Clear existing breeds
    const breedList = Object.keys(breeds.message);

    breedList.forEach(breed => {
        let list = document.createElement("li");
        list.textContent = breed;
        ul.appendChild(list);
         // Add event listener to change font color on click
        list.addEventListener("click", function() {
        list.style.color = "blue";// Change color to blue when clicked
        list.style.cursor="pointer"; // Change cursor
       });
    });

    // Dropdown for filtering by first letter
    const dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener("change", function() {
        const selectedLetter = dropdown.value.toLowerCase();
        breedList.forEach(breed => {
            const breedFirstLetter = breed.charAt(0).toLowerCase();
            const breedElement = ul.querySelector(`li:nth-child(${breedList.indexOf(breed) + 1})`);
            if (selectedLetter === '' || breedFirstLetter === selectedLetter) {
                breedElement.style.display = 'block';
                breedElement.addEventListener("click", function() {
                    breedElement.style.color = "blue";
                    breadElement.style.cursor="pointer";
                })
            } else {
                breedElement.style.display = 'none';
            }
        });
    });
}


function fetchBreed(e) {
    e.preventDefault();
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => renderBreeds(data));
}

function fetchImage(e) {
    e.preventDefault();
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(elements => renderImage(elements))//callback function to render images to DOM
        .then(() => fetchBreed(e)); // Fetch breeds after rendering images
}

document.addEventListener("DOMContentLoaded", fetchImage);
