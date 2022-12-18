import { HeaderComponent, TitleIpam, UnList ,NavBar, AncorToMeet ,ListForHelp ,AncorForHelp } from "./style";

export default function Header(){
    return(
        <HeaderComponent>
            <TitleIpam>Desafio IPAM / Front-end</TitleIpam>
            <UnList>
                <NavBar>
                    <li>
                        <AncorToMeet href="https://ipam.org.br/sobre-o-ipam/" target="_blank">Conheça o IPAM</AncorToMeet>
                    </li>
                    <ListForHelp>Ajude-os</ListForHelp>
                    <li>
                        <AncorForHelp href="https://ipam.org.br/doe/" target="_blank">Doando</AncorForHelp>
                    </li>
                </NavBar>
            </UnList>
        </HeaderComponent>
    )
}