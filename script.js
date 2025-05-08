// Selecting Elements
var inputBox = document.getElementById("inputBox")
var result = document.getElementById("result")
var guesscount = document.getElementById("guesscount")
var guess = 3


// Generate Random Number from 1 to 5
var randomnumber = Math.floor(Math.random()*10)+1  //1 to 10
if(randomnumber>5)
{
    randomnumber = randomnumber-5
}

// Event Headler Function
function checkthenumber()
{
    if(inputBox.value == randomnumber)
    {
        alert("You Got it Right Answer, Congratulation !!!!")
        result.textContent = "You are Right !!"
    }
    else
    {
        guess=guess-1
        if(guess==0)
        {
            alert("You Lost, Generated Random Number is : "+randomnumber)
        }
        guesscount.textContent = "Available Guesses : "+guess
        result.textContent = "You are Wrong !!"

    }
    
}
