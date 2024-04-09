var CovidOrigin = document.querySelector('.text-origin-covid')
var DengueOrigin = document.querySelector('.text-origin-dengue')
var GripeOrigin = document.querySelector('.text-origin-gripe')
var texto_alterado = '';
var texto_original = '';
function toggle(num) {
   if (num === 1) {
      texto_original = '<h3>COVID-19</h3><p> É uma infecção respiratória causada pelo novo coronavírus SARS-CoV-2. A doença é potencialmente grave, altamente transmissível e espalhou-se por todo o mundo no ano de 2019.</p>'
      texto_alterado = '<h3>Prevenção:</h3><ul><li>lavar as mãos com água e sabão com frequência.</li><li>evitar tocar os olhos, nariz e boca com as mãos não lavadas.</li><li>evitar contato próximo com pessoas doentes.</li><li>cobrir a boca e o nariz ao tossir ou espirrar com um lenço de papel e jogar no lixo.</li></ul>';
      if(CovidOrigin.innerHTML === texto_alterado && num === 1){
         CovidOrigin.innerHTML = texto_original;
         CovidOrigin.parentElement.style.background = '';
         }else{
         CovidOrigin.innerHTML = texto_alterado;
         CovidOrigin.parentElement.style.background = '#E05A5A';
         }
   }
   if (num === 2) {
      texto_original = '<h3>DENGUE</h3><p>A dengue é uma doença causada por um vírus, o qual é transmitido pela picada do mosquito Aedes aegypti. Os sintomas incluem febre, dores no corpo, dor de cabeça e manchas avermelhadas. </p>';
      texto_alterado = '<h3>Prevenção:</h3> <ul><li>eliminar copinhos plásticos, tampas de refrigerante e sacos abertos que possam acumular água.</li><li>Usar repelente</li><li>Tampar caixa de água e outros reservatórios de água.</li><li>Higienizar bebedouros de animais de estimação.</li></ul> '
      if(DengueOrigin.innerHTML === texto_alterado && num === 2){
         DengueOrigin.innerHTML = texto_original;
         DengueOrigin.parentElement.style.background = '';
      }else{
         DengueOrigin.innerHTML = texto_alterado;
         DengueOrigin.parentElement.style.background = '#E05A5A';
      }
   }
   if (num === 3) {
      texto_original = '<h3>GRIPE</h3><p>A gripe é uma infecção aguda do sistema respiratório, provocado pelo vírus da influenza, com grande potencial de transmissão. </p>';
      texto_alterado = '<h3>Prevenção:</h3> <ul><li>Evitar aglomerações e o contato com pessoas doentes</li><li>Não levar as mãos aos olhos, boca ou nariz depois de ter tocado em objetos de uso coletivo</li><li>Utilizar lenço descartável para limpar o nariz.</li><li>Utilizar lenço descartável para limpar o nariz.</li></ul> '
      if(GripeOrigin.innerHTML === texto_alterado && num === 3){
         GripeOrigin.innerHTML = texto_original;
         GripeOrigin.parentElement.style.background = '';
      }else{
         GripeOrigin.innerHTML = texto_alterado;
         GripeOrigin.parentElement.style.background = '#E05A5A';
      }
   }
   
};


