import ScrollReveal from 'scrollreveal'

window.sr= ScrollReveal()

function ScrollRevelar(){
  ScrollReveal().reveal('#AboutMe_p',{
    duration:1200,
    origin:'left',
    distance:'-400px'
});

ScrollReveal().reveal('#AboutMe_Coderhouse',{
    duration:1500,
    origin:'left',
    distance:'-400px'
});





}



export {ScrollRevelar}