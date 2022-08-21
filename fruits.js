const url = ("https://jsonplaceholder.typicode.com/products/fruList")
async function getfruits(){
    let response = await fetch(url);
    return response.json()
}
getfruits();

async function getitems(){
    let items =await getfruits();

    let htmlbody="";
    items.forEach((item) => {
        let body = `<div>${item.title}</div>`
        htmlbody += body;  
    });
    let container = document.querySelector("#fruList")
    container.innerHTML = htmlbody;
}