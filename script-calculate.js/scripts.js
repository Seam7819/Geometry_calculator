document.getElementById('btn-base').addEventListener('click', function (){
    // input text of base 
    const inputField = document.getElementById('input-base');
    const inputText = inputField.value;
    // console.log(inputText);
    const base = parseFloat(inputText);
    // console.log(base);

    // input text field of height 
    const inputHeight = document.getElementById('input-height');
    const textHeight = inputHeight.value;
    const height = parseFloat(textHeight);
    // console.log(height);

    const area = 0.5 * base * height;
    // console.log(area);


    const areaSection = document.getElementById('area-section');
    const result = document.createElement('p');
    result.innerText = area;
    areaSection.appendChild(result)
})