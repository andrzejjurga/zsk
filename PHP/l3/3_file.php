<!DOCTYPE html>
<html lang="pl" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dołączanie plików</title>
</head>
<body>
    <h3>Początek pliku</h3>
    <?php
        include './3_1_file.php';
        include_once './3_1_file.php';

        echo '<br>Require:';
        require './3_1_file.php'; //błąd w nazwie = fatal error
    ?>
    <h3>Koniec pliku</h3>
</body>
</html>