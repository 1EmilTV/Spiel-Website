document.getElementById("km-eingabefeld").addEventListener("input", kmumrechnen);
document.getElementById("m-eingabefeld").addEventListener("input", mumrechnen);

function kmm(km) {
    return km / 1.609;
}

function mkm(m) {
    return m * 1.609;
}

function kmumrechnen(event) {
    const km = event.target.valueAsNumber;
    document.getElementById("m-eingabefeld").value = kmm(km);
}

function mumrechnen(event) {
    const m = event.target.valueAsNumber;
    document.getElementById("km-eingabefeld").value = mkm(m);
}
