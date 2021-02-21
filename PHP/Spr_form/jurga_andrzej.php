<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        td{border: 1px solid black;}
    </style>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wynik z formualrza</title>
</head>
<body>
    <?php
        include 'function.php';
        if(!empty($_GET['surname']) && !empty($_GET['name']) && !empty($_GET['a']) && !empty($_GET['b']) && mb_strlen($_GET['name']) <= 8)
        {
            echo ucwords(strtolower(trim($_GET['surname']))), "_", ucwords(strtolower(trim($_GET['name']))), "_gr_4";
            $czas = date('d-m-Y');
            $surname = $_GET['surname'];
            $name = $_GET['name'];
            $date = getdate();
            $day = $date['wday'];
            switch($day)
            {
                case '1':
                    $day = "poniedziałek";
                break;
                case '2':
                    $day = "wtorek";
                break;
                case '3':
                    $day = "środa";
                break;
                case '4':
                    $day = "czwartek";
                break;
                case '5':
                    $day = "piątek";
                break;
                case '6':
                    $day = "sobota";
                break;
                case '0':
                    $day = "niedziela";
                break;
            }

            echo<<<L
            <table>
            <tr>
                <td>4C_gr_2</td> <td><a href="a">Wzór</a></td>
            </tr>
            <tr>
                <td>$czas</td> <td>$day</td>
            </tr>
            </table>
L;
            echo fun($_GET['a'], $_GET['b']);
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