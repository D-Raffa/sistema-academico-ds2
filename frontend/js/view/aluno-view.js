// View de alunos

// a view é a responsavel pela interação do usuario 
const AlunoView = {
    //solicita ao animal os dados necesarios para o cadastro 

    lerDados() {
        return {
            ra: prompt("Digite o RA do aluno:"),
            nome: prompt("Digite o nome do aluno:"),
            email: prompt("Digite o e-mail do aluno:"),
            curso: prompt("Digite o curso:"),
            turma: prompt("Digite a turma:")
        };
    },

    // apresenta o animal que foi cadastrado com sucesso

    exibirAluno(aluno) {
        //apresenta uma menssagem simples no console. 

        console.log("Aluno cadastrado com sucesso.");

        // console.table() apresenta as propriedades do objeto em formato de tabela, facilitando a leitura dos dados

        console.table(aluno);
    },

    // apreseta uma menssagem de erro 
    // a view nao descobre e nem cria o erro, apenas apresenta a menssagem recebida 

    exibirErro(mensagem) {
        //console.error() apresenta uma mensagem como erro
        console.error("Erro:", mensagem);
    },

    // pergunta se o usuario deseja realizar outro cadastro. 

    perguntaNovoCadastro() {
        return confirm("Deseja cadastrar outro aluno ?");
    },

    // apresenta a lista compreta de alunos, o parametro alunos devera receber um array

    exibirLista(alunos) {
        // a propriedade length informa a quantidade de elementos existentes no array
        console.log(
            "Quantidade de alunos cadastrados:",
            alunos.length
        );

        // verifica se o array esta vazio.
        if (alunos.length === 0) {
            console.log("Nenhum aluno foi cadastrado.");
            // o return encerra a execussão deste metodo
            return;
        }

        // se o array possuir alunos, apresenta todos os resgistros em formato de table.
        console.table(alunos);
    },

    // apresenta os alunos convertios para o formato JSON.

    exibirJson(textoJson) {
        console.log("Alunos em formato JSON:");

        // apresenta em formato texto, nao podendo mais ser um array manipulado diretamente pelo javascript
        console.log(textoJson);
    },

    // apresenta os dados reconstruidos com o JSON.parse(),depois da conversao os dados deixam de ser apenas texto e voltam a ser valores Java Script.
    exibirDadosRecuperados(dados) {
        console.log("Dados reconstruidos com JSON.parse():");
        //como dados voltou a ser um array de objetos, podemos apresentalo com console.table().
        console.table(dados);
    }


};