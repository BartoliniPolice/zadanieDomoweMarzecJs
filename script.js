const topic = "**Zmienne i typy**";
console.log(topic);
const topicA =
  "A. Zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych";
console.log(topicA);
const boolean = true;
console.log(typeof boolean, ":", boolean);
const number = 180;
console.log(typeof number + ": " + number);
const text = "Ponizęj moje wyniki!";
console.log(typeof text + ": " + text);
const topicB =
  "B. Użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.";
console.log(topicB);
const topicB1 = ' 2 + "2" ';
const a = 2 + "2";
console.log(topicB1 + "wynik to " + a);
const topicB2 = " 2 + 2 ";
const b = 2 + 2;
console.log(topicB2 + "wynik to " + b);
const topicB3 = ' 2 * "2" ';
const c = 2 * "2";
console.log(topicB3 + "wynik to " + c);
const topicB4 = " 2 * 2 ";
const d = 2 * 2;
console.log(topicB4 + "wynik to " + d);
const topicB5 = " 1 == true ";
const topicB5Odp =
  "Liczba 0 zawsze jest zmieniana na wartosc FALSE, poniewaz znajduje sie na liscie falszywych wartosci w doborowym towarzystwie null i spolki. Liczba 1 oczywiscie jest spoko i nie jest na liscie wiec ma TRUE ";
console.log(topicB5 + " zwroci na wynik: ", 1 == true);
const topicB6 = " 0 == false ";
const aca = 0 == false;
console.log(topicB6 + " zwroci wynik: " + !aca, typeof aca);
console.log(topicB5Odp);
const topicB7 = " 0 == null";
const empty = 0 == null;
console.log(topicB7 + " zwroci wynik:" + empty, typeof empty);
const topicB8 = " null == undefined ";
const acac = null == undefined;
console.log(topicB8 + " zwroci wynik: " + acac, typeof acac);
const topicBDodatkowaOdpowiedz =
  ' "=" - przypisanie wartosci, "==" porownanie wartosci, "===" porownianie wartosci i typow ';
console.log("Odpowiedz na dodatkowe pytanie: ", topicBDodatkowaOdpowiedz);
const topicC =
  "C. Napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli.";
console.log(topicC);
const topicC1 =
  " - Typ prosty - przechowuje tylko proste dane jak nr, stringi, Boolean, null.";
const topicC2 = " Np.: const number = 10 ";
const topicC3 =
  " - Typ referencyjny - twartosci tych danych przypisane do zmiennych.";
const topicC4 = " Np.: const x = 3,";
console.log(topicC1 + topicC2);
console.log(topicC3 + topicC4);
const topicD =
  "D. Spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:";
console.log(topicD);
const topicD1 = " - Przekonwertuj na typ Boolean: let val = 0: ";
let val = 0;
let val1 = Boolean(val);
console.log(topicD1, val1);
const topicD2 = ' - Przekonwertuj na typ Number: let num = "2137": ';
let num = "2137";
console.log(topicD2, Number(num));
const topicD3 = " - Przekonwertuj na String: let str = 007: ";
let str = 007;
console.log(topicD3, str.toString());
const topicD4 = " - Przekonwertuj na Boolean: let und = undefined: ";
let und = undefined;
console.log(topicD4, Boolean(und));
const topicE =
  "E. Stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli.";
console.log(topicE);
let tabForTopicE = new Array();
tabForTopicE.push("zenek", "wladek", "janusz");
console.log(
  " - Ilosc elementów w tabeli wynosi: " +
    tabForTopicE.length +
    " , a to jego elementy: " +
    tabForTopicE
);
const topicF =
  "F. Stwórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli.";
console.log(topicF);
const objForTopicF = new Object();
objForTopicF.name = "Bartek";
objForTopicF.lastname = "Krysztofik";
objForTopicF.age = 42;
console.log(objForTopicF);
const topicG =
  "G. Opisz krótko czym dokładnie jest typ NaN. ODP: nie liczba, to cudo wroci gdy powinno wrocic number ale ktos lub cos sie skiepscilo.";
console.log(topicG);
const topicH = "H. Znajdź w sieci informacje o typie Symbol i opisz go krótko.";
console.log(topicH);
const topicH1 =
  "ODP: Typ danych symbol to prymitywny typ danych, który zawsze zawiera unikalną wartość. Nie wiemy ile ona wynosi, wiemy jedynie to, że jest unikalna, niepowtarzalna.";
console.log(topicH1);
const topic2 = "**2. FUNKCJE & WARUNKI**";
console.log(topic2);

const topic2A =
  "A. Napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb";
console.log(topic2A);
let sum = 0;
let sum1 = [];
for (i = sum; i < 3; i++) {
  sum1.push(i);
  sum += sum1[i];
}
console.log(" - Suma trzech liczb z fn wynosi: ", sum);
const topic2B =
  "B. Napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta.Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik";
