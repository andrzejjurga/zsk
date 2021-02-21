<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dane użytkownika</title>
</head>
<body>
    <h4>Dane użytkownika</h4>
    <form method="post">
        <input type="text" name="name" placeholder="Imię"><br>
        <input type="text" name="surname" placeholder="Nazwisko"><br>
        <input type="submit" value="Wyślij">
    </form>
    <?php
        if(!empty($_POST['name']) && !empty($_POST['surname']))
        {
            require_once './6_funkcje_1.php';
            echo '<hr>', show($_POST['name'], $_POST['surname']);
        }
    ?>
</body>
</html>