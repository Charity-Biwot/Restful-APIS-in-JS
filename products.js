const url = ("https://jsonplaceholder.typicode.com/products")
async function getproducts(){
    let response = await fetch(url);
    return response.json()
}
getproducts();

async function getitems(){
    let items =await getproducts();

    let htmlbody="";
    items.forEach((item) => {
        let body = `<div>${item.title}</div>`
        htmlbody += body;  
    });
    let container = document.querySelector("#products")
    container.innerHTML = htmlbody;
}
getitems();

