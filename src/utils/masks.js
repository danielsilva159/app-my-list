export function maskCurrent(value){
    value = value.replace(/\D/, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2")
    return value;
}