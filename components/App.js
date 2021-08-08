import header from './Header.js'
import main from './Main.js'
import footer from './Footer.js'
import data from './Data.js'
class App{

    create () {
        this.app = document.createElement('div')
        this.app.classList.add('app')
        this.app.appendChild(header)
        this.app.appendChild(main)
        this.app.appendChild(footer)
        data.then(newData => console.log(newData))

        document.body.appendChild(this.app)
    }

    init(){
        import('./Head.js')
            .then((head)=>{ 
                let headtitle = head.title
                headtitle.innerHTML="First SPA"

                this.create()
            })
    }
}

const app = new App().init()
export default app