const btn = document.querySelector('button')

btn.addEventListener('click', function(e){
    e.preventDefault()
    const height = document.querySelector("#height").value 
    const weight = document.querySelector("#weight").value
    const result = document.querySelector("#results")

    const bmi = parseFloat(weight/((height*height)/10000)).toFixed(1)
    console.log(bmi)
    result.style.fontSize = "20px"
    result.innerText = `Your BMI is ${bmi}` 
})
