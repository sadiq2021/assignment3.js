function kelometerToMeter(kilo){
    
var meter =kilo*1000;

    return meter

}
var meter = kelometerToMeter(100);
console.log(meter);


// budget calculator

function budgetCulator(watch,phon,laptop){
    var watchPRICE = watch*100;
    var phonPRICE = phon*300;
    var laptopPrice = laptop*600;

    var sum = watchPRICE + phonPRICE + laptopPrice;

    return sum
}

var sum =budgetCulator(3,2,2);
console.log(sum);

// hotelCost

function hotelCost(days){
    var money = 0;
    if(days<=10){
       money = days*100;
    }
   else if(days<=20){
      var remaining = days-10;
      var firstPart = 10*100;
      var secondPart = remaining*80
      money = firstPart + secondPart;

    }
    else{
        var remaining = days-20;
        var firstPart = 10*100;
        var secondPart = 10*80;
        var thirdPart = remaining*50;
        money = firstPart + secondPart + thirdPart;
    }
    return money;
}

var billing = hotelCost(25)
console.log(billing);


                    // megaFrind

function megaFrind(){
    var names = ["hablu","paglu","saglu","dabblu",]
     
}
