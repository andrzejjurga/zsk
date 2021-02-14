<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <?php 
        $colors = array('biały', 'czerwony', 'zielony');
        echo 'Rozmiar tablicy: ',count($colors),'<br>';
        echo 'Pierwszy element tablicy: ',$colors[0],'<br>';
        echo 'Rozmiar tablicy: ',$colors[count($colors)-1],'<br>';

        for($i=0; $i <count($colors); $i++)
        {
            echo 'Kolor ', $i + 1,': ',$colors[$i],'<br>';
        }
        $date = array(
            'name' => 'Paweł',
            'surname' => 'Bowak',
            'age' => 20
        );
        echo $date["name"],'<br>';
        echo<<<SHOW
            Imię: $date[name]<br>
            Nazwisko: {$date["surname"]}<br>
SHOW;

        foreach ($date as $key => $value) {
            echo $value,'<br>';
        }
        print_r($date);
        echo '<br>';
        var_dump($date);
        echo '<br>';

        $students = array(
            array('Krystyna', 'Nowak', '30', 'Poznań'),
            array('Nowak'),
            array('Anna', 'Kowalski', '30'),
        );

        foreach ($students as $key => $value) {
            foreach ($value as $key => $value2) {
                echo $value2,' ';
            }
            echo '<br>';
        }

    ?>
</body>
</html>