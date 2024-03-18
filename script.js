alert('Click the shot button, and Count your score!');

function myCircket() {
    var myRun = parseInt(Math.random() * 8);

    console.log(myRun);

    if (myRun == 0) {
        alert('Ooops! your are OUT ' + myRun + ' run');
    }
    else if (myRun == 1) {
        alert('Just single: ' + myRun + ' run');
    }
    else if (myRun == 2) {
        alert('Double runs: ' + myRun + ' runs');
    }
    else if (myRun == 3) {
        alert('Triple runs: ' + myRun + ' runs');
    }
    else if (myRun == 4) {
        alert('Boundary : ' + myRun + ' runs');
    }
    else if (myRun == 5) {
        alert('No ball + "4" : ' + myRun + ' runs');
    }
    else if (myRun == 6) {
        alert('Boundary "' + myRun + '" runs');
    }
    else if (myRun == 7) {
        alert('"Congratulation you WIN"');
    }
}