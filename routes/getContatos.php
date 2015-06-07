<?php
/**
 * Created by PhpStorm.
 * User: SQU4D
 * Date: 06/06/2015
 * Time: 18:46
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$db = new SQLite3('../database/agenda.db');

$result = $db->query('SELECT serial, nome, telefone, operadora, created_at FROM contatos');

$outp = "";
while($rs = $result->fetchArray(SQLITE3_ASSOC)) {
    if($outp != "") { $outp .=","; }
    $outp .= '{"serial":"' . $rs["serial"] . '",';
    $outp .= '"nome":"' . $rs["nome"] . '",';
    $outp .= '"telefone":"' . $rs["telefone"] . '",';
    $outp .= '"operadora":"' . $rs["operadora"] . '",';
    $outp .= '"data":"' . $rs["created_at"] . '"}';
}
$outp = '{"records":[' .$outp. ']}';
$db->close();

echo($outp);
