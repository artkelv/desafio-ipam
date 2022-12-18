import { HeaderComponent, TitleIpam, UnList ,NavBar, AncorToMeet ,ListForHelp ,AncorForHelp } from "./style";

export default function Header(){
    return(
        <HeaderComponent>
            <TitleIpam>Desafio IPAM / Front-end</TitleIpam>
            <UnList>
                <NavBar>
                    <li>
                        <AncorToMeet href="">Conheça o IPAM</AncorToMeet>
                    </li>
                    <ListForHelp>Ajude-os</ListForHelp>
                    <li>
                        <AncorForHelp href="">Doando</AncorForHelp>
                    </li>
                </NavBar>
            </UnList>
        </HeaderComponent>
    )
}