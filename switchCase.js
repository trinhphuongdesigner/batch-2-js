var salary = 100000000;
var tax;

switch (true)
{
    case salary <= 11000000 : {
      tax = 0;
      break;
    }
    case salary <= 16000000 : {
      tax = (salary - 11000000) * 0.05;
      break;
    }
    default : {
      tax = ((salary - 16000000) * 0.1) + 5000000 * 0.05 ;
    }
}

console.log('««««« tax »»»»»', tax);