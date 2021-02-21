<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $text="Ta piosenka jest pisana dla pieniedzy!
        Ta piosenka jest śpiewana dla pieniedzy!
        Ta piosenka jest nagrana dla pieniedzy!
        Ta piosenka jest wydana dla pieniedzy!";
        $zdanie1 = substr($text, strrpos($text, "T"));
        echo 'zdanie1: '.$zdanie1.'<br>'; 
        $zdanie2 = str_replace("!","?", $zdanie1);
        echo 'zdanie2: '.$zdanie2.'<br>'; 
        $zdanie3 = trim($zdanie2, 'Ta?');
        echo 'zdanie3: '.$zdanie3.'<br>'; 
        $text2 = substr_replace($zdanie3, 'Czy', 0, 0);
        $zdanie4 = substr_replace($text2, '????', mb_strlen($text2)+1, 0);
        echo 'zdanie4: '.$zdanie4.'<br>'; 
        $text3 = explode("!", $text);
        $zdanie5 = ltrim($text3[1]);
        echo 'zdanie5: '.$zdanie5.'<br>';
        $zdanie6 = implode("--", explode(" ",$zdanie5));
        echo 'zdanie6: '.$zdanie6.'<br>';
    ?>
</body>
</html>