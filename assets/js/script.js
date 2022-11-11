
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
     
// Developing dark mode
// Pseudo-code:
//check if dark mode is enabled
//IF enable
   //THEN disable (turn off)
//ELSE
    //enable (turn on)

// Declare a variable to be the localStorage, getting/recuperating the key (darkMode). Get hold of it to check if the settings is enable or not
let darkMode = localStorage.getItem('darkMode');

// Get button element from html doc
const darkModeToggle = document.querySelector('#dark-mode-toggle');

//create arrow function to be able to call this function multiple times
//adding or removing darkmode style. Setting new default style in localStorage

const enableDarkMode = () => {
     // add the css class darkmode to the body;
    document.body.classList.add('darkmode');
    // update darkmode into the localStorage to 'enable' status (know which is the new setting to remember during next user's visit)
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.style.background = '#f0f0f0';
    darkModeToggle.style.borderRadius = '10px';
}

const disableDarkMode = () => {
    // remove the css class darkmode to the body;
    document.body.classList.remove('darkmode');
    // update darkmode into the localStorage to 'disable' status
    localStorage.setItem('darkMode', 'disabled');
}

//check if it is set to enable from previous visit
if (darkMode === 'enable') {
     enableDarkMode();
}

// add eventListener to toggle button
darkModeToggle.addEventListener('click', () => {
    // update variable darkMode when clicked
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
        darkModeToggle.style.background = '#f0f0f0';
        darkModeToggle.style.borderRadius = '10px';
    } else {
        disableDarkMode();
        darkModeToggle.style.background = 'none';
        darkModeToggle.style.borderRadius = 'none';
    }
});
    