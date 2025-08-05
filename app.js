function resetarAmigos() {
  amigos = [];
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('amigo').value = '';
}

let amigos = [];


function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let nome = input.value.trim();
  if (nome && !amigos.includes(nome)) {
    amigos.push(nome);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    lista.innerHTML = amigos.map(a => `<li>${a}</li>`).join('');
    input.value = '';
    input.focus();
  }
}


function sortearAmigo() {
  if (amigos.length === 0) {
    document.getElementById('resultado').innerHTML = '<li>Adicione pelo menos um nome!.</li>';
    return;
  }
  let indice = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[indice];
  document.getElementById('resultado').innerHTML = `<li>Sorteado: ${sorteado}</li>`;
}
