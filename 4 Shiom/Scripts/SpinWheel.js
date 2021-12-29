

$(document).ready(function(){
	
    document.getElementById("spinGameScore").innerHTML="Game Score 0";
    let clicked = false;
    let clickedCount = 0;
	/*WHEEL SPIN FUNCTION*/
	const sectors = [
        {color:"#3CB371", label:"90"}, 
        {color:"#237DE0", label:"50"},
        {color:"#D95970", label:"-10"},
        {color:"#C3B727", label:"0"},
        {color:"#3CB371", label:"80"},
        {color:"#237DE0", label:"-15"},
        {color:"#D95970", label:"20"},
        {color:"#C3B727", label:"-20"},
      ];
      
      const rand = (m, M) => Math.random() * (M - m) + m;
      const tot = sectors.length;
      const EL_spin = document.querySelector("#spin");
      const ctx = document.querySelector("#wheel").getContext('2d');
      const dia = ctx.canvas.width;
      const rad = dia / 2;
      const PI = Math.PI;
      const TAU = 2 * PI;
      const arc = TAU / sectors.length;
      
      const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard
      let angVel = 0; // Angular velocity
      let ang = 0; // Angle in radians
      
      const getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;
      
      function drawSector(sector, i) {
        const ang = arc * i;
        ctx.save();
        // COLOR
        ctx.beginPath();
        ctx.fillStyle = sector.color;
        ctx.moveTo(rad, rad);
        ctx.arc(rad, rad, rad, ang, ang + arc);
        ctx.lineTo(rad, rad);
        ctx.fill();
        // TEXT
        ctx.translate(rad, rad);
        ctx.rotate(ang + arc / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 30px sans-serif";
        ctx.fillText(sector.label, rad - 10, 10);
        //
        ctx.restore();
      };
      

 function rotate() {
 
          document.getElementById("congratsPopUp").style.visibility="hidden";
  

    if(clickedCount<3){
     
          //document.getElementById("congratsPopUp").style.visibility="hidden";


        const sector = sectors[getIndex()];
        ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
        EL_spin.textContent = !angVel ? "SPIN" : sector.label;
        EL_spin.style.background = "#000000";
        
        if(!angVel && clicked){

            if(parseInt(sector.label)>0){

                document.getElementById("popUpHeader").innerHTML="Congradulations!";
                document.getElementById("popUpContent").innerHTML="You have won "+sector.label+" Points. Spin again to test you Luck!!";
                document.getElementById("buttonText").innerHTML="Spin Again";
                document.getElementById("popUpHeader").style.marginLeft="20%";
                document.getElementById("popUpHeader").style.color="#2DCF51";
                document.getElementById("congratsPopUp").style.visibility="visible";
                clickedCount++;

            }else{
                document.getElementById("popUpHeader").innerHTML="Oops!";
                document.getElementById("popUpContent").innerHTML="You have just lost  "+sector.label+" Points. Spin again to test you Luck!!";
                document.getElementById("buttonText").innerHTML="Spin Again";
                document.getElementById("popUpHeader").style.color="#E90808";
                document.getElementById("popUpHeader").style.marginLeft="35%";
                document.getElementById("congratsPopUp").style.visibility="visible";
                clickedCount++; 
            }

            


            document.getElementById("spinGameScore").innerHTML="Game Score "+sector.label;
        
           // alert("You Won: "+sector.label);
            localStorage.setItem("spinGameScore",sector.label);
        }
        clicked=true;
      

        }else{

          document.getElementById("popUpHeader").innerHTML="Oops!";
          document.getElementById("popUpContent").innerHTML="Your 3 chances of spinning is over come again next week!";
          document.getElementById("buttonText").innerHTML="Understood";
          document.getElementById("popUpHeader").style.color="#E90808";
          document.getElementById("popUpHeader").style.marginLeft="35%";
          document.getElementById("congratsPopUp").style.visibility="visible";

        }
        
      }
      
      function frame() {
        if (!angVel) return;
        angVel *= friction; // Decrement velocity by friction
        if (angVel < 0.002) angVel = 0; // Bring to stop
        ang += angVel; // Update angle
        ang %= TAU; // Normalize angle
        rotate();
      }
      
      function engine() {
        frame();
        requestAnimationFrame(engine)
      }
      
      // INIT
      sectors.forEach(drawSector);
      rotate(); // Initial rotation
      engine(); // Start engine
      EL_spin.addEventListener("click", () => {
        if (!angVel) angVel = rand(0.25, 0.35);
      });
      
	
      
      $('.continueButtonContainer').click(() => {
          window.location.href = 'GameLanding-Ipad.html';
        
      });
	
});//DOCUMENT READY
	

