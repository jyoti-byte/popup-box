const popUp = document.querySelector(".popup");
const close = document.querySelector(".close");

window.addEventListener("load", function(){
    // var div = document.createElement("div");
    // div.className = "popup";

    // div.innerHTML = `
    //     <div class="popup" style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 2px solid green; border-radius: 20px; display: flex;">
    //         <div class="close-btn" style="position: absolute; right: 10px; top: 5px; font-size: 20px; cursor: pointer;">&times;</div>
    //         <div class="content" style="position: relative; width: 450px; height: 150px;">
    //             <p style="font-size: 22px; font-weight: bold;text-align: center; color: rgb(218, 32, 72); padding-top:2px;">You are eligible for 10% discount in orders.</p>
    //             <p style="font-size:20px; font-weight: bold; text-align: center; color: rgb(194, 3, 3); margin-top: -10px;">Click here to apply for coupon.</p>
    //             <div>
    //                 <button onclick="couponApply()" style="width:80px; height: 30px; font: 20px bold; text-transform: uppercase; color: rgb(59, 13, 133); border-radius: 10px; border: none; background-color: rosybrown; margin-left: 190px;display: flex; justify-content: center; align-items: center;">Apply</button>
    //             </div>
    //         </div>
    //     </div>
    // `;

    // Subscription-block.insertAdjacentElement("afterend", div);

    jQuery(".Subscription-block").append(`<div class="popup" style="position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 2px solid green; border-radius: 20px; display: none; background-color: whitesmoke">
            <div class="close-btn" style="position: absolute; right: 10px; top: 0px; font-size: 20px; cursor: pointer;">&times;</div>
            <div class="content" style="position: relative; width: 450px; height: 150px;">
                <p style="font-size: 22px; font-weight: bold;text-align: center; color: rgb(218, 32, 72); padding-top:15px;">You are eligible for 10% discount in orders.</p>
                <p style="font-size:20px; font-weight: bold; text-align: center; color: rgb(194, 3, 3); margin-top: -25px;">Click here to apply for coupon.</p>
                <div>
                    <button onclick="couponApply()" style="width:80px; height: 30px; font: 20px bold; text-transform: uppercase; color: rgb(59, 13, 133); border-radius: 10px; border: none; background-color: rosybrown; margin-left: 190px;display: flex; justify-content: center; align-items: center; margin-top: -15px;">Apply</button>
                </div>
            </div>
        </div>`);


    setTimeout(function(){
        popUp.style.display = 'block';
    },5000);

    close.addEventListener("click", function(){
        popUp.style.display = 'none';
    });
    
});

function couponApply(){
    alert("Congratulaions! Your discount coupon is applied.");
}