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
    ?>
</body>
</html>