
function encrypt(event) {
    let inputText = document.getElementById('inputText').value;
    if (inputText.trim() === "") {

        let tooltip = document.getElementById('tooltip');
        tooltip.textContent = 'Please enter a text to encrypt or decrypt';
        tooltip.style.top = `${event.clientY}px`;
        tooltip.style.left = `${event.clientX + 10}px`;
        tooltip.classList.add('show');
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);

    } else {

        let encryptedText = "";
        for (let character of inputText) {
            switch (character) {
                case "a":
                    character = "ai";
                    break;
                case "e":
                    character = "enter";
                    break;
                case "i":
                    character = "imes";
                    break;
                case "o":
                    character = "ober";
                    break;
                case "u":
                    character = "ufat";
                    break;
            }
            // Aquí es donde se agrega cada carácter encriptado al texto final
            encryptedText += character;
        }

        document.getElementById('encryptedText').innerText = encryptedText;
        document.getElementById('copyButton').removeAttribute('hidden');
        document.getElementById('imagePlaceholder').remove();
        document.getElementById('messageTextIsEmpty').remove();
        document.getElementById('subMessageTextIsEmpty').remove();
        console.log(encryptedText);
    }
}


function decrypt(event){
    let inputText = document.getElementById('inputText').value;
    if (inputText.trim() === "") {

        let tooltip = document.getElementById('tooltip');
        tooltip.textContent = 'Please enter a text to encrypt or decrypt';
        tooltip.style.top = `${event.clientY}px`;
        tooltip.style.left = `${event.clientX + 10}px`;
        tooltip.classList.add('show');
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);

    } else {
        let inputText = document.getElementById('inputText').value;
        let decryptedText = inputText
        
        decryptedText = decryptedText.replace(/ai/g, "a");
        decryptedText = decryptedText.replace(/enter/g, "e");
        decryptedText = decryptedText.replace(/imes/g, "i");
        decryptedText = decryptedText.replace(/ober/g, "o");
        decryptedText = decryptedText.replace(/ufat/g, "u");
        document.getElementById('encryptedText').innerText = decryptedText;
        console.log(decryptedText);
        document.getElementById('imagePlaceholder').remove();
        document.getElementById('messageTextIsEmpty').remove();
        document.getElementById('subMessageTextIsEmpty').remove();
        document.getElementById('copyButton').removeAttribute('hidden');
    }
}
   

function copyToClipboard(event) {
    let encryptedText = document.getElementById('encryptedText').innerText;
    let tooltip = document.getElementById('tooltip');

    // copy to clipboard
    navigator.clipboard.writeText(encryptedText).then(() => {
        // show tooltip
        tooltip.textContent = 'Text copied to clipboard';
        tooltip.style.top = `${event.clientY}px`;
        tooltip.style.left = `${event.clientX + 10}px`;
        tooltip.classList.add('show');

        // hide tooltip after 2 secs
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);
    });
}
