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
