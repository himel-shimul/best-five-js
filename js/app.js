document.getElementById('messi').addEventListener('click', function () {
    collectPlayers('messi-txt');
    document.getElementById("messi").disabled = true;
    document.getElementById("messi").style.backgroundColor = "grey";

})
document.getElementById('neymar').addEventListener('click', function () {
    collectPlayers('neymar-txt');
    document.getElementById("neymar").disabled = true;
    document.getElementById("neymar").style.backgroundColor = "grey";

})
document.getElementById('mbappe').addEventListener('click', function () {
    collectPlayers('mbappe-txt');
    document.getElementById("mbappe").disabled = true;
    document.getElementById("mbappe").style.backgroundColor = "grey";
})
document.getElementById('vitor').addEventListener('click', function () {
    collectPlayers('vitor-txt');
    document.getElementById("vitor").disabled = true;
    document.getElementById("vitor").style.backgroundColor = "grey";

})
document.getElementById('ramos').addEventListener('click', function () {
    collectPlayers('ramos-txt');
    document.getElementById("ramos").disabled = true;
    document.getElementById("ramos").style.backgroundColor = "grey";

})
document.getElementById('renato').addEventListener('click', function () {
    collectPlayers('renato-txt');
    document.getElementById("renato").disabled = true;
    document.getElementById("renato").style.backgroundColor = "grey";


})
document.getElementById('suarez').addEventListener('click', function () {
    collectPlayers('suarez-txt');
    document.getElementById("suarez").disabled = true;
    document.getElementById("suarez").style.backgroundColor = "grey";


})
document.getElementById('bell').addEventListener('click', function () {
    collectPlayers('bell-txt');
    document.getElementById("bell").disabled = true;
    document.getElementById("bell").style.backgroundColor = "grey";


})
document.getElementById('muller').addEventListener('click', function () {
    collectPlayers('muller-txt');
    document.getElementById("muller").disabled = true;
    document.getElementById("muller").style.backgroundColor = "grey";


})

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerMoneyString = document.getElementById('per-player').value;
    const perPlayerMoney = parseInt(perPlayerMoneyString);

    const totalPlayers = document.getElementById('total-players').children.length;

    const totalPlayersMoney = perPlayerMoney * totalPlayers;
    document.getElementById('player-money').innerText = totalPlayersMoney;



})


