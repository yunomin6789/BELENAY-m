const messages = [
    "Seni Seviyorum", "Je t'aime", "Te quiero", "Ich liebe dich", "Ti amo", "Eu te amo", "Ik hou van jou", "Saranghae", "Kimi wo ai shiteru", "Mahal kita", "Saya cinta kamu", "Jeg elsker dig", "Je od tebe", "Szeretlek", "Rwy'n dy garu di", "Tôi yêu bạn", "Mi amas vin", "Volim te", "Te iubesc", "Jesteśmy zakochani", "Ana behibek", "Tê li ser te heye", "Je t’aime", "Luv tu", "Kocham cię", "Saya sayang kamu", "Tôi yêu bạn", "Mi amas vin", "Rwy'n dy garu di", "Kocham cię", "Aşkım", "Yo te quiero", "J'agadça o ti", "Ana behibek", "Tôi yêu bạn", "Té je u", "Ndinokuda", "Mwen renmen ou", "Mi amas vin", "Saranghae", "Je t'aime", "Mahal kita", "Ich liebe dich", "Ndinokuda", "Tôi yêu bạn", "Mahal kita", "Szeretlek", "Te quiero", "Lubi na ko", "Saranghae", "Mahal kita", "Kocham cię", "Mwen renmen ou", "Aşkım", "Yo te quiero", "Mi amas vin", "Aşkım", "Tôi yêu bạn"
];

const heart = document.getElementById('heart');
const message = document.getElementById('message');

heart.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
});
