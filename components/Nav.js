class Nav {
    constructor(){
        this.data = JSON.parse(localStorage.getItem('spadata'))
    }
    

    create (){
        this.element = document.createElement('nav')
        this.element.classList.add('nav')

        this.list=''

        this.data.forEach(item =>{
            this.list +=`<li><a class="${item.slug}_link" href="#${item.slug}">${item.shortTitle}</a></li>`
            console.log(item.slug)
        })


        this.element.innerHTML=`
        <ul>
            ${this.list}
        </ul>`
        
        return this.element
    }

    init(){
        return this.create()
    }
}

const nav = new Nav().init()
export default nav