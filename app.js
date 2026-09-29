/* =====================================================
   CONFIGURACIÓN
===================================================== */

/*
    IMPORTANTE:

    Este es el número de WhatsApp del local.

    3118750592

    Colombia = 57

    Por eso:

    573118750592
*/

const NUMERO_WHATSAPP = "3202471731";


/* =====================================================
   PRODUCTOS
===================================================== */

const productos = [

    /* ================= POLLO ================= */

    {
        id: "pollo-completo",
        nombre: "Pollo completo",
        categoria: "Pollo",
        precio: 39000,
        descripcion: "Pollo completo + patacón + arepa."
    },

    {
        id: "medio-pollo",
        nombre: "Medio pollo",
        categoria: "Pollo",
        precio: 20000,
        descripcion: "Medio pollo + yuca + arepa."
    },

    {
        id: "cuarto-pollo",
        nombre: "Cuarto de pollo",
        categoria: "Pollo",
        precio: 12000,
        descripcion: "Cuarto de pollo + yuca + arepa."
    },


    /* ================= HORNO ================= */

    {
        id: "pollo-horno",
        nombre: "Pollo completo al horno",
        categoria: "Pollo",
        precio: 39000,
        descripcion: "Pollo completo + papa francesa + arepa."
    },

    {
        id: "medio-horno",
        nombre: "Medio pollo al horno",
        categoria: "Pollo",
        precio: 20000,
        descripcion: "Medio pollo + papa francesa + arepa."
    },


    /* ================= COMBOS ================= */

    {
        id: "combo-1",
        nombre: "Combo 1 · Personal",
        categoria: "Combos",
        precio: 21000,
        descripcion: "1/4 pollo + yuca + papa francesa + gaseosa 250 ml."
    },

    {
        id: "combo-2",
        nombre: "Combo 2 · Medio pollo",
        categoria: "Combos",
        precio: 33500,
        descripcion: "Yuca + arepa + papa francesa + patacón + 2 gaseosas."
    },

    {
        id: "combo-3",
        nombre: "Combo 3 · Pollo completo",
        categoria: "Combos",
        precio: 52000,
        descripcion: "Yuca + arepa + papa francesa + patacón + gaseosa 1.5 L."
    },

    {
        id: "combo-4",
        nombre: "Combo 4 · Pollo y medio",
        categoria: "Combos",
        precio: 69500,
        descripcion: "Yuca + arepa + papa francesa + patacón + gaseosa 1.5 L."
    },

    {
        id: "combo-5",
        nombre: "Combo 5 · Dos pollos",
        categoria: "Combos",
        precio: 90000,
        descripcion: "Yuca + arepa + papa francesa + patacón + gaseosa 1.5 L."
    },


    /* ================= ARROZ ================= */

    {
        id: "arroz-chino-mixto",
        nombre: "Arroz chino mixto",
        categoria: "Arroces",
        precio: 14000,
        descripcion: "Arroz chino con raíces, jamón, pollo y salsas."
    },

    {
        id: "arroz-chino-personal",
        nombre: "Arroz chino personal",
        categoria: "Arroces",
        precio: 22000,
        descripcion: "Arroz + 1 presa de pollo, costillas o chuleta."
    },

    {
        id: "arroz-chino-2",
        nombre: "Arroz chino · 2 personas",
        categoria: "Arroces",
        precio: 35500,
        descripcion: "Arroz + 1/4 pollo, costillas o chuleta."
    },

    {
        id: "arroz-chino-4",
        nombre: "Arroz chino · 4 personas",
        categoria: "Arroces",
        precio: 47000,
        descripcion: "Arroz + 1/2 pollo + papa francesa."
    },

    {
        id: "arroz-chino-6",
        nombre: "Arroz chino · 5-6 personas",
        categoria: "Arroces",
        precio: 62000,
        descripcion: "2 cajas de arroz + 1/2 pollo + arepa + papa francesa."
    },


    {
        id: "arroz-paisa-personal",
        nombre: "Arroz paisa personal",
        categoria: "Arroces",
        precio: 21900,
        descripcion: "Chorizo + chicharrón + pollo + carne de cerdo + mazorca + plátano."
    },

    {
        id: "arroz-paisa-2",
        nombre: "Arroz paisa · 2 personas",
        categoria: "Arroces",
        precio: 39900,
        descripcion: "Arroz + 1/4 presa de pollo, costillas o chuleta."
    },

    {
        id: "arroz-paisa-4",
        nombre: "Arroz paisa · 4 personas",
        categoria: "Arroces",
        precio: 59000,
        descripcion: "Arroz + 1/2 pollo + papa francesa."
    },

    {
        id: "arroz-paisa-6",
        nombre: "Arroz paisa · 5-6 personas",
        categoria: "Arroces",
        precio: 99900,
        descripcion: "2 cajas de arroz + 1 pollo + gaseosa 1.5 L."
    },


    /* ================= PLATOS ================= */

    {
        id: "churrasco",
        nombre: "Churrasco",
        categoria: "A la carta",
        precio: 32000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "churrasco-gratinado",
        nombre: "Churrasco gratinado",
        categoria: "A la carta",
        precio: 33000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "chuleta",
        nombre: "Chuleta de cerdo",
        categoria: "A la carta",
        precio: 28000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "costillas",
        nombre: "Costillas de cerdo",
        categoria: "A la carta",
        precio: 30000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "tabla-mixta",
        nombre: "Tabla mixta",
        categoria: "A la carta",
        precio: 39000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "pechuga",
        nombre: "Pechuga a la plancha",
        categoria: "A la carta",
        precio: 26000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "pechuga-gratinada",
        nombre: "Pechuga gratinada",
        categoria: "A la carta",
        precio: 27000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "trucha",
        nombre: "Trucha frita",
        categoria: "A la carta",
        precio: 31000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "mojarra",
        nombre: "Mojarra frita",
        categoria: "A la carta",
        precio: 30000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "bagre",
        nombre: "Bagre frito",
        categoria: "A la carta",
        precio: 32000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "bagre-salsa",
        nombre: "Bagre en salsa",
        categoria: "A la carta",
        precio: 35000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "bandeja-pollo",
        nombre: "Bandeja con pollo",
        categoria: "A la carta",
        precio: 22000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "arroz-pollo",
        nombre: "Arroz con pollo",
        categoria: "A la carta",
        precio: 22000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },

    {
        id: "alitas",
        nombre: "Alitas BBQ",
        categoria: "A la carta",
        precio: 22000,
        descripcion: "Arroz + papa francesa + yuca + ensalada."
    },


    /* ================= RAPIDOS ================= */

    {
        id: "hamburguesa",
        nombre: "Hamburguesa sencilla",
        categoria: "Rápidos",
        precio: 12000,
        descripcion: "Hamburguesa sencilla."
    },

    {
        id: "hamburguesa-combo",
        nombre: "Hamburguesa combo",
        categoria: "Rápidos",
        precio: 19500,
        descripcion: "Hamburguesa en combo."
    },

    {
        id: "salchipapa",
        nombre: "Salchipapa sencilla",
        categoria: "Rápidos",
        precio: 11000,
        descripcion: "Salchipapa sencilla."
    },


    /* ================= BEBIDAS ================= */

    {
        id: "gaseosa-250",
        nombre: "Gaseosa Postobón 250 ml",
        categoria: "Bebidas",
        precio: 2500,
        descripcion: "Gaseosa Postobón."
    },

    {
        id: "gaseosa-15",
        nombre: "Gaseosa Postobón 1.5 L",
        categoria: "Bebidas",
        precio: 7000,
        descripcion: "Gaseosa Postobón."
    },

    {
        id: "coca-15",
        nombre: "Coca-Cola 1.5 L",
        categoria: "Bebidas",
        precio: 8000,
        descripcion: "Coca-Cola."
    },

    {
        id: "coca-2",
        nombre: "Coca-Cola 2 L",
        categoria: "Bebidas",
        precio: 9000,
        descripcion: "Coca-Cola."
    },

    {
        id: "coca-350",
        nombre: "Coca-Cola 350 ml",
        categoria: "Bebidas",
        precio: 3500,
        descripcion: "Coca-Cola."
    },

    {
        id: "jugo-agua",
        nombre: "Jugo en agua",
        categoria: "Bebidas",
        precio: 5000,
        descripcion: "Jugo natural en agua."
    },

    {
        id: "jugo-leche",
        nombre: "Jugo en leche",
        categoria: "Bebidas",
        precio: 7500,
        descripcion: "Jugo natural en leche."
    },

    {
        id: "limonada",
        nombre: "Limonada",
        categoria: "Bebidas",
        precio: 5500,
        descripcion: "Limonada."
    },


    /* ================= PORCIONES ================= */

    {
        id: "papa",
        nombre: "Papa francesa",
        categoria: "Porciones",
        precio: 6000,
        descripcion: "Porción de papa francesa."
    },

    {
        id: "patacon",
        nombre: "Patacón",
        categoria: "Porciones",
        precio: 6000,
        descripcion: "Porción de patacón."
    },

    {
        id: "arepa",
        nombre: "Arepa",
        categoria: "Porciones",
        precio: 3000,
        descripcion: "Arepa."
    },

    {
        id: "yuca",
        nombre: "Yuca",
        categoria: "Porciones",
        precio: 5500,
        descripcion: "Porción de yuca."
    },

    {
        id: "ensalada",
        nombre: "Ensalada",
        categoria: "Porciones",
        precio: 3000,
        descripcion: "Porción de ensalada."
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let carrito = [];

let mesa = "";

let categoriaActual = "Todos";


/* =====================================================
   FORMATO DE DINERO
===================================================== */

function dinero(numero) {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    ).format(numero);

}


/* =====================================================
   DETECTAR MESA DEL QR
===================================================== */

const parametros =
    new URLSearchParams(
        window.location.search
    );

const mesaQR =
    parametros.get("mesa");


if (mesaQR) {

    mesa = mesaQR;

    localStorage.setItem(
        "mesaComby",
        mesa
    );

} else {

    mesa =
        localStorage.getItem(
            "mesaComby"
        ) || "";

}


/* =====================================================
   MOSTRAR MESA
===================================================== */

function mostrarMesa() {

    document.getElementById(
        "numeroMesa"
    ).textContent =
        mesa || "—";


    document.getElementById(
        "mesaCarrito"
    ).textContent =
        mesa || "—";


    document.getElementById(
        "selectorMesa"
    ).value =
        mesa;

}


mostrarMesa();


/* =====================================================
   CATEGORIAS
===================================================== */

function cargarCategorias() {

    const categorias = [

        "Todos",

        ...new Set(
            productos.map(
                producto =>
                    producto.categoria
            )
        )

    ];


    const contenedor =
        document.getElementById(
            "categorias"
        );


    contenedor.innerHTML = "";


    categorias.forEach(
        categoria => {

            const boton =
                document.createElement(
                    "button"
                );


            boton.className =
                "categoria";


            if (
                categoria ===
                categoriaActual
            ) {

                boton.classList.add(
                    "activa"
                );

            }


            boton.textContent =
                categoria;


            boton.onclick = () => {

                categoriaActual =
                    categoria;

                cargarCategorias();

                mostrarProductos();

            };


            contenedor.appendChild(
                boton
            );

        }
    );

}


cargarCategorias();


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function mostrarProductos() {

    const contenedor =
        document.getElementById(
            "productos"
        );


    const busqueda =
        document
            .getElementById(
                "buscador"
            )
            .value
            .toLowerCase();


    const filtrados =
        productos.filter(
            producto => {

                const perteneceCategoria =
                    categoriaActual ===
                    "Todos" ||

                    producto.categoria ===
                    categoriaActual;


                const coincideBusqueda =
                    producto.nombre
                        .toLowerCase()
                        .includes(
                            busqueda
                        );


                return (
                    perteneceCategoria &&
                    coincideBusqueda
                );

            }
        );


    contenedor.innerHTML = "";


    filtrados.forEach(
        producto => {

            const tarjeta =
                document.createElement(
                    "article"
                );


            tarjeta.className =
                "producto";


            tarjeta.innerHTML = `

                <div class="producto-contenido">

                    <span class="producto-categoria">
                        ${producto.categoria}
                    </span>

                    <h3>
                        ${producto.nombre}
                    </h3>

                    <p>
                        ${producto.descripcion}
                    </p>

                    <div class="precio">
                        ${dinero(producto.precio)}
                    </div>

                    <button
                        class="agregar"
                        onclick="agregarProducto('${producto.id}')">

                        + AGREGAR AL PEDIDO

                    </button>

                </div>

            `;


            contenedor.appendChild(
                tarjeta
            );

        }
    );

}


mostrarProductos();


/* =====================================================
   BUSCADOR
===================================================== */

document
    .getElementById("buscador")
    .addEventListener(
        "input",
        mostrarProductos
    );


/* =====================================================
   AGREGAR PRODUCTO
===================================================== */

function agregarProducto(id) {

    const producto =
        productos.find(
            p => p.id === id
        );


    const existente =
        carrito.find(
            p => p.id === id
        );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            id: id,

            cantidad: 1

        });

    }


    actualizarCarrito();

    abrirCarrito();

}


