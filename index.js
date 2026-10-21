fetch('./assets/phone_illustration.txt')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}: File not found`);
    return res.text();
  })
  .then(htmlContent => {
    document.getElementById('imported-phone-illustration').innerHTML = htmlContent;
  })
  .catch(err => console.error("Error loading illustration:", err));


  