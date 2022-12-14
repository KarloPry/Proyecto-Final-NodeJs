-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 14-12-2022 a las 01:12:11
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recursoshumanos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `idEmpleado` int(11) NOT NULL,
  `nombreEmpleado` varchar(50) NOT NULL,
  `apellidosEmpleado` varchar(75) NOT NULL,
  `telefonoEmpleado` varchar(15) NOT NULL,
  `correoEmpleado` varchar(40) NOT NULL,
  `direccionEmpleado` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de empleados administrados por usuarios de RH';

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`idEmpleado`, `nombreEmpleado`, `apellidosEmpleado`, `telefonoEmpleado`, `correoEmpleado`, `direccionEmpleado`) VALUES
(1, 'Karlo', 'Paz Pérez', '2147483647', 'karlopazperez@gmail.com', 'Benito Juárez Sur 22, Pradera, Querétaro'),
(4, 'Sofia', 'Romero Cid', '4423615671', 'sofrocid@gmail.com', 'Constituyentes 22, Lomas, Quéretaro'),
(5, 'Frida', 'López Ruiz', '4423850138', 'fridalr@hotmail.com', 'Teotihuacan 234, Juriquilla, Querétaro'),
(6, 'Carlos', 'Mendoza Gutierrez', '7493253850', 'crlsmndzgtrz@gmail.com', 'Reforma 390, Tuxpan, Querétaro'),
(7, 'Eduardo', 'Tapia Olivera', '4450982371', 'tapiaoledu@outlook.com', 'Paseo Santini 75, Caletto, Querétaro'),
(8, 'Lucero', 'Castillo Carrasco', '4423891274', 'cascalu@gmail.com', 'Marte 98, Milpan, Querétaro'),
(9, 'Azul María', 'Hernandez Gutierrez', '5532573377', 'azulgh@gmail.com', 'Avenida revolución 89, Rosas, Querétaro'),
(10, 'Caleb', 'Figueroa Lemus', '4719384607', 'kalebfile@outlook.com', 'Avenida Nacional 74, San Lorenzo, Querétaro'),
(11, 'Francisco', 'Peréz Mijangos', '5678930259', 'permijfran@gmail.com', 'Valle Hermoso 91, Tlanepantla, Querétaro'),
(12, 'Primavera', 'Muñoz Juárez', '8465729402', 'primuju219@gmail.com', 'Santander 34, Cubasa, Querétaro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(50) NOT NULL,
  `correoUsuario` varchar(40) NOT NULL,
  `contraseñaUsuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Tabla de usuarios para ingresar a la plataforma de RH';

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombreUsuario`, `correoUsuario`, `contraseñaUsuario`) VALUES
(1, 'Karlo', 'karlopazpory@gmail.com', '1234'),
(2, 'Mauricio Ibarra Corona', 'maucorona@gmail.com', '123456789');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`idEmpleado`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `idEmpleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
