function RhombusBtn(){
    // console.log('gce ghce ');
    const inputValue = getElementById('input-field');
    // console.log(inputValue);
    const inputValue2 = getElementById('inpu-field2');
    console.log(inputValue2);
}
function getElementById(event){
    const inputField = document.getElementById(event);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    // console.log(value);
    return value;
}