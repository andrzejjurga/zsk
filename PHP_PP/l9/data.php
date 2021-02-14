<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ilość elementów</title>
</head>
<body>
    <?php
    if(isset($_POST['button'])){
        echo "<h4>Lista</h4>";
        for($i = 0; $i < count($_POST)-1; $i++){
            echo "<li>".$_POST["element$i"]."</li>";
        }
    }
    else if (!empty($_POST['count'])) {
            $input = $_POST['count'];
            echo '<h4>Ilość elementów</h4>';
            ?>
                <form method="post">
                    <?php
                        for($i = 0; $i < $input; $i++){
                            echo "<input type=\"text\" name=\"element$i\" placeholder=\"Element $i\"><br><br>";
                        }
                    ?>
                    <input type="submit" value="Pokaż listę" name="button">
                </form>
            <?php
        } else {
            header('location: ./');
        }
    ?>
</body>
</html>