xDraw
Projekt na przedmiot:
Projektowanie dynamicznych stron www

Zadanie rysownik:

rejestracja
	login
	hasło
	mail
baza danych
	login
	hasło
	mail
	poszczególne kompozycję
		przechowujemy
			krztałty (linie itp.) i ich pozycję i inne informacje
			obrazki i ich pozycję
okno do rysowania
	rysowanie
		krztałtu
			linia
			prostokąt
			koło
	przesuwanie, skalowanie, odbicie, obrót 90st
		krztałtu
		obrazka
	usuwanie
		krztałtu
		obrazka
interfejs
	ekran logowania
		login
		hasło
	ekran po zalogowaniu
		wyloguj
		lista kompozycji (obrazków) do wyboru
		utwórz nową kompozycję
		usuń starą kompozycję
	toolbar z boku po wejściu w kompozycję (pojedyńcze ikony rozwijane po nakierowaniu/kliknięciu)
		wybór krztałtu
		wybór koloru
		wybór lini
		gumka
		cofnij
		ponów
		zapis kompozycji do bazy
		eksport obrazka
		import obrazka
		zmień kompozycję
		wyloguj
		
<p>INSTALACJA</p>
<ol>
<li>Zainstaluj XAMPP</li>
<li>Uruchom Apache oraz MySQL</li>
<li>Skopiuj pliki i foldery z katalogu xDraw/project do&nbsp;xampp\htdocs</li>
<li>Skonfiguruj połączenie z bazą danych w pliku&nbsp;xampp\htdocs\php\config.php</li>
<li>Za pomocą phpmyadmin zaimportuj schemat bazy danych z pliku&nbsp;xampp\htdocs\sql\xdraw.sql</li>
<li>Uruchom stronę <a href="http://127.0.0.1">http://127.0.0.1</a></li>
</ol>
		
		
