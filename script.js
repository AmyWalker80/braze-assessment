
const quizCheck = document.getElementById("submit");

document.getElementById("submit").addEventListener("click", displayAnswer);

function displayAnswer() {

    //clear answers
    document.getElementById("a_response").innerHTML= '';

    if (document.getElementById("a").checked) {
        document.getElementById("a_response").innerHTML= '   That is not right.';
    }

    document.getElementById("b_response").innerHTML= '';

    if (document.getElementById("b").checked) {
        document.getElementById("b_response").innerHTML= '   That is right!';
    }

    document.getElementById("c_response").innerHTML= '';

    if (document.getElementById("c").checked) {
        document.getElementById("c_response").innerHTML= '   That is not right.';
    }

    document.getElementById("d_response").innerHTML= '';

    if (document.getElementById("d").checked) {
        document.getElementById("d_response").innerHTML= '   That is not right.';
    }

} 