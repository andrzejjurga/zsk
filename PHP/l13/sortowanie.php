<?php
    //sortowania
    // sort, rsort, asort, arsord, ksort

    $tab = array(20, 1, 4, 45, 9, 23, 100);

    function t($tab){
        foreach($tab as $value){
            echo "$value ";
        }
        echo '<br>';
    }


    t($tab);

    sort($tab);
    t($tab);

    rsort($tab);
    t($tab);

    $names = array('Katarzyna', 'anna', 'zbigniew', 'Mateusz');
    t($names);
    
    function replaceToLowerCase(&$tab){
        foreach ($tab as $key => $value){
            $replace = strtolower($value);
            $tab[$key] = $replace;
        }
    }
    
    replaceToLowerCase($names);
    sort($names);
    t($names);

    $tabAsoc = array(
        'name' => 'Paweł',
        'surname' => 'Nowak',
        'age' => 25,
        'nick' => '2pawel'
    );

    asort($tabAsoc);
    t($tabAsoc);
    arsort($tabAsoc);
    t($tabAsoc);
    ksort($tabAsoc);
    t($tabAsoc);
    krsort($tabAsoc);
    t($tabAsoc);
?>