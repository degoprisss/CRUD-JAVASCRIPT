const users = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "6 Grand Touring Lx",
    color: "Rojo",
    año: 2020,
    precio: "111.000.000",
    fotografia:
      "https://http2.mlstatic.com/mazda-mazda-6-grand-touring-lx-blindado-2-plus-2016-D_NQ_NP_691782-MCO29311211028_022019-F.jpg",
  },
  {
    id: 2,
    marca: "Toyota",
    modelo: "Rush S Automatica",
    color: "Gris",
    año: 2019,
    precio: "75.000.000",
    fotografia:
      "https://http2.mlstatic.com/D_NQ_NP_819526-MCO44268963487_122020-O.webp",
  },
  {
    id: 3,
    marca: "Toyota",
    modelo: "Fortuner Sr5",
    color: "Dorada",
    año: 2016,
    precio: "95.000.000",
    fotografia:
      "https://http2.mlstatic.com/toyota-fortuner-sr5-at-27cc-4x4-D_NQ_NP_719057-MCO43505982165_092020-F.jpg",
  },
  {
    id: 4,
    marca: "Toyota",
    modelo: "Prado Tx 4x4",
    color: "Gris",
    año: 2011,
    precio: "108.000.000",
    fotografia:
      "https://http2.mlstatic.com/toyota-prado-tx-4x4-3000cc-tdi-at-7psj-aa-ab-abs-dh-tc-fe-D_NQ_NP_616891-MCO44341256968_122020-F.webp 2x",
  },
  {
    id: 5,
    marca: "Erik",
    modelo: "4runner Limited",
    color: "Gris Metálico",
    año: 2016,
    precio: "175.000.000",
    fotografia:
      "https://http2.mlstatic.com/toyota-4runner-limited-D_NQ_NP_880525-MCO44125003905_112020-F.webp 2x",
  },
];

function save() {
  let stri = "";
  users.forEach((user) => {
    stri += `<tr>
                    <td>${user.marca}</td>
                    <td>${user.modelo}</td>
                    <td>${user.color}</td>
                    <td>${user.año}</td>
                    <td>  $${user.precio}</td>
                    <td><img class="td-img col-lg-5 col-md-12 col-sm-10"src="${user.fotografia}" alt=""></td>
                    <td>
                    <button class='center-button' onclick="delet(${user.id})">Eliminar</button>
                    </td>
                    <td>
                    <button class='center-button' onclick="update(${user.id}), ecuentralo(${user.id})">Actualizar</button>
                    </td>
                 </tr>`;
  });
  document.getElementById("probando").innerHTML = stri;
}

save();

function delet(id) {
  recoverId = users.findIndex((ind) => ind.id === id);
  users.splice(recoverId, 1);
  save();
}

function aña() {
  let id = users[users.length - 1].id + 1;
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const color = document.getElementById("color").value;
  let año = document.getElementById("start").value;
  año = parseInt(año, 10);
  let precio = document.getElementById("precio").value;
  const fotografia = document.getElementById("imagen").value;

  const newUsers = {
    id,
    marca,
    modelo,
    color,
    año,
    precio,
    fotografia,
  };

  users.push(newUsers);
  save();
  document.getElementById("addUsers").reset();
}
var posUpdate = -1;
function update(id) {
  posUpdate = users.findIndex((posi) => posi.id === id);
  let marcaUp = users[posUpdate].marca;
  let modeloUp = users[posUpdate].modelo;
  let colorlUp = users[posUpdate].color;
  let añoUp = users[posUpdate].año;
  let precioUp = users[posUpdate].precio;
  let fotografiaUp = users[posUpdate].fotografia;
  document.getElementById("marcaUpdate").value = marcaUp;
  document.getElementById("modeloUpdate").value = modeloUp;
  document.getElementById("colorUpdate").value = colorlUp;
  document.getElementById("añoUpdate").value = añoUp;
  document.getElementById("precioUpdate").value = precioUp;
  document.getElementById("imagenUpdate").value = fotografiaUp;
  save();
}

function updateTodo() {
  let marca = document.getElementById("marcaUpdate").value;
  let modelo = document.getElementById("modeloUpdate").value;
  let color = document.getElementById("colorUpdate").value;
  let año = document.getElementById("añoUpdate").value;
  año = parseInt(año, 10);
  let precio = document.getElementById("precioUpdate").value;
  let foto = document.getElementById("imagenUpdate").value;

  users[posUpdate].marca = marca;
  users[posUpdate].modelo = modelo;
  users[posUpdate].color = color;
  users[posUpdate].año = año;
  users[posUpdate].precio = precio;
  users[posUpdate].fotografia = foto;

  save();
}
