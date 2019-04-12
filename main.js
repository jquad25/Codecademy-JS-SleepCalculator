/* This JavaScript program allows the user to calculate their sleep debt based off of their ideal sleep hours and the actual amount of hours they are sleeping*/

const getSleepHours = (day) => {
  switch(day) {
    case 'monday': return 6;
      break;
    case 'tuesday': return 5;
      break;
    case 'wednesday': return 8;
      break;
    case 'thursday': return 8;
      break;
    case 'friday': return 8;
      break;
    case 'saturday': return 9;
      break;
    case 'sunday': return 7;
      break;
    default: day = 7;
      break;
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + 			     					   getSleepHours('tuesday') +        				         getSleepHours('wednesday') +                     getSleepHours('thursday') +                       getSleepHours('friday') +                         getSleepHours('saturday') +                       getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealSleepHours = 9;
  return idealSleepHours * 7;
};

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
  console.log("Look at you Sleeping Beauty! You slept perfectly. You slept your ideal amount of hours exactly." );
	}
	else if (actualSleepHours > idealSleepHours) {
  console.log("Woah there Rip Van Wrinkle! 	You have been asleep forever!" + (actualSleepHours - idealSleepHours) + " hours more than your ideal sleep. " );
	}
	else if (actualSleepHours < idealSleepHours) {
  console.log("Hit the sack! You need some ZZZs! You slept " + (idealSleepHours - actualSleepHours) + " less than you should have.")
	}
  else {
    console.log("Uh oh, something went wrong!")
  }
};

calculateSleepDebt();