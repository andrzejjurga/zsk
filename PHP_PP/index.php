<html>
 <head>
 <meta charset="utf-8">
  <title>PHP Test</title>
 </head>
 <body>
 <?php 
    $name = 'Anna';
    $surname = 'Nowak';
    echo "<p>Hellow World</p>"; 
    echo "Imię: $name<br>";
    //konkatencja .
   echo "Imię: $name, "."nazwisko: $surname<br><hr>";


    // typy danych
    // boolen true/false
    $prawda = true;
    $fałsz = false;
    echo $prawda;
    echo $fałsz;
    echo "<br>";

    //typ intiger
    $bin = 0b1011;
    $dec = 11;
    $oct = 011;
    $hex = 0x11;
    echo $bin;

    //składnia heredoc
        //$name='Janusz';

        //$text = <<<LABEL
        //heredoc
        //<hr>
        //LABEL;
    //echo <<<L
    //    Imię: $name
    //L;
    $city = 'Poznań';
    echo "<br>";
    echo "Nazwa zmiennej: \$city, wartość: $city"

 ?> 
 </body>
</html>