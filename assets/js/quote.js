window.addEventListener('load', function () {
    
    const quoteButton = document.getElementById("btn-quote-submit");

    // Elements
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const businessname = document.getElementById("businessname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const projectdetails = document.getElementById("projectdetails");
    const budget = document.getElementById("budget");
    const deadline = document.getElementById("deadline");
    const source = document.getElementById("source");

    quoteButton.addEventListener("click", (event) => {
        const postBody = {
            firstname: firstname.value,
            lastname: lastname.value,
            businessname: businessname.value,
            email: email.value,
            phone: phone.value,
            projectdetails: projectdetails.value,
            budget: budget.value,
            deadline: deadline.value,
            source: source.value,
        };
    
        $.post("https://hightop-email-server.herokuapp.com/sendQuote", postBody, (data) => {
            
            quoteButton.style.display = "none";

            const confirmMessage = document.getElementById("confirm-message");

            confirmMessage.style.display = "block";
            confirmMessage.innerText = data.message;

        });
    
    });

});
