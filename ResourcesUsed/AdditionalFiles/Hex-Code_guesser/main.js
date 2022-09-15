var score=0

var ques=document.getElementById('ques');

var quesArray=[
    document.getElementById('color-card1'),
    document.getElementById('color-card2'),
    document.getElementById('color-card3'),
    document.getElementById('color-card4'),
    document.getElementById('color-card5'),
    document.getElementById('color-card6')
]


document.getElementById('start').addEventListener('click',function(){
    document.getElementById('skip').removeAttribute('disabled');
    document.getElementById('revise_ques').removeAttribute('disabled');
    
    document.getElementById('revise_ques').addEventListener('click',()=>{
        resetButton();
        
    })
    

    mainGame();
})
function resetButton() {
    for (let index = 0; index < quesArray.length; index++) {
        const element = quesArray[index];

        element.style.backgroundColor="#ffffff";
        document.getElementById('ques').innerHTML="#ffffff";
        
    }
    document.getElementById('skip').setAttribute('disabled');
}

function mainGame(){
    timer()
    document.getElementById('skip').addEventListener('click',function (){
    
        mainGame();
    
    } )
    let quesHex=ques.innerText="#"+(Math.floor(Math.random()*16777215).toString(16))
    var cAns=(Math.floor(Math.random()*6))


    console.log("Guessed"+cAns)
    for (let index = 0; index < quesArray.length; index++) {
        const element = quesArray[index];

        element.style.backgroundColor="#"+(Math.floor(Math.random()*16777215).toString(16))

        quesArray[cAns].style.backgroundColor=quesHex;
        console.log(quesArray[cAns].style.backgroundColor);
        
    }


    
    for (let ans_check = 0; ans_check < quesArray.length; ans_check++) {
        const element = quesArray[ans_check];
        element.addEventListener('click',function(){

            var clicked_rgb= getComputedStyle(element).backgroundColor


            score_fn(quesHex,clicked_rgb)
                
        })
        
    }

    function score_fn(quesHex,clicked_rgb) {
        
        const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

        const user_Ans=rgb2hex(clicked_rgb)

        if (user_Ans==quesHex) {
            console.log("Updated")
            score=score+1
            console.log(score)
            document.getElementById('score-val').innerText=score
            mainGame()
        }
        else{
            score=0
            document.getElementById('score-val').innerText=0
        }
    }
}

function timer() {
    let timing =9;
    if (timing>0) {
        setInterval(function() {
            document.getElementById('timer').innerHTML =timing;
            timing--;
        }, 1000)
    }
    else{
        document.getElementById('timer').innerHTML ="10";
    }
    
}


 