/* =====================================================
   CAMBIAR CANTIDAD
===================================================== */

function cambiarCantidad(
    id,
    cantidad
) {

    const producto =
        carrito.find(
            p => p.id === id
        );


    if (!producto) return;


    producto.cantidad +=
        cantidad;


    if (
        producto.cantidad <= 0
    ) {

        carrito =
            carrito.filter(
                p => p.id !== id
            );

    }


    actualizarCarrito();

}


/* =====================================================
   ACTUALIZAR CARRITO
===================================================== */

function actualizarCarrito() {

    const contenedor =
        document.getElementById(
            "productosCarrito"
        );


    const contador =
        document.getElementById(
            "contador"
        );


    const totalElemento =
        document.getElementById(
            "total"
        );


    contenedor.innerHTML = "";


    let total = 0;

    let cantidadTotal = 0;


    carrito.forEach(
        item => {

            const producto =
                productos.find(
                    p =>
                        p.id ===
                        item.id
                );


            const subtotal =
                producto.precio *
                item.cantidad;


            total += subtotal;

            cantidadTotal +=
                item.cantidad;


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "item-carrito";


            elemento.innerHTML = `

                <div>

                    <h4>
                        ${producto.nombre}
                    </h4>

                    <small>
                        ${dinero(producto.precio)}
                    </small>

                </div>


                <div class="controles">

                    <button
                        onclick="cambiarCantidad(
                            '${producto.id}',
                            -1
                        )">

                        −

                    </button>


                    <b>
                        ${item.cantidad}
                    </b>


                    <button
                        onclick="cambiarCantidad(
                            '${producto.id}',
                            1
                        )">

                        +

                    </button>

                </div>

            `;


            contenedor.appendChild(
                elemento
            );

        }
    );


    if (
        carrito.length === 0
    ) {

        contenedor.innerHTML = `

            <div style="
                text-align:center;
                padding:50px 10px;
                color:#75675b;
            ">

                Tu pedido está vacío 🍗

                <br><br>

                ¡Agrega algo rico!

            </div>

        `;

    }


    contador.textContent =
        cantidadTotal;


    totalElemento.textContent =
        dinero(total);

}


