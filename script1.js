function mostrarDados() {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value;
    const curso = document.getElementById("curso").value;
    const tecnologia = document.getElementById("tecnologia").value;

    document.getElementById("resultado").innerHTML = `
      <div class="alert alert-success">
        <h4>Dados cadastrados:</h4>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Curso:</strong> ${curso}</p>
        <p><strong>Tecnologia:</strong> ${tecnologia}</p>
      </div>
    `;
}