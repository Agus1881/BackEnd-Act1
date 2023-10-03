class ProductManager {
    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(!title, !description, !price, !thumbnail, !code, !stock){
            console.error("se requiere completar los campos")
            return
        }

        const newProduct = {
            id: id++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        const productCode = this.products.find((item) => item.code === code)

        if(productCode){
            console.error("error, ese codigo ya existe.")
            return
        }
        
        this.products.push(newProduct)
        console.log("producto añadido")
    }
}

const ProductManager = new ProductManager()

ProductManager.addProduct(1, remera, ropa, 3000, imagen, a1, 7)

console.log(products.getProducts())

function getProducts(){
    return this.products
}

function getProductById(id) {
    
}
