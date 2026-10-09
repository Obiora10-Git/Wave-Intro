/* all js for the base page(index) */
fetch('phone_illustration.txt')
    .then(res => res.text())
    .then(htmlContent => {
    // Changing this to innerHTML turns the raw text into real, styleable HTML elements
     document.getElementById('imported-phone-illustration').innerHTML = htmlContent;
     });