const homepagecontent = {
  pt: {
    text_contato: "Na PCP Engenharia, valorizamos cada interação. Se você tem perguntas, precisa de suporte ou deseja discutir projetos futuros, nossos contatos estão disponíveis para garantir que sua voz seja ouvida. Estamos à disposição para atendê-lo.",
    servicos: "Serviços",
    galeria: "Galeria",
    contato: "Contato",
    matriz: "Matriz",
    filial1: "Filial 1",
    filial2: "Filial 2",
    filial3: "Filial 3",
    text_email: "Conecte-se com a PCP Engenharia. Nossa equipe de especialistas está disponível para atender suas consultas por e-mail, oferecendo suporte ágil e informações detalhadas sobre nossos serviços. Estamos aqui para ajudar a dar vida ao seu projeto.",
    trabalhe_conosco: "Trabalhe com a gente",
    text_trabalhe_conosco: "Faça parte de uma equipe que está moldando o futuro do monitoramento e da engenharia geotécnica. <br><br> Estamos sempre em busca de talentos apaixonados e inovadores, prontos para enfrentar desafios e contribuir com soluções pioneiras. <br><br> Se você tem o desejo de crescer, aprender e fazer a diferença em projetos significativos, convidamos você a explorar as oportunidades conosco. Envie seu currículo e dê o primeiro passo para construir uma carreira gratificante na PCP Engenharia.",
    nome: "Nome",
    email: "E-mail",
    anexar_curriculo: "Anexar currículo",
    mensagem: "Mensagem",
    enviar: "Enviar",
    todos: "Todos",
    ressonancia_radiometria: "Ressonância Microssísmica <br> e Radiometria Gamma",
    monitoramento: "Monitoramento ambiental",
    geofisica: "Investigação<br> Geofísica (Willowstick)",
  },
  en: {
    text_contato: "At PCP Engenharia, we value every interaction. If you have questions, need support, or want to discuss future projects, our contacts are available to ensure your voice is heard. We are available to serve you.",
    servicos: "Services",
    galeria: "Gallery",
    contato: "Contact",
    matriz: "Headquarters",
    filial1: "Branch 1",
    filial2: "Branch 2",
    filial3: "Branch 3",
    text_email: "Engage with PCP Engineering. Our experts team is available to address your inquiries via email, providing prompt support and detailed information about our services. We are here to assist in bringing your project to life.",
    trabalhe_conosco: "Work with us",
    text_trabalhe_conosco: "Be part of a team that is shaping the future of geotechnical engineering and monitoring. <br><br> We are always looking for passionate and innovative talent, ready to face challenges and contribute to pioneering solutions. <br><br> If you have the desire to grow, learn and make a difference in meaningful projects, we invite you to explore our opportunities. Send your curriculum vitae and take the first step towards building a rewarding career at PCP Engenharia.",
    nome: "Name",
    email: "E-mail",
    anexar_curriculo: "Attach CV",
    mensagem: "Message",
    enviar: "Submit",
    todos: "All",
    ressonancia_radiometria: "Microseismic Resonance <br> and Gamma Radiometry",
    monitoramento: "Environmental monitoring",
    geofisica: "Geophysical<br> Investigation (Willowstick)",
  },
  es: {
    text_contato: "En PCP Engenharia valoramos cada interacción. Si tiene preguntas, necesita ayuda o desea discutir proyectos futuros, nuestros contactos están disponibles para garantizar que se escuche su voz. Estamos disponibles para servirle.",
    servicos: "Servicios",
    galeria: "Galería",
    contato: "Contacto",
    matriz: "Sede",
    filial1: "Sucursal 1",
    filial2: "Sucursal 2",
    filial3: "Sucursal 3",
    text_email: "Conéctese con PCP Engenharia. Nuestro equipo de expertos está disponible para responder sus consultas por correo electrónico, ofreciendo soporte receptivo e información detallada sobre nuestros servicios. Estamos aquí para ayudarle a hacer realidad su proyecto.",
    trabalhe_conosco: "Trabaje con nosotros",
    text_trabalhe_conosco: "Sea parte de un equipo que está dando forma al futuro de la ingeniería y el monitoreo geotécnico <br><br> Siempre estamos buscando talento apasionado e innovador, listo para enfrentar desafíos y contribuir a soluciones pioneras. <br><br> Si tienes el deseo de crecer, aprender y marcar la diferencia en proyectos significativos, te invitamos a explorar nuestras oportunidades. Envíe su currículo y dé el primer paso para construir una carrera gratificante en PCP Engenharia.",
    nome: "Nombre",
    email: "Correo eletrónico",
    anexar_curriculo: "Adjuntar CV",
    mensagem: "Mensaje",
    enviar: "Enviar",
    todos: "Todos",
    ressonancia_radiometria: "Resonancia Microsísmica <br> y Radiometría Gamma",
    monitoramento: "Monitoreo ambiental",
    geofisica: "Investigação<br> Geofísica (Willowstick)",
  }
}

function changeLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang)
  
  document.getElementById('todos').innerHTML = homepagecontent[lang].todos;
  document.getElementById('text_contato').innerText = homepagecontent[lang].text_contato
  document.getElementById('matriz').innerText = homepagecontent[lang].matriz
  document.getElementById('filial1').innerText = homepagecontent[lang].filial1
  document.getElementById('filial2').innerText = homepagecontent[lang].filial1
  document.getElementById('filial3').innerText = homepagecontent[lang].filial3
  document.getElementById('text_email').innerText = homepagecontent[lang].text_email
  document.getElementById('trabalhe_conosco').innerText = homepagecontent[lang].trabalhe_conosco
  document.getElementById('text_trabalhe_conosco').innerHTML = homepagecontent[lang].text_trabalhe_conosco
  document.getElementById('nome').innerText = homepagecontent[lang].nome;
  document.getElementById('email').innerText = homepagecontent[lang].email;
  document.getElementById('anexar_curriculo').innerText = homepagecontent[lang].anexar_curriculo;
  document.getElementById('mensagem').innerText = homepagecontent[lang].mensagem;
  document.getElementById('enviar').innerText = homepagecontent[lang].enviar;
  document.getElementById('ressonancia_radiometria').innerHTML = homepagecontent[lang].ressonancia_radiometria;
  document.getElementById('monitoramento').innerHTML = homepagecontent[lang].monitoramento;
  document.getElementById('geofisica').innerHTML = homepagecontent[lang].geofisica;

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