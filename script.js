    // Open Menu DropDown
    function hamburg() {
        document.querySelector(".dropdown").classList.add("active");
    }

    // Hide Menu DropDown
    function cancel() {
        document.querySelector(".dropdown").classList.remove("active");
    }

    function contactMe() {
        const email = "phuongtdd3711@gmail.com";
        const subject = encodeURIComponent("Contact");
        const body = encodeURIComponent("Hi, I would like to talk with you");
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(gmailUrl, "_blank");
    }

    function downloadCv() {
        alert("Oops, I haven't uploaded my CV yet. Please feel free to contact me for more information. Thank you!")
    }