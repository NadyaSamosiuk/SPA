class Nav {
    create (){
        this.element = document.createElement('nav')
        this.element.classList.add('nav')

        this.element.innerHTML=`
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>`
        
        return this.element
    }

    init(){
        return this.create()
    }
}

const nav = new Nav().init()
export default nav