// lista de objetos com os títulos e textos de cada solução proposta
const texts = [
{
    id:0,
    titulo: "Programas de apoio financeiro",
    texto: " Implementação de bolsas de incentivo financeiro para apoiar a permanência escolar de alunos de baixa renda no ensino médio, como proposto pelo Ministério da Educação."
}, {
    id:1,
    titulo: "Pacto estadual pelo enfrentamento à infrequência, ao abandono e à evasão escolar (PEEIAE)",
    texto: "Este pacto visa diagnosticar as causas da evasão escolar e planejar ações para enfrentar o problema de forma colaborativa e integrada. O pacto já foi assinado por estados como Rio de Janeiro e Minas Gerais."
}, {
    id:2,
    titulo: "Programas de suporte e orientação",
    texto: "Oferecimento de programas como mentoria e tutoria para proporcionar um acompanhamento mais individualizado e personalizado aos estudantes em risco."
}, {
    id:3,
    titulo: "Conscientização sobre a importância da educação",
    texto: "Conscientização da comunidade sobre a importância da educação, incentivando o apoio à permanência dos estudantes na escola."
}, {
    id:4,
    titulo: "Parcerias com empresas e instituições locais",
    texto: "Colaboração com empresas e instituições locais para oferecer oportunidades de estágio e aprendizado, incentivando a continuidade dos estudos e a inserção no mercado de trabalho."
}, {
    id:5,
    titulo: "Maior conexão entre escola e interesse dos jovens",
    texto: "Promover oportunidades para que os estudantes se envolvam na escola com temas que tenham curiosidade em aprender também é importante para engajá-lo com a educação. Conectar a escola com a vida do jovem é fundamental para o motivar a concluir os estudos. "
}
, {
    id:6,
    titulo: "Educação Integral",
    texto: "Visão de educação primordial para o pleno desenvolvimento das crianças e jovens. Ela integra o desenvolvimento de habilidades socioemocionais no currículo educacional para preparar os jovens não apenas academicamente, mas também emocionalmente para os desafios da vida. Essa ampliação da de habilidades desenvolvidas torna a escola mais atraente para o jovem e conectada com a sua vida, gerando incentivos para continuar seus estudos."
}
, {
    id:7,
    titulo: "Aprendizagem adequada",
    texto: "Garantir alfabetização e aprendizagem adequada nos primeiros anos do Ensino Fundamental para que o estudante seja capaz de seguir estudando e aprendendo."
}, 
, {
    id:8,
    titulo: "Busca ativa",
    texto: "É preciso criar um monitoramento de indicadores que ajudem a sinalizar quando um estudante apresenta indícios de que vai abandonar a escola e assim podermos atuar preventivamente. Se há risco de abandono, a escola deve buscar o jovem ativamente."
}, 
, {
    id:9,
    titulo: "Aprimoramento do Ensino Médio",
    texto: "É urgente o aprimoramento da proposta do Novo Ensino Médio que hoje tramita no Congresso e que teria o potencial de provocar mudanças nesta etapa de ensino para tornar o ensino mais atraente, bem como articulado com o mundo do trabalho."
}] 
    
let interval = 100; // tempo em milissegundos
let counter = 0

// Função para exibir o texto gradualmente
function showText(el, text, interval) {
    let char = text.split("").reverse();
    let typer = setInterval(function() {
        if (!char.length) {
            return clearInterval(typer);
        }
        let next = char.pop();
        el.innerHTML += next;
    }, interval);
}

let currentIndex = 0;

// Função para atualizar o cartão exibido
function updateCard() {
    const titleElement = document.getElementById("card-title");
    const descriptionElement = document.getElementById("card-description");
  
    const currentCard = texts[currentIndex];
    titleElement.textContent = currentCard.titulo;
    descriptionElement.textContent = currentCard.texto;
}
  
// Função para ir ao cartão anterior
function goToPrevious() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : texts.length - 1;
    updateCard();
}
  
// Função para ir ao próximo cartão
function goToNext() {
    currentIndex = currentIndex < texts.length - 1 ? currentIndex + 1 : 0;
    updateCard();
}
  
// Criando o layout do cartão
document.body.innerHTML = `
    <header>
      <nav id="navegation">
        <ul class="listHeader">
          <li><a class="navItem" href="../index.html">Início</a></li>
          <li><a class="navItem" href="about.html" target="_blank">Sobre</a></li>
          <!-- <li><a class="navItem" href="pages/solutions.html" target="_blank">Soluções</a></li> -->
          <li><a class="navItem" href="contact.html" target="_blank">Contato</a></li>
        </ul>
      </nav>
    </header>

    <main class="container">
        <section class="card">
            <article class="card-header">
                <h2 id="card-title"></h2>
                <p id="card-description"></p>
            </article>
            <article class="card-content">
                <p id="card-content"></p>
            </article>
            <article class="card-footer">
                <button id="prev-button" class="button">Previous</button>
                <button id="next-button" class="button">Next</button>
            </article>
        </section>
        <section id="cta">
            <h2>Faça Parte da Mudança</h2>
            <button id="ctaButton">Entre em Contato</button>
        </section>
    </main>

    <footer>
        <section id="mainFooter">
            <h1>EDUCAÇÃO PARA TODOS</h1>
            <ul class="listFooter">
                <li><a class="footerItem" href="/index.html" target="_blank">Início</a></li>
                <li><a class="footerItem" href="/pages/about.html">Sobre</a></li>
                <li><a class="footerItem" href="/pages/solutions.html" target="_blank">Soluções</a></li>
                <li><a class="footerItem" href="/pages/contact.html" target="_blank">Contato</a></li>
            </ul>
            <p>
                <a href="mailto:contato@squad5.gmail.com">
                    <i class="bi bi-google"></i>
                </a>
            </p>
        </section>
        <p id="copyright"> &copy; 2024 Todos os direitos reservados.</p>
    </footer>
`;
  
// Adicionando eventos aos botões
document.getElementById("prev-button").addEventListener("click", goToPrevious);
document.getElementById("next-button").addEventListener("click", goToNext);
  
// Inicializando o cartão
updateCard();