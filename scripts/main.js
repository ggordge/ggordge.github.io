const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/arny.gif") {
        myImage.setAttribute("src", "images/arny2.gif");
    }
    else {
        myImage.setAttribute("src", "images/arny.gif");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Arnie is cumming, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Arnie is cumming, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}