# Importowanie i eksportowanie
```cmd
mysqldump -u root -p db_name > backup-file.sql
```

#### Następnie kasujemy bazę
```sql
DROP DATABASE db_name;
```
#### Jeżeli chcemy wczytać bazę musimy najpierw stworzyć pustą.
```sql
CREATE DATABASE db_name;
```
#### I imporetujemy z pliku .sql.
```cmd
mysql -u root -p db_name < backup-file.sql
```