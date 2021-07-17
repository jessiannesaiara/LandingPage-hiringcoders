const form =  document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)
  localStorage.setItem('lead2', convertData)
  
  
  let content =  document.getElementById('content')
  
  let carregando = `<p id="teste">Carregando<p/>`
  
  
  let pronto = `<p><strong>CADASTRO REALIZADO COM SUCESSO!</strong><p/>`
  
  content.innerHTML = carregando
  
  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)
  
})
