

var choiceRegular = document.getElementById('classic_choice'),
    choicePremium = document.getElementById('premium_choice'),
    choiceRoyal = document.getElementById('royal_choice');

    var tenTip = document.getElementById('job_choice'),
        fiveTip = document.getElementById('special_choice'),
        twentyTip = document.getElementById('high_choice');


     


    choicePremium.onclick = totalP;
    choiceRegular.onclick = totalP;
    choiceRoyal.onclick = totalP;


  


    function totalP() {
         
        tenTip.onclick = totaleAmount;
        fiveTip.onclick = totaleAmount;
        twentyTip.onclick = totaleAmount;

        if(choiceRegular.checked == true) {
            var totalPrice = choiceRegular.value;
        }else if (choicePremium.checked == true) {
            totalPrice = choicePremium.value;
        }else if(choiceRoyal.checked == true) {
            totalPrice = choiceRoyal.value;
        }else {
            totalPrice = 0;
        }

        

       var totalPriceNum = Number(totalPrice);
        var totalPriceNum1 = totalPriceNum.toFixed(2)

      console.log(totalPriceNum);
        

        document.getElementById('total-amount').innerHTML = '$'+totalPriceNum1;

        function totaleAmount() {
            if(tenTip.checked == true) {
                var tipPrice = Number(tenTip.value)
            } else if(fiveTip.checked == true) {
                tipPrice = fiveTip.value
            } else if(twentyTip.checked == true) {
                tipPrice = twentyTip.value
            } else {
                tipPrice = 0
            }

            var tipPriceNum = Number(tipPrice);

            var totalTip = tipPriceNum * totalPriceNum

            console.log(totalTip);

            var total = totalTip + totalPriceNum;
            var totale = total.toFixed(2)
            
            

            var totalAmount = document.getElementById('total-amount');

            document.querySelectorAll('.tip-selector').forEach(tipSelector => {
                totalAmount.innerHTML = '$'+ totale;
            })

        }
    }