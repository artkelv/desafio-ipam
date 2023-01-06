import imgArvore from "../../assets/arvore.png"
import imgLinkedin from "../../assets/linkedin.png"
import imgGithub from "../../assets/github.png"
import imgPortfolio from "../../assets/portfolio.png"
import imgSetaDireita from "../../assets/seta-direita.png"

import { FooterComp, BoxDetails, ChallengerDetais, AncorLinkedin } from "./style"

function Footer() {
    return(
        <FooterComp>
            <BoxDetails>
                <img src={imgSetaDireita} alt="Detlhes do projeto aqui" width={50}/>
                <ChallengerDetais href="https://github.com/artkelv/desafio-ipam" target="_blank">Detalhes do Desafio.</ChallengerDetais>
            </BoxDetails>
            <div>
                <span>Obrigado pela oportunidade <img src={imgArvore} alt="Flor de agradecimento." width={25}/>. </span>
            </div>
            <section>
                <a href="https://artkelv.github.io/portfolio/" target="_blank">
                    <img src={imgPortfolio} alt="Clique aqui e acesse meu Portfolio" width={50}/>
                </a>
                <AncorLinkedin href="https://www.linkedin.com/in/arthur-kelvim-780068213/" target="_blank">
                    <img src={imgLinkedin} alt="Clique aqui e acesse meu Linkedin" width={50}/>
                </AncorLinkedin>
                <a href="https://github.com/artkelv" target="_blank">
                    <img src={imgGithub} alt="Clique aqui e acesse meu Github" width={50}/>
                </a>
            </section>
        </FooterComp>
    )
}
export default Footer;