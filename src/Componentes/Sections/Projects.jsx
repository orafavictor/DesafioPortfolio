import styles from './Projects.module.css'
import Api from '../../Image/Project/Api.svg'
import Portfolio from '../../Image/Project/Portfolio.svg'
import LandingPage from '../../Image/Project/LandingPage.svg'

function Projects(){
    return(
        <section className={styles.Projects} id="Projects">
          <h4>Projetos</h4>
            <div id="only">
            <img src={Api}/>
            <div>
                <h1>Consumo de API</h1>
                <p>
                Esse projeto foi criado com o intuito de explorar o uso de APIs. Nesse em específico
                foram usados APIs de CEP e de Clima.
                </p>
            </div>
            </div>

            <div id="only">
            <img src={Portfolio}/>
            <div>
                <h1>Portfolio</h1>
                <p>
                Esse Projeto foi o ínicio de aprendizado utilizando o React, explorando diversas 
                funcionalidades mais avançadas.
                </p>
            </div>
            </div>

            <div id="only">
            <img src={LandingPage}/>
            <div>
                <h1>Landing Page de Arquitetura</h1>
                <p>
                Projeto dedicado a fixar conhecimentos em HTML e CSS. Um dos primeiros projetos que
                criei no início de minha trajetoria como aprendiz de tecnologia.
                </p>
            </div>
            </div>

        </section>
       
    )
}

export default Projects


