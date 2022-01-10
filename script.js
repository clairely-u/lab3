let submissions = [
    {
        name: "Jane",
        score: 95,
        date: 2020-01-24,
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: 2018-5-14,
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: 2019-07-05,
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: 2020-04-22,
        passed: true,
    },
];

function addSubmission (array, newName, newScore, newDate) {
    array.push(newName, newScore, newDate);
    name = newName;
    score = newScore;
    date = newDate;
}

function deleteSubmissionByIndex (array, index) {
    array.splice(index, 1);
}

/*The student parameter actually represents an object in your array.
 So you will need access the name property to compare it to the name provided as
a parameter to the deleteSubmissionByName function. */

function deleteSubmissionByName (array, name) {
    const findUser = (student) => student === name;
    const index = array.findIndex(findUser);
    array[index].splice(index, 1);
  
}

function editSubmission (array, index, score) {
    array[index].score = score;
    if (score >= 60) {
        array[index].passed = true;
    } else {
        array[index].passed = false;
    }
}

function findSubmissionByName (array, name) {
    const foundUser = array.find(user => user = name)
    return console.log(foundUser);
} 

function findLowestScore (array) {
    const lowestScore = array[0];
    for ( i = 1; i<array.length; i++) {
        if(array[i] < lowestScore) {
            lowestScore = array[i];
        }
    }
}

function findAverageScore (array) {
    const sumScore = 0;
    for (const person of array) {
        sumScore += array[i]
        let average = sumScore/array.length
   }
 }

function filterPassing (array) {
    const result = array.filter(passing === true);
}

function filter90AndAbove (array) {
    const newArray = array.filter(score >= 90);
}

