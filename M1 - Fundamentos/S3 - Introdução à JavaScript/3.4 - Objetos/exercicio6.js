const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const clientName = fullOrder.name;
  const deliveryName = fullOrder.order.delivery.deliveryPerson;
  const clientPhone = fullOrder.phoneNumber;
  const clientAddress = `Rua ${fullOrder.address.street}, Nº: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}`;

  return `Olá ${deliveryName}, entrega para: ${clientName}, Telefone: ${clientPhone}, ${clientAddress}.`;
};

// console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  fullOrder.name = "Luiz Silva";
  fullOrder.payment.total = 50;

  const pizzas = Object.keys(fullOrder.order.pizza).join(", ");

  const drinks = fullOrder.order.drinks.coke.type;

  return `Olá ${fullOrder.name}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${fullOrder.payment.total},00.`;
};

console.log(orderModifier(order));
