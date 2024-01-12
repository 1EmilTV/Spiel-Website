document.getElementById("cm-eingabefeld").addEventListener("input", cmumrechnen);
document.getElementById("inch-eingabefeld").addEventListener("input", inchumrechnen);

function cminch(cm) {
    return cm / 2.54;
}

function inchcm(inch) {
    return inch * 2.54;
}

function cmumrechnen(event) {
    const cm = event.target.valueAsNumber;
    document.getElementById("inch-eingabefeld").value = cminch(cm);
}

function inchumrechnen(event) {
    const inch = event.target.valueAsNumber;
    document.getElementById("cm-eingabefeld").value = inchcm(inch);
}
