//Model de Alunos 
// model resposavel pelos dados dos alunos
// validacoes 
//regras de cadastro 

const AlunoModel = {
    //Array que armazena temporariamente os alunos cadastrados 

    alunos: [],

    //padroniza um valor textual antes de utiliza-lo 
    //String(valor) garante que o valor seja convertido para texto
    //trim()remove espaços no começo e no final 

    normalizaTexto(valor) {
        if (valor === null || valor === undefined) {
            return "";
        }
        return String(valor).trim();
    },
    //realiza uma validação simples do e-mail
    //metodo includes() verifica se determinado texto esta dentro da String    

    validarEmail(email) {
        return email.includes("@") && email.includes(".");
    },

    // procura o animal pelo RA .. 
    //metodo find() percorre o array ate encontrar, presta atençao !!

    localizarPorRa(ra) {
        return AlunoModel.alunos.find(
            aluno => aluno.ra === ra
        );
    },

    // realiza o cadastro dessa raça chamada Aluno

    cadastrar(dados) {
        // antes de validar os dados, normalizamos todos os valores, remover espaços desnecessarios e evitando valores null ou undefined

        const ra = AlunoModel.normalizaTexto(dados.ra);
        const nome = AlunoModel.normalizaTexto(dados.nome);
        const email = AlunoModel.normalizaTexto(dados.email);
        const curso = AlunoModel.normalizaTexto(dados.curso);
        const turma = AlunoModel.normalizaTexto(dados.turma);

        // verifica se algum campo obrigatorio vazio esta vazio
        // o operador || significa "ou"

        if (
            ra === "" ||
            nome === "" ||
            email === "" ||
            curso === "" ||
            turma === ""
        ) {
            // em vez de mostrar a menssagem diretamente, o model devolve objeto com resultado

            return {
                sucesso: false,
                mensagem: "Todos os campos sao obrigatórios."
            };


        }
        if (!AlunoModel.validarEmail(email)) {
            return {
                sucesso: false,
                mensagem: "Informe um e-mail válido."
            };
        }

        //verifica se ja existe um animal com o msmo RA.. 
        if (AlunoModel.localizarPorRa(ra)) {
            return {
                sucesso: false,
                mensagem: "Já existe um aluno com esse RA."
            };
        }

        const aluno = {

            // aqui vamos usar um contador, o id encontra a quantidade de alunos e adiciona mais um 
            id: AlunoModel.alunos.length + 1,

            // dados recebidos e normalizados anteriormente
            ra: ra,
            nome: nome,
            email: email,
            curso: curso,
            turma: turma,

            //todo novo animal começa com ativo, depois vamos poder alterar o valor sem apagar definitivamente o cadastro.
            ativo: true
        };
        AlunoModel.alunos.push(aluno);
        // informa que o cadastro foi concluido com sucesso. 
        // tambem devolvemos o aluno criado para que o controlle possa encaminha-lo para a view
        return {
            sucesso: true,
            aluno: aluno
        };



    },

    // devolve a lista de alunos cadastrados
    //operado spread (...) cria um novo array contendo os mesmos alunos 

    listar() {
        return [AlunoModel.alunos];
    }



};