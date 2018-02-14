// Lab 7
// Written by Michelle Cantin
var cart = (function () {
    // Private
    // Brands
    var brands = [
        {
            brand : "extra",
            price : 1.50
        }, {
            brand : "wigleys",
            price : 2.00
        }, {
            brand : "trident",
            price : 1.50
        }, {
            brand : "bubbleGum",
            price : 1.00
        }
    ];

    // DOM variables
    var items = document.getElementById("items");
    var total = document.getElementById("total");
    var clearButton = document.getElementById("clear");
    var extra = document.getElementById("extra");
    var wigleys = document.getElementById("wigleys");
    var trident = document.getElementById("trident");
    var bubbleGum = document.getElementById("bubbleGum");

    // Public
    return {
        // Event listeners
        eventListeners: function() {
            clearButton.addEventListener("click", function() {
                cart.clear();
            });
            extra.addEventListener("click", function() {
                cart.addPrice(0);
            });
            wigleys.addEventListener("click", function() {
                cart.addPrice(1);
            });
            trident.addEventListener("click", function() {
                cart.addPrice(2);
            });
            bubbleGum.addEventListener("click", function() {
                cart.addPrice(3);
            });
        },

        // Add Price
        addPrice: function(i) {
            // Total
            if (total.innerHTML == "") {
                total.innerHTML = brands[i].price;
            } else {
                var totalText = parseFloat(total.innerHTML) + brands[i].price;
                total.innerHTML = totalText;
            }
            // Items
            if (items.innerHTML == "") {
                var itemText = document.createTextNode(brands[i].brand);
            } else {
                var itemText = document.createTextNode(", " + brands[i].brand);
            }
            items.appendChild(itemText);
        },

        // Clear
        clear: function() {
            items.innerHTML = "";
            total.innerHTML = "";
        }
    };
})();
cart.eventListeners();