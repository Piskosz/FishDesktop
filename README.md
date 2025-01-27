Aplikacja Wędkarska
Opis Projektu
Aplikacja wędkarska to projekt mający na celu ułatwienie organizacji wypraw wędkarskich. Użytkownicy mogą rejestrować swoje konto, zarządzać notatkami dotyczącymi wędkowania, sprawdzać prognozę pogody na podstawie GPS oraz korzystać z kalendarza brań. Dodatkowo, aplikacja oferuje możliwość przeglądania łowisk komercyjnych i okręgów PZW w wybranych województwach.

Architektura Aplikacji
Frontend: React
Główne widoki użytkownika:

Strona główna: Informacje o aplikacji i opcje rejestracji/logowania.
Notatki: Tworzenie i zarządzanie zapiskami z wypraw wędkarskich.
Pogoda GPS: Wyświetlanie prognozy pogody dla lokalizacji użytkownika.
Kalendarz brań: Informacje o najlepszych dniach i godzinach do wędkowania.
System autoryzacji:

Rejestracja i logowanie użytkownika za pomocą JWT.
Ochrona funkcji aplikacji przed dostępem osób niezalogowanych.
Technologie:

React.js: Tworzenie interfejsu użytkownika.
Axios: Komunikacja z API backendu.
JWT: Mechanizm autoryzacji.
CSS/SCSS: Stylowanie aplikacji.
Backend: Spring Boot
Funkcjonalności:

Rejestracja użytkownika.
Logowanie i generowanie tokenu JWT.
Zarządzanie notatkami (dodawanie/usuwanie).
Technologie:

Spring Boot: Tworzenie backendowego API REST.
MySQL: Przechowywanie danych użytkowników, notatek, lokalizacji GPS, prognoz pogody i kalendarza brań.
Przypadki użycia
1. Dla osoby niezalogowanej:
Rejestracja: Utworzenie konta poprzez wypełnienie formularza.
Logowanie: Dostęp do aplikacji dla osób posiadających konto.
2. Dla osoby zalogowanej:
Tworzenie notatek: Zapisywanie szczegółów wypraw wędkarskich.
Wyświetlanie pogody: Prognoza na podstawie lokalizacji GPS.
Kalendarz brań: Informacje o optymalnych dniach na wędkowanie.
Zarządzanie łowiskami:
Łowiska komercyjne: Informacje o najlepszych łowiskach w wybranym województwie.
Okręgi PZW: Szczegóły okręgów PZW i ich regulaminy.
Wylogowanie: Bezpieczne opuszczenie aplikacji.
Diagram Przypadków Użycia
Diagram przedstawia interakcje pomiędzy aktorami (Gościem i Użytkownikiem) a funkcjami aplikacji, w tym panelu użytkownika, notatnika, prognozy pogody, kalendarza brań i map łowisk.

Baza Danych
Technologia
MySQL: System relacyjnych baz danych wykorzystywany do przechowywania danych użytkowników i notatek.
Struktura bazy danych
Tabele:
users: Przechowuje dane o użytkownikach (np. imię, e-mail, hasło).
notes: Przechowuje notatki dotyczące wypraw wędkarskich.
Informacje dodatkowe
Baza danych została zaprojektowana z myślą o prostocie i przechowywaniu wyłącznie niezbędnych informacji, aby zapewnić wydajność i łatwość obsługi.

Wymagania systemowe
Frontend:

Node.js (v16 lub wyższy)
Menedżer pakietów npm/yarn
Backend:

Java 17
Spring Boot
MySQL 8.0
Instalacja
Backend
Skonfiguruj bazę danych MySQL z tabelami users i notes.
Skopiuj plik application.properties i uzupełnij dane dostępowe do bazy danych.
Uruchom aplikację backendową przy użyciu IDE lub komendy:
bash
Kopiuj
Edytuj
./mvnw spring-boot:run  
Frontend
Przejdź do katalogu aplikacji frontendowej.
Zainstaluj zależności:
bash
Kopiuj
Edytuj
npm install  
Uruchom serwer deweloperski:
bash
Kopiuj
Edytuj
npm start  
