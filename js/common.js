function collectPlayers(name) {
    const nameText = document.getElementById(name).innerText;
    const li = document.createElement('li');
    li.innerText = nameText;
    const players = document.querySelector('#players ul');
    if (document.querySelector('#players ul').children.length < 5) {
        players.appendChild(li);
    }
    else {
        alert('You have already added five players');
    }

    document.getElementById('count').innerText = players.children.length;

    return players;
}