const person = {
    namePerson: 'Paula',
    age: 34,
    city: 'São Paulo',
    yearsLive: 6,
    profession: 'singer'
}

for (let i in person) {
    document.getElementById(i).innerHTML = person[i]
}