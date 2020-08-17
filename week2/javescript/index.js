const date_btn= document.getElementById('dateBtn');

const date2= document.getElementById('date');


date_btn.addEventListener('click', e=>{
document.getElementById('date').innerHTML= Date();

});