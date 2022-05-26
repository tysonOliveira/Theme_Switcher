/*
function addEventos(){
  const botao = document.getElementById("check");
  botao.addEventListener('click', function(){
    document.body.style.backgroundColor = '#292C35';
  })
}

window.addEventListener("load", addEventos);*/

document.querySelector('.circle').addEventListener('click', (e)=>{
  e.target.classList.toggle('circle-move');
  document.body.classList.toggle('dark');
});