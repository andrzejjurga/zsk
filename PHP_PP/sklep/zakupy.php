<!DOCTYPE html>
<html lang="en"><!--Andrzej Jurga & Sebastian Jerzykiewicz-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ilość elementów</title>
</head>
<body>
    <?php
    include("./function.php");
    $maslo = 4.99;
    $margaryna = 2.99;
    $ogorek = 1.99;
    $cukinia = 3.99;
    $makaron = 5.99;

    $maslo1 = $_POST['count_1'];
    $margaryna1 = $_POST['count_2'];
    $ogorek1 = $_POST['count_3'];
    $cukinia1 = $_POST['count_4'];
    $makaron1 = $_POST['count_5'];


    $suma = sum($maslo1 * $maslo, $margaryna1* $margaryna, $ogorek1 * $ogorek, $cukinia1 * $cukinia, $makaron1 * $makaron);

    echo<<<L
        <ul>
            <li>Masło: $maslo1 | $maslo</li>
            <li>Margaryna: $margaryna1 | $margaryna</li>
            <li>Ogórek: $ogorek1 | $ogorek</li>
            <li>Masło: $cukinia1 | $cukinia</li>
            <li>Makaron: $makaron1 | $makaron</li>
        </ul>
L;

        echo "Łączna kwota zakupów: $suma zł";
    ?>
</body>
</html>