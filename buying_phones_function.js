var bank_money = 5000;

const TAX_RATE = 0.10;
const SPENDING_THRESHOLD = 300;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 18;

function MoneyConversion (amount) {
  return "$" + amount;
}

function AddTaxes (tax_rate, amount) {
  return amount + amount * tax_rate
}

function BuyPhones (bank_money, phone_price, tax_rate, spending_threshold, accessory_price) {
  const taxed_phone_price = AddTaxes(tax_rate, phone_price);
  const taxed_accessory_price = AddTaxes(tax_rate, accessory_price);
  var total_amount_spent = 0;
  var phones_bought = 0;
  
  while (total_amount_spent + taxed_phone_price < bank_money) {
    total_amount_spent += taxed_phone_price;
    phones_bought += 1;
    var amount_spent_on_phone = 0;var bank_money = 5000;

const TAX_RATE = 0.10;
const SPENDING_THRESHOLD = 300;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 18;

function MoneyConversion (amount) {
  return "$" + amount;
}

function AddTaxes (tax_rate, amount) {
  return amount + amount * tax_rate
}

function BuyPhones (bank_money, phone_price, tax_rate, spending_threshold, accessory_price) {
  const taxed_phone_price = AddTaxes(tax_rate, phone_price);
  const taxed_accessory_price = AddTaxes(tax_rate, accessory_price);
  var total_amount_spent = 0;
  var phones_bought = 0;
  
  while (total_amount_spent + taxed_phone_price < bank_money) {
    total_amount_spent += taxed_phone_price;
    phones_bought += 1;
    var amount_spent_on_phone = 0;
    var money_spent_on_phone = taxed_phone_price;
    while (total_amount_spent + taxed_accessory_price < bank_money && amount_spent_on_phone + taxed_accessory_price < spending_threshold) {
        total_amount_spent += taxed_accessory_price;
        amount_spent_on_phone += taxed_accessory_price;
      }
    }
    total_money_spent = MoneyConversion(total_amount_spent);
    amount_left_in_bank = bank_money - total_amount_spent;
    money_left_in_bank = MoneyConversion(amount_left_in_bank);
    return phones_bought + " phones bought for " + total_money_spent + ", " + money_left_in_bank + " still left in the bank.";
  }
  
  
BuyPhones (bank_money, PHONE_PRICE, TAX_RATE, SPENDING_THRESHOLD, ACCESSORY_PRICE)
    var money_spent_on_phone = taxed_phone_price;
    while (total_amount_spent + taxed_accessory_price < bank_money && amount_spent_on_phone + taxed_accessory_price < spending_threshold) {
        total_amount_spent += taxed_accessory_price;
        amount_spent_on_phone += taxed_accessory_price;
      }
    }
    total_money_spent = MoneyConversion(total_amount_spent);
    amount_left_in_bank = bank_money - total_amount_spent;
    money_left_in_bank = MoneyConversion(amount_left_in_bank);
    return phones_bought + " phones bought for " + total_money_spent + ", " + money_left_in_bank + " still left in the bank.";
  }
  
  
BuyPhones (bank_money, PHONE_PRICE, TAX_RATE, SPENDING_THRESHOLD, ACCESSORY_PRICE)
