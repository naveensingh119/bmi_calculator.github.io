function ComputeBMI()
{
  var height = Number(document.getElementById("height").value);
   var height1=Number(document.getElementById("height1").value);
   var weight = Number(document.getElementById("weight").value);
    var x=weight * 0.4535;
    var y=height;
    var y1=height1*0.0833;
     var z=y+y1;
    var z1=z*0.305;
    var result = x / (z1 * z1);
     var answer=result.toFixed(1);
     document.getElementById("demo").innerHTML = answer;
     if(answer<18.5)
     {
        document.getElementById("result").innerHTML="You are UnderWeight"
     }
     else if(answer<25)
     {
        document.getElementById("result").innerHTML=" CONGRATS!!!  Your Weight is Normal"
     }
     else if(answer<30)
     {
        document.getElementById("result").innerHTML="You are Pre-Obsity  .  Do Exercise"
     }
     else if(answer<35)
     {
        document.getElementById("result").innerHTML="You are in Pre-Obsity1"
     }
     else if(answer<40)
     {
        document.getElementById("result").innerHTML="You are in Pre-Obesity2"
     }
     else{
        document.getElementById("result").innerHTML="You are in Pre-Obesity3"
     }
 }
