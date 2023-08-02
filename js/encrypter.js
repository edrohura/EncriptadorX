const dict = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };

document.getElementById("output-response").style.display = "none";

function allReplace(str, obj) {
    for (const w in obj) {
        str = str.replace(new RegExp(obj[w], 'g'), w);
    }
    return str;
};

function Output() {
    document.getElementById("output").value = output; // Envío del texto cifrado al campo de salida
    document.getElementById("output-init").style.display = "none"; // Muestra el cuadro con el output
    document.getElementById("output-response").style.display = "flex"; // Muestra el cuadro con el output
    if (input === "") {
        document.getElementById("output-init").style.display = "flex"; // Muestra el cuadro con el output
        document.getElementById("output-response").style.display = "none"; // Oculta el cuadro con el oputput cuando no hay entrada
    }
};

function encryptOrDecrypt(shouldEncrypt) {
    const input = document.getElementById("input").value.toLowerCase();
    const output = shouldEncrypt ? input.replace(/[aeiou]/g, l => dict[l]) : allReplace(input, dict);
    return output;
}

document.getElementById("encrypt-button").onclick = () => {
    output = encryptOrDecrypt(true);
    Output();
};

document.getElementById("decrypt-button").onclick = () => {
    output = encryptOrDecrypt(false);
    Output();
};

document.getElementById("copy").onclick = () => {
    const text = document.getElementById('output').value;
    navigator.clipboard.writeText(text);
    document.getElementById("input").value = "";
};
