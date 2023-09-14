import React from "react"
import {ButtonLinkText, ButtonList, Container, ContainerIcon, IconHome} from './styles'

export default function Home({navigation}){
    return(
        <Container>
            <ContainerIcon>
                <IconHome source={require("../../assets/shopping-car.png")} />
            </ContainerIcon>
            <ButtonList onPress={() => navigation.navigate('List')}><ButtonLinkText>Minha lista de compras</ButtonLinkText></ButtonList>
        </Container>
    )
}