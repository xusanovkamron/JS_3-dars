/* Date in JS */

let sana = new Date;

sana.setFullYear(2000);

let yil = sana.getFullYear();
let oy =  sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust",
            "sentyabr","oktyabr","noyabr","dekabr"];
let kunlar = ["yakshanba","dushanba","seshanba","chorshanba","payshanba",
            "juma","shanba"];

document.write(yil + "-yil " + kun + "-" + oylar[oy] +
                ". Haftaning " + kunlar[haftaKuni] + " kuni.");






