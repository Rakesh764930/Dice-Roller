
var imgArray = ["images/dice1.png" , "images/dice2.png" , "images/dice3.png" , "images/dice4.png" , "images/dice5.png" , "images/dice6.png" ];
var number = 0;
var number1 = 0;
var clicks = 0;


            function rollDice(){
   clicks =  clicks+1;
            var num1 = Math.floor(Math.random() * (imgArray.length));

            document.img1.src = imgArray[num1];
            var rnum = num1+1;

            number  += rnum;
            document.getElementById("p1").innerHTML = number;


            var num2 = Math.floor(Math.random() * (imgArray.length));
            document.img2.src = imgArray[num2];
            var rnum1 = num2+1;
            number1 += rnum1;
              document.getElementById("p2").innerHTML = number1;

//limliting the  number of clicks
if(clicks>=5){
              if (number >number1){
                alert("P1 wins\n\tGame Over");
                document.getElementById("btn").disabled=true;
                
              }else {
                alert("P2 wins\n\tGame Over");
                document.getElementById("btn").disabled=true;
              }

}

            }
