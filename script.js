// Open Menu DropDown
    function hamburg() {
        document.querySelector(".dropdown").classList.add("active");
    }

    // Hide Menu DropDown
    function cancel() {
        document.querySelector(".dropdown").classList.remove("active");
    }

    function contactMe() {
        alert("Oops, I haven't uploaded my CV yet. Please feel free to contact me for more information. Thank you!")
        //CV Download
        // const email = "phuongtdd3711@gmail.com";
        // const subject = encodeURIComponent("Contact");
        // const body = encodeURIComponent("Hi, I would like to talk with you");
        // const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        // window.open(gmailUrl, "_blank");
    }

    function downloadCv() {
        const link = document.createElement('a');
        link.href = 'image/CV/MyCV.pdf'; // Replace with the actual path to your file
        link.download = 'Phuong_CV.pdf'; // Replace with the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }