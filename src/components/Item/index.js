import React, { useState } from "react";
import {Container, Product, Name, Price, BoxIconDelete} from './styles'
import { Modal, View } from "react-native";
import {Feather} from "@expo/vector-icons"
import ModalItem from "../ModalItem";
import { deleteItem } from "../../utils/storeLinks";

export default function Item({data, update}){
    const [modal, setModal] = useState(false)
    
    async function handleDelete(){
        await deleteItem(data.id);
        update();
    }
    return(
    <View>
    <Container onPress={() => setModal(true)}>
        <Product>
            <Name>{data.name}</Name>
            {
                data.price && (
                    <Price>R$ {data.price}</Price>
                )
            }
        </Product>
        <BoxIconDelete onPress={() =>handleDelete()}>
            <Feather name="trash" size={40} color="#000" />
        </BoxIconDelete>
    </Container>
    <Modal visible={modal} transparent animationType="slide">
        <ModalItem closeModal={() => setModal(false)} dataItem={data} total={() => update()}></ModalItem>
    </Modal>
    </View>
    )
}