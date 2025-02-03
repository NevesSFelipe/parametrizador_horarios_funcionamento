<!DOCTYPE html>
<html lang="pt-br">
    
    <head>
        <title>Thais Alves | Estética</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </head>
    
    <body>
    
        <div class="container mt-3">

            <div class="textos text-center mb-3">
        
                <h1 class="mb-2">Parametrização de Horários</h1>

                <h6>Parametrize os seus horarios de atendimentos para os dias da semana (Segunda - Sexta), Sábado, Domingo e Datas Especificas.</h6>

            </div>

            <form id="formParametrizador">

                <div class="card mb-2">

                    <div class="card-header">
                        Segunda à Sexta
                    </div>

                    <div class="row p-3">
                        
                        <div class="form-group col-md-4">
                            <label for="horaInicioSegundaSexta">Hora Inicio:</label>
                            <input type="time" class="form-control" id="horaInicioSegundaSexta" />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="horaFimSegundaSexta">Hora Fim:</label>
                            <input type="time" class="form-control" id="horaFimSegundaSexta" />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="intervaloSegundaSexta">Intervalo (minutos):</label>
                            <input type="number" min="5" class="form-control" id="intervaloSegundaSexta" />
                        </div>

                    </div>

                </div>

                <div class="card mb-2">

                    <div class="card-header">
                        Sábado
                    </div>

                    <div class="row p-3">
                        
                        <div class="form-group col-md-4">
                            <label for="horaInicioSabado">Hora Inicio:</label>
                            <input type="time" class="form-control" id="horaInicioSabado" />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="horaFimSabado">Hora Fim:</label>
                            <input type="time" class="form-control" id="horaFimSabado" />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="intervaloSabado">Intervalo (minutos):</label>
                            <input type="number" min="5" class="form-control" id="intervaloSabado" />
                        </div>

                    </div>

                </div>

                <div class="card mb-2">

                    <div class="card-header">
                        Domingo
                    </div>

                    <div class="row p-3">
                        
                        <div class="form-group col-md-4">
                            <label for="horaInicioDomingo">Hora Inicio:</label>
                            <input type="time" class="form-control" id="horaInicioDomingo" />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="horaFimDomingo">Hora Fim:</label>
                            <input type="time" class="form-control" id="horaFimDomingo" />
                        </div>

                        <div class="form-group col-md-4">
                            <label for="intervaloDomingo">Intervalo (minutos):</label>
                            <input type="number" min="5" class="form-control" id="intervaloDomingo" />
                        </div>

                    </div>

                </div>

                <div id="cardDataEspecifica" class="card mb-2">

                    <div class="card-header">
                        Datas Específicas
                        <span class="float-right">
                            <i id="btnAdicionarCamposDataEspecifica" class="fa-solid fa-plus btn btn-primary"></i>
                        </span>
                    </div>

                </div>
                            
            </form>

            <button id="btnParametrizador" class="btn btn-primary mt-2 mb-3 w-100">Parametrizar</button>            
        
        </div>

        <!-- Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        
        <script src="https://kit.fontawesome.com/910e6444fa.js" crossorigin="anonymous"></script>

        <script type="module" src="assets/js/parametrizar.js?v=<?= time() ?>"></script>
        <script type="module" src="assets/js/dataEspecifica.js?v=<?= time() ?>"></script>

    </body>
</html>
