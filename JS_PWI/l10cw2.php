<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cw 2</title>
    <style>
        td{
            border: black solid 1px;
        }
    </style>
</head>
<body>
    
    <?php
        $dbServer = 'localhost';
        $dbUser = 'root';
        $dbPassword = 'mielonka';
        $dbName = 'firma';

        $mysqli = @mysqli_connect($dbServer, $dbUser, $dbPassword, $dbName);
        if(!$mysqli)
        {
            die("Błąd łącznie z bazą: ". mysqli_connect_errno());
        }
        echo "Nawiązano połacznie:";
        $query = mysqli_query($mysqli, "SELECT ID_PRAC, Nazwisko, PLACA_POD + COALESCE(PLACA_DOD, 0), ZATRUDNIONY FROM pracownicy")
        or
        die("błąd w zapytaniu");


        echo '<br>';
        ?>
        <table>
            <tr>
                <td>identyfikator</td><td>nazwisko</td><td>płaca</td><td>zatrudniony</td>
            </tr>
        <?php
        while($arr = mysqli_fetch_array($query, MYSQLI_ASSOC)){
            
            ?><tr><?php
            
            foreach ($arr as $key => $value) {
            
            ?><td><?php
        
            echo $value.' ';
            ?></td><?php
        }
        ?><tr><?php
        }
        ?></table> <?php

        mysqli_close($mysqli);
    ?>


</body>
</html>