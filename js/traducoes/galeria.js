const homepagecontent = {
  pt: {
    text_galeria: "Explore nossa galeria, onde capturamos a excelência da PCP Engenharia e Monitoramento em ação. Cada imagem é um registro do comprometimento e habilidade dos nossos técnicos e engenheiros, refletindo nosso trabalho meticuloso em diversos projetos e com clientes variados. ",
    servicos: "Serviços",
    galeria: "Galeria",
    contato: "Contato",
    todos: "Todos",
    ressonancia_radiometria: "Ressonância Microssísmica <br> e Radiometria Gamma",
    monitoramento: "Monitoramento ambiental",
    geofisica: "Investigação<br> Geofísica (Willowstick)",
  },
  en: {
    text_galeria: "Explore our gallery, where we capture the excellence of PCP Engenharia e Monitoramento in action. Each image is a record of our technicians and engineers commitment and skill, reflecting our meticulous work on different projects and clients.",
    servicos: "Services",
    galeria: "Gallery",
    contato: "Contact",
    todos: "All",
    ressonancia_radiometria: "Microseismic Resonance <br> and Gamma Radiometry",
    monitoramento: "Environmental monitoring",
    geofisica: "Geophysical<br> Investigation (Willowstick)",
  },
  es: {
    text_galeria: "Explore nuestra galería, donde capturamos la excelencia de PCP Engenharia e Monitoramento en acción. Cada imagen es un registro del compromiso y habilidad de nuestros técnicos e ingenieros, reflejando nuestro minucioso trabajo en diferentes proyectos y clientes.",
    servicos: "Servicios",
    galeria: "Galería",
    contato: "Contacto",
    todos: "Todos",
    ressonancia_radiometria: "Resonancia Microsísmica <br> y Radiometría Gamma",
    monitoramento: "Monitoreo ambiental",
    geofisica: "Investigação<br> Geofísica (Willowstick)",
  }
}

function changeLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang)
  
  document.getElementById('todos').innerHTML = homepagecontent[lang].todos;
  document.getElementById('text_galeria').innerText = homepagecontent[lang].text_galeria
  document.getElementById('ressonancia_radiometria').innerHTML = homepagecontent[lang].ressonancia_radiometria;
  document.getElementById('monitoramento').innerHTML = homepagecontent[lang].monitoramento;
  document.getElementById('geofisica').innerHTML = homepagecontent[lang].geofisica

  const servicos = document.getElementsByClassName('servicos');
  for (let i = 0; i < servicos.length; i++) {
    servicos[i].innerText = homepagecontent[lang].servicos;
  }

  const galeria = document.getElementsByClassName('galeria');
  for (let i = 0; i < galeria.length; i++) {
    galeria[i].innerText = homepagecontent[lang].galeria;
  }

  const contato = document.getElementsByClassName('contato');
  for (let i = 0; i < contato.length; i++) {
    contato[i].innerText = homepagecontent[lang].contato;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt';
  changeLanguage(savedLanguage);
});