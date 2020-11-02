let proceso = function(txt, desp, accion){
    let enc_c = "";
    let abc = "abcdefghijklmnñopqrstuvwxyz"
    let c = (txt.toLowerCase()).replace(/ /ig,'');
   
    if (accion) {
        for (let i = 0; i < c.length; i++) {
            if (abc.indexOf(c[i])!=-1) {
                let pos = ((abc.indexOf(c[i])+(Number(desp)))%27);
                enc_c += abc[pos];
            } else {
                enc_c = c+" no es valido : ("
            }
        }
    } else {
        for (let i = 0; i < c.length; i++) {

            if (abc.indexOf(c[i])!=-1) {
                let pos = ((abc.indexOf(c[i])-(Number(desp)))%27);
                enc_c += abc[pos];
            } else {
                enc_c = c+" no es valido : ("
            }
        }
    }
    return enc_c;
};

let calcula = function(desp){
    desp = (desp % 27 + 27) % 27
    return desp;
};

function encripta() {
    let k = document.getElementById("k").value;
    if (Number.isInteger(Number(k))) {
        let resultado = proceso(document.getElementById("mensaje").value, calcula(k), true);
        document.getElementById("resultado").value = resultado;
    } else {
        alert("desplazamiento invalido")
    }
}

function desencripta() {
    let k = document.getElementById("k").value;
    if (Number.isInteger(Number(k))) {
        let resultado = proceso(document.getElementById("mensaje").value, calcula(k), false);
        document.getElementById("resultado").value = resultado;
    } else {
        alert("desplazamiento invalido")
    }
}