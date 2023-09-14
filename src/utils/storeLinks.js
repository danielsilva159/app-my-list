import AsyncStorage from '@react-native-async-storage/async-storage';

//buscar links salvos
export async function get() {
  const myStore = await AsyncStorage.getItem('shopping');
  let myStoreSaves = JSON.parse(myStore) || [];
  return myStoreSaves;
}

//salvar link no storage
export async function save(newLink) {
  let linksStoraged = await get('shopping');
  const hasLink = linksStoraged.some((link) => link.name === newLink.name);

  if (hasLink) {
    console.log('Esse item já exite na lista');
    return;
  }
  linksStoraged.push(newLink);
  await AsyncStorage.setItem('shopping', JSON.stringify(linksStoraged));
  console.log('Item inserido com sucess');
}

//Deletar algum link especifico
export async function deleteItem(id) {
  let list = await get();
  let myStore = list.filter((item) => {
    return item.id !== id;
  });
  await AsyncStorage.setItem('shopping', JSON.stringify(myStore));
  console.log('Item Deletado com sucesso');
  return myStore;
}

export async function deleteList(){
  await AsyncStorage.setItem('shopping', JSON.stringify([]));
  console.log('Lista Deletado com sucesso');
}

export async function updateItem(newLink) {
  let linksStoraged = await get('shopping');
  linksStoraged = linksStoraged.filter((item) => {
    return item.id !== newLink.id})
  linksStoraged.push(newLink)
  await AsyncStorage.setItem('shopping', JSON.stringify(linksStoraged));
}
