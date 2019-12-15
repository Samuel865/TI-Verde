const close = document.querySelector('.close');
const open = document.querySelector('.open');
const sidenav = document.querySelector('.sidenav');

function Open(){
    sidenav.style.width = '180px';
}

function Close(){
    sidenav.style.width = 0;
}


close.addEventListener('click', Close);
open.addEventListener('click', Open);

/* Populando a tabela */

const vetor = []

const pessoa1 = {
    nome: 'Samuel Macedo',
    idade: 29,
    area: 'Infra',
    tempo: 5,
    certificacao: true
}
const pessoa2 = {
    nome: 'Ramon Gonçalves',
    idade: 32,
    area: 'Desenvolvedor',
    tempo: 2,
    certificacao: true
}
const pessoa3 = {
    nome: 'Rodrigo Rabelo',
    idade: 19,
    area: 'Infra',
    tempo: 1,
    certificacao: false
}
const pessoa4 = {
    nome: 'Marie Green',
    idade: 22,
    area: 'Suporte',
    tempo: 2,
    certificacao: false
}
const pessoa5 = {
    nome: 'Ramon Cassio',
    idade: 32,
    area: 'Desenvolvedor',
    tempo: 5,
    certificacao: true
}
const pessoa6 = {
    nome: 'Thiago Abreu',
    idade: 32,
    area: 'Desenvolvedor',
    tempo: 5,
    certificacao: true
}
const pessoa7 = {
    nome: 'Mary-ann',
    idade: 32,
    area: 'Desenvolvedor',
    tempo: 5,
    certificacao: true
}
const pessoa8 = {
    nome: 'Tulio Orange',
    idade: 32,
    area: 'Desenvolvedor',
    tempo: 5,
    certificacao: true
}

vetor.push(pessoa1);
vetor.push(pessoa2);
vetor.push(pessoa3);
vetor.push(pessoa4);
vetor.push(pessoa5);
vetor.push(pessoa6);
vetor.push(pessoa7);
vetor.push(pessoa8);

const tbody = document.querySelector('tbody');

function paintUI(){
    let output = '';
    vetor.forEach(el => {
        output +=
         `
         <tr>
            <td>${el.nome}</td>
            <td>${el.idade}</td>
            <td>${el.area}</td>
            <td>${el.tempo}</td>
            <td>${el.certificacao}</td>
        </tr>
        `
    });
    tbody.innerHTML = output;
}

document.addEventListener('DOMContentLoaded',paintUI);