window.addEventListener('load',init); 

// global variables


// availabe levels
const levels={ // array of level for future improvement in porject
    easy :32,
    medium : 20,
    hard : 15
}

// to change level 
const currentlevel = levels.easy;

let time=32;  
let score=0;
let isPlaying; // bool variable for checking whether player is playing

// dom elements 
const wordInput= document.querySelector('#word-input');
const currentWord= document.querySelector('#current-word');
const scoreDisplay= document.querySelector('#score'); 
const timeDisplay=document.querySelector('#time');
const message = document.querySelector('#message'); // shows game result
const seconds =document.querySelector('#seconds');

// words container 
/*
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];   */
  const words = [
'Please take your dog, Cali, out for a walk – he really needs some exercise!' ,

'What a beautiful day it is on the beach, here in beautiful and sunny Hawaii' ,

'Rex Quinfrey, a renowned scientist, created plans for an invisibility machine',

'Do you know why all those chemicals are so hazardous to the environment?',

'You never did tell me how many copper pennies where in that jar; how come?',

'Max Joykner sneakily drove his car around every corner looking for his dog.',

'The two boys collected twigs outside, for over an hour, in the freezing cold!',

'When do you think they will get back from their adventure in Cairo, Egypt?',

'Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.',

'We climbed to the top of the mountain in just under two hours; isn’t that great?',

'Hector quizzed Mr. Vexife for two hours, but he was unable to get any information',

'I have three things to do today: wash my car, call my mother, and feed my dog',

'Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside.',

'The Reckson family decided to go to an amusement park on Wednesday',

'That herd of bison seems to be moving quickly; does that seem normal to you?',

'All the grandfather clocks in that store were set at exactly 3 o’clock.',

'There are so many places to go in Europe for a vacation--Paris, Rome, Prague, etc.',

'Those diamonds and rubies will make a beautiful piece of jewelry',

'The steamboats seemed to float down the Mississippi River at a snail’s pace',

      'In order to keep up at that pace, Zack Squeve would have to work all night'
  ]

  // intitialize game
  function init(){

    // show number of seconds in UI
    seconds.innerHTML = currentlevel;

// function to call random owrd from array
     showWord(words);

     // start matching words with input
     wordInput.addEventListener('input', startMatch);

     // call countdown every second
     setInterval(countdown,1000); // js function for countdown timer 

     // check game status
     setInterval(checkStatus,50);
  }

    // matching 
   function startMatch(){
      if(matchwords()){
       //  console.log('MATCH !!!');
       isPlaying=true;
       time=currentlevel+1;
       showWord(words);
       wordInput.value='';
       score++;
       
   }
   // if score is -1
   if(score === -1){
    scoreDisplay.innerHTML =0;
   }
   else{
   scoreDisplay.innerHTML =score;
   }
}
   // match curr word to input word
   function matchwords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct !!!';
        return true;
  }
  else{
    message.innerHTML= '';
        return false;
  }
   }


  // pick and show random word
    function showWord(words) {
        // we will need random index for random word
        const randIndex = Math.floor(Math.random() * words.length);

        // output a random word
        currentWord.innerHTML = words[randIndex];

    }

    // countdown timer
    function countdown() {
        // make sure time is not run out
        if(time >0 ){
            // decrement time by 1;
            time--;
        }

        else if(time===0){
            // game is over
            isPlaying=false;
        }

        // showtime 
        timeDisplay.innerHTML=time;
    }

    // for checking game status
    function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML='Game Over !!!';
        score=-1;
    }

    }
