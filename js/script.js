
window.onload = function() {
  var respuesta = confirm("Atencion!!!Algunos de los precios estan en dolares");

  if (respuesta) {
      alert ("Perfecto!! Igual no te hacen falta el precio esta al dolar oficial");
  } else {
      alert("No te preocupes, podes pagarlos al dolar oficial");
  }
};



destinosMundo




























let destinosMundo = document.querySelector("#destinosMundo");

const getDestinosMundo = async () => {
  try {
    const resp = await fetch ("destinosMundo.json");
    const data = await resp.json();

    console.log(data);

    data.forEach(item => {
      const crewData = document.createElement("div");

      crewData.innerHTML = `
        <img src="${item.img}" alt="">
        <h6>${item.lugar}</h6>
        <p>${item.descripcion}</p>
      `;

      destinosMundo.appendChild(crewData);
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

getDestinosMundo();