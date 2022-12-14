// HTML Kode
const htmlKode = document.querySelector("p.htmlKode");
const tekst = "<html>\n\n<head>\n<title>Velkommen til sonser.no</title>\n</head>\n\n<body>\n<h1>Du kjører sonser.no på Ubuntu 20.04!</h1>\n</body>\n</html>"
htmlKode.innerText = tekst;

// VirtualHost kode
const vhKode = document.querySelector("p.virtualHostKode");
const vhTekst = "<VirtualHost *: 80>\nServerAdmin brukernavn@domene-navn\nServername domene-navn\nServerAlias domene-navn\nDocumentRoot /var/www/domene-navn/html\nErrorLog ${APACHE_LOG_DIR}/error.log\nCustomLog ${APACHE_LOG_DIR}/access.log combined\n</VirtualHost>";
vhKode.innerText = vhTekst;

// Navbar knapper
const knapper = document.querySelector("div.items");

//Scroller brukeren til riktig sted
knapper.addEventListener("click", e => {
    const classes = e.target.classList.value;
    if (classes.includes("setup")) {
        scrollTo(0, 110);
    } else if (classes.includes("install")) {
        scrollTo(0, 3475);
    } else if (classes.includes("apache")) {
        scrollTo(0, 14600);
    } else if (classes.includes("template")) {
        scrollTo(0, 16220);
    } else if (classes.includes("upload")) {
        scrollTo(0, 18970);
    }
});