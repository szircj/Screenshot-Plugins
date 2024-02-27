## Screenshot Plugins Unbutun 22.04

El Plugins de la Screenshot Funciona como Objetivo ver la pantalla del jugador por si esta utilizando Wallhack , modificaciones en el juego ect.
Fue Creado Para IW4admin soportable para CoD4.

## Requirimiento
Necesita Descargar el zip 
- [Screenshot-Plugins.git](https://github.com/szircj/Screenshot-Plugins.git) 

## Instalacion 
1.Con el Archivo descargado Necesitas Entrar a la carpeta de tu servidor o vps de linux entrar a la raiz de tu  `Iw4admin` folder y entrar a la Carpeta llamada
`Plugins` y añadir el archivo Javascript descargado `GetScreenshot.js`

Luego ir a la caperta `Configuration` y entrar `CommandConfiguration.json` 
en las ultimas lineas añadir esto.     
     
```
    
    "GetssallCommand": {
      "Name": "getssall",
      "Alias": "ssall",
      "MinimumPermission": "User",
      "AllowImpersonation": false,
      "SupportedGames": []
    
```
Luego entrar a la Base de tu juego CoD4 o CoD4x Crear una Carpeta llamada `screenshot`

2. Necesitas ahora entrar a la caperta llamada `root` de tu vps y pegar la carpeta que descargaste llamada `dirWatcher` pegarla todo

3. Necesitas Editar la carpeta llamada `config.json` y poner la ruta donde pusiste la carpeta screenshot en la raiz de tu Juego mostrare un ejemplo
 ``` "ssPaths": [
        "/home/ogp_agent/kfc_promod/screenshots",
```
Agregar en enlace discord si quieres ver la screenshot en Discord 

4. webhookUrl 

`],
    "copiar aqui el enlace del webhookurl de tu canal de discord"`
   

## Launching  
Con las Instalaciones realizada anteriormente se necesita Ejeucutar en el putty los comando y Ejecutarlo 

```console
cd /root/dirWatcher
```
Luego Ejecutar y poner 
```
ls
```
luego Realiza un estado si esta Encendido 
```
pm2 status
```
 y luego de eso 
 ```
 pm2 save
```

Te debe parecer un ejemplo asi 

| ID  NAME   (MODE)     |   Descripcion         |                                    
|-----------------------|-----------------------|
| 0                     |     0%                |
| watcher               |    0%                 |    
| fork                  |   online              |     
|  memory               |  66.0mb               |         

y ultimo comando 
```pm2 start /patth/to/watcher.js```

El GetScreenshot.js ya deberia estar Funcionando y corriendo **GetScreenshot.js**

## Help
* No dudes en unirte al **KFC Community** [Discord](https://discord.gg/DeZkVyrrrr)  
Si se encuentra con un problema, error o solicitud de función, publique un [problema](https://github.com/szircj/Screenshot-Plugins/issues)
