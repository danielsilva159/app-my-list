import React, { useState, useEffect } from "react";
import {ModalContainer, Label, Input, Container, Title, ViewButtons, ButtonSave, ButtonCancel, ButtonText} from"./styles"
import { maskCurrent } from "../../utils/masks";
import {save,get, updateItem} from "../../utils/storeLinks"
import { useIsFocused } from "@react-navigation/native";
import * as Crypto from 'expo-crypto';
import { TouchableWithoutFeedback, View } from "react-native";

export default function ModalItem({closeModal, updateList, total, dataItem}){
    const isFocused = useIsFocused();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    

    useEffect(() =>{
        updateItemList();
    },[isFocused])

    async function saveItem(){    
        
        if(dataItem){
            let item = {
                id: dataItem.id,
                name,
            }
            if(price){
                item.price = parseFloat(price);
            }
            await updateItem(item);
            total();
            closeModal();
        }else{
            let id = Crypto.randomUUID()
            let item = {name, id};
            if(price){
                item.price = parseFloat(price);
            }
        await save(item);
            updateList();
            total();
        }
        setName('');
        setPrice('');
    }
    async function updateItemList(){
        if(dataItem){
            setName(dataItem.name)
            if(dataItem.price){
                setPrice(dataItem.price.toString())
            }
        }
    }
    function handleChange(value){
        setPrice(maskCurrent(value))
    }
    return(
        <ModalContainer>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={{flex: 1}}></View>
            </TouchableWithoutFeedback>
            <Container>
            <Title>Produto</Title>
            <Label>
                <Input placeholder="Digite o nome do produto" value={name} onChangeText={(text) => setName(text)} />
            </Label>
            <Label>
                <Input  placeholder="Digite o valor do produto" value={price}  onChangeText={(text) => handleChange(text)} keyboardType="decimal-pad"  />
            </Label>
            <ViewButtons>
                <ButtonSave disabled={name ? false : true} onPress={() => saveItem()}><ButtonText>Salvar</ButtonText></ButtonSave>
                <ButtonCancel onPress={closeModal}><ButtonText>Cancelar</ButtonText></ButtonCancel>
            </ViewButtons>
            </Container>
        </ModalContainer>
    )
}