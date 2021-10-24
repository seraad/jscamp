console.log("Merhaba Kodlama.io")
//javascript önceden görünüm için kullanılıyordu ama şimdi durum farklı. Biz şu an frontend ile uğraşıcaz.
//javascript ile dinamizmi sağlıyoruz.
//JS type safe değildir

//var dolarBugun = 9.30
//console.log(dolarDun) //undefined
//var dolarDun = 9.20 

let dolarBugun = 9.30
let dolarDun = 9.20


{
    let dolarDun = 9.10 //değişkenler tanımlandıkları kapsamda geçerlidir.ondan dolayı sonuç 9.20 çıktı
    //fakat var ile yazsaydık burayı sonuç 9.10 çıkardı. var global bir değişken olarak düşünebiliriz. 
}

console.log(dolarDun)

const euroDun = 11.2 //const = sabit
//euroDun = 11 - bu olmaz

console.log(euroDun)

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")


{/* <ul>
    <li>Konut Kredisi </li>
    <li>Emlak Konut Kredisi </li>
    <li>Kamu Konut Kredisi </li>
    </ul> */}



console.log(konutKredileri)