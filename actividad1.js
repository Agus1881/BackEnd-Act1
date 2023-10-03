function addProduct(title, description, price, thumbnail, code, stock){
    if(!title, !description, !price, !thumbnail, !code, !stock){
        console.error("se requiere completar los campos")
        return
    }

    const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code: codeid + 1,
        stock,
    }
}

function getProducts(){
    return this.products
}

function getProductById(id) {
    
}
