<?php
/**
 * Created by PhpStorm.
 * User: SQU4D
 * Date: 06/06/2015
 * Time: 20:51
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = new SQLite3('../database/agenda.db');

$result = $db->query('SELECT nome, codigo, categoria, preco FROM operadoras');

$outp = "";
while($rs = $result->fetchArray(SQLITE3_ASSOC)) {
    if($outp != "") { $outp .=","; }
    $outp .= '{"nome":"' . $rs["nome"] . '",';
    $outp .= '"codigo":"' . $rs["codigo"] . '",';
    $outp .= '"categoria":"' . $rs["categoria"] . '",';
    $outp .= '"preco":"' . $rs["preco"] . '"}';
}
$outp = '{"records":[' .$outp. ']}';
$db->close();

echo($outp);
