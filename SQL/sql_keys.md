# Klucze główne i obce

#### Tworząc tabelę możemy przypisać klucz głowny (PRIMARY) i obcy (FOREIGN)

#### Klucz główny identyfikuje każdy rekord tabeli, musi zawierać ?unique? wartości, nie może zawierać null wartości

#### Tabela może mieć tylko jeden klucz główny

```sql
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);
```

#### Aby utworzyć klucz główny w tabeli która jest już utworzona należy skorzystać z ```ALTER TABLE```

```sql
ALTER TABLE Persons
ADD PRIMARY KEY (ID);
```

#### Usuwanie klucza głównego:

```sql
ALTER TABLE Persons
DROP PRIMARY KEY;
```



#### Klucz obcy używany jest do połączenia dwóch tabel.
#### Jest on kolumną, które bezpośrednio odnosi się do klucza głównego innej tabeli.
#### Tabela posiadająca klucz obcy nazywana jest "child table", a tabela która posiada ten klucz główny "parent table".

#### Klucz obcy używany jest aby zapobiec akcjom, które mogłyby zniszczyć połączenie między tabelami. Również zapobiega wprowadzenie błędny danych do kolumny klucza obcego.

```sql
CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
```

#### Aby utworzyć klucz obcy w tabeli która jest już utworzona należy skorzystać z ```ALTER TABLE```

```sql
ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
```

#### Usuwanie klucza obcego:

```sql
ALTER TABLE Orders
DROP FOREIGN KEY FK_PersonOrder;
```