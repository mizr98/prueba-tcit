# prueba-tcit

Lo primero es configurar el backend:
Para ello iremos abriremos la carpeta backend y haremos click en el archivo ChallengeApi.sln, una vez abramos la solucion nos iremos al archivo appsetting.json y reemplazaremos las variables $TU_BASE, $TU_USUARIO y $TU_PASSWORD con el valor que esten configurados de PostgreSQL.
Una vez realizado estos cambios abriremos la consolo de paquete nuget, para abrir esta consola se debe ir a la pestaña de herramientas "Administrador de paquetes nuget" y hacer click en la opcion "Consola del administrador de paquetes" una vez se abra la consola ejecutaremos el siguiente comando para verificar si tenemos instalado dotnet

```bash
$ dotnet
```

En caso de no estar instalado procederemos a instalarlo con el siguiente comando

```bash
$ dotnet tool install --global dotnet-ef
```

Luego de ya asegurarnos que tenemos dotnet instalado, ejecutaremos el siguiente script en la consolo para que se cree una base de datos en nuestro servidor de PostgreSQL en base a la clase 'Posts' que esta dentro de la carpeta 'Models'

```bash
$ dotnet ef database update firsmigration --project ChallengeApi.csproj
```

Una vez realizado esto verificar si en nuestro servidor de PostgreSQL se haya creado la base de datos y a su vez verificar si la tabla tambien se creo correctamente.

En caso de que esto sea exitoso pasaremos a levantar el backend apretando la tecla f5.

Una vez levantada la api nos toca levantar el frontend para ello ingresaremos a la carpeta frontend y abriremos la carpeta post-app dentro de visualstudio code
Ya con la carpeta abierta en el editor nos iremos a la pestaña de terminal y le damos a nuevo terminal, luego de eso ejecutaremos el siguiente comando en la termial para instalar los paquetes de npm
```bash
$ npm install
```

Esto puede tardar unos momentos y una vez termine ejecutaremos el siguiente comando para levantar el front end
```bash
$ ng serve -o
```
