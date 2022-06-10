<?php
    require "./aluno.php";

    $aluno1 = new aluno('jorge',4, 8, 9);
    $aluno2 = new aluno('Pedro',7, 7, 7);
    $aluno3 = new aluno('Carlos',10, 6, 6);
    $lista = [$aluno1, $aluno2, $aluno3];

    $json = json_encode ($lista);

    echo $json
?>