// Challenge 1 JS

function addition() {
    let numbers1 = Number(document.getElementById("num1").value);
    let numbers2 = Number(document.getElementById("num2").value);

    let sum = numbers1 + numbers2;

    // how to display content
    const showSum = document.querySelector('.sum');
    showSum.textContent = sum;
}
