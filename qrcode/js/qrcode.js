const input = document.querySelector('#input')
const btn = document.querySelector('#btngerar')
const qrcode = document.querySelector('#qrcode')

btn.addEventListener('click', gerarqr)

function gerarqr() {
    texto = input.value
    qrcode.innerHTML = ''
    new QRCode(qrcode, {
        text:texto,
        width: 250,
        height: 250,
        colorDark:'purple',
        colorLight:'white'
    })
}