# Overlay Dinâmico para a Live da Naná

Este projeto oferece uma forma de deixar dinâmico o overlay da [live da Naná](https://www.twitch.tv/nanallve), que é utilizado diariamente durante suas transmissões.

## Objetivos

- Integrar arquivos HTML puros ao OBS para permitir sobreposições dinâmicas.  
- Manter o projeto extremamente leve, facilitando seu uso em máquinas com recursos variados.  
- Fornecer widgets especiais e interativos para enriquecer a experiência de transmissão.

## Funcionalidades Principais

- Configuração dinâmica via WebSocket para atualizar a roleta de opções e outros elementos em tempo real.  
- Estrutura modular, permitindo a adição de novos widgets sem comprometer a performance.  
- Integração simples ao OBS, bastando adicionar as páginas HTML como fontes do tipo “Navegador”.

## Como Usar

1. Abra seu OBS e adicione uma nova fonte de navegador.  
2. Aponte para o arquivo HTML desejado (por exemplo, `background.html`).  
3. Ajuste a resolução conforme necessário.  
4. Receba e monitore as atualizações em tempo real via WebSocket.

## Contribuição

1. Faça um fork deste repositório.  
2. Implemente suas melhorias e envie um pull request.  
3. Sugestões e feedbacks são sempre bem-vindos!

## Licença

Este projeto é distribuído sob a licença MIT. Sinta-se livre para modificá-lo e utilizá-lo em seus próprios projetos.
