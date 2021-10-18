const elLotin = document.querySelector('#lotin');
const elKril = document.querySelector('#kril');
const elBtn = document.querySelector('#btn');
const elLotinBtn = document.querySelector('#lotin-btn')

elLotin.addEventListener('keypress', (e)=>{
    let kril = data.find(word => word.id === e.charCode)
    elKril.textContent += String.fromCharCode(kril.content)
    console.log(e.charCode)
});
elKril.addEventListener('keypress', (e)=>{
    let lotin = data.find(word => word.content === e.charCode)
    elLotin.textContent += String.fromCharCode(lotin.id)
    console.log(e.charCode)
});

elBtn.addEventListener('click', (e)=>{
    elLotin.textContent = '';
    elKril.textContent = '';
});
elLotinBtn.addEventListener('click', (e)=>{
    elKril.textContent = '';
    elLotin.textContent = '';
});