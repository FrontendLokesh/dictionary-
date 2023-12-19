let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    let results= document.getElementsByClassName("result")[0];
    let search = document.getElementById("search").value;
    let url ="https://api.dictionaryapi.dev/api/v2/entries/en/"
    fetch(`${url}${search}`).then((v)=>{
        return v.json()
    }).then((data)=>{
        console.log(data)
        results.innerHTML =`
        <div class="result2">
            <h2 id="result1">${search}</h2>
            <button class="sound"><i class="fa-solid fa-volume-high"></i></button>
        </div>
            <span class="partof">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/ ${data[0].phonetics[1].text}/</p>
            </span>
            <p class="para">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="def">${data[0].meanings[0].definitions[0].example}</p>
               `
       }).catch((error)=>{
           let a = document.getElementById("result1")
        
           a.innerHTML = "cann't be find the word";
           console.log(error)
       })
            })
