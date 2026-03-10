let times = ["Flamengo", "Palmeiras", "São Paulo"];
times[3] = "Corinthians";
times[0] = "Grêmio";
let time = times.pop();
console.log(times.indexOf("Palmeiras"));
times.reverse();
console.log(times);
