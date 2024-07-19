
# Prueba-TCIT

## Configuración del Backend

1. **Abrir la solución:**
   - Navega a la carpeta `backend` y abre el archivo `ChallengeApi.sln`.

2. **Configuración del archivo `appsettings.json`:**
   - Reemplaza las variables `$TU_BASE`, `$TU_USUARIO`, y `$TU_PASSWORD` con los valores correspondientes de tu base de datos PostgreSQL.

3. **Verificación e instalación de .NET:**
   - Abre la consola de paquetes NuGet: 
     - Ve a `Herramientas` > `Administrador de paquetes NuGet` > `Consola del administrador de paquetes`.
   - En la consola, ejecuta el siguiente comando para verificar si tienes .NET instalado:
     ```bash
     dotnet
     ```
   - Si .NET no está instalado, instálalo con:
     ```bash
     dotnet tool install --global dotnet-ef
     ```

4. **Creación de la base de datos:**
   - Asegúrate de que tienes .NET instalado y luego ejecuta el siguiente comando en la consola para crear la base de datos en PostgreSQL basada en la clase `Posts` que se encuentra en la carpeta `Models`:
     ```bash
     dotnet ef database update firsmigration --project ChallengeApi.csproj
     ```

5. **Verificación de la base de datos:**
   - Verifica que la base de datos y la tabla se hayan creado correctamente en tu servidor de PostgreSQL.

6. **Levantamiento del backend:**
   - Presiona la tecla `F5` para levantar el backend.

## Configuración del Frontend

1. **Abrir el proyecto en Visual Studio Code:**
   - Navega a la carpeta `frontend` y abre la carpeta `post-app` en Visual Studio Code.

2. **Instalación de paquetes npm:**
   - Abre un nuevo terminal en Visual Studio Code.
   - Ejecuta el siguiente comando para instalar los paquetes npm:
     ```bash
     npm install
     ```

3. **Levantamiento del frontend:**
   - Una vez finalizada la instalación de paquetes, ejecuta el siguiente comando para levantar el frontend:
     ```bash
     ng serve -o
     ```
Y ahora a probar las opciones.
