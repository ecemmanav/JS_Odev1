var userName = prompt("lütfen isim giriniz: ");

if (userName != null) {
    document.getElementById("myName").innerHTML = `Merhaba, ${userName}! Hoşgeldin!`;    
}

let currentDate = new Date().toDateString();{
document.getElementById("myClock").innerHTML = `${currentDate}`;    
}
