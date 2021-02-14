
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cw 3</title>
</head>
<body>
    
    <?php
    //Niestaty wyskakuje mi tak błąd przy tworzeniu tabeli:
    //mysqli::real_connect(): (HY000/1045): Access denied for user 'pma'@'localhost' (using password: YES)
    //próbowałm coś się na ten temat dowiedzieć i nadal nie wiem jak to rozwiązać
        $dbServer = 'localhost';
        $dbUser = 'root';
        $dbPassword = 'mielonka';

        $mysqli = @mysqli_connect($dbServer, $dbUser, $dbPassword);
        if(!$mysqli)
        {
            die("Błąd łącznie z bazą: ". mysqli_connect_errno());
        }
        echo "Nawiązano połacznie";

        $sql = "CREATE DATABASE studia DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci";
        if(mysqli_query($mysqli, $sql))
            echo '<br> Baza utworzona';
        else
        {
            echo '<br> Błąd tworzenia bazy';
            die("");
        }
        mysqli_select_db($mysqli, "studia");

        $sql = "CREATE TABLE studenci";
        if(mysqli_query($mysqli, $sql))
            echo '<br> Utworzono tabelę';
        else
            echo '<br> Błąd tworzenia tabeli';
            
            

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