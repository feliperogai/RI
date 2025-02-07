// Efeito de digitação no subtítulo
const subtitulo = "Estudante na FECAP | Apaixonada por Diplomacia, Comércio Internacional e Política Global";
let i = 0;
const speed = 50;

function typeWriter() {
  if (i < subtitulo.length) {
    document.getElementById("subtitulo").innerHTML += subtitulo.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// Scroll suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Validação simples do formulário
document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    alert('Mensagem enviada com sucesso!');
    this.reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});