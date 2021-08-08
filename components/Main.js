class Main {
    create (){
        this.element = document.createElement('main')
        this.element.classList.add('main')

        this.element.innerHTML=`
            <div class = "container">
                <h1>Hello</h1>
                <p>Some text</p>
            </div>`

        return this.element
    }
    init(){
        return this.create()
    }
}

const main = new Main().init()
export default main