console.log(topic2B);
let base = 10;
let height = 10;
function triangleArea(base, height) {
  return (base / 2) * height;
}
let result = triangleArea(base, height);
console.log(" - Pole trójkąta wynosi " + result);
const topic2C =
  "C. Napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację";
console.log(topic2C);
const myAge = 42;
const adulthood = 18;
function pensioner(myAge) {
  return myAge - adulthood;
}
let result1 = pensioner(myAge);
console.log(
  " - Dawno, dawno temu.... , a dokładnie " +
    result1 +
    " lata temu miałem 18 lat"
);
const topic2D =
  'D. Napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości';
console.log(topic2D);
const tabelka = [1, 2, 3, 4, 5, 6];
const a1 = tabelka.length;
const pozycjaWTabeli = tabelka.at(3);
function writeText(a, pozycjaWTabeli) {
  console.log(
    ` -  Przekazana tablica ma ${a1} elementów a elementem numer 3 jest liczba ${pozycjaWTabeli}`
  );
}
writeText(a, pozycjaWTabeli);
const topic2E =
  'E. Napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.';
console.log(topic2E);
let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};
function writeText(testPerson) {
  console.log(
    ` - Pan/i ${testPerson.name} ${testPerson.surname} ma ${testPerson.age} lat oraz ${testPerson.height} cm wzrostu`
  );
}
writeText(testPerson);
let test1 = {
  name: "Bart",
  surname: "Krysztofik",
  age: 42,
  height: 181,
};
writeText(test1);
const topic2F =
  "F. Napisz funkcję, która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.";
console.log(topic2F);
let testPerson1 = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};
console.log(" - Obiekt przed zmiana: ", testPerson1);
testPerson1.gender = "male";
testPerson1.age = 42;
console.log(" - Obiekt po zmianie: ", testPerson1);
const topic2G =
  "G. Napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:";
const topic2G1 =
  ' - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"';
const topic2G2 =
  ' - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"';
const topic2G3 =
  ' - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"';
console.log(topic2G);
console.log(topic2G1);
console.log(topic2G2);
console.log(topic2G3);
let put;
function FizzzzzBuzzzz(put) {
  let data = [];
  if (typeof put === "number") {
    data.push(put);
  } else {
    console.log("Proszę wpisać poprawnie liczbę");
  }
  if (data % 3 == 0 && data % 5 == 0) {
    console.log("FizzBuzz");
  } else if (data % 5 == 0) {
    console.log("Fizz");
  } else if (data % 3 == 0) {
    console.log("Buuuzzz");
  } else {
    console.log("Twoja liczba nie jest podzielna przez 3 i 5");
  }
  return data;
}
FizzzzzBuzzzz(30);
const topic2H =
  "H. Napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego";
console.log(topic2H);
let number1;
function parzysta(number1) {
  console.log(
    " - Wynik: ",
    number1,
    number1 % 2 == 0 ? "parzysta" : "nieparzysta"
  );
  return;
}
parzysta(5);
const topic2I = "I. Napisz funkcję która wylosuje i zwróci liczbę od 1 do 10";
console.log(topic2I);
const min = 1;
const max = 10;
const result2 = Math.floor(Math.random() * (max - min + 1) + min);
console.log(result2);
const topic2J =
  "J. Napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu";
console.log(topic2J);
let min1 = 2;
let max1 = 22;
const result3 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
console.log(result3);
//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.
const topic3 = "**Funkcje & pętle**";
console.log(topic3);
const topic3A = "A. Napisz pętlę która odliczy od 1 do 9";
console.log(topic3A);
for (i = 1; i <= 9; i++) {
  console.log(i);
}
const topic3B = "B. Napisz pętlę która odliczy od 9 do 1";
console.log(topic3B);
for (i = 9; i >= 1; i--) {
  console.log(i);
}
const topic3C = "C. Napisz pętlę która odliczy od 5 do 15";
console.log(topic3C);
for (i = 5; i <= 15; i++) {
  console.log(i);
}
const topic3D = "D. Napisz pętlę która odliczy od 0 do -10";
console.log(topic3D);
for (i = 0; i >= -10; i--) {
  console.log(i);
}
const topic3E = "E. Napisz pętlę która odliczy od 1 do 20, iteracja co 2";
console.log(topic3E);
for (i = 1; i <= 20; i += 2) {
  console.log(i);
}
const topic3F = "F. Napisz pętlę która odliczy od 10 do -10, iteracja co 4";
console.log(topic3F);
for (i = 10; i >= -10; i -= 4) {
  console.log(i);
}
const topic3G =
  "G. Napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...";
console.log(topic3G);
for (i = 1; i <= 100; i *= 2) {
  console.log(i);
}
const topic3H =
  "H. Napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości";
