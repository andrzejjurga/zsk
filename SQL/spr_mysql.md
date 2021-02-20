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

Aby wyświetlić tabele wpisujemy
```sql
show tables;
```
Po więcej informacji podajemy
```sql
describe studenci;
```
## Tworzenie widoku
view zostało zaimplementowane w wersji 5 MySQL. Można dzięki nim prezentować dane w wygodny sposób. Widoki nie kupiują danych a zawierają jedynie definicje jak gotowy wynik powinien wyglądać. 
```sql
CREATE OR REPLACE VIEW studenci_view AS
SELECT
 S.imie AS imie_studenta,
 S.nazwisko AS nazwisko_studenta,
 U.nazwa AS nazwa_uczelni
FROM
 studenci S, uczelnie U
WHERE
 S.typ_uczel_id = U.typ_uczel_id; 
```
Aby użyć widoku piszemy:
```sql
SELECT * FROM studenci_view; 
```


## Kasowanie wszystkich danych z tabel:
W takiej sytuacji nie można posłużyć się poleceniem  
```sql
DELETE FROM olejki;
```  
Klucz obcy zablokuje takie działanie. Należy go najpierw wyłączyć lub usunąc.
```sql
SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM olejki;

SET FOREIGN_KEY_CHECKS = 1;
```

