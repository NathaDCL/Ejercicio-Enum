enum RolUsuario{
    ADMINISTRADOR='administrador',
    EDITOR='editor',
    VISUALIZADOR='visualizador'
}
interface DatosUsuario {

    nombre: string;
  
    email: string;
  
    edad: number;
  
    activo: boolean;
  
    rol: RolUsuario;
  
  }
  
  
  
  interface Usuario {
  
    id: number;
  
    nombre: string;
  
    email: string;
  
    edad: number;
  
    activo: boolean;
  
    fechaCreacion: Date;
  
    rol: RolUsuario;
  
  }
  

  
  function crearUsuario(datos: DatosUsuario): Usuario {
  
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
  
  
  
  console.log(nuevoUsuario.nombre); 
  console.log(nuevoUsuario.email); 
  console.log(nuevoUsuario.edad); 
  console.log(nuevoUsuario.activo); 
  console.log(nuevoUsuario.rol); 