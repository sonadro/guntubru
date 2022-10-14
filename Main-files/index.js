// HTML Kode
const htmlKode = document.querySelector("p.htmlKode");
const tekst = "<html>\n\n<head>\n<title>Velkommen til sonser.no</title>\n</head>\n\n<body>\n<h1>Du kjører sonser.no på Ubuntu 20.04!</h1>\n</body>\n</html>"
htmlKode.innerText = tekst;

// VirtualHost kode
const vhKode = document.querySelector("p.virtualHostKode");
const vhTekst = "<VirtualHost *: 80>\nServerAdmin brukernavn@domene-navn\nServername domene-navn\nServerAlias domene-navn\nDocumentRoot /var/www/domene-navn/html\nErrorLog ${APACHE_LOG_DIR}/error.log\nCustomLog ${APACHE_LOG_DIR}/access.log combined\n</VirtualHost>";
vhKode.innerText = vhTekst;

// Knapper
const knapper = document.querySelector("div.items");

knapper.addEventListener("click", e => {
    if (e.target.classList.value.includes("setup")) {
        scrollTo(0, 110);
    } else if (e.target.classList.value.includes("install")) {
        scrollTo(0, 3475);
    } else if (e.target.classList.value.includes("apache")) {
        scrollTo(0, 14600);
    } else if (e.target.classList.value.includes("template")) {
        scrollTo(0, 16220);
    } else if (e.target.classList.value.includes("upload")) {
        scrollTo(0, 18970);
    }
});