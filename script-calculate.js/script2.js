function ParallelogramBtn(){
    // console.log("pentagone nenene ");
    const areavalue = getElementById('input-Field');
    // console.log(areavalue);
    const peralavu = getElementById('field-eyy')
    console.log(peralavu);

}

function getElementById(getId) {
    const inputField = document.getElementById(getId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    return value;
}