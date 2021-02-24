# Indeksowanie tabel
Przy bardzo dużych tabelach czas potrzebny na przeszukanie ich może być problematyczny.<br>
W przypadku braku indeksów MySQL musi przeszukać całą tabele wiersz po wierszu. Kiedy wartość względem której przeszukujemy tabele jest zaindeksowana można znacznie przyspieszyć poszukiwanie (np. do przechowywania indeksów często używa się [B-tree](https://dev.mysql.com/doc/refman/8.0/en/glossary.html#glos_b_tree)).
## Jak wybrać index?
Indeksy najlepiej sprawdzają się przy zapytaniach z ```WHERE```. Wybieramy kolumne, po której często szukamy.
## Wyświetlanie indeksów
```sql
SHOW INDEX FROM tableName;
```
## Tworzenie indeksów
Można je tworzyć razem z tabelą
```sql
CREATE TABLE tableName (
ID int,
LName varchar(255),
FName varchar(255),
DOB varchar(255),
LOC varchar(255),
INDEX ( ID )
);
```
Można je również dodawać do istniejących tabel
```sql
CREATE INDEX indexName ON tableName (ID, LName, FName, LOC);
```
