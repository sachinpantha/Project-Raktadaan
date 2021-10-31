function myFunction(){
    var Nm= document.getElementById("Name").value;
    var Ag= document.getElementById("Age").value;
    var Wt= document.getElementById("Weight").value;
    var SP= document.getElementById("SBP").value;
    var DP= document.getElementById("DBP").value;
    var N= document.getElementById('no').checked;
    var N1= document.getElementById('no2').checked;
    var N2= document.getElementById('no3').checked;
    var N3= document.getElementById('no4').checked;
    var audio= document.getElementById('xyz');
    if (Nm!='' && Ag!=''&& Wt!=''&& SP!=''&& DP!='') {
        if (Ag>=16 && Ag<=60) {
            if (Wt >=50 && Wt <=158) {
                if (SP<=180 && SP>=90 && DP<=100 && DP>=50) {
                    if (N==true) {
                        if (N1==true) {
                            if (N2== true) {
                                if (N3== true) {
                                   alert(`Dear ${Nm} Congratlations you meet all the criteria to donate the blood.`) ;
                                }
                                else{
                                 alert(`Dear ${Nm} you're suffering fever so wait for complete recovery to donate blood.`);
                                }
                            }
                           else {
                           alert(`Dear ${Nm} you had tattoo recently so you're not eligible to donate blood for somedays`);
                           }
                        }
                       else{ 
                       alert(`Dear ${Nm} you had surgery recently so wait for some weeks to be eligible to donate blood`);
                       }
                    }
                   else{
                    alert(`Dear ${Nm} your health condition doesn't meet criteria so you're not eligible to donate blood`);
                   }
                }
                else{
                    alert(`Dear ${Nm} your Blood pressure doesn't meet criteria so you're not eligible to donate blood`);
                }
            }
            else{
                alert(`Dear ${Nm} your weight doesn't meet criteria so you're not eligible donate blood`);
            }
        }
        else{
            alert(`Dear ${Nm} your age doesn't meet criteria so you're not eligible donate blood`);
        }
        
    }
    else{
        audio.play();
        alert('Please enter all fields');
    }

}