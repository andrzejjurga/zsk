# Użytkownicy
## Tworznie userów

```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
```
Jeżeli nie ustawiamy 'localhost' to domyśnie MySQL ustawi '%' 

## Przyznawanie uprawnień
```sql 
GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
```
\*.* pozwala na wybranie konkretnej bazy oraz tabeli.  
[Tutaj](https://dev.mysql.com/doc/refman/8.0/en/grant.html#grant-privileges)  znajdują się informację o uprawnieniach, które można nadawać.
