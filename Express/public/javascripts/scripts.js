console.log("Express is working");

let jsonObj = {
    'name': {
        'firstname': 'Nancy',
        'lastname': 'Benny'
    },
    'email': "OhhNancy@gmail.com",
    'age': 35,
    'location': {
        'country': 'New Zealand',
        'city': 'Auckland',
        'homeaddress': "40 Pandora Avenue, Selwyn Heights"
    },
    'likes': ['Swimming', 'Sleeping']
};

console.log(typeof jsonObj);
console.log(jsonObj);

let jsObj = {
    name: {
        firstname: 'Nancy',
        lastname: 'Benny'
    },
    email: "OhhNancy@gmail.com",
    age: 35,
    location: {
        country: 'New Zealand',
        city: 'Auckland',
        homeaddress: "40 Pandora Avenue, Selwyn Heights"
    },
    likes: ['Swimming', 'Sleeping']
}

console.log(typeof jsObj);
console.log(jsObj);

var serializedObj = JSON.stringify(jsObj);
console.log(typeof serializedObj);
console.log(serializedObj);

let objAgain = JSON.parse(serializedObj);
console.log(typeof objAgain);
console.log(objAgain);