const btn = document.querySelector('button')

btn.addEventListener('click', function(e){
    e.preventDefault()
    const height = document.querySelector("#height").value 
    const weight = document.querySelector("#weight").value
    const result = document.querySelector("#result")
    const feedback = document.querySelector("#feedback")

    const bmi = parseFloat(weight/((height*height)/10000)).toFixed(1)

    result.style.fontSize = "20px"
    result.innerText = `Your BMI is ${bmi}` 

    if(bmi < 18.5){
        feedback.innerText = `You are underweight. Eat More.`
    } else if(bmi >= 18.5 && bmi <= 24.9){
        feedback.innerText = `You are normal. Keep it up.`
    }else if(bmi > 24.9){
        feedback.innerText = `You are overweight. Eat less.`
    }
})
