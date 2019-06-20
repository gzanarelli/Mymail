
// Number of message

const counter = () => {
    let count = document.getElementById('count');
    let nbOfMessages = document.getElementsByClassName('row').length;
    console.log('Nb de message: ' + nbOfMessages);
    
    count.textContent = nbOfMessages;
}

// Delete message

let trash = document.getElementsByClassName('trash');

for(let i = 0; i < trash.length; i++){
    trash[i].addEventListener("click", function(){
        console.log("click detecte !");
        let parent = this.parentNode;
        parent.remove();
        counter();
    })
}

function message() {
    console.log(message);
}

counter();
