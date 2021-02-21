-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 12 Wrz 2018, 08:57
-- Wersja serwera: 10.1.13-MariaDB
-- Wersja PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `wazniak_4a2`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `etaty`
--

CREATE TABLE `etaty` (
  `NAZWA` varchar(15) NOT NULL,
  `PLACA_OD` decimal(6,2) DEFAULT NULL,
  `PLACA_DO` decimal(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `etaty`
--

INSERT INTO `etaty` (`NAZWA`, `PLACA_OD`, `PLACA_DO`) VALUES
('ADIUNKT', '2510.00', '3000.00'),
('ASYSTENT', '1500.00', '2100.00'),
('DOKTORANT', '800.00', '1000.00'),
('DYREKTOR', '4280.00', '5100.00'),
('PROFESOR', '3000.00', '4000.00'),
('SEKRETARKA', '1470.00', '1650.00');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pracownicy`
--

CREATE TABLE `pracownicy` (
  `ID_PRAC` int(4) NOT NULL,
  `NAZWISKO` varchar(15) DEFAULT NULL,
  `IMIE` varchar(15) DEFAULT NULL,
  `ETAT` varchar(15) DEFAULT NULL,
  `ID_SZEFA` int(4) DEFAULT NULL,
  `ZATRUDNIONY` date DEFAULT NULL,
  `PLACA_POD` decimal(6,2) DEFAULT NULL,
  `PLACA_DOD` decimal(6,2) DEFAULT NULL,
  `ID_ZESP` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `pracownicy`
--

INSERT INTO `pracownicy` (`ID_PRAC`, `NAZWISKO`, `IMIE`, `ETAT`, `ID_SZEFA`, `ZATRUDNIONY`, `PLACA_POD`, `PLACA_DOD`, `ID_ZESP`) VALUES
(100, 'Marecki', 'Jan', 'DYREKTOR', NULL, '1968-01-01', '4730.00', '980.50', 10),
(110, 'Janicki', 'Karol', 'PROFESOR', 100, '1973-05-01', '3350.00', '610.00', 40),
(120, 'Nowicki', 'Pawel', 'PROFESOR', 100, '1977-09-01', '3070.00', NULL, 30),
(130, 'Nowak', 'Piotr', 'PROFESOR', 100, '1968-07-01', '3960.00', NULL, 20),
(140, 'Kowalski', 'Krzysztof', 'PROFESOR', 130, '1975-09-15', '3230.00', '805.00', 20),
(150, 'Grzybowska', 'Maria', 'ADIUNKT', 130, '1977-09-01', '2845.50', NULL, 20),
(160, 'Krakowska', 'Joanna', 'SEKRETARKA', 130, '1985-03-01', '1590.00', NULL, 20),
(170, 'Opolski', 'Roman', 'ASYSTENT', 130, '1992-10-01', '1839.70', '480.50', 20),
(180, 'Makowski', 'Marek', 'ADIUNKT', 100, '1985-02-20', '2610.20', NULL, 10),
(190, 'Kotarski', 'Konrad', 'ASYSTENT', 140, '1993-09-01', '1971.00', NULL, 20),
(200, 'Przywarek', 'Leon', 'DOKTORANT', 140, '1994-07-15', '900.00', NULL, 30),
(210, 'Kotlarczyk', 'Stefan', 'DOKTORANT', 130, '1993-10-15', '900.00', '570.60', 30),
(220, 'Siekierski', 'Mateusz', 'ASYSTENT', 110, '1993-10-01', '1889.00', NULL, 20),
(230, 'Dolny', 'Tomasz', 'ASYSTENT', 120, '1992-09-01', '1850.00', '390.00', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zespoly`
--

CREATE TABLE `zespoly` (
  `ID_ZESP` int(2) NOT NULL,
  `NAZWA` varchar(20) DEFAULT NULL,
  `ADRES` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `zespoly`
--

INSERT INTO `zespoly` (`ID_ZESP`, `NAZWA`, `ADRES`) VALUES
(10, 'ADMINISTRACJA', 'PIOTROWO 2'),
(20, 'SYSTEMY ROZPROSZONE', 'PIOTROWO 3A'),
(30, 'SYSTEMY EKSPERCKIE', 'STRZELECKA 14'),
(40, 'ALGORYTMY', 'WIENIAWSKIEGO 16'),
(50, 'BADANIA OPERACYJNE', 'MIELZYNSKIEGO 30');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `etaty`
--
ALTER TABLE `etaty`
  ADD PRIMARY KEY (`NAZWA`);

--
-- Indexes for table `pracownicy`
--
ALTER TABLE `pracownicy`
  ADD PRIMARY KEY (`ID_PRAC`),
  ADD KEY `ETAT` (`ETAT`),
  ADD KEY `ID_SZEFA` (`ID_SZEFA`),
  ADD KEY `ID_ZESP` (`ID_ZESP`);

--
-- Indexes for table `zespoly`
--
ALTER TABLE `zespoly`
  ADD PRIMARY KEY (`ID_ZESP`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `pracownicy`
--
ALTER TABLE `pracownicy`
  ADD CONSTRAINT `pracownicy_ibfk_1` FOREIGN KEY (`ETAT`) REFERENCES `etaty` (`NAZWA`),
  ADD CONSTRAINT `pracownicy_ibfk_2` FOREIGN KEY (`ID_SZEFA`) REFERENCES `pracownicy` (`ID_PRAC`),
  ADD CONSTRAINT `pracownicy_ibfk_3` FOREIGN KEY (`ID_ZESP`) REFERENCES `zespoly` (`ID_ZESP`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
