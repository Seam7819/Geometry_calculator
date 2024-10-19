document.getElementById('rectangle-btn').addEventListener('click', function(){
    const inputField = document.getElementById('width-field');
    const inputText =parseFloat (inputField.value);
    // console.log(inputText);
    
    const lengthField = document.getElementById('length-field');
    const textInput = parseFloat(lengthField.value);
    // console.log(textInput);

    const area = textInput * inputText;
    // console.log(area);

    const areaResult = document.getElementById('area-section');
    const createTag = document.createElement('p');
    createTag.innerText = area;
    areaResult.appendChild(createTag);

})