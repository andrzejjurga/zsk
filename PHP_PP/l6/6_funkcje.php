<?php
    function show( $x){
        return "Zmienna \$x wynosi: $x";
    }
    echo show(10), '<br>';

    function sum($x, $y){
        return $x + $y;
    }
    echo sum(1174, 963), '<br>';
    
    function int($x):int{
        return $x;
    }

    echo int(10); //10
    echo "<br>";
    echo int(10.5); //10
    echo "<br>";
    echo "<hr>";

    function sum1(int $x, float $y){
        return $x + $y;
    }

    echo sum1(2, 3); //5
    echo "<br>";
    echo sum1(2.5, 3); //5
    echo "<br>";
    echo sum1(2.5, 3.5); //5.5
    echo "<br>";
    echo "<hr>";
?>

