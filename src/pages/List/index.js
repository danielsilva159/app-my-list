import React, { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'
import {Container, ContainerTitle,Title, Total, TextTotal, ButtonAdd, ButtonClear, ButtonAction, ButtonText, ListItem, CloseList} from './styles'
import Item from "../../components/Item";
import { Modal, Text } from "react-native";
import ModalItem from "../../components/ModalItem";
import { deleteList,get } from "../../utils/storeLinks";


export default function List({navigation}){
    const isFocused = useIsFocused();
    const [modal, setModal] = useState(false);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    async function getList() {
        const result = await get();
        setList(result);
        totalPrice();

      }
    useEffect(() => {
        getList();
      }, [isFocused]);
    function handleDeleteList(){
        deleteList();
        getList();
    }
    async function totalPrice(){
        const result = await get();
        let totalItems = 0;
        result.forEach(item => {
            if(item.price){
                totalItems = totalItems + item.price
            }
        });
        setTotal(totalItems.toFixed(2))
        getList();
    }
    return(
        <Container>
            <ContainerTitle>
                <Feather name="shopping-cart" size={50} />
                <Title>Minha lista de compras</Title>
                <CloseList onPress={() => navigation.navigate('Home')}>
                <Feather name="x-circle" size={50} />
                </CloseList>
            </ContainerTitle>
            <Total>
                <TextTotal>Total:</TextTotal>
                <TextTotal>R$ {total}</TextTotal>
            </Total>
            <ButtonAction>
                <ButtonAdd onPress={() => setModal(true)}>
                    <ButtonText>Adicionar</ButtonText>
                </ButtonAdd>
                <ButtonClear onPress={() => handleDeleteList()}><ButtonText>Limpar lista</ButtonText></ButtonClear>
            </ButtonAction>
            <ListItem
                data={list}
                
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Item data={item} update={() => getList()} />}
            />
            <Modal visible={modal} transparent animationType="slide">
                <ModalItem closeModal={() => setModal(false)} updateList={() => getList()} total={() => totalPrice()}></ModalItem>
            </Modal>
        </Container>
    )
}