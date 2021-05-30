var user = {
    firstName : "Nadeem",
    lastName : "Anwar",
    Role : "Developer",
    Age : 22,
    facebooksignIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },

    getCourseCount : function(){
        return ` ${this.firstName} is enrolled in  total ${this.courseList.length} .`
    },

    totalInfo : function(){
        return `${this.firstName} ${this.lastName} whose role is ${this.Role}, Age is ${this.Age}.
        He loginned in facebook ${this.facebooksignIn} , ${this.getCourseCount()}`
    },

};

//var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("Python");
user.buyCourse("Java");
console.log(user.getCourseCount());
console.log(user.totalInfo());