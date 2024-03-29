import styles from './Projects.module.css'
import Card from '../Elements/Card'
import Api from '../../Image/Project/Api.svg'
import Portfolio from '../../Image/Project/Portfolio.svg'
import LandingPage from '../../Image/Project/LandingPage.svg'


function Projects(){
    return(
        <div className={styles.Projects} id="Projects">
            <h4>Projetos</h4>
            <Card
            img={Api}
            title="Consumo de API"
            description="Esse projeto foi criado com o intuito de explorar o uso de APIs. Nesse em específico
            foram usados APIs de CEP e de Clima."
            repo="https://github.com/orafavictor/desafioConsumoApiDnc"
            />
            <Card
            img={Portfolio}
            title="Portfolio Pessoal"
            description="Esse Projeto foi o ínicio de aprendizado utilizando o React+Vite, explorando diversas 
            funcionalidades mais avançadas."
            repo="https://github.com/orafavictor/DesafioPortfolio"
            />   
            <Card
            img={LandingPage}
            title="Landing Page de Arquitetura"
            description="Projeto dedicado a fixar conhecimentos em HTML e CSS. Um dos primeiros projetos que
            criei no início de minha trajetoria como aprendiz de tecnologia."
            repo="https://github.com/orafavictor/desafio1-lp-arquitetura"
            />        

        </div>
       
    )
}

export default Projects




/* <h4>Projetos</h4>
            <div id="only">
            <a href="https://github.com/orafavictor/desafioConsumoApiDnc" target='blank_' ><img src={Api}/></a>
            <div>
                
                <h1>Consumo de API</h1>
                <p>
                Esse projeto foi criado com o intuito de explorar o uso de APIs. Nesse em específico
                foram usados APIs de CEP e de Clima.
                </p>
            </div>
            </div>

            <div id="only"> 
            <a href='https://github.com/orafavictor/DesafioPortfolio' target='blank_'><img src={Portfolio} /></a>
            <div>
                <h1>Portfolio</h1>
                <p>
                Esse Projeto foi o ínicio de aprendizado utilizando o React, explorando diversas 
                funcionalidades mais avançadas.
                </p>
            </div>
            </div>

            <div id="only">
            <a href='https://github.com/orafavictor/desafio1-lp-arquitetura' target='blank_'><img src={LandingPage}/></a>
            <div>
                <h1>Landing Page de Arquitetura</h1>
                <p>
                Projeto dedicado a fixar conhecimentos em HTML e CSS. Um dos primeiros projetos que
                criei no início de minha trajetoria como aprendiz de tecnologia.
                </p>
            </div>
            </div> */