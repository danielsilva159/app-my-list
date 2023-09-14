import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #fff;
    flex-direction: row;
    margin: 10px;
    height: 80px;
    border-radius: 10px;
    padding: 10px;
    justify-content: space-between;
`; 
export const Product = styled.View``; 
export const Name = styled.Text`
    font-size: 24px;
    color: #99D2FE
`;
export const Price = styled.Text`
    font-size: 20px;
    color: #99D2FE;
`;
export const BoxIconDelete = styled.TouchableOpacity`
    justify-content: center;
`;