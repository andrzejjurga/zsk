<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularze</title>
</head>
<body>
    <h3>Dane użytkownika</h3>
    <form method="get">
        <input type="text" name="surname"><br>
        <input type="submit" value="Zatwierdź"><hr>
    </form>
    <?php
        if (!empty($_GET['surname'])) 
        {
            if (strlen(trim($_GET['surname'])) == strlen($_GET['surname'])) 
            {
                echo "Nazwisko: ", $_GET['surname'];
            }
            else
            {
                echo "Nie dawaj spacji";
            }
        }
    ?>
</body>
</html>