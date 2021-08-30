function CreateCart(){  
   
    this.create = (basketData) =>{
        this.element = document.createElement('div')
        this.element.classList.add('container')

        if(basketData.length == 0){
            this.element.innerHTML=`<div class="container">
                                        <p class="empty">Your AllLike Cart is empty</p>
                                    </div>`
        }else{
            this.list=''
            console.log(basketData)
            this.totalPrice = 0

            this.element.innerHTML= " "

            basketData.forEach(basketProduct => {
            this.list += `<div class="product__basket">
                                <p class="product__basket__title">${basketProduct.title}</p>
                                <div class="product__basket__img"><img  src="${basketProduct.image}"></div>
                                <div class="product__basket__count">
                                    <span>${basketProduct.count}</span>
                                </div>
                                <p class="product__basket__price">${basketProduct.price*basketProduct.count} $</p>
                            </div>`
            this.totalPrice += basketProduct.price*basketProduct.count

            });

            this.element.innerHTML=`<div class='basket'>${this.list}</div>
                                    <h2 class="basket__price">Total price: ${Math.floor(this.totalPrice * 100) / 100 } $</h2> `    
        }  
        return this.element
    }


    this.init = () => {
        let basketData = JSON.parse(localStorage.getItem('basket')) || []
        return this.create(basketData)

    }
      

}
const cart = new CreateCart()
export default cart
