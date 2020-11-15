<?php
    echo 'Wersja PHP: ', PHP_VERSION, '<br>';
    $pow = 2**10;

    //operatory bitowe
    //and &, or |, or ^, not ~, <<, >>

    $x = 0b01010;
    echo "<br>$x<br>";

    $x = $x << 2; //101000(2)
    echo "<br>$x<br>";

    $x = $x >> 3; //101(2)
    echo "<br>$x<hr>";

    $test1 = 'abc123';
    $test2 = 0;
    $test3 = 2.0;

    echo 'typ dancyh $test1: ', gettype($test1),'<br>';
    echo 'typ dancyh $test2: ', gettype($test2),'<br>';
    echo 'typ dancyh $test3: ', gettype($test3),'<br>';

    echo PHP_INT_SIZE, '<hr>';

    $x;

    echo is_null($x), '<br>';
    echo is_int($x), '<hr>';
?>