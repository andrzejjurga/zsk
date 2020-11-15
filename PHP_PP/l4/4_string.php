<?php
    $text = <<<T
    zsk - zespół
    Szkół
    Komunikacji <br><hr>
T;
    echo $text;
    echo nl2br($text);

    $name = "jAnUsZ";
    
    echo strtolower($name), '<br>';
    echo strtoupper($name), '<br>';
    
    $name = "jAnUsZ kOwAlEsKi";

    echo ucfirst($name), '<br>';
    echo ucwords($name), '<hr>';
 
    $name = <<<T
janusz grażyna
    pjoter seba
T;
    echo ucfirst($name), '<br>';
    echo ucwords($name), '<hr>';

    $name = "Łukasz ";
    $name1 = " Łukasz ";

    echo strlen($name); //7 //zajęte bajty
    echo mb_strlen($name); //6 ilość liter
    echo mb_strlen(trim($name1)), '<hr>'; //6 trim usuwa spacje

    $addres = "Poznań, ul. Polna 7, tel. (61) 123-45-67";
    echo "<h4> $addres </h4>";
    $search = strstr($addres, "tel");
    echo $search, '<br>';
    $search = strstr($addres, "tel", true);
    echo $search, '<br>';
    $search = stristr($addres, "Tel");
    echo $search, '<br>';
    echo strstr('zsk@gmail.com', '@'), '<br>'; //gmail.com
    echo strstr('zsk@gmail.com', 64), '<hr>'; //gmail.com

    $name = "Janusz";
    echo substr($name, 1), '<br>';
    echo substr($name, 1, 3), '<hr>';

    $gmail = "zsk@gmail.com";
    echo substr(strstr($gmail, '@'), 1), '<hr>';

    $replace = str_replace('imie', 'Anna', 'Masz na imię: imie');
    echo $replace, '<br>'; //Masz na imię: Anna

    $login = "bączyk";
    $censure = array('ą', 'ć', 'ę', 'ś', 'ó', 'ń', 'ł', 'ź', 'ż');
    $replace = array('a', 'c', 'e', 's', 'o', 'n', 'l', 'z', 'z');

    $correctLogin = str_replace($censure, $replace, $login);
    $text = <<<LOGIN
        Login: $login
        Poprawny Login: $correctLogin
LOGIN;
    echo nl2br($text);
?>