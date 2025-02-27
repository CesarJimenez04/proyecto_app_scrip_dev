function guardarUsuario(usuario) {
    try {
        const {id, nombreCompleto, correo, contraseña}= usuario;
        const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
        sheetUsuarios.appendRow([id, nombreCompleto, correo, contraseña]);
      return {
        titulo: "Registro exitoso",
        descripcion: "Ya se encuentra el usuario en la base de datos."

      }; 
    } catch (error) {
        return{
            titulo: " Opps ha ocurrido un error "+ error,
            descripcion: "Por favor contactar a soporte.",
        };
    }
 
}

function listaUsuarios(){
    return obtenerDatos(env_().SH_REGISTRO_USUARIOS);
}