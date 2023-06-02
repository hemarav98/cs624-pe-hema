**Input-Process-Output Analysis Report**

This program follows the Input-Process-Output model, where inputs are received, processed, and produce outputs.

## Input
The user interacts with the program through various input components. In the AddCountry component, the user provides input by entering the country and currency names. In the Country component, the user can enter currency name and info to add to the country's currencies.

## Process
In the AddCountry component, when the user submits the form, the program validates the inputs and creates a country object with the provided data. It then adds the country to the routing parameters and resets the component's state. In the Country component, when the user adds a currency, the program validates the inputs and creates a currency object. It then calls the addCurrency function passed as a parameter to update the country's currencies array.

## Output
In the Countries component, the program displays a list of countries and their currencies. If there are no saved countries, a "No saved countries!" message is shown using the CenterMessage component. In the Country component, the program displays the list of currencies for the selected country. If there are no currencies, a "No currencies for this country!" message is shown. When the user adds a currency, the list of currencies is updated accordingly.
