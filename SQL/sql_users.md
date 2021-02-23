# Użytkownicy
## Tworznie userów

```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
```
Jeżeli nie ustawiamy 'localhost' to domyśnie MySQL ustawi '%' 

## Przyznawanie uprawnień
Aby móc nadawać uprawnienia potrzebujesz GRANT OPTION
```sql 
GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
```
\*.* pozwala na wybranie konkretnej bazy oraz tabeli.  
[Tutaj](https://dev.mysql.com/doc/refman/8.0/en/grant.html#grant-privileges)  znajdują się informację o uprawnieniach, które można nadawać.  
By nadać komuś opcję do nadawania uprawnień należy po komędzie dopisać ```WITH GRANT OPTION```

## Odbieranie uprawnień
Do usuwania uprawnień stosujemy konstrukcję:
```sql
REVOKE INSERT ON *.* FROM 'jeffrey'@'localhost';
```
Aby móc odbierać uprawnienia potrzebujesz GRANT OPTION
