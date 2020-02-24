console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', event => {

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
            .then(dogs => domDogs(dogs));

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(resp => resp.json())
            .then(breeds => breedList(breeds));
})

     function domDogs(dogs){
        for (i = 0; i < dogs['message'].length; i++) {
            let div = document.getElementById('dog-image-container')
            let newDiv = document.createElement('div')
            let img = document.createElement('img')
            img.src = dogs['message'][i]
            newDiv.append(img)
            div.append(newDiv)
     }
    }

    function breedList(breeds){
        breed = breeds['message']
        for (type in breed) {
            let ul = document.getElementById("dog-breeds")
            let li = document.createElement('li')
            li.addEventListener('click', function(e){
                li.style.color = 'blue'
            })
                li.textContent = `${type}`
            ul.append(li)
        }
    }            

    function dropDownSort(){
        dropDown = document.getElementById("breed-dropdown")
            dropDown.addEventListener('click', function(){
                let ul = document.getElementById("dog-breeds")
                if (dropDown[0]) {
                    ul.remove()
                } else if (dropDown[1]) {
                    ul.remove()
                } else (dropDown[2]) 
                    ul.remove()
        })
    }