const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesdiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `
        Name: ${buddy.name.first} ${buddy.name.last}
        email: ${buddy.email}
        location:         
        `
        buddiesdiv.appendChild(p);
    }
}