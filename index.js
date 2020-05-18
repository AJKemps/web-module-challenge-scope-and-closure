// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 uses a closure and counter2 does not.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * count1er uses a closure - you can tell because the nested function "counter" calls back to the count variable inside of the parent function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 is preferrable in a scenario where the count needs to build on previous counts - counter2 is better in a static scenario where the count only needs to be updated once
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let points = Math.round((Math.random() * 2));
  return points;
}

console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numInning){

  let homeScore = 0;

  for (let i = 0; i < numInning; i++){
    homeScore = inning() + homeScore;
  };

  let awayScore = 0;

  for (let i = 0; i < numInning; i++){
    awayScore = inning() + awayScore;
  };

  return {"Home": homeScore, "Away": awayScore}
};

console.log(finalScore(inning,9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, numInning) {
  let homeScore = 0;
  let awayScore = 0;

  for (let i = 0; i < numInning; i++){
    let ing = '1st'; 
    homeScore = inning() + homeScore;
    awayScore = inning() + awayScore;
    if (i === 0) {ing = '1st';}
    else if (i === 1) {ing = '2nd';}
    else if (i === 2) {ing = '3rd';}
    else if (i === 3) {ing = '4th';}
    else if (i === 4) {ing = '5th';}
    else if (i === 5) {ing = '6th';}
    else if (i === 6) {ing = '7th';}
    else if (i === 7) {ing = '8th';}
    else if (i === 8) {ing = '9th';}
    else if (i === 9) {ing = '10th';}
    else if (i === 10) {ing = '11th';}
    else if (i === 11) {ing = '12th';}
    else if (i === 12) {ing = '13th';}
    else if (i === 13) {ing = '14th';}
    else if (i === 14) {ing = '15th';}
    else if (i === 15) {ing = '16th';}
    else if (i === 16) {ing = '17th';}
    else if (i === 17) {ing = '18th';}
    else if (i === 18) {ing = '19th';}
    else if (i === 19) {ing = '20th';}
    else if (i === 20) {ing = '21st';}
    else if (i === 21) {ing = '22nd';}
    else if (i === 22) {ing = '23rd';}
    else if (i === 23) {ing = '24th';}
    else if (i === 24) {ing = '25th';}
    else if (i === 25) {ing = '26th';}
    else if (i === 26) {ing = '27th';}
    else if (i === 27) {ing = '28th';}
    else if (i === 28) {ing = '29th';}
    else if (i === 29) {ing = '30th';}
    else if (i === 30) {ing = '31st';}
    console.log(`${ing} inning: ${awayScore} - ${homeScore}`)
  };
  return `Final Score: ${awayScore} - ${homeScore}`
};

console.log(scoreboard(inning,9));
