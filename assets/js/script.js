
      // Get html elements
     let btStart = document.getElementById('start-bt');
     let btStop = document.getElementById('stop-bt');
     let btReset = document.getElementById('reset-bt');
     let addMin = document.getElementById('minutes');
     let addSec = document.getElementById('seconds');

     // Set minutes and seconds to count from 0
     let minutes = 0;
     let seconds = 0; 
   
        btStart.addEventListener('click', () => {

         // Create function to start counting
         function startTimer() {

             seconds++;
             if(seconds == 10) {
                 minutes ++
                 seconds = 0;
             }

             // Display counting in the screen
            if(seconds <= 9) {
                addSec.innerHTML = '0' + seconds;
            } else {
                addSec.innerHTML = seconds;
            }
            
            if(minutes <= 9) {
                addMin. innerHTML = '0' + minutes  + ':';
            } else {
                addMin.innerHTML = minutes + ':';
            }
        }

         //use method interval to execute function every 1000 miliseconds
         const interval = setInterval(startTimer, 1000);

        // Stop counting when stop is clicked
         btStop.addEventListener('click', () => {
       
            clearTimeout(interval);
     });


        btReset.addEventListener('click', () => {

            minutes = 0;
            seconds = 0;
            addSec.innerHTML = '0' + seconds;
            addMin.innerHTML = '0' + minutes + ':';

        });

    });
     
    