url = "https://viacep.com.br/ws/13030-290/json";
dados = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((dados) => {
    endereco = dados;
    console.log(endereco.logradouro);
  })
  .catch((erro) => {
    console.log(erro);
  });
