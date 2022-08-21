const url = ("https://localhost:5000/products/vegetables")
async function getveges(){
    let response = await fetch(url);
    return response.json()
}
getveges();

async function getitems(){
    let items =await getveges();

    let html="";
    items.forEach(item => {
        let body = `<li>${item.name}</li>`
        html += body;  
    });
    let container = document.querySelector("#vegList")
    container.innerHTML = html;
}
getitems();