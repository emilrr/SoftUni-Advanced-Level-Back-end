function solve(input){
    var persons = {students: [], trainers: []};
    for(var i = 1; i < input.length; i++){
        var person = JSON.parse(input[i]);
        if(person['role'] === 'student'){
            persons['students'].push(person);
        }
        else{
            persons['trainers'].push(person);
        }
    }

    persons['trainers'].sort(function(x, y){
       if(x['courses'].length === y['courses'].length){
           return x['lecturesPerDay'] - y['lecturesPerDay']
       }

        return x['courses'].length - y['courses'].length
    });

    var sortConditions = input[0].split('^');
    if (sortConditions[0] == 'name') {
        persons['students'].sort(function(x, y) {
            if(x.firstname == y.firstname) {
                return x.lastname.localeCompare(y.lastname);
            }

            return x.firstname.localeCompare(y.firstname);
        });
    }
    else {
        persons['students'].sort(function(x, y) {
            if(x['level'] == y['level']) {
                return x['id'] - y['id'];
            }

            return  x['level'] - y['level'];
        });
    }

    var result = {students: [], trainers: []};

    persons.students.forEach(function(student) {
        var newStudent = {
            id: student.id,
            firstname: student.firstname,
            lastname: student.lastname,
            averageGrade: avg(student.grades),
            certificate: student.certificate
        };
        result.students.push(newStudent);
    });

    persons.trainers.forEach(function(trainer) {
        var newTrainer = {
            id: trainer.id,
            firstname: trainer.firstname,
            lastname: trainer.lastname,
            courses: trainer.courses,
            lecturesPerDay: trainer.lecturesPerDay
        };
        result.trainers.push(newTrainer);
    });

    function avg(arr) {
        var sum = 0;
        arr.forEach(function(el) {
            sum += Number(el);
        });
        return (sum / arr.length).toFixed(2);
    }

    console.log(JSON.stringify(result));
}

var data = [
    'level^courses',
    '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
    '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
    '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
    '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
    '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}'
];

solve(data);