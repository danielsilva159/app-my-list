import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ECE8E8;
`
export const ContainerTitle = styled.View`
    flex-direction: row;
    background-color: #66BAFF ;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;
export const Title = styled.Text`
    font-size: 24px;
` ;

export const Total= styled.View`
 flex-direction: row;
 background-color: #fff;
 margin-top: 20px;
 padding: 20px;
 justify-content: space-between;
`;
export const TextTotal = styled.Text`
    color: #66BAFF;
    font-size: 24px;
`;

export const ButtonAction = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;
export const ButtonAdd = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    color: #fff;
    background-color: #66BAFF;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
export const ButtonClear = styled.TouchableOpacity`
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
`;

export const ListItem = styled.FlatList``;
export const CloseList = styled.TouchableOpacity``;