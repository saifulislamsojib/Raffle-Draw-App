const enterNames = document.getElementById("enter-names");
const showNamesBtn = document.getElementById("show-names-btn");
const namesList = document.getElementById("names-list");
const displayNames = document.getElementById("display-names");
const outputBtn = document.getElementById("output-btn");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

let allNames = [];
namesList.style.display ="none";
showNamesBtn.addEventListener("click", () => {
    namesList.innerHTML = '';
    let newNames = enterNames.value.split(', ');
    if (newNames.length > 1) {
        namesList.style.display ="block";
        newNames.map(name => {
            allNames.push(name);
            const li = document.createElement("li");
            li.innerText = name;
            namesList.appendChild(li);
        })
    }
    else {
        alert("Please enter two or more names");
    }
    enterNames.value = '';
})
outputBtn.addEventListener('click', () => {
    let names = [...allNames];
    if (names.length > 0) {
        for (let i = names.length -1; i > 0; i--) {
            const shuffle = Math.floor(Math.random() * (i + 1));
            let temp = names[i];
            names[i] = names[shuffle];
            names[shuffle] = temp;
        }
        if (!first.innerText || !second.innerText || !third.innerText) {
            names.map((n, i) => {
                (function (i, count) {
                    setTimeout(() => {
                        const rand = Math.floor(Math.random() * names.length);
                        displayNames.innerText = names[rand];
    
                        const result = (position) => {
                            position.innerText = names[rand];
                            let ind = allNames.indexOf(names[rand]);
                            allNames.splice(ind, 1);
                        }
                        if (count === names.length - 1) {
                            if (!first.innerText) {
                                result(first);
                            }
                            else if (!second.innerText) {
                                result(second);
                            }
                            else if (!third.innerText) {
                                result(third);
                            }
                        }
                    }, i)
                })(i*100, i)
            })
        }
        else {
            alert("This Raffle Draw Is Finished");
            first.innerText = '';
            second.innerText = '';
            third.innerText = "";
            displayNames.innerText = 'Display Names';
            namesList.style.display ="none";
            allNames = [];
        }
    }
    else {
        alert("Please enter names");
    }
})