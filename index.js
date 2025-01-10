let obory = ["ANDRAGOGIKA A PERSONÁLNÍ ŘÍZENÍ", "ANGLISTIKA - AMERIKANISTIKA", "ARCHEOLOGIE PRAVĚKU A STŘEDOVĚKU", "ARCHIVNICTVÍ A POMOCNÉ VĚDY HISTORICKÉ", "Asijská studia: JAPANOLOGIE", "Asijská studia: KOREANISTIKA", "ČESKÝ JAZYK A LITERATURA", "DĚJINY UMĚNÍ", "DIVADELNÍ VĚDA", "ESTETIKA", "ETNOLOGIE A KULTURNÍ ANTROPOLOGIE", "FILMOVÁ STUDIA", "FILOZOFIE", "FONETIKA", "FRANCOUZSKÁ FILOLOGIE", "Germánská a severoevropská studia: GERMANISTIKA", "Germánská a severoevropská studia: SKANDINAVISTIKA (modul: Švédština)", "HISPANISTIKA", "HISTORIE", "HUDEBNÍ VĚDA", "INFORMAČNÍ STUDIA A KNIHOVNICTVÍ", "ITALIANISTIKA", "JAZYKY A KOMUNIKACE NESLYŠÍCÍCH", "KLASICKÁ ARCHEOLOGIE", "LOGIKA", "Mezikulturní komunikace: PŘEKLAD A TLUMOČENÍ: ČEŠTINA - ANGLIČTINA", "Mezikulturní komunikace: PŘEKLAD A TLUMOČENÍ: ČEŠTINA - FRANCOUZŠTINA", "Mezikulturní komunikace: PŘEKLAD A TLUMOČENÍ: ČEŠTINA - NĚMČINA", "Mezikulturní komunikace: PŘEKLAD A TLUMOČENÍ: ČEŠTINA - RUŠTINA", "Mezikulturní komunikace: PŘEKLAD A TLUMOČENÍ: ČEŠTINA - ŠPANĚLŠTINA", "OBECNÁ LINGVISTIKA", "PEDAGOGIKA", "POLITOLOGIE", "RELIGIONISTIKA", "RUSKÝ JAZYK A LITERATURA", "ŘECKÁ A LATINSKÁ STUDIA", "Řecká a latinská studia: NOVOŘECKÝ JAZYK A LITERATURA", "SINOLOGIE", "SOCIOLOGIE", "Středoevropská studia: MAĎARSKÁ STUDIA", "Středoevropská studia: POLONISTIKA", "Středoevropská studia: ROMISTIKA", "VÝCHODOEVROPSKÁ STUDIA"]
;
  
  let tazeneObory = [];
  
  function vyberObor() {
    if (obory.length === 0) {
      obory = tazeneObory;
    }
  
    let vybranyIndex = Math.floor(Math.random() * obory.length);
  
    let vybranyObor = obory[vybranyIndex];
  
    obory.splice(vybranyIndex, 1);
  
    tazeneObory.push(" " + vybranyObor);
  
    let vyherce = document.querySelector("#obor");
    vyherce.textContent = vybranyObor;
  
    let seznam = document.querySelector("#seznam");
    seznam.textContent = tazeneObory;
  }
  
