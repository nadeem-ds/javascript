//create an appln with following rules
//admin - get access full access
//subadmin- get access to create delete cource
// testprep - get access the create delete tests
// user - gets acces to consume content

var user = "subadmin";
    switch (user) {
        case "admin":
            console.log("you get full access")
            break;
        case "subadmin":
            console.log("you get access and create course")
            break;
        case "testprep":
            console.log("get acess and create deleter course")
            break;
        case "user":
            console.log("get access the consume the content")
            break;
        default:
            console.log("trail user")
            
}
