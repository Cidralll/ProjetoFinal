export default function ValidationRadio(password: string) {  
    Validation(password);
}

function Validation(password: string) {

    // verifica se tem letras minusculas
    if(/[a-z]/gm.test(password)) {
        // Marca o radio 
        let radio = document.getElementById('lowercase');
        radio?.removeAttribute('disabled');
        radio?.setAttribute('checked','');
    }else {
        // desmarca o radio
        let radio = document.getElementById('lowercase');
        radio?.removeAttribute('checked');
        radio?.setAttribute('disabled','');
    }

    // verifica se tem letra maiusculas
    if (/[A-Z]/gm.test(password)) {
         // Marca o radio 
         let radio = document.getElementById('uppercase');
         radio?.removeAttribute('disabled');
         radio?.setAttribute('checked','');
    }else {
        // desmarca o radio
        let radio = document.getElementById('uppercase');
        radio?.removeAttribute('checked');
        radio?.setAttribute('disabled','');
    }

    // verifica se tem numeros
    if (/[0-9]/gm.test(password)) {
      // Marca o radio 
      let radio = document.getElementById('oneNumber');
      radio?.removeAttribute('disabled');
      radio?.setAttribute('checked','');
    }else {
        // desmarca o radio
        let radio = document.getElementById('oneNumber');
        radio?.removeAttribute('checked');
        radio?.setAttribute('disabled','');
    }

    if (password.length > 5) {
    // Marca o radio 
      let radio = document.getElementById('sixCharacters');
      radio?.removeAttribute('disabled');
      radio?.setAttribute('checked','');
    }else {
        // desmarca o radio
        let radio = document.getElementById('sixCharacters');
        radio?.removeAttribute('checked');
        radio?.setAttribute('disabled','');
    }

}