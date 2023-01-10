// Variable declaration

const encryptBtn = document.querySelector('#encrypt');
const decrypttBtn = document.querySelector('#decrypt');
const copytBtn = document.querySelector('#copy');
const inputText = document.querySelector('.input-container textarea');
const outputText = document.querySelector('.output-container textarea');

// Function declaration

function changeUI() {
    // Ocultamos elementos no deseados
    Array.from(outputText.closest('div').children).forEach(el => el.classList.add('hidden'));

    // mostramos elementos buscados
    outputText.classList.remove('hidden');
    copytBtn.classList.remove('hidden');
    outputText.scrollIntoView();
}

function copyText() {
    this.select();
    this.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(this.value);
}

function encrypt() {
    // Admnistrando espacios y minúsculas en el texto
    const text = this.value.trim().toLowerCase();

    // Cláusula de seguridad
    if (!text) return;

    changeUI();

    // Encriptador
    const encryptedText = text
        .split('')
        .map(cha => {
            if (cha === 'a') return 'ai';
            if (cha === 'e') return 'enter';
            if (cha === 'i') return 'imes';
            if (cha === 'o') return 'ober';
            if (cha === 'u') return 'ufat';
            return cha;
        })
        .join('');

    // El texto de entrada va al cuadro de salida
    outputText.value = encryptedText;
}

function decrypt() {
    // Administramos espacios y minúsculas en el texto
    const text = this.value.trim().toLowerCase();

    // Otra cláusula de seguridad
    if (!text) return;

    changeUI();

    // Desencriptador
    const decryptedText = text
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    // El texto desencriptado va al cuadro de salida
    outputText.value = decryptedText;
}

// Listado de eventos

encryptBtn.addEventListener('click', encrypt.bind(inputText));
decrypttBtn.addEventListener('click', decrypt.bind(inputText));
copytBtn.addEventListener('click', copyText.bind(outputText));