<!DOCTYPE html>
<html lang="pl" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zmienne</title>
</head>
<body>
    <?php
        $name = 'Anna';
        $surname = 'Nowak';
        echo 'Imię: $name <br>'; //zmienne dosłowne
        echo "Imię: $name <br>"; //zmienne jako wartość

        $prawda = true;
        $falsz = false;

        echo $prawda;
        echo $falsz;

        $bin = 0b1011;
        $dec = 11;
        $oct = 011;
        $hec = 0x11;

        echo "<br><hr>$bin<hr>";
        echo "<br>$dec<hr>";
        echo "<br>$oct<hr>";
        echo "<br>$hec<hr>";

echo<<<heredoc
Mam na imie
$name $surname <br>
heredoc;

echo<<<'nowdoc'
Mam na imie
$name $surname
nowdoc;
    ?>
</body>
</html>