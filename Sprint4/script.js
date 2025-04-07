const mainDiv = document.getElementById("mainDiv");
const createElement = document.getElementById("createElement");
const mainBtn = document.getElementById("mainBtn");

function addNewMission() {
    const createElementText = createElement.value.trim();
    if (createElementText === "") {
        alert("Nazwa zadania nie może byc pusta");
    } else {
        const listElement = document.createElement("li");
        listElement.textContent = createElementText;
        mainDiv.appendChild(listElement);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edytuj";
        listElement.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Usuń";
        listElement.appendChild(deleteBtn);

        createElement.value = "";

        deleteBtn.addEventListener("click", ()=> {
            listElement.remove();
        })

        editBtn.addEventListener("click", ()=>{
            if (editBtn.textContent === "Edytuj") {
                const babyLiText = listElement.childNodes[0].textContent;
                const listInput = document.createElement("input");
                listElement.textContent = "";

                listInput.type = "text"
                listInput.value = babyLiText;
                listElement.appendChild(listInput);

                listElement.appendChild(editBtn);
                listElement.appendChild(deleteBtn);

                editBtn.textContent = "Zatwierdz zmiany";
            } else {
                const listInputText = listElement.querySelector("input");
                const newLiText = listInputText.value.trim();
                listElement.textContent = newLiText;
                listElement.appendChild(editBtn);
                listElement.appendChild(deleteBtn);
                editBtn.textContent = "Edytuj";
            }
        })
    }
}

mainBtn.addEventListener("click", addNewMission);