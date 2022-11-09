
//Definir display contador
//pausar o tempo de contagem 
//continuar o tempo de contagem
//zerar o tempo de contagem


//LOOP
    //counter == 0
    //FOR EACH second counter change to + 1 second;
    //IF counter stop == freeze the time;
    // ELSE IF counter play == unfreeze time to continue counting.
    // ELSE == counter == 0

    let btStart = document.getElementById('start-bt');
    let btStop = document.getElementById('bt-stop');
    let btReset = document.getElementById('bt-reset');
    //add event listener to execute after the page is loaded 
    
    btStart.addEventListener('click', () => {
    
       // Get html elements
       let addMin = document.getElementById('minutes');
       let addSec = document.getElementById('seconds');
        
       // Set minutes and seconds to count from 0
       let minutes = 0;
       let seconds = 0;
       
        // Create function to start counting
        function startTimer() {

            seconds++;
            if(seconds == 10) {
                minutes ++
                seconds = 0;
            }
           
            // Display counting in the screen
            addSec.innerHTML = seconds;
            addMin. innerHTML = minutes;
           }
           
        //use method interval to execute function every 1000 miliseconds
        var interval = setInterval(startTimer, 1000);
    });

   

  
   