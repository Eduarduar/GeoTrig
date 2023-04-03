<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/index.css">
        <link rel="shortcut icon" href="./img/logo_GeoTrig.png" type="image/x-icon">
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
                            <label for="lado1">Lado 1</label>
                            <input type="number" name="lado1" id="lado1">    
                        </div>
                        
                        <div class="contenedor_input">
                            <label for="lado2">Lado 2</label>
                            <input type="number" name="lado2" id="lado2">
                        </div>
                        
                        <div class="contenedor_input">
                            <label for="base">Base</label>
                            <input type="number" name="base" id="base">
                        </div>
                        
                        <div class="contenedor_button_confirmar">
                            <button type="button" class="button">Confirmar</button>
                        </div>
                        
                    </form>
                    
                </div>

                <div class="contenedor-trig">
                    <canvas></canvas>
                </div>
                
            </div>
            
        </main>
        
        <script src="./js/validaciones.js"></script>
        <script src="./js/index.js"></script>

    </body>
</html>