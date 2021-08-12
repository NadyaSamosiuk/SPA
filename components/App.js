class App{

    create () {
        this.app = document.createElement('div')
        this.app.classList.add('app')
        document.body.appendChild(this.app)
    }

    init(){
        import('./Head.js')
            .then((data)=>{ 
                let headtitle = data.title
                headtitle.innerHTML="First SPA"

                import('./Data.js')
                    .then(data => (data.default)
                        .then(defaultData =>{
                            localStorage.setItem('spadata', defaultData)
                            this.create()

                            import('./Header.js')
                                .then(header => {
                                    let headerModule = header.default
                                    this.app.appendChild(headerModule)

                                    import('./Main.js')
                                        .then(main => {
                                            let mainModule = main.default
                                            this.app.appendChild(mainModule)

                                            import('./Footer.js')
                                                .then(footer => {
                                                    let footerModule = footer.default
                                                    this.app.appendChild(footerModule)
                                                })
                                        })
                                })
                        }))

                
            })
    }
}

const app = new App().init()
export default app