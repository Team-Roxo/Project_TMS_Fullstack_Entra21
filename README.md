# <b>TMS PROJECT - ENTRA21 FULLSTACK DEV</b>

---
## 📜SUMÁRIO
><b>1. RESUMO</b>
>
>><b>1.1 <a href="#resume"> Da Licença, Disponibilidade e Finalidade</b></a>
>>
>><b>1.2 <a href="#stack"> Das Tecnologias Utilizadas</b></a>
>
><b>2. ORGANIZAÇÃO DO PROJETO</b>
>
>><b>2.1. Fluxograma</b>
>
><b>3. SOFTWARE</b>
>
>><b>3.1. GOOGLE CLOUD</b>
>>
>>><b>3.1.1. Google API</b>
>>>
>>>><b>3.1.1.1. Directions API</b>
>>>>>
>>>>><b>3.1.1.1.1. Visão Geral</b>
>>>>>
>>>><b>3.1.1.2. Distance Matrix API</b>
>>>>
>>>>><b>3.1.1.2.1. Visão Geral</b>
>>>>
>>>><b>3.1.1.3. Compute Engine API</b>
>>>>>
>>>>><b>3.1.1.3.1. Visão Geral</b>
>>>
>>><b>3.1.2. Instâncias Virtuais</b>
>>>
>>>><b>3.1.2.1. Resumo</b>
>>>>
>>>><b>3.1.2.2. Instalação e Implementação</b>
>>>
>>><b>3.1.3. Cloud SQL</b>
>>>
>>>><b>3.1.3.1. Resumo</b>
>>>>
>>>><b>3.1.3.2 Instalação e Implementação</b>
>>>
>>
>><b>3.2. FRONTEND</b>
>>
>><b>3.3. BACKEND</b>
>>>
>>><b>3.3.1. Spring Boot</b>
>>>>
>>>><b>3.3.1.1. Projeto</b>
>>>>
>>>><b>3.3.1.2. Dependências</b>
>>>>
>>><b>3.3.2. Controllers</b>
>>>>
>>>><b>3.3.2.1. Login</b>
>>>>
>>>><b>3.3.2.2. Register</b>
>>>>
>>>><b>3.3.2.3. User</b>
>>>>
>>>><b>3.3.2.4. Visitantes</b>
>>>>
>>>><b>3.3.2.5. Packages</b>
>>>>
>>>><b>3.3.2.6. Google</b>
>>>>
>>><b>3.3.2. Spring Login Security</b>
>>>>
>>>><b>3.3.2.1. Encriptação da Senha do Usuário</b>

## 1 - RESUMO

<details open id="resume">
 <summary> <b>1.1 - Da Licença, Disponibilidade e Finalidade </b> </summary>

#### &nbsp;&nbsp;&nbsp;&nbsp; Esse projeto foi desenvolvido pelo grupo Roxo da Turma Java Noturno de 2022, composto por <b>Bruno Roberto, Cristian Schauffert, Kalil Fakhouri e Mateus Felipe</b> com a mentoria do <b> professor Oliota</b>, visando apenas a demonstração dos conhecimentos técnicos adquiridos durante o curso e a apresentação da etapa final à empresas.

#### &nbsp;&nbsp;&nbsp;&nbsp; <b>A cópia do recurso está disponível a todos, podendo ser modificada e alterada. Fica proibida a venda, distribuição ou repasse da mesma. </b>

#### &nbsp;&nbsp;&nbsp;&nbsp; A maioria dos recurso e tecnologias são de código livre (open-source) ou teste de avaliação por tempo determinado (Google Cloud), afim de trazer a melhor experiência do uso de um software funcional. Devido ao nosso objetivo de comprovar os conhecimentos adquiridos, algumas partes do software são simulados devido ao tempo e resposta que levaria na realidade, acelerando, assim, o processo de entrega, por exemplo, para que possa ser vista em tempo real o processamento de dados, tanto localmente quanto em nuvem.

<br/>

</details>

<details open id="stack">
 <summary> <b>1.2 - Das Tecnologias Utilizadas</b> </summary>

#### &nbsp;&nbsp;&nbsp;&nbsp; Durante o curso foi utilizado diversas tecnologias, métodos ágeis e ferramentas de desenvolvimento tais como:

> #### Linguagens:
>> * ##### <img align="center" alt="kaka-JAVA" height="25" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"/> Java
>> * ##### <img align="center" alt="kaka-js" height=25 width=40 src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"/> JavaScript
>> * ##### <img align="center" alt="kaka-ts" height=25 width=40 src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg"/> TypeScript
>> * ##### <img align="center" alt="kaka-CSS" height="25" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" /> CSS
>> * ##### <img align="center" alt="html" height="25" width="40" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg"> HTML
> #
> #### Tecnologias:
>> * ##### <img align=center alt=kaka-vscode height=25 width=40 src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/spring/spring-original.svg" /> Spring Boot
>> * ##### <img align="center" alt="kaka-Angular" height="25" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" /> Angular
>> * ##### <img align=center alt=kaka-vscode height=25 width=40 src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original.svg" /> MySQL
> #
> #### Ferramentas:
>> * ##### <img align="center" alt="html" height="25" width="40" src="https://www.svgrepo.com/show/353685/eclipse-icon.svg"> Eclipse IDE
>> * ##### <img align=center alt=kaka-vscode height=25 width=40 src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg" /> Visual Studio Code
>> * ##### <img align="center" alt="html" height="25" width="40" src="https://www.svgrepo.com/show/354202/postman-icon.svg"> Postman
>> * ##### <img align=center alt=kaka-vscode height=25 width=40 src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/googlecloud/googlecloud-original.svg" /> Google Cloud
> #
> #### Metodologia:
>> * ##### <img align=center alt=kaka-vscode height=25 width=40 src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/trello/trello-plain.svg" /> Trello - Kanban

