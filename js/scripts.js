var p = document.querySelector("p");

//var regex = new RegExp("\\w+@\\w+\\.\\w{2,4}", "g");
var regex = /\w+@(\w+\.\w{2,4})/g; //poprawny zapis wyrażenia regularnego odszukującego adresy mailowe w tekście
// /\w+@(\w+\.\w{2,4})/g; - dodanie okrągłych nawiasów tworzy grupę (\w+\.\w{2,4}) odpowiedzialną za zbieranie domen

//var search = regex.exec(p.textContent); // ['anna@kowalska.com', 'kowalska.com', index: 28, input: 'Lorem ipsum dolor sit amet, anna@kowalska.com cons…r eaque nemo reiciendis molestiae optio fuga est!', groups: undefined]
//var search2 = regex.exec(p.textContent); // ['tomasz@nowak.pl', 'nowak.pl', index: 175, input: 'Lorem ipsum dolor sit amet, anna@kowalska.com cons…r eaque nemo reiciendis molestiae optio fuga est!', groups: undefined]

var search,
    domains = [];

while (search = regex.exec(p.textContent)) // dopóki rexec zwraca tablicę
{
    domains.push(search[1]); // wrzuć do domeny drugą wartość z tablicy w pierwszym przebiegu ['kowalska.com']
}

// domains = ['kowalska.com', 'nowak.pl']; 
// WAŻNE ABY W regex w wyrażeniu na końcu była flaga g, w przeciwnym razie pętla się zawiesi, bo będzie zwracana cały czas pierwsza wartość