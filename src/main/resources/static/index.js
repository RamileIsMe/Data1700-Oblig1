let billetter = [];

function visMelding() {
    let feil = false;
    if (document.getElementById("antall").value === "") {
        document.getElementById("fantall").innerHTML = "Antallet må være større enn 0";
        feil = true;
    }
    if (document.getElementById("fornavn").value === "") {
        document.getElementById("fnavn").innerHTML = "Du må fylle inn fornavnet ditt!";
        feil = true;
    }
    if (document.getElementById("etternavn").value === "") {
        document.getElementById("fetter").innerHTML = "Du må fylle inn etternavnet ditt!";
        feil = true;
    }
    if (document.getElementById("tel").value.match(/"^[0-9]*$"/)) {
        document.getElementById("fnr").innerHTML = "Du må fylle inn gyldig telefonnummer!";
        feil = true;
    }
    if (!document.getElementById("mail").value.match(/@/)) {
        document.getElementById("fmail").innerHTML = "Du må fylle inn gyldig e-post adresse!";
        feil = true;
    }
    if (feil === false) {
        let ut = "<table>" +
            "<tr>" +
            "<th>Film</th>" +
            "<th>Antall</th>" +
            "<th>Fornavn</th>" +
            "<th>Etternavn</th>" +
            "<th>Telefonnr</th>" +
            "<th>E-post</th>" +
            "</tr>";


        let bestilling = {
            film: document.getElementById("film").value,
            antall: document.getElementById("antall").value,
            fornavn: document.getElementById("fornavn").value,
            etternavn: document.getElementById("etternavn").value,
            telefonnr: document.getElementById("tel").value,
            mail: document.getElementById("mail").value,
        }

        billetter.push(bestilling)

        for (let i = 0; i < billetter.length; i++) {
            ut +=
                "<tr>" +
                "<td>" + billetter[i].film + "</td>" +
                "<td>" + billetter[i].antall + "</td>" +
                "<td>" + billetter[i].fornavn + "</td>" +
                "<td>" + billetter[i].etternavn + "</td>" +
                "<td>" + billetter[i].telefonnr + "</td>" +
                "<td>" + billetter[i].mail + "</td>" +
                "</tr>";


        }
        document.getElementById("kvittering").innerHTML = ut;
        document.getElementById("antall").value = "";
        document.getElementById("film").value = "Velg film her";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("mail").value = "";


    }
}

function deleteAll() {

    billetter.splice(0, billetter.length);
    document.getElementById("kvittering").innerHTML = "";

}


