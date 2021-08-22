class Footer {
    create (){
        this.element = document.createElement('footer')
        this.element.classList.add('footer')

        this.element.innerHTML=`
            <div class = "container">
                <div class="footer__content">
                    <div class = "footer__logo">
                        <a href="/#home" class="logo__link2">
                            <img src="../image/label2.png">

                            <span>AllLike</span>
                        </a>
                    </div>
                    <div class ="footer__contacts">
                        <span class="footer__span">Tel.: (800) 927-7671</span><br>
                        <span class="footer__span">Email: cs@alllike.com </span>      
                    </div>
                </div>
                <div class="footer__copyright"><span>© 2009–2021 alllike.com or its affiliates</span></div>
            </div>`

        return this.element
    }
    init(){
        return this.create()
    }
}

const footer = new Footer().init()
export default footer