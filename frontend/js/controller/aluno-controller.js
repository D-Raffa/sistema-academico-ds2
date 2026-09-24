//controller de alunos 
// o controller coordena o funcionamento da aplicação

const AlunoController = {

    //Método inicia o funcionamento da aplicação 

    iniciar() {

        //variavel que controla a repeticao de cadastros
        let continuar = true;

        //o laço sera repetido enquanto continuar for true
        // cada repeticao o aluno podera cadastrar um novo aluno 

        while (continuar) {

            // solicita que a view leia os dados do usuario4
            const dados = AlunoView.lerDados();

            // Envia os dados para o model

            const resultado = AlunoModel.cadastrar(dados);

            //verifica o propriedade sucessp do resultado.
            if (resultado.sucesso) {


                //solicita que a view aoresente o aluno
                AlunoView.exibirAluno(resultado.aluno);
            } else {
                // se resultado for false ele apresenta o erro identificado pelo model
                AlunoView.exebirErro(resultado.mensagem);
            }

            //pergunra de o usuario deseja cadastrar um novo alunp
            continuar = AlunoView.perguntarNovoCadastro();
        }


        // esse pedaço ser executado apos o laço terminar, mostrara a lista de alunos cadastrados 
        AlunoView.exibirLista(alunos);

        // converte p array de alunos em um texto JSON
        const textoJson = JSON.stringify(alunos, null, 2);


        // solicita que a view apresente o texto JSON. 
        AlunoView.exebirJson(textoJson);

        //Converte o texto json novemante em um valor javascript 
        const dadosRecuperados = JSON.parse(textoJson);

        //solicita que a view apreente os dados reconstruidos 
        AlunoView.exibirDadosRecuperados(dadosRecuperados);
    }


};

//Inicia a Aplicação 
AlunoController.iniciar();