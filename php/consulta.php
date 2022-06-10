<?php
    require './conexao.php';
    require './aluno.php';  

    $conexao = abrirConexao();
    $query = "select * from aluno";
    $resultado = mysqli_query($conexao,$query) 
    or die  ("Erro ao tentar consultar");
    $array = [];

    while ($registro = mysqli_fetch_array($resultado)) {
        $id = $registro['matricula'];
        $nome = $registro['nome'];
        $nota1 = $registro['nota1'];
        $nota2 = $registro['nota2'];
        $nota3 = $registro['nota3'];
        $aluno = new Aluno ($nome, $nota1, $nota2, $nota3);
        array_push($array,$aluno);
      
    }

    $json = json_encode($array);
    echo $json;

    fecharConexao($conexao);
?>