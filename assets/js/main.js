/* Buttons */
const btnSubscribe = document.getElementById("btnSubscribe");
const btnBackHome = document.getElementById("btnBackHome");

/* Input */
const mailInput = document.getElementById("mail");

/* sections */
const submitMail = document.getElementById("submitMail");
const submitConfirm = document.getElementById("submitConfirm");

btnSubscribe.addEventListener('click', () => {
    let userMail = mailInput.value;
    console.log("Following adress was submitted: " + userMail);
    submitMail.style.display = "none";
    submitConfirm.style.display = "block";
})

btnBackHome.addEventListener('click', () => {
    submitMail.style.display = "block";
    submitConfirm.style.display = "none";
})