<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/index.css">
        <link rel="shortcut icon" href="./img/logo_GeoTrig.png" type="image/x-icon">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
        <title>GeoTrig</title>
    </head>
    <body>


        <header>
            <div class="contenedor-central">

                <div class="contenedor-img">
                    
                    <img src="./img/logo_GeoTrig.png" alt="Logo del citio web">

                </div>
                
                <a href="./"><H1>GEOTRIG</H1></a>

            </div>
        </header>
        
        <main>

            <div class="contenedor-central">

                <div class="contenedor-form_trig">
                    
                    <form>

                        <div class="contenedor_input">
                            <label for="hipotenusa">Hipotenusa</label>
                            <input type="number" name="hipotenusa" id="hipotenusa">    
                        </div>
                        
                        <div class="contenedor_input">
                            <label for="cateto1">Cateto 1</label>
                            <input type="number" name="cateto1" id="cateto1">
                        </div>
                        
                        <div class="contenedor_input">
                            <label for="cateto2">Cateto 2</label>
                            <input type="number" name="cateto2" id="cateto2">
                        </div>
                        
                        <div class="contenedor_button_confirmar">
                            <button type="button" class="button">Confirmar</button>
                        </div>
                        
                    </form>
                    
                </div>

                <div id="contenedor-trig" class="contenedor-trig">
                </div>

                <div class="contenedor-resp">
                    <h3></h3>
                </div>
                
            </div>
            
        </main>
        
        <script src="./js/validaciones.js"></script>
        <script src="./js/index.js"></script>

    </body>
</html>