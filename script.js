let price;
let a = prompt("Введите страну:");
let hot = confirm("Тур горячий?");
switch (a) {
  case "Турция":
    price = 200; 
    break;
  case "Франция":
    price = 300;
     price = hot? price - price * 0.2 : price;
    break;
  case "Италия":
    price = 500;
    break;
    default:
      price = "Тур не найден";
}
alert(price);