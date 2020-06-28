<strong>Para rodar:</strong>
<br><br>
node teste1.js teste1-entrada.txt<br>
node teste2.js teste2-entrada.txt
<br><br>
Eu escrevi os arquivos de teste no notepad no Windows, quando fui ler os arquivos vi que aparentemente na quebra de linha deles o notepad coloca '\r\n', então eu mandei o programa separar o input por essa string. Se você tiver escrito os seus arquivos de teste em outro OS e editor de texto, talvez eles tenham só '\r' ou '\n' para quebra de linha, se for o caso então é só editar<br>
<strong>const data = fileContent.split("\r\n");</strong><br>
para<br>
<strong>const data = fileContent.split("\n");</strong><br>
Linha 43/21 no teste1.js/teste2.js
