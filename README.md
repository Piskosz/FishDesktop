
# Aplikacja Wędkarska

## Opis projektu
Aplikacja Wędkarska to projekt stworzony w ramach przedmiotu "Technologia aplikacji webowych II". 
Aplikacja umożliwia użytkownikom przeglądanie prognozy pogody, prowadzenie notatek z wypraw wędkarskich, a także dostęp do kalendarza brań oraz szczegółowych informacji o łowiskach komercyjnych i okręgach Polskiego Związku Wędkarskiego (PZW).

## Architektura aplikacji

### Frontend
- **Technologie:** React.js, Axios, JWT, CSS/SCSS.
- **Funkcjonalności:**
  - Strona główna z informacjami o aplikacji i przyciskiem rejestracji/logowania.
  - Tworzenie i przeglądanie notatek z wypraw wędkarskich.
  - Wyświetlanie prognozy pogody na podstawie lokalizacji GPS.
  - Kalendarz brań - prezentacja dni i godzin optymalnych na wędkowanie.
  - System autoryzacji użytkowników za pomocą JWT.

### Backend
- **Technologie:** Spring Boot, MySQL.
- **Funkcjonalności:**
  - Rejestracja użytkownika.
  - Logowanie i generowanie tokenów JWT.
  - Dodawanie oraz usuwanie notatek.

## Przypadki użycia

### Osoba niezalogowana
- **Rejestracja:** Utworzenie konta przez podanie podstawowych danych (imię, e-mail, hasło).
- **Logowanie:** Dostęp do aplikacji po zalogowaniu się.

### Osoba zalogowana
- **Notatki:** Tworzenie, przeglądanie oraz usuwanie notatek z wypraw wędkarskich.
- **Pogoda:** Wyświetlanie prognozy pogody na podstawie lokalizacji GPS.
- **Kalendarz brań:** Przeglądanie dni optymalnych na wędkowanie.
- **Łowiska komercyjne:** Przeglądanie najlepszych łowisk w wybranych województwach.
- **Okręgi PZW:** Wyświetlanie szczegółowych informacji o okręgach PZW w wybranym województwie.
- **Wylogowanie:** Wylogowanie się z aplikacji.

## Diagram przypadków użycia
Aplikacja przewiduje dwa typy użytkowników: Gościa i Użytkownika. 
Gość ma dostęp do funkcji rejestracji, natomiast Użytkownik po zalogowaniu uzyskuje dostęp do zaawansowanych funkcji.

## Baza danych
- **System zarządzania bazą danych:** MySQL.
- **Zakres danych przechowywanych w bazie:**
  - Dane użytkowników (np. imię, e-mail, hasło).
  - Notatki z wypraw wędkarskich.

Baza danych jest zoptymalizowana do podstawowych potrzeb aplikacji i przechowuje tylko niezbędne informacje.

## Wymagania systemowe
- Node.js (dla uruchomienia frontendowej aplikacji React).
- Java 11+ (dla Spring Boot backendu).
- MySQL 8.0 lub nowszy.
- Przeglądarka internetowa z obsługą nowoczesnych standardów (np. Chrome, Firefox).

## Instrukcja uruchomienia

### Backend
1. Skonfiguruj bazę danych MySQL i utwórz odpowiednie tabele.
2. Uruchom aplikację Spring Boot za pomocą polecenia: `mvn spring-boot:run`.

### Frontend
1. Zainstaluj zależności projektu za pomocą: `npm install`.
2. Uruchom aplikację React za pomocą: `npm start`.

## Autor
Hubert Kapuściński 35679
