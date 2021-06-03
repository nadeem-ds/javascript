const socialMedia = [
    "Youtube",
    "instagram",
    "facebook",
    "whatsapp",
    "linkedin"
];

//use of for of loops
// it maijaroluy used with array

// for (const n of socialMedia){
//     console.log(n);
// }

//use of for in
//majorily used with object

const mysocialMedia = {
    yt : "Youtube",
    fb : "facebook",
    insta : "instagram",
    whts : "whatsapp",

}

for (const n in mysocialMedia){
    //console.log(n);     //this is key value
    //print the full value
    //console.log(mysocialMedia[n]);
    console.log(`key is  ${n} : and value is: ${mysocialMedia[n]}`);
} 