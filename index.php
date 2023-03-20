<!DOCTYPE html>
<html lang="es" translate="yes">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/css-bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="./css/css-index.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
    <title>GeoTrig</title>
</head>
<body>

    <h1>Caluladora de triangulos</h1>

    <div class="contenedor-central">
        <div class="contenedor_form">
            <form class="form_preguntas mt-4" id="tipoDeTriangulo">

                <h2 id="pregunta">¿Qué tipo de triángulo es?</h2>

                <div class="form-check">
                    <input class="form-check-input" type="radio" id="triIsoseles" name="tipoDeTriangulo" value="2">
                    <label class="form-check-label" for="triIsoseles">
                    Triángulo isóseles
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" id="triEscaleno" name="tipoDeTriangulo" value="3">
                    <label class="form-check-label" for="triEscaleno">
                    Triángulo escaleno
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" id="triRectangulo" name="tipoDeTriangulo" value="4">
                    <label class="form-check-label" for="triRectangulo">
                    Triángulo rectángulo
                    </label>
                </div>
            </form>
            
        </div>
        

        <div class="d-flex justify-content-between mt-4">
            <button class="btn btn-outline-secondary" type="button">Anterior</button>
            <button class="btn btn-outline-primary ml-auto" type="button">Siguiente</button>
        </div>

        <div class="container-canvas justify-content-center d-flex mt-5 mb-5">

        </div>


        <!-- <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-secondary d-none" type="button">Anterior</button>
            <button class="btn btn-primary" type="button">Siguiente</button>
        </div> -->
        <!-- formulario para el triangulo isósceles -->
        <form class="mt-4" id="isosceles">
            <h2>triangulo isósceles</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="lado1">Lado 1:</label>
                        <input type="number" class="form-control" id="lado1_isosceles" name="lado1_isosceles" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="lado2">base:</label>
                        <input type="number" class="form-control" id="lado2_isosceles" name="lado2_isosceles" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="angulo1">Ángulo 1:</label>
                        <input type="number" class="form-control" id="angulo1_isosceles" name="angulo1_isosceles" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="angulo2">Ángulo 2:</label>
                        <input type="number" class="form-control" id="angulo2_isosceles" name="angulo2_isosceles" required>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <img style="width:15rem;height: 18rem;" src="./img/triangulo isosceles.png" alt="Imagen representativa del triángulo">
                </div>
            </div>
        </form>


        <!-- formulario para el triangulo escaleno -->
        <form class="mt-4" id="escaleno">
            <h2>triangulo escaleno</h2>
            <div class="form-group">
                <label for="lado1">Lado 1:</label>
                <input type="number" class="form-control" id="lado1_escaleno" name="lado1_escaleno" required>
            </div>
            
            <div class="form-group">
                <label for="lado2">Lado 2:</label>
                <input type="number" class="form-control" id="lado2_escaleno" name="lado2_escaleno" required>
            </div>
            
            <div class="form-group">
                <label for="lado3">Lado 3:</label>
                <input type="number" class="form-control" id="lado3_escaleno" name="lado3_escaleno" required>
            </div>
            
            <div class="form-group">
                <label for="angulo1">Ángulo 1:</label>
                <input type="number" class="form-control" id="angulo1_escaleno" name="angulo1_escaleno" required>
            </div>
            
            <div class="form-group">
                <label for="angulo2">Ángulo 2:</label>
                <input type="number" class="form-control" id="angulo2_escaleno" name="angulo2_escaleno" required>
            </div>
            
            <div class="form-group">
                <label for="angulo3">Ángulo 3:</label>
                <input type="number" class="form-control" id="angulo3_escaleno" name="angulo3_escaleno" required>
            </div>
            
            <!-- <button type="submit" class="btn btn-primary mt-4">Calcular</button> -->
        </form>

        <!-- formulario para el triangulo rectangulo -->
        <form class="mt-4" id="rectangulo">
            <h2>triangulo rectangulo</h2>
            <div class="form-group">
                <label for="cateto1">Cateto 1:</label>
                <input type="number" class="form-control" id="cateto1_rectangulo" name="cateto1_rectangulo" required>
            </div>
            
            <div class="form-group">
                <label for="cateto2">Cateto 2:</label>
                <input type="number" class="form-control" id="cateto2_rectangulo" name="cateto2_rectangulo" required>
            </div>
            
            <div class="form-group">
                <label for="hipotenusa">Hipotenusa:</label>
                <input type="number" class="form-control" id="hipotenusa_rectangulo" name="hipotenusa_rectangulo" required>
            </div>
            
            <div class="form-group">
                <label for="angulo1">Ángulo 1:</label>
                <input type="number" class="form-control" id="angulo1_rectangulo" name="angulo1_rectangulo" required>
            </div>
            
            <div class="form-group">
                <label for="angulo2">Ángulo 2:</label>
                <input type="number" class="form-control" id="angulo2_rectangulo" name="angulo2_rectangulo" required>
            </div>
            
            <!-- <button type="submit" class="btn btn-primary mt-4">Calcular</button> -->
        </form>

    </div>

    <!-- script de la calculadora -->
    <script src="./js/js-index.js"></script>
    <script src="./js/validaciones.js"></script>
    <script src="./js/calculador.js"></script>

    <script src="./js/js-bootstrap/bootstrap.min.js"></script>

</body>
</html>