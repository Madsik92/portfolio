const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


async function getApiGithub() {
    try {

        const dadosPerfil = await fetch(`https://api.github.com/users/Madsik92`);
        const perfil = await dadosPerfil.json();

        let conteudo = `
                <img class="flex about_img" src= "${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}">
                <article class="flex about_content" id="about_texto">
                <h1>Sobre mim</h1>

                <p>Sou <span>desenvolvedora fullstack</span> em formação pelo bootcamp da Generation Brasil, com foco em
                    JavaScript e
                    nas principais tecnologias para desenvolvimento web. Durante essa jornada, tenho aprofundado meus
                    conhecimentos em <span>JavaScript, React e SQL</span>, além de boas práticas de programação,
                    versionamento de código com Git e metodologias ágeis.</p>

                <p>O que também inclui experiência prática em projetos colaborativos, onde desenvolvi
                    habilidades essenciais como <span>trabalho em equipe, comunicação e resolução de problemas</span>.
                </p>

                <p>Estou constantemente aprendendo e desenvolvendo projetos para fortalecer minha base como
                    desenvolvedora, com o objetivo de construir soluções <span>eficientes e escaláveis.</span></p>

                <div class="flex about_github" id="about_github">
                    <a class="botao" href="${perfil.html_url}" target="_blank">Github</a>

                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>
                </div>
                </article>`;

                sobre.innerHTML += conteudo;



    } catch (error) {
        console.error(error);
    }
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const campoNome = document.querySelector("#nome");
    const txtNome = document.querySelector("#txtNome");

    if (campoNome.value.length < 3) {
        txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres.";
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = "";
    }

    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = "Digite um E-mail válido";
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = "";
    }

    const campoAssunto = document.querySelector("#assunto");
    const txtAssunto = document.querySelector("#txtAssunto");

    if (campoAssunto.value.length < 5) {
        txtAssunto.innerHTML = "O assunto dever ter no mínimo 5 caracteres.";
        campoAssunto.focus();
        return;
    } else {
        txtAssunto.innerHTML = "";
    }

});

getApiGithub();