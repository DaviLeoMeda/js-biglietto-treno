

function erogazioneBiglietti() {

    let kilometraggio = document.getElementById("kilometraggio").value;
    let eta = document.getElementById("eta").value;

    console.log(kilometraggio, eta);


    if (eta > 17 && eta < 65) {

        let normalprice = (kilometraggio * 0.21);
        document.getElementById("trainprice").innerHTML = normalprice;
    }
    else if (eta < 18) {
        let normalprice = ((kilometraggio * 0.21) * 0.8);
        document.getElementById("trainprice").innerHTML = normalprice;
    }

    else if (eta > 65) {
        let normalprice = ((kilometraggio * 0.21) * 0.6);
        document.getElementById("trainprice").innerHTML = normalprice;

    }

}
