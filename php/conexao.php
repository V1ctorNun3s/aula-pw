<?php
    function abrirConexao(){
        $host = "localhost";
        $usuario = "root";
        $senha = "";
        $bd = "tbl_aluno";
        $conexao = new mysqli($host,$usuario,$senha,$bd);
        return $conexao;
    }
    

    
    function fecharConexao($conexao){
        @mysqli_close($conexao) or die (mysqli_error($conexao));
    }
?>