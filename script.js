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
        titulo: "Eventos de tecnologia no Brasil",
        descricao: `Este repositório contém uma lista de eventos de tecnologia que vão
        acontecer no Brasil de maneira online, presencial ou híbrida. Foi
        criada pela comunidade da mentoria de pessoas DevRel,
        Abacatinhos.dev, para facilitar a busca por eventos nos quais
        podemos participar.`,
        url:"https://github.com/Abacatinhos/eventos-tech-brasil"
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
        titulo: "Conteúdo Tech",
        descricao: `Esse repositório foi criado por Fernanda Souza (@leitoraincomum), com o intuito de divulgar 
        ferramentas gratuitas que possam auxiliar pessoas em seus estudos.`,
        url:"https://github.com/leitoraincomum/conteudos-tech"
    },
    {
        titulo: "Awesome JavaScript Projects",
        descricao: ` Repositório com exemplos de projetos front-end para pessoas iniciantes que utilizam HTML, CSS e JavaScript.`,
        url:"https://github.com/varunKT001/awesome-javascript-projects"
    },
    {
        titulo: "Diciotech",
        descricao: ` Repositório de um projeto incrível para a construção de um dicionário tech para pessoas que querem aprender mais sobre termos técnicos dentro da tecnologia. `,
        url:"https://github.com/levxyca/diciotech/"
    },
    {
        titulo: "Mulheres na Tecnologia",
        descricao: ` Repositório para compartilhar mulheres na tecnologia mostrando que há muitas delas que transformaram e ainda transformam a área. Além de uma sessão também para comunidades para mulheres na tecnologia. `,
        url:"https://github.com/morgannadev/mulherestecnologia"
    },
    {
        titulo: "Mulheres na Tecnologia",
        descricao: ` Conteúdos de referência produzidos por mulheres da tecnologia e por comunidades, organizações e iniciativas para pessoas que se identificam com o gênero feminino. `,
        url:"https://github.com/anatechdev/mulheres-na-tecnologia"
    },
    {
        titulo: "Cinema em Poa",
        descricao: ` CINEMA EM POA é um portal agregador de filmes das casas de cinema de Porto Alegre. `,
        url:"https://github.com/cumbucadev/cinemaempoa"
    },
    {
        titulo: "Projetos PHP brasileiros",
        descricao: `Lista de projetos PHP brasileiros aceitando contribuições para o hacktoberfest. `,
        url:"https://github.com/PHPRio/hacktoberfest?tab=readme-ov-file"
    },
    {
        titulo: "33 conceitos de JavaScript",
        descricao: `Repositório com 33 conceitos de JavaScript que todo desenvolvedor deve conhecer. `,
        url:"https://github.com/leonardomso/33-js-concepts"
    },
    {
        titulo: "Extensões maneiras para sua IDE",
        descricao: `Repositório para armazenar extensões maneiras que a comunidade gosta de utilizar em sua IDE preferida. `,
        url:"https://github.com/acaverna/Extensoes-Maneiras-Para-Sua-IDE"
    },
    {
        titulo: "Simuladores virtuais",
        descricao: `Repositório para armazenar simuladores virtuais`,
        url: "https://github.com/JosueSerejo/simuladores-virtuais"
    },
    {
        titulo: "Agenda Tech",
        descricao: `Lista de eventos tech que acontecem no Brasil`,
        url: "https://github.com/agenda-tech-brasil"
    },
    {
        titulo: "Gerador de regex",
        descricao: "Um projeto Vanilla JS/MVC para gerar expressões regulares (Regex) validadas a partir de critérios selecionados pelo usuário",
        url: "https://github.com/priscillatrevizan/regex-generator"
    }
];

showProjects()

function showProjects(){
    // variavel da seção que leva todos os projetos
const section_ProjectsCards = document.querySelector('.projects__cards');

section_ProjectsCards.childNodes.length = 0

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
}

const Add_Project = document.getElementById('Add-Project');
const Dialog = document.querySelector('.modal');
const Button_Cancel = document.getElementById('cancel');
const Button_Close = document.querySelector('.btn-close');
const Button_Submit = document.getElementById('confirm-add');

Add_Project.addEventListener('click', () => {
    ToggleDialog(Dialog);
})

Button_Close.addEventListener('click', () => {
    ToggleDialog(Dialog);
})

Button_Cancel.addEventListener('click', () => {
    ToggleDialog(Dialog);
})

Button_Submit.addEventListener('click', () => {
    const Input_Title = document.getElementById('title');
    const Input_Description = document.getElementById('description');
    const Input_URL = document.getElementById('link');

    const data = {
        titulo: Input_Title.value,
        descricao: Input_Description.value,
        url: Input_URL.value,
    }

    projects.push(data);

    showProjects()
    ToggleDialog(Dialog);

}) 


function ToggleDialog(element) {
    if(element.open){
        element.close();
    } else {
        element.showModal();
    }
}
