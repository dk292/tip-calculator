const peopleAmount = document.querySelector("#people");
const btn = document.querySelectorAll("button");
const bill = document.querySelector("#bill");
const amount = document.querySelector("#amount");
const total = document.querySelector("#total");
const reset = document.querySelector("#reset");
const custom = document.querySelector("#custom");
const inputs = document.querySelectorAll("input");

function clearBorder() {
  inputs.forEach((input) => {
    input.style.cssText = "border: none; box-shadow: none";
  });
}

// Function for validation
function invaildFunction() {
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value === "0") {
        input.style.cssText =
          "border: 1px solid hsl(0, 100%, 66%); box-shadow: 0 0 5px hsl(0, 100%, 66%);";
        this.value = `Can't be Zero`;
      } else {
        input.style.cssText = "border: none; box-shadow: none";
      }
    });
  });
}

function calculationTip() {
  let btnValue;
  let tip;
  let peopleAmountValue;
  let tipWithPeopleAmount;
  let totalAmount;

  btn.forEach((button) => {
    button.addEventListener("click", () => {
      tipCal(button);
    });
  });

  // Function for calculating tip with default one person
  function tipCal(button, peopleAmountValue = 1) {
    btnValue = button.value;
    tip = (bill.value * btnValue) / 100 / peopleAmountValue;
    totalAmount = parseFloat(bill.value) + tip;
    amount.textContent = `$${tip.toFixed(2)}`;
    total.textContent = `$${totalAmount.toFixed(2)}`;
  }

  // Function for calculating with people amount
  function calculatingTipWithPeopleAmount() {
    peopleAmount.addEventListener("blur", function () {
      peopleAmountValue = this.value;
      tipWithPeopleAmount = tip / peopleAmountValue;
      amount.textContent = `$${tipWithPeopleAmount.toFixed(2)}`;
      total.textContent = `$${(totalAmount / peopleAmountValue).toFixed(2)}`;
    });
  }

  //Function for custom Percent Tip amount
  function customTip() {
    custom.addEventListener("blur", function () {
      tip = (bill.value * this.value) / 100;
      totalAmount = parseFloat(bill.value) + tip;
      amount.textContent = `$${tip.toFixed(2)}`;
      total.textContent = `$${totalAmount.toFixed(2)}`;
    });
  }

  // Function for resetting
  function resetFun() {
    reset.addEventListener("click", () => {
      bill.value = "";
      custom.value = "";
      peopleAmount.value = "";
      amount.textContent = "";
      total.textContent = "";
      clearBorder();
    });
  }

  calculatingTipWithPeopleAmount();
  customTip();
  resetFun();
}

invaildFunction();
calculationTip();
