<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cw 1</title>
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
        $query = mysqli_query($mysqli, "SELECT ID_PRAC, Nazwisko, ID_SZEFA FROM pracownicy")
        or
        die("błąd w zapytaniu");
        $query_boss = mysqli_query($mysqli, "SELECT  Nazwisko FROM pracownicy WHERE ETAT = 'DYREKTOR'")
        or
        die(" błąd w zapytaniu");


        while($arr = mysqli_fetch_array($query_boss, MYSQLI_ASSOC)){
            foreach ($arr as $key => $value) {
                $boss = $value;
            }
        }
        echo '<br>';
        ?>
            <ol>
        <?php
        while($arr = mysqli_fetch_array($query, MYSQLI_ASSOC)){
            ?>
                <li>
            <?php
            foreach ($arr as $key => $value) {
                echo $key. ' '.$value.' ';
            }
                echo $boss;
            ?>
                </li>
            <?php
        }
        ?>
            </ol>   
        <?php
            mysqli_close($mysqli);
        ?>


</body>
</html>