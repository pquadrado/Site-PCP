const content = {
  pt: {
    seguranca_precisao: "Segurança e Precisão",
    sub_seguranca_precisao: "É nosso compromisso com seu projeto",

    alem_preservacao: "Além da preservação:",
    
  },


  en: {
    seguranca_precisao: "Is security and precision",
    sub_seguranca_precisao: "Our commitment to your project",

    alem_preservacao: "Beyond preservation:",
    
  },


  es: {
    seguranca_precisao: "Seguridad y precisión",
    sub_seguranca_precisao: "Es nuestro compromiso con tu proyecto",

    alem_presevacao: "Mas allá de la conservación:",
    
  }
}

function changeLanguage(lang){
  document.getElementById('seguranca_precisao').innerText === content[lang].seguranca_precisao
  document.getElementById('sub_seguranca_precisao').innerText === content[lang].sub_seguranca_precisao
  document.getElementById('alem_preservacao').innerText === content[lang].alem_presevacao
}

changeLanguage('en')