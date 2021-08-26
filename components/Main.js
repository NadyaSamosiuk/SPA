class Main {
    constructor(){
        this.data = JSON.parse(localStorage.getItem('spadata'))
        this.basket = JSON.parse(localStorage.getItem('basket')) || []
    }
    create (){
        this.element = document.createElement('main')
        this.element.classList.add('main')

       
        this.render()
        window.addEventListener('hashchange', ()=>{
            this.render()
        })

        return this.element
    }
    render(){
        let hash = location.hash ? location.hash.slice(1) : 'home'
        
        this.data.forEach(dataItem =>{
            if(hash.includes(dataItem.slug)){
                document.title = `${dataItem.title}`
                this.element.innerHTML=`
                <div class = "container">
                    <h1 class="title">${dataItem.title}</h1>
                    <p>${dataItem.content}</p>
                </div>`

                if(dataItem.slug=='catalog'){  
                    if(location.hash.includes('#'))this.element.innerHTML=''               
                    this.element.classList.add('catalog')
                    this.element.innerHTML+=`<div class="catalog__img"></div>`
                    if(location.hash.includes('/')) this.element.innerHTML=''
                         
                   import('./Products.js')
                    .then(productsData => {
                       productsData.default.init().then((moduleProduct)=>{
                        this.products = JSON.parse(localStorage.getItem('productData'))  
                        this.element.appendChild(moduleProduct)

                           let btnsAdd=document.querySelectorAll('.product__btn')
                           btnsAdd.forEach((btnAdd)=>{
                               btnAdd.addEventListener('click', (event)=>{
                                this.addProduct(event.target.id)
                               })
                           })


                           let btn = document.querySelector('#prev')
                           if(btn){
                               btn.addEventListener('click', ()=>{
                                   location.hash = 'catalog'
                               })
                           }

                           let btnsAddDescription=document.querySelectorAll('.description__btn')
                           btnsAddDescription.forEach((btnAdd)=>{
                               btnAdd.addEventListener('click', (event)=>{
                                this.addProduct(event.target.id)
                               })
                           })

                           console.log(this.data)
                       })
                    })
                }else{
                    this.element.classList.remove('catalog')
                }
            }
        });

        

        if(hash=='about'){
            this.element.classList.add('about')
            this.element.innerHTML+=`<div class="about__img"></div>`           
        }else{
            this.element.classList.remove('about')
        }
        if(hash=='home'){
           if(location.hash.includes('#')|| !location.hash)this.element.innerHTML='' 
            this.element.classList.add('home')
            this.element.innerHTML+=`<div class="home__img"></div>
                                    <div class="container__items">
                                        <div class="item"><a href="/#catalog"><img src="../image/3.jpg"></a></div>
                                        <div class="item"><a href="/#catalog"><img src="../image/4.jpg"></a></div>
                                        <div class="item"><a href="/#catalog"><img src="../image/5.jpg"></a></div>
                                    </div>`          
        }else{
            this.element.classList.remove('home')
        }
        if(hash=='contacts'){
            this.element.classList.add('contact')
            this.element.innerHTML+=`<div class="container">
                                        <span class="contact__span">Live Chat Help: Ask your question right now to a member of the AllLike Customer Loyalty Team. </span><br>
                                        <span class="contact__span"> Go ahead - start a conversation now!</span><br>
                                        <span class="contact__span">Email us: cs@alllike.com<br>
                                        (When sending us an email, please do so from the email address on your AllLike account or it may result in a delay of assistance.)</span>
                                    </div>`           
        }else{
            this.element.classList.remove('contact')
        }

        if(hash=='cart'){
            import('./Cart.js').then((cart)=>{
                this.cart = cart.default.init()
                console.log(this.cart )
                this.element.appendChild(this.cart)

               
                let countMinus=document.querySelectorAll('.count__minus')
                console.log(countMinus)
                countMinus.forEach((btnMinus)=>{
                    btnMinus.addEventListener('click', (event)=>{
                        this.minusProduct(event.target.id)
                    })
                }) 
                
                let countPlus=document.querySelectorAll('.count__plus')
                countPlus.forEach((btnPluss)=>{
                    btnPluss.addEventListener('click', (event)=>{
                        this.plusProduct(event.target.id)
                    })
                })

            })            
        }
    }

    //!!!!!!!!!!!!!!!!!!!!!!!!!
    plusProduct(id){        
        this.basket.forEach((item)=>{
            if(item.id == id){
                item.count += 1;  
                localStorage.setItem('basket', JSON.stringify(this.basket))                 
            }
        })

    }

    //!!!!!!!!!!!!!!!!!!!!!!!!!!
    minusProduct(id){


        this.basket.forEach((item)=>{
            if(item.id == id){

                //if(item.count <= 0)
                                
                item.count -= 1;  
                localStorage.setItem('basket', JSON.stringify(this.basket)) 

            }
        })
    }

    addProduct(id){
        let idProduct = id - 1 
        let  productToCart =  this.products[idProduct]
        if(this.basket.length == 0){
            productToCart.count = 1;
            this.basket.push(this.products[idProduct])
            localStorage.setItem('basket', JSON.stringify(this.basket))
        }else if(this.basket.length > 0) {
            let flag = true
            this.basket.forEach((item)=>{
                if(item.id == id){
                    item.count += 1;  
                    localStorage.setItem('basket', JSON.stringify(this.basket))
                    flag = false                  
                }
            })

            if(flag){
                productToCart.count = 1;
                this.basket.push(this.products[idProduct])
                localStorage.setItem('basket', JSON.stringify(this.basket))
            }
        }
    }

    init(){
        return this.create()
    }
}

const main = new Main().init()
export default main