PROBA TEHNICA: SITE CHEF-IT

Am realizat urmatoarele taskuri:

1. Frontend
- Am folosit Figma pentru a realiza backgroundul si logourile.
- Am creat formulare pentru a introduce informatii in baza de date.

2. Backend
- Am facut un database schema pentru utilizatori si retete.
- Utilizatorii au: username, email, parola.
- Retele au: nume, descriere si rating.
- Generarea token-urilor JWT pentru autentificarea utilizatorilor.

ENDPOINTURI PENTRU RETETE:
- Endpoint pentru obținerea celor mai bine cotate 3 rețete (sortare descrescătoare după rating).
- Endpoint pentru listarea tuturor rețetelor.
- Endpoint pentru adăugarea și ștergerea rețetelor.

ENDPOINTURI PENTRU UTILIZATORI:
- Endpoint pentru login.
- Endpoint pentru register.
- Endpoint pentru a primi un user.

COMPONENTE:

NAVIGATION BAR:
- Un navbar fix cu linkuri către paginile principale (Home, Recipes, Add Recipe, Login/Register/Profile).
- Integrarea unui logo personalizat creat cu Figma.

HOMEPAGE:
- Integrare secțiune „Top rated recipes” care afișează cele mai bine cotate 3 rețete.
- Creare formular de contact pentru utilizatori.
- Design realizat pe baza modelului Figma.

PAGINA DE LOGARE SI DE INREGISTRARE:
- Formulare cu validări de bază.
- Feedback pentru utilizator: afișarea mesajelor de confirmare sau eroare.

PAGINA DE PROFIL:
- Afișarea informațiilor despre utilizatorul autentificat.
- Carduri personalizate pentru numele și detaliile utilizatorului.
- Accesarea paginii de adăugare rețete disponibila doar pentru utilizatorul logat.

PAGINA DE RETETE:
- Searchbar
- Vizualizare a tuturor rețetelor disponibile.
- In backend am creat si posibilitatea de a sterge sau modifica o reteta.

PAGINA DE ADAUGARE O RETETA:
- Formular pentru adăugarea rețetelor: nume si descriere.
- In backend exista posibilitatea de a oferi rating unei retete.

CE AM INVATAT?
- Utilizarea Figma pentru a crea și adapta designuri pentru frontend.
- Configurarea JWT pentru autentificare sigură.
- Organizarea și comunicarea eficientă între frontend și backend folosind REST API.

CUM SE RULEAZA?
- 2 terminale deschise
- unul este deschis in directorul backend si unul este deschis in directorul frontend
- in backend: sa fie deschis mongodb: sudo systemctl start mongod apoi npm run dev
- in frontend: npm run dev