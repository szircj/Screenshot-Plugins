## [English Documentation](https://github.com/szircj/Screenshot-Plugins/blob/master/README.md#ENGLISH-DOCUMENTATION-1) 
## [Spanish Documentation](https://github.com/szircj/Screenshot-Plugins/blob/master/README.md#Importante-DOCUMENTATION-1)

## Screenshot Plugins Cod4x Linux


## Importante
Necesitas Instalar NodeJS v18-v (muy IMPORTANTE INSTALARLO Y TENER LA VERSION V18)
- [Documentacion Guia](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04)



El Plugins de la Screenshot Funciona como Objetivo ver la pantalla del jugador por si esta utilizando Wallhack , modificaciones en el juego ect.
Fue Creado Para CoD4 y Cod4x 
soporta la herramienta IW4MADMIN.

## Requirimiento
Necesita Descargar el zip 
- [Screenshot-Plugins.git](https://github.com/szircj/Screenshot-Plugins/archive/refs/heads/master.zip) 

## Instalacion 
1.Con el Archivo descargado Necesitas Entrar a la carpeta de tu servidor o vps de linux entrar a la raiz de tu  `Iw4admin` folder y entrar a la Carpeta llamada
`Plugins` y añadir el archivo Javascript descargado `GetScreenshot.js`

Luego ir a la caperta `Configuration` y entrar `CommandConfiguration.json` 
en las penultima lineas añadir esto.     

```
 "GetssCommand": {
      "Name": "getss",
      "Alias": "ss",
      "MinimumPermission": "User",
      "AllowImpersonation": false,
      "SupportedGames": []
    
```



luego de bajo este siguiente codigo
```
    
    "GetssallCommand": {
      "Name": "getssall",
      "Alias": "ssall",
      "MinimumPermission": "User",
      "AllowImpersonation": false,
      "SupportedGames": []
    
```

Luego Reinicia tu IW4MAdmin sigue con el siguiente paso.

Entrar a la Base de tu juego CoD4 o CoD4x Crear una Carpeta llamada `screenshot`

2. Necesitas ahora entrar a la caperta llamada `root` de tu vps y pegar la carpeta que descargaste llamada `dirWatcher` pegarla todo

3. Necesitas Editar la carpeta llamada `config.json` y poner la ruta donde pusiste la carpeta screenshot en la raiz de tu Juego mostrare un ejemplo

  `
 "ssPaths": [
        "/home/ogp_agent/kfc_promod/screenshots"
`

Agregar en enlace discord si quieres ver la screenshot en Discord 

5. webhookUrl 

`],
    "copiar aqui el enlace del webhookurl de tu canal de discord"`
   
luego de eso necesitas reiniciar el IW4admin.

## Launching
Con las Instalaciones realizada anteriormente se necesita Ejeucutar en el putty los comando y Ejecutarlo 

```console
cd /root/dirWatcher
```
Luego Ejecutar y poner 
```
npm install
```
luego ejecutar y poner 
```
npm install pm2@latest -g
```
 y luego ejecutar y poner 
 ```
 pm2 start watcher.js
```
y luego ejecutar y poner 
 ```
pm2 save
 ```

Te debe parecer un ejemplo asi 

| ID  NAME   (MODE)     |   Descripcion         |                                    
|-----------------------|-----------------------|
| cpu                   |     0%                |
| watcher               |    0%                 |    
| fork                  |   online              |     
|  memory               |  40.0mb               |         

y ultimo comandos para verificar si esta Funcionando "debe Reflejar un mensaje en el cuadrado que diga que esta `ONLINE`

```
pm2 status
```
y luego 
```
pm2 save
```

El GetScreenshot.js ya deberia estar Funcionando y corriendo **GetScreenshot.js**

## Help
* No dudes en unirte al **KFC Community** [Discord](https://discord.gg/DeZkVyrrrr)  
Si se encuentra con un problema, error o solicitud de función, publique un [problema](https://github.com/szircj/Screenshot-Plugins/issues)








## ENGLISH DOCUMENTATION

## Screenshot Plugins Cod4x Linux
 

## Important
You need to install NodeJS v18-v (VERY IMPORTANT TO INSTALL AND HAVE VERSION V18)
- [Documentation Guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04)

The Screenshot Plugin works as a tool to view the player's screen in case they are using Wallhack, game modifications, etc. It was created for CoD4 and Cod4x supports the IW4MADMIN tool.

## Requirements
You need to download the zip file
- [Screenshot-Plugins.git](https://github.com/szircj/Screenshot-Plugins/archive/refs/heads/master.zip)


## Execute the following commands on an SSH Client (PuTTY):
With the downloaded file, you need to enter the folder of your server or Linux VPS, go to the root of your `IW4admin` folder, and enter the folder called `Plugins`. Then, add the downloaded JavaScript file `GetScreenshot.js`.

Then, go to the `Configuration` folder and enter `CommandConfiguration.json`. Add this to the second-to-last lines:

```
 "GetssCommand": {
      "Name": "getss",
      "Alias": "ss",
      "MinimumPermission": "User",
      "AllowImpersonation": false,
      "SupportedGames": []
    
```

Immediately below this code:

```
    
    "GetssallCommand": {
      "Name": "getssall",
      "Alias": "ssall",
      "MinimumPermission": "User",
      "AllowImpersonation": false,
      "SupportedGames": []
    
```

Then, restart your IW4MAdmin and proceed to the next step.

Enter the root of your CoD4 or CoD4x game, create a folder called `screenshot`.

Now, you need to enter the root folder of your VPS and paste the downloaded `dirWatcher` folder.

Edit the folder named `config.json` and put the path where you placed the screenshot folder at the root of your game. Here's an example:

  `
 "ssPaths": [
        "/home/ogp_agent/kfc_promod/screenshots"
`

Add a Discord link if you want to view the screenshot on Discord:

5. webhookUrl 

`],
    "copiar aqui el enlace del webhookurl de tu canal de discord"`

After that, you need to restart IW4admin.

## Launching
With the installations done previously, you need to run the commands in Putty and execute it:

```console
cd /root/dirWatcher
```
Then, execute and enter:
```
npm install
```
Then, execute and enter:
```
npm install pm2@latest -g
```
Then, execute and enter:
 ```
 pm2 start watcher.js
```
Then, execute and enter:
 ```
pm2 save
 ```
You should see an example like this:

| ID  NAME   (MODE)     |   Descripcion         |                                    
|-----------------------|-----------------------|
| cpu                   |     0%                |
| watcher               |    0%                 |    
| fork                  |   online              |     
|  memory               |  40.0mb               | 

And the last commands to verify if it's working: "It should reflect a message in the box that says it's `ONLINE`.

```
pm2 status
```
And then
```
pm2 save
```

The GetScreenshot.js should already be working and running GetScreenshot.js.

## Help
* Feel free to join the **KFC Community** [Discord](https://discord.gg/DeZkVyrrrr)
If you encounter a problem, error, or feature request, please post an [issue](https://github.com/szircj/Screenshot-Plugins/issues).
