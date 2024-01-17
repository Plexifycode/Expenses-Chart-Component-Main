const mon = JSON.parse('{"day": "mon" , "amount": 150.45}');
const tue = JSON.parse('{"day": "tue" , "amount": 34.91}');
const wed = JSON.parse('{"day": "wed" , "amount": 52.36}');
const thu = JSON.parse('{"day": "thu" , "amount": 31.07}');
const fri = JSON.parse('{"day": "fri" ,  "amount": 23.39}');
const sat = JSON.parse('{"day": "sat" , "amount": 43.28}');
const sun = JSON.parse('{"day": "sun","amount": 87.48}');

const dayBlockMon = document.querySelectorAll(".mon");
  const dayBlockTue = document.querySelectorAll(".tue");
  const dayBlockWed = document.querySelectorAll(".wed");
  const dayBlockThu = document.querySelectorAll(".thu");
  const dayBlockFri = document.querySelectorAll(".fri");
  const dayBlockSat = document.querySelectorAll(".sat");
  const dayBlockSun = document.querySelectorAll(".sun");
  
const daysArr = [ mon,tue,wed,thu,fri,sat,sun];
let maxDay = daysArr[0];

console.log(daysArr)

daysArr.forEach((day) => {

  if (day.day === "mon") {
    dayBlockMon.forEach((block) => {
      block.style.height = mon.amount + "px";
    })
    
  } else if (day.day === "tue") {
    dayBlockTue.forEach((block) => {
      block.style.height = tue.amount + "px";
    })
  } else if (day.day === "wed") {
    dayBlockWed.forEach((block) => {
      block.style.height = wed.amount + "px";
    })
  } else if (day.day === "thu") {
    dayBlockThu.forEach((block) => {
      block.style.height = thu.amount + "px";
    })
  } else if (day.day === "fri") {
    dayBlockFri.forEach((block) => {
      block.style.height = fri.amount + "px";
    })
  } else if (day.day === "sat") {
    dayBlockSat.forEach((block) => {
      block.style.height = sat.amount + "px";
    })
  } else if (day.day === "sun") {
    dayBlockSun.forEach((block) => {
      block.style.height = sun.amount + "px";
    })
  }

  if (day.amount > maxDay.amount) {
    maxDay = day
  }
  
  
})
console.log(maxDay)

if (maxDay.day === "mon") {
  dayBlockMon.forEach((block) => {
    block.style.backgroundColor = "hsl(186, 34%, 60%)";
  });
} else if (maxDay.day === "tue") {
  dayBlockTue.forEach((block) => {
    block.style.backgroundColor = "hsl(186, 34%, 60%)";
  });
} else if (maxDay.day === "wed") {
  dayBlockWed.forEach((block) => {
    block.style.backgroundColor = "hsl(186, 34%, 60%)";
  });
} else if (maxDay.day === "thu") {
  dayBlockThu.forEach((block) => {
    block.style.backgroundColor = "hsl(186, 34%, 60%)";
  });
} else if (maxDay.day === "fri") {
  dayBlockFri.forEach((block) => {
    block.style.backgroundColor = "hsl(186, 34%, 60%)";
  });
} else if (maxDay.day === "sat") {
  dayBlockSat.forEach((block) => {
    block.style.backgroundColor = "hsl(186, 34%, 60%)";
  });
} else if (maxDay.day === "sun") {
  dayBlockSun.forEach((block) => {
    block.style.backgroundColor = "hsl(186, 34%, 60%)";
  });
}





/*
console.log(dayBlockMon)
daysArr.forEach((day) =>  {

  const dayValueObj = Object.values(day);
  console.log(dayValueObj)
  const dayName = dayValueObj[0];
  const dayValue = dayValueObj[1];
  console.log(dayValue, dayName);
  if (dayName === "mon") {
    console.log("mon")
  } else if (dayName === "tue") {
    dayBlockTue.style.height = dayValue + "px";
  } else if (dayName === "wed") {
    dayBlockWed.style.height = dayValue + "px";
  } else if (dayName === "thu") {
    dayBlockThu.style.height = dayValue + "px";
  } else if (dayName === "fri") {
    dayBlockFri.style.height = dayValue + "px";
  } else if (dayName === "sat") {
    dayBlockSat.style.height = dayValue + "px";
  } else if (dayName === "sun") {
    dayBlockSun.style.height = dayValue + "px";
  }
})
*/
// klasa najwyższy słupek
// funckja zmieniająca wysokość
// funkcja zmniejająca balans
