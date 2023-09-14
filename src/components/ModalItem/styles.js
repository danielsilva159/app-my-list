import styled from "styled-components/native";

    
export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
`; 
export const Container = styled.View`
   flex: 1;
   background-color: #fff;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 24px;
`;
export const Label = styled.View`
    margin: 20px 10px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 10px;
`; 
export const Input = styled.TextInput`
    padding: 10px;
`;

export const ViewButtons = styled.View`
    flex-direction: row;
    justify-content: space-around;
`; 
export const ButtonSave = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    color: #fff;
    background-color: #66BAFF;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
export const ButtonCancel = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    color: #fff;
    background-color: #FF0606;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    font-size: 24px;
`