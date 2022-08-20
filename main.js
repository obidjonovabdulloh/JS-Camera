const videoElement = document.querySelector("#videoElement")

async function main() {
     let media = await window.navigator.mediaDevices.getUserMedia({
        video: true
     })
     videoElement.srcObject = media
}
main()


















































































































//jcon tipa innerHTML

// const ulElement = document.querySelector("ul")
// async function chain() {
//     let response = await 
//     fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(response);
//     let jconversiya = await response.json()

//     for(const date of jconversiya) {
//         const newliElement = document.createElement("li")
//         const cardElement = document.createElement("div")
//         cardElement.classList.add("card")

//         const headerElement = document.createElement("div")
//         headerElement.classList.add("card-header")

//         const h2Element = document.createElement("h2")
//         h2Element.classList.add("card-title")
//         h2Element.textContent = date.body

//         const bodyElement = document.createElement("div")
//         bodyElement.classList.add("card-body")


//         headerElement.appendChild(h2Element)
//         cardElement.appendChild(headerElement)
//         cardElement.appendChild(bodyElement)
//         newliElement.appendChild(cardElement)
//         ulElement.appendChild(newliElement)
//     console.log(date);
//     }
// }
// chain()