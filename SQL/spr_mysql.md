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
view zostało zaimplementowane w wersji 5 MySQL. Można dzięki nim prezentować dane w wygodny sposób. Widoki nie kopiują danych a zawierają jedynie definicje jak gotowy wynik powinien wyglądać. 
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
## Polecenie INSERT
```sql
INSERT INTO studenci VALUES (1, 'Artur', 'Nowakowski', 'P');
```
Aby wpisać wartości tylko do konkretnych kolumn używamy tej wersji polecenia:
```sql
INSERT INTO studenci (imie, nazwisko) VALUES ('Artur', 'Gramacki');
```
Przykład wstwiania jednocześnie paru wierszy:
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
 
## Polecenie SELECT

Służy ono do pobierania danych z tabel/widoków.
```sql
SELECT nazwisko, imie, typ_uczel_id, stud_id FROM studenci;
```

## Polecenie UPDATE
Pozwala na dapisywanie danych w istniejących już wierszach
```sql
UPDATE studenci SET nazwisko='Kowalska', imie='Edyta' WHERE stud_id=2;
 ```
 
## Polecenia DELETE oraz TRUNCATE
DELETE pozwala na kasowanie danych z tabel.
```sql
DELETE FROM studenci WHERE stud_id > 3;
```
TRUNCATE jest dużo szybsze i warto je stosować przy czyszczeniu bardzo dużych tabel.
```sql
TRUNCATE TABLE studenci;
```

## Polecenie ALTER TABLE
Pozwala na zmianę w struktórze istniejącej już tabeli
```sql
ALTER TABLE studenci DROP COLUMN typ_uczel_id;
ALTER TABLE studenci CHANGE COLUMN stud_id student_id INT;
ALTER TABLE studenci ADD COLUMN data_urodzenia DATE;
ALTER TABLE studenci ADD COLUMN plec CHAR(1); 
```
1. Kasowanie kolumny typ_uczel_id
2. Zmiana nazwy kolumny z stud_id na student_id
3. Dodanie kolumny

## Polecenie DROP TABLE
Kasowanie całych tabel
```sql
DROP TABLE studenci;
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

