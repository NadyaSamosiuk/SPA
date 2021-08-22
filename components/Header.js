import nav from './Nav.js'
class Header {
    create (){
        this.element = document.createElement('header')
        this.element.classList.add('header')

        this.element.innerHTML=`
            <div class = "container">
                <div class="header__content">
                    <div class = "header__logo">
                        <a href="/#home" class="logo__link">
                            <img src="../image/label.png">
                            <span>AllLike</span>
                        </a>
                    </div>
                    ${nav.outerHTML}
                </div>
            </div>`

        return this.element
    }

    init(){
        return this.create()
    }
}

const header = new Header().init()
export default header