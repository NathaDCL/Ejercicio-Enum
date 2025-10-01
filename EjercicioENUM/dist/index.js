"use strict";
var RolUsuario;
(function (RolUsuario) {
    RolUsuario["ADMINISTRADOR"] = "administrador";
    RolUsuario["EDITOR"] = "editor";
    RolUsuario["VISUALIZADOR"] = "visualizador";
})(RolUsuario || (RolUsuario = {}));
function crearUsuario(datos) {
    return {
        id: Date.now(),
        nombre: datos.nombre,
        email: datos.email,
        edad: datos.edad,
        activo: datos.activo,
        rol: datos.rol,
        fechaCreacion: new Date(),
    };
}
const datosDeEntrada = {
    nombre: "Ana Garcia",
    email: "ana@email.com",
    edad: 28,
    activo: true,
    rol: RolUsuario.EDITOR,
};
const nuevoUsuario = crearUsuario(datosDeEntrada);
console.log(nuevoUsuario.rol);
