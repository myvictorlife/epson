const express = require('express');

const app = express()

const Printer = require('./printer')

var order = {
    id: 1,
    flag_delivery: 1,
    status: 1,
    discount: 0.0,
    sub_total: 39,
    total: 39,
    frete: 8.344385694887647,
    orders: {
      "user": {
        "id": 1,
        "img": "https://graph.facebook.com/1105150332953824/picture?type=large",
        "first_name": "Victor César",
        "last_name": "Peixoto Barbosa",
        "email": "victorc_mg@hotmail.com",
        "cpf": null,
        "country_code": "55",
        "phone": "9883838"
      },
      "restaurant": {
        "id": 1,
        "img": "https://subdominio.uaifoody.info/upload/uploads/avatarsacia3.png",
        "name": "Viva Vegê",
        "latitude": "-18.9256384",
        "longitude": "-48.2743313",
        "delivery_min": "50MIN",
        "delivery_max": "1HORA",
        "frete": 7,
        "frete_km": 1.5,
        "km_normal": "1.5KM",
        "phone": "34999029993",
        "distance": 2.396257129925098,
        "address": {
          "street": "Avenida Rondon Pacheco",
          "number": "2300",
          "complement": "Loja 41 - Praça de Alimentação Griff Shopping",
          "neighborhood": "Saraiva",
          "city": "Uberlândia",
          "state": "Minas Gerais",
          "cep": "38408-404"
        }
      },
      "items": [{
        "id": 1,
        "name": "Burguer 01",
        "price": 12,
        "cuisines_id": 2,
        "restaurants_id": 1,
        "thumb": "https://subdominio.uaifoody.info/upload/uploads/burguer212.jpg",
        "ingredients": "Pão, Hamburguer de Berinjela, Cheddar, Alface Americana e Tomate.",
        "amount": "0",
        "disponible": true,
        "options": {
          "required": {
            "id": 1,
            "name": "Vegetariano",
            "price": 12,
            "required": true,
            "item_id": 1,
            "createdBy": null,
            "updatedBy": null,
            "createdAt": "2017-11-01T10:06:57.000Z",
            "updatedAt": "2017-11-01T10:06:57.000Z"
          },
          "optional": [{
            "id": 3,
            "name": "Batata Palito (200grs)",
            "price": 4,
            "required": false,
            "item_id": 1,
            "createdBy": null,
            "updatedBy": null,
            "createdAt": "2017-11-01T10:07:53.000Z",
            "updatedAt": "2017-11-01T10:07:53.000Z",
            "selected": true
          }, {
            "id": 12,
            "name": "Cebola Roxa",
            "price": 1.5,
            "required": false,
            "item_id": 1,
            "createdBy": null,
            "updatedBy": null,
            "createdAt": "2017-11-01T10:10:16.000Z",
            "updatedAt": "2017-11-01T10:10:41.000Z",
            "selected": true
          }, {
            "id": 14,
            "name": "Cheddar Vegano (fatia)",
            "price": 3,
            "required": false,
            "item_id": 1,
            "createdBy": null,
            "updatedBy": null,
            "createdAt": "2017-11-01T10:11:34.000Z",
            "updatedAt": "2017-11-01T10:11:34.000Z",
            "selected": true
          }]
        },
        "quantity": 1,
        "itemRequired": 1,
        "total": 20.5
      }, {
        "id": 16,
        "name": "Omelete 16",
        "price": "13.50",
        "cuisines_id": 4,
        "restaurants_id": 1,
        "thumb": null,
        "ingredients": "3 Ovos, Cheddar, Milho, Azeitona, Ervas Frescas e Salada Simples.",
        "amount": "0",
        "disponible": true,
        "options": {
          "required": {},
          "optional": [{
            "id": 382,
            "name": "Milho",
            "price": 2,
            "required": false,
            "item_id": 16,
            "createdBy": null,
            "updatedBy": null,
            "createdAt": "2017-11-03T11:52:54.000Z",
            "updatedAt": "2017-11-03T11:52:54.000Z",
            "selected": true
          }, {
            "id": 383,
            "name": "Palmito",
            "price": 3,
            "required": false,
            "item_id": 16,
            "createdBy": null,
            "updatedBy": null,
            "createdAt": "2017-11-03T11:53:01.000Z",
            "updatedAt": "2017-11-03T11:53:01.000Z",
            "selected": true
          }]
        },
        "quantity": 1,
        "total": 18.5
      }],
      "address": {
        "street": "Rua Niterói • 1400",
        "complement": null,
        "neighborhood": "Nossa Senhora Aparecida",
        "city": "Uberlândia",
        "state": "Minas Gerais",
        "cep": "38440-046",
        "latitude": -18.9063829,
        "longitude": -48.2641026
      },
      "payment": {
        "id": 1,
        "img": "https://subdominio.uaifoody.info/upload/uploads/money.png",
        "name": "Dinheiro",
        "card": null,
        "is_online": 0,
        "createdBy": null,
        "updatedBy": "admin@gmail.com",
        "createdAt": "2017-10-03T13:24:36.000Z",
        "updatedAt": "2017-10-29T11:22:25.000Z",
        "RestaurantsPayments": {
          "restaurants_id": 1,
          "payments_id": 1
        }
      },
      "money": "R$ 50,00"
    }
  }


app.get('/', (req, res) => {
  
  if(Printer.connected()){
    Printer.start(order);
    res.send('Connectado');
  }else{
    res.send('Não connectado');
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
