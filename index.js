
//Dataset of words
const setOfWords = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    "Because of the laboriousness of the translation process, since the 1940s efforts have been made, with varying degrees of success, to automate translation or to mechanically aid the human translator. More recently, the rise of the Internet has fostered a world-wide market for translation services and has facilitated 'language localization'. Ideally, the translator must know both languages, as well as the subject that is to be translated.",
    "This is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really be considered a paragraph but just a series of run on sentences",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
];

//Getting the inputs 
const msg = document.getElementById('msg');
const typedWords = document.getElementById('myWords');
const btn = document.getElementById('btn');

let startTime, endTime;
// Start the time and print a random para on the screen
const playGame = () => {
    let randomNummber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNummber];

    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

// To evaluate the final result and show the output
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    // console.log(totalTime);
    let totalString = typedWords.value;
    let wordCount = wordCounter(totalString);
    // Calculating the speed
    let speed = Math.floor((wordCount / totalTime) * 60);
    let finalMsg = "Your speed is " + speed + "wpm";
    finalMsg += compareWords(msg.innerText, totalString);

    msg.innerText = finalMsg;
    typedWords.value = "";

}
// To check the accuracy
const compareWords = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;

    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            count++;
        }
    }
    );
    let errorWords = (word1.length - count);
    let accuracy = Math.floor((count / word1.length) * 100);
    return ("\n" + "Your Accuracy is " + accuracy) + "%";
}
//To calculate the words typed for calculating the speed
const wordCounter = (str) => {
    if (str == "") return 0;
    let response = str.split(" ").length;

    return response;
}
btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typedWords.disabled = false;
        playGame();
    }
    else if (this.innerText == "Done") {
        typedWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
