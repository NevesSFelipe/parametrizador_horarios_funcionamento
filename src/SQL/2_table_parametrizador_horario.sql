CREATE TABLE parametrizador_horarios (
    id_parametrizador INT AUTO_INCREMENT PRIMARY KEY,
    dia_semana VARCHAR(50) NOT NULL,
    horarios_parametrizados JSON NOT NULL
);

INSERT INTO parametrizador_horarios (dia_semana, horarios_parametrizados) VALUES
('segundaSexta', JSON_OBJECT()),
('sabado', JSON_OBJECT()),
('domingo', JSON_OBJECT()),
('dataEspecifica', JSON_OBJECT());