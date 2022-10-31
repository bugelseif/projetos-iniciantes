// array de projetos
const projects = [
    {
        titulo: "Página da Feministech",
        descricao: "Site oficial da Feministech, contendo informações sobre a comunidade, eventos, projetos, etc.",
        url:"https://github.com/feministech/feministech.github.io"
    },
    {
        titulo: "Transchange",
        descricao: "Programa criado para pessoas transgênero desenvolvedoras que precisam ter o trabalho de mudar as referências aos seus nomes em seus repositórios no Github.",
        url:"https://github.com/lissatransborda/transchange"
    },
    {
        titulo: "Lista de extensões para IDEs",
        descricao: "Este repositório contém listas de extensões para IDEs selecionados pela comunidade da Caverna do Patocórnio, buscando melhorar a sua IDE, e deixar sua jornada na programação mais divertida e produtiva. Sinta-se a vontade para adicionar mais extensões. :D",
        url:"https://github.com/acaverna/Extensoes-Maneiras-Para-Sua-IDE"
    },
    {
        titulo: "Eventos de tecnologia no Brasil",
        descricao: `Este repositório contém uma lista de eventos de tecnologia que vão
        acontecer no Brasil de maneira online, presencial ou híbrida. Foi
        criada pela comunidade da mentoria de pessoas DevRel,
        Abacatinhos.dev, para facilitar a busca por eventos nos quais
        podemos participar.`,
        url:"https://github.com/Abacatinhos/eventos-tech-brasil"
    },
    {
        titulo: "Hacktoberfest",
        descricao: `Este repositório contém informações, materiais de estudo e
        repositórios sobre a Hacktoberfest, como uma forma de facilitar
        pessoas iniciantes de contribuirem no evento.`,
        url:"https://github.com/leticiadasilva/Hacktoberfest"
    },

    {
        titulo: "Por onde começar?",
        descricao: `União de materiais totalmente gratuitos para ajudar quem desejar
        entrar em alguma área, aprender uma nova tecnologia ou aprimorar
        suas skills.`,
        url:"https://github.com/leticiadasilva/por-onde-comecar"
    },
    {
        titulo: "Curso Kotlinautas",
        descricao: `Projeto com vários exercicios de lógica de programação para aprender
        Kotlin utilizando o IntelliJ IDEA.`,
        url:"https://github.com/Kotlinautas/curso-kotlinautas"
    },
    {
        titulo: "Interview Questions",
        descricao: `Projeto com várias questões de entrevistas, para treinar lógica de
        programação e se preparar para entrevistas técnicas.`,
        url:"https://github.com/thalytabdn/Interview-Questions"
    },
    {
        titulo: "Up for Grabs!",
        descricao: `Ferramenta que facilita a pesquisa em encontrar projetos que possuem
        uma curadoria de tarefas para novos contribuintes.`,
        url:"https://up-for-grabs.net"
    },
    {
        titulo: "Front-end Developers",
        descricao: `Repositório com tutoriais e referências para pessoas desenvolvedoras
        front-end no @github.`,
        url:"https://github.com/anamariasilva/front-end"
    },
    {
        titulo: "Cursos Gratuitos",
        descricao: `Repositório com links de materiais gratuitos em pt-br`,
        url:"https://github.com/celycodes/cursos-gratuitos"
    },
    {
        titulo: "Desenhando com CSS",
        descricao: `Repositorio criado para desenhos feitos com css.`,
        url:"https://github.com/proxygo/desenhando_com_css"
    },
    {
        titulo: "Front-end Developers",
        descricao: `Esse repositório foi criado por Fernanda Souza, com o intuito de divulgar 
        ferramentas gratuitas que possam auxiliar pessoas em seus estudos.`,
        url:"https://github.com/leitoraincomum/conteudos-tech"
    },
    {
        titulo: "DevChallenge",
        descricao: ` Repositório com desafios que tem como objetivo celebrar e incentivar o
        software de código aberto, além de contribuir com a comunidade de
        tecnologia para prática de desenvolvimento e troca de conhecimentos.`,
        url:"https://github.com/devchallenge-io/hacktoberfest2022"
    },
    {
        titulo: "Awesome JavaScript Projects",
        descricao: ` Repositório com exemplos de projetos front-end para pessoas iniciantes que utilizam HTML, CSS e JavaScript.`,
        url:"https://github.com/varunKT001/awesome-javascript-projects"
    },
];

// variavel da seção que leva todos os projetos
const section_ProjectsCards = document.querySelector('.projects__cards');

// aqui percoremos o todo o array e para cada objeto la de dentro cuamos uma seção card e colocamos todos os dados nela
// apos criar e configurar os dados, colocamos a seção card dentro da seção de projetos
projects.map((project) => {
    const section_Card = document.createElement('section');
    const h3_Title = document.createElement('h3');
    const p_Description = document.createElement('p');
    const a_CardLink = document.createElement('a');

    section_Card.classList.add('card')
    h3_Title.classList.add('card__titulo')
    a_CardLink.classList.add('card__link')

    h3_Title.innerText = project.titulo;
    p_Description.innerText = project.descricao;
    a_CardLink.innerText = 'Contribua aqui';

    a_CardLink.href = project.url;
    a_CardLink.target = '_blank';

    section_Card.appendChild(h3_Title)
    section_Card.appendChild(p_Description)
    section_Card.appendChild(a_CardLink)

    section_ProjectsCards.appendChild(section_Card)
    
})