console.log(topic3H);
for (i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
const topic3I =
  "I. Napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfra jest parzysta czy nie, możesz użyć operatora trójargumentowego";
console.log(topic3I);
for (i = 1; i <= 10; i++) {
  console.log(i, i % 2 == 0 ? "parzysta" : "nieparzysta");
}
const topic3J =
  "J. Napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości";
console.log(topic3J);
const a2 = 8;
console.log(" - Wybrana liczba to " + a2 + " No to odliczamy...");
function licznik() {
  for (i = 1; i <= a2; i++) {
    console.log(i);
  }
  return;
}
licznik(a2);
const topic3K =
  "K. Napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)";
console.log(topic3K);
const a3 = 15;
console.log(" - Bedziemy odliczać o " + a3);
function odliczanie() {
  for (i = a3; i <= 50; i += a3) {
    console.log(i);
  }
  return;
}
odliczanie(2);
const topic3L =
  "L. Napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób";
console.log(topic3L);
const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];
function siema() {
  for (let i = 0; i < arrNames.length; i++) {
    console.log(" - Witaj " + arrNames[i]);
  }
  return;
}
siema();
const topic3LL =
  'Ł. Napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.';
console.log(topic3LL);
const arrObjectsZadanie3LL = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];
console.log("Tablica ma: " + arrObjectsZadanie3LL.length + " elementy");
function writeTextDoZadania() {
  for (i = 0; i < arrObjectsZadanie3LL.length; i++) {
    console.log(
      `Przed Tobą stoi ${arrObjectsZadanie3LL[i].color} ${arrObjectsZadanie3LL[i].brand} `
    );
  }
  return;
}
writeTextDoZadania();
const topic3M =
  "M. Napisz funkcję która przyjmie tablice arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy";
console.log(topic3M);
const arrNumbers3M = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr3M = arrNumbers3M.filter(function (item) {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(arr3M);
const topic3N = "N. Napisz funkcję, która przeiteruje po tablicy arrTypes i:";
const topic3N1 =
  " - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther";
const topic3N2 =
  " - za pomocą push umieści elementy o typie number w tablicy arrNumbers";
const topic3N3 = " - za pomocą push umieści numery parzyste w tablicy arrEven";
const topic3N4 = " - na końcu zwróci obiekt z tymi trzema tablicami";
console.log(topic3N);
console.log(topic3N1);
console.log(topic3N2);
console.log(topic3N3);
console.log(topic3N4);
const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];
console.log(" - Tablica arrTypes", arrTypes);
const arrNumbers = [];
const arrOther = [];
const arrEven = [];
let megaObiekt = {};
function tylkoLiczby() {
  for (i = 0; i < arrTypes.length; i++) {
    typeof arrTypes[i];
    if (typeof arrTypes[i] !== "number" || arrTypes[i] !== arrTypes[i]) {
      arrOther.push(arrTypes[i]);
    } else {
      arrNumbers.push(arrTypes[i]);
    }
  }
  if (arrNumbers.length != 0) {
    for (i = 0; i < arrNumbers.length; i++) {
      if (arrNumbers[i] % 2 == 0) {
        arrEven.push(arrNumbers[i]);
      }
    }
  }
  megaObiekt = {
    arrEven,
    arrNumbers,
    arrOther,
  };
  return arrNumbers;
}
tylkoLiczby();
console.log(
  " - Rozwiazanie powyzszego zadania z podzialem na tabele i obiekt:"
);
console.log(" - arrNumbers", arrNumbers);
console.log(" - arrEven", arrEven);
console.log(" - arrOther", arrOther);
console.log(" - megaObiekt", megaObiekt);
const topicMetody = "**Metody**";
console.log(topicMetody);
const topicMetodyA =
  "A. Za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names";
console.log(topicMetodyA);
const namesMetodyA = ["Seba", "Kari", "Mati", "Andżi"];
const powitajka = namesMetodyA.map((el) => "siema " + el);
console.log(powitajka);
const topicMetodyB =
  "B. Za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami";
console.log(topicMetodyB);
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray10 = array10.filter(function (item) {
  if (item % 2 === 0) {
    return item;
  }
});
console.log(newArray10);
const topicMetodyC =
  "C. Użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami";
console.log(topicMetodyC);
const peopleMetodyC = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];
let onlyFemale = peopleMetodyC.filter(function (peopleMetodyC) {
  return peopleMetodyC.gender === "female";
});
console.log(onlyFemale);
const topicMetodyD =
  "D. Użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.";
console.log(topicMetodyD);
const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";
const shopping1 = shopping.toLowerCase();
const newShopping = shopping1.split(" ");
const finalListShopping = newShopping.sort();
console.log(finalListShopping);

const topicMetodyE =
  'E. Połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV...';
console.log(topicMetodyE);
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const revAlphabet = alphabet;
revAlphabet.reverse();
const reverseAlphabet = revAlphabet.join("");
console.log("Prosze bardzo: " + reverseAlphabet);
