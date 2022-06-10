<?php
    require './conexao.php';

    $conexao = abrirConexao();
    $Matricula = 3;
    $Nome = "Siqueira";
    $query = "INSERT INTO tbl_aluno (Matricula,Nome) VALUES" . "($Matricula,'$Nome')";

    mysqli_query($conexao,$query) or die ("Erro ao tentar incluir");
    fecharConexao($conexao);
    echo ("Incluido com sucesso");
?>