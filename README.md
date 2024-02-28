# Formulário de Autenticação em 2 fatores - React

É crescente o uso de aplicações que implementam algum tipo de segurança extra na autenticação. Uma das formas mais comuns para isso é usando uma estratégia de 2 fatores. Além da senha tradicional o usuário recebe em seu email ou por SMS uma senha de uso único (também conhecida como OTP - *One-Time Password*).

## 🔨 Requisitos

- Crie um formulário com 5 _inputs_, cada um representando um digito da senha OTP
- A submissão desse formulário deverá acontecer quando o usuário pressionar a tecla Enter ou clicar no botão
- Os _inputs_ só poderão aceitar números e apenas um único dígito cada
- Ao carregar a página, a aplicação deverá focar no input do primeiro dígito
- Ao digitar o primeiro número, o foco deverá ir automaticamente para o segundo dígito. E assim sucessivamente
- Ao apagar algum dígito, o foco deverá voltar para o dígito anterior
- Deve ser possível colar um código de 5 dígitos e ele deverá aparecer corretamente nos inputs.
  - Um erro deverá aparecer quando o texto colado não for 5 dígitos numéricos.
- Deve ser possível navegar nos inputs com as setas do teclado (_ArrowLeft_ e _ArrowRight_)
- Em celulares, o teclado numérico deve ser ativado (e não o teclado tradicional).
- Utilize, quando possível, todas as boas práticas presentes [nesse artigo](https://developer.chrome.com/docs/identity/web-apis/web-otp?hl=pt-br).  
- Crie a UI de acordo com o Figma ou, se preferir, crie um design próprio. 

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1344076293376163434/mini-projeto-formulario-de-autenticacao-em-2-fatores-otp)

## 👉🏽 O que você irá praticar:

#### React

- Refs no React
- Formulários controlados no React
- Eventos

#### WebOTP API

- Melhores práticas no uso da WebOTP API
- Inputs com teclados numéricos


## Pré requisitos

Para fazer esse Mini Projeto será necessário no mínimo conhecimento básico de React e de desenvolvimento web no geral.
