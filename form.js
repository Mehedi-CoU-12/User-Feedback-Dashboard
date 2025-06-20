//catch all the tag
const body = document.body;
const form = document.getElementById("feedbackForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const feedback = document.getElementById("message");
const preview = document.getElementById("preview");
const listOfFeedback = document.getElementById("feedbackList");
const mode = document.getElementById("toggleTheme");
const previewName = document.getElementById("previewName");
const previewMessage = document.getElementById("previewMessage");
const previewLatter=document.getElementById('previewLatter');

//click submit button
form.addEventListener("submit", (e) => {
    e.preventDefault();

    //creating tag
    const items = document.createElement("li");
    const userName = document.createElement("p");
    const comment = document.createElement("p");
    const length=document.createElement('p');
    const button = document.createElement("button");

    //for deleting feedback
    button.addEventListener("click", () => {
        const confirmDelete = confirm("do you want to delete this feedbac?");
        if (confirmDelete) {
            items.classList.add("fade-out");

            setTimeout(() => {
                listOfFeedback.removeChild(items);
            }, 500);
        }
    });

    userName.innerHTML=`<strong> User :</strong>${name.value}`
    comment.innerHTML = `<strong>Comment :</strong> ${feedback.value}`;
    length.innerHTML=`<strong>Total Character :</strong> ${feedback.value.trim().length}`;
    button.innerText = "Delete";

    //button style
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.border = "none";

    //add them to the list
    items.append(userName);
    items.append(comment);
    items.append(length);
    items.append(button);

    if (name.value && email.value && feedback.value) {

        listOfFeedback.append(items);

        //clear input fields
        name.value = "";
        email.value = "";
        feedback.value = "";

        previewMessage.innerText = "";
        previewLatter.innerText="";
        preview.style.display = "none";
    }
});

//change the theme
mode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    mode.innerText = body.classList.contains("dark-mode")
        ? "switched to light"
        : "switched to dark";
});

//for input preview
feedback.addEventListener("input", () => {
    if (name.value.trim() !== "") {
        previewName.innerText = `${name.value} is typing...`;
        previewName.style.color = "red";
    } else {
        previewName.innerText = `Anonymous is typing...`;
        previewName.style.color = "red";
    }

    previewMessage.innerText = feedback.value;
    previewLatter.innerText=feedback.value.trim().length;
});

//show preview div
feedback.addEventListener("focus", () => {
    preview.style.display = "block";
});
