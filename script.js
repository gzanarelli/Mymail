
// Number of message

const counter = () => {
    let count = document.getElementById('count');
    let nbOfMessages = document.getElementsByClassName('row').length;    
    count.textContent = nbOfMessages;
}

// Delete message

let trash = document.getElementsByClassName('trash');

for(let i = 0; i < trash.length; i++){
    trash[i].addEventListener("click", function(){
        let parent = this.parentNode;
        console.log(trash.length + ' ' + i);
        if (i == trash.length - 1)
            trash[i - 1].parentNode.classList += " last-row";
        parent.remove();
        counter();
    })
}

counter();


// Add message

let btn = document.getElementsByClassName('btn-blue');

btn[0].addEventListener("click", function(){
    // Recover message
    let message = document.getElementById('add-message').value;
    if (message) {
        // Create new elements
        let div = document.createElement('div');
        let p = document.createElement('p');
        let h6 = document.createElement('h6');
        let avatar = document.createElement('img');
        let div2 = document.createElement('div');
        let trash = document.createElement('img');
        
        // Div
        div.className += "row";
        div.className += " last-row";

        // message
        p.appendChild(document.createTextNode(message));
        document.getElementById('add-message').value = "";

        // Avatar
        avatar.className += "avatar";
        avatar.src = "./avatar-1.jpg";

        // username
        h6.appendChild(document.createTextNode("Gabriel Zanarelli"));
        
        // trash
        trash.className += "trash";
        trash.src = "./trash.png";

        // Add in the Div
        div2.appendChild(h6);
        div2.appendChild(p);
        div.appendChild(avatar);
        div.appendChild(div2);
        div.appendChild(trash);
        
        //Delete Class "last-row" on the last div
        let len = document.getElementsByTagName('div').length;
        for(i = 0; i < len; i++) {
            console.log(document.getElementsByTagName('div')[i].classList);
            if (document.getElementsByTagName('div')[i].classList.contains('last-row') === true)
                document.getElementsByTagName('div')[i].classList = 'row';
        }

        // Insert message
        document.body.appendChild(div);

        // Count message
        counter();

        trash.addEventListener("click", function(){
            this.parentNode.remove();
            counter();
        })
    }
});

