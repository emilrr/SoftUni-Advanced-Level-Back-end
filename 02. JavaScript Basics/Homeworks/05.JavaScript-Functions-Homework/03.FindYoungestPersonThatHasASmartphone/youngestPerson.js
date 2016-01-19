function Person(firstName, lastName, age, smartPhone){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = Number(age);
    this.smartPhone = smartPhone;
}

function findYoungestPerson(persons) {
    var youngestPerson;
    var minAge = Number.MAX_VALUE;

    for (var i in persons) {
        if(persons[i].age <= minAge && persons[i].hasSmartphone === true){
            minAge = persons[i].age;
            youngestPerson = persons[i].firstname + ' ' + persons[i].lastname;
        }
    }

    console.log('The youngest person is ' + youngestPerson);
}


var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }]


findYoungestPerson(people);
