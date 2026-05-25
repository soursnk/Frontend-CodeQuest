const formlogin = document.getElementById('formlogin');
const formcadastro = document.getElementById('formcadastro');

const botaocadastro = document.getElementById('botaocadastro');
const botaoentrar = document.getElementById('botaoentrar');

botaocadastro.addEventListener('click', () => {

    formlogin.style.display = 'none';

    formcadastro.style.display = 'flex';

});

botaoentrar.addEventListener('click', () => {

    formcadastro.style.display = 'none';

    formlogin.style.display = 'flex';

});