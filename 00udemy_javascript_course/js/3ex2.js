// 1

function Conv(n) {
    num1 = document.getElementById("celsius_1").innerHTML;
    num2 = document.getElementById("celsius_2").innerHTML;
    num3 = document.getElementById("celsius_3").innerHTML;

    function calculate(c) {
        F = (9 * c / 5) + 32
        return F;
    }

    if (n == 1) {
        return calculate(num1);
    } if (n == 2) {
        return calculate(num2);
    } if (n == 3) {
        return calculate(num3);
    }
}
document.getElementById("fahr_1").innerHTML = Conv(1);


document.getElementById("fahr_2").innerHTML = Conv(2);

document.getElementById("fahr_3").innerHTML = Conv(2);

console.log(document.getElementById("fahr_1").innerHTML);  //we can print by these two method in console
console.log(Conv(1))



// # 2

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
 
document.getElementById("best_students").innerHTML = classification.slice(-3); // it will print the last three vlaue

// # 3
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}

// # 3
document.getElementById("course_title").innerHTML = course.title

// # 4
document.getElementById("main_category").innerHTML = course.categories[0];

// # 5 
document.getElementById("reviews_5_stars").innerHTML = course["5_stars_reviews"]; 

//# 6

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 

var pp = shoppingList.pop();

shoppingList[0] = pp;

shoppingList.push("fdsgsfd",'fsdagsfda')

console.log(shoppingList) 

var employee = {
    'name': 'James Taylor',
    'yearOfBirth': 1948,
    'ID': 'SBJ0001',
    'role': 'IT Analyst'
};
employee.name += 'sgdhfsdfg' // we can also add like this.






var courses = [
    {
        'title': 'Learn code in Python 3',
        'reviews': 6802,
        'students': 130129,
        'categories': ['programming', 'technology']
    },

    {
        'title': 'Learn PHP -  Beginner to Advanced',
        'reviews': 1204,
        'students': 30521,
        'categories': ['web development', 'programming']
    },

    {
        'title': 'Learn Microsoft Excel 2020',
        'reviews': 4209,
        'students': 18560,
        'categories': ['productivity', 'business']
    }
    
];
courses[0].title += "dsfgfdsasd"  // in this arrray and objects also , we can also write this   courses[0]['title'] += "dsfgfdsasd" 
console.log(courses[0].title)