/* =====================================================
   ABRIR CARRITO
===================================================== */

function abrirCarrito() {

    document
        .getElementById("carrito")
        .classList.add(
            "abierto"
        );


    document
        .getElementById("fondoCarrito")
        .classList.add(
            "mostrar"
        );

}


/* =====================================================
   CERRAR CARRITO
===================================================== */

function cerrarCarrito() {

    document
        .getElementById("carrito")
        .classList.remove(
            "abierto"
        );


    document
        .getElementById("fondoCarrito")
        .classList.remove(
            "mostrar"
        );

}


/* =====================================================
   CAMBIAR MESA MANUALMENTE
===================================================== */

document
    .getElementById(
        "selectorMesa"
    )
    .addEventListener(
        "change",
        function () {

            mesa =
                this.value;


            localStorage.setItem(
                "mesaComby",
                mesa
            );


            mostrarMesa();

        }
    );


/* =====================================================
   ENVIAR WHATSAPP
===================================================== */

function enviarWhatsApp() {

    if (!mesa) {

        alert(
            "Por favor selecciona una mesa."
        );

        return;

    }


    if (
        carrito.length === 0
    ) {

        alert(
            "Agrega productos al pedido."
        );

        return;

    }


    let mensaje = "";


    mensaje +=
        "🍗 *PEDIDO COMBY BROASTER*";


    mensaje +=
        "\n\n";


    mensaje +=
        "📍 *MESA: " +
        mesa +
        "*";


    mensaje +=
        "\n\n";


    let total = 0;


    carrito.forEach(
        item => {

            const producto =
                productos.find(
                    p =>
                        p.id ===
                        item.id
                );


            const subtotal =
                producto.precio *
                item.cantidad;


            total += subtotal;


            mensaje +=
                "• " +
                item.cantidad +
                " x " +
                producto.nombre +
                " — " +
                dinero(subtotal) +
                "\n";

        }
    );


    mensaje +=
        "\n💰 *TOTAL: " +
        dinero(total) +
        "*";


    const nota =
        document
            .getElementById(
                "nota"
            )
            .value
            .trim();


    if (nota) {

        mensaje +=
            "\n\n📝 *NOTA:* " +
            nota;

    }


    


    const url =
        "https://wa.me/" +
        NUMERO_WHATSAPP +
        "?text=" +
        encodeURIComponent(
            mensaje
        );


    window.open(
        url,
        "_blank"
    );

}