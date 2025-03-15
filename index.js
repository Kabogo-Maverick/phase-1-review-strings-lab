const currentUser = 'Double Dragon';
console.log(currentUser)

const welcomeMessage = `Welcome to Kiambu, ${currentUser}`;
console.log(welcomeMessage)

console.log(typeof currentUser)

console.log(currentUser.length)

const bigwelcomemessage = welcomeMessage.toUpperCase()
console.log(bigwelcomemessage)

console.log(currentUser.slice(7))

console.log(currentUser.slice(0, 6))

const shortgreetings = `welcome, ${currentUser.slice(0, 6)} to Nairobi`
console.log(shortgreetings)
