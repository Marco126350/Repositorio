function clearDisplay() {
      document.getElementById("display").value = "";
    }

    function deleteLastCharacter() {
      var displayValue = document.getElementById("display").value;
      document.getElementById("display").value = displayValue.slice(0, -1);
    }

    function appendToDisplay(value) {
      document.getElementById("display").value += value;
    }

    function calculateResult() {
      var displayValue = document.getElementById("display").value;
      var result = eval(displayValue);
      document.getElementById("display").value = result;
    }