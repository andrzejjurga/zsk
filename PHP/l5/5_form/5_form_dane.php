<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dane</title>
</head>
<body>
    <h4>Dane pobrane z formularza</h4>
    <?php
        if(!empty($_GET['surname']) && !empty($_GET['name']) && !empty($_GET['color']) && !empty($_GET['town']))
        {
            $surname = $_GET['surname'];
            $name = $_GET['name'];
            $town = $_GET['town'];
            switch($_GET['color'])
            {
                case 'r':
                    $color = "Czerwony";
                break;
                case 'g':
                    $color = "Zielony";
                break;
                case 'b':
                    $color = "Niebieski";
                break;
            }
            $text = <<<L
            Nazwisko: $surname
            Imię: $name
            Kolor: $color
            Miasto: $town
L;
            echo nl2br($text);
        }
        else
        {
            ?>
            <script>
                history.back();
            </script>
            <?php
        }
    ?>
</body>
</html>