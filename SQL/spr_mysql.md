# Powtórka do sprawdzianu
## Tworzenie nowej bazy
```sql
CREATE DATABASE olejki;
```

## Tworzenie tabeli
```sql
CREATE TABLE studenci
(
 stud_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 imie VARCHAR(20) NOT NULL,
 nazwisko VARCHAR(30) NOT NULL,
 typ_uczel_id CHAR(1) NULL
); 
```
## Wstawianie danych do tabeli
```sql
INSERT INTO studenci VALUES
 (1, 'Artur', 'Nowakowski', 'P'),
 (2, 'Jan', 'Kowalski', 'P'),
 (3, 'Roman', 'Nowak', 'U'),
 (4, 'Stefan', 'Antkowiak', 'A'),
 (5, 'Ewa', 'Konieczna', 'A'),
 (6, 'Anna', 'Wojtasik', 'A'),
 (7, 'Marek', 'Pawlak', 'P'); 
```






## Kasowanie wszystkich danych z tabel:
W takiej sytuacji nie można posłużyć się poleceniem  
```sql
DELETE FROM olejki;
```  
Klucz obcy zablokuje takie działanie. Należy go najpierw wyłączyć lub usunąc.
1. ```sql
SET FOREIGN_KEY_CHECKS = 0;
```
2. ```sql
DELETE FROM olejki;
```
3. ```sql
SET FOREIGN_KEY_CHECKS = 1;
```

