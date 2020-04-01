/*
SQLyog Community v13.1.2 (64 bit)
MySQL - 10.1.36-MariaDB : Database - veterinaria
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`veterinaria` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `veterinaria`;

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `categoria` */

/*Table structure for table `citas` */

DROP TABLE IF EXISTS `citas`;

CREATE TABLE `citas` (
  `id_citas` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) DEFAULT NULL,
  `mascota` varchar(30) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `hora` time DEFAULT NULL,
  PRIMARY KEY (`id_citas`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `citas` */

insert  into `citas`(`id_citas`,`id_cliente`,`mascota`,`descripcion`,`fecha`,`precio`,`tipo`,`estado`,`hora`) values 
(1,1,'tobi','una mascota cafe','2020-02-29',20000,'Normal','Activa','06:30:00'),
(2,2,'gusi','baño','0000-00-00',30000,'Normal','Activa','17:00:00'),
(3,3,'Mota','Baño urgente','2020-02-28',20000,'Normal','Activa','07:30:00'),
(4,4,'lol','baño','2020-02-28',30000,'Normal','Activa','07:35:00'),
(5,5,'Estrella','Baño urgente','2020-02-07',20000,'Normal','Activa','19:50:00'),
(6,6,'Saponaru','Tratamiento con pulgas','2020-03-12',20000,'Tratamiento','Activa','16:00:00'),
(7,7,'pepe','castracion','2020-02-29',50000,'Tratamiento','Activa','07:45:00');

/*Table structure for table `clientes` */

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) DEFAULT NULL,
  `Apellido` varchar(30) DEFAULT NULL,
  `Telefono` int(11) DEFAULT NULL,
  `Direccion` varchar(50) DEFAULT NULL,
  `CC` int(11) DEFAULT NULL,
  KEY `id_clientes` (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `clientes` */

insert  into `clientes`(`id_cliente`,`Nombre`,`Apellido`,`Telefono`,`Direccion`,`CC`) values 
(1,'Felipe ','Garzon',2147483647,NULL,0),
(2,'Maria','Martinez',2147483647,NULL,26583964),
(3,'Yesinia','Gomes',36995554,NULL,25423652),
(4,'Carolina','Torres',2147483647,NULL,102369785),
(5,'Soraya','Milred',8796321,NULL,12369632),
(6,'Sebatian','Torres',8975654,NULL,2265425),
(7,'Geraldine','Trujillo',2147483647,NULL,56987456);

/*Table structure for table `diagnostico` */

DROP TABLE IF EXISTS `diagnostico`;

CREATE TABLE `diagnostico` (
  `id_diagnostico` int(11) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `tratamiento_seguir` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `diagnostico` */

/*Table structure for table `empleados` */

DROP TABLE IF EXISTS `empleados`;

CREATE TABLE `empleados` (
  `id_empleados` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `cedula` int(11) DEFAULT NULL,
  `cargo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_empleados`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `empleados` */

/*Table structure for table `motos` */

DROP TABLE IF EXISTS `motos`;

CREATE TABLE `motos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(30) DEFAULT NULL,
  `linea` varchar(30) DEFAULT NULL,
  `cilindraje` varchar(30) DEFAULT NULL,
  `matricula` varchar(10) DEFAULT NULL,
  `fechamatricula` date DEFAULT NULL,
  `placa` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `motos` */

insert  into `motos`(`id`,`marca`,`linea`,`cilindraje`,`matricula`,`fechamatricula`,`placa`) values 
(1,'akt','flex','124 cc','DYN69D','2020-03-03','DYN69D'),
(2,'YAMAHA','Cripton','115','dfg69k','2020-03-02','dgj69k');

/*Table structure for table `pedidos` */

DROP TABLE IF EXISTS `pedidos`;

CREATE TABLE `pedidos` (
  `id_pedidos` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `id_proveedor` int(11) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `pedidos` */

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id_productos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  PRIMARY KEY (`id_productos`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `productos` */

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `roles` */

/*Table structure for table `secretaria` */

DROP TABLE IF EXISTS `secretaria`;

CREATE TABLE `secretaria` (
  `id_secretaria` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `fechanacimiento` date DEFAULT NULL,
  `fechacreacion` date DEFAULT NULL,
  `identificacion` int(11) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_secretaria`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `secretaria` */

insert  into `secretaria`(`id_secretaria`,`usuario`,`clave`,`nombres`,`apellidos`,`fechanacimiento`,`fechacreacion`,`identificacion`,`rol_id`) values 
(1,'Soraya','123','Soraya','Villalba','1993-08-27','2020-01-06',102552562,2),
(2,'Yesenia','147','Yesenia','Desconocida','1994-03-02','2020-02-10',1022663,2),
(5,'Caribu','ASLOJD7POSkk','Andrea','Lopez','1996-11-03','2018-10-04',10230332,2);

/*Table structure for table `sessions` */

DROP TABLE IF EXISTS `sessions`;

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sessions` */

insert  into `sessions`(`session_id`,`expires`,`data`) values 
('6Vf4obXBONqnDbBlFXVhMN6LkNBQ7xko',1584192009,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');

/*Table structure for table `tratamiento` */

DROP TABLE IF EXISTS `tratamiento`;

CREATE TABLE `tratamiento` (
  `id_tratamiento` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) DEFAULT NULL,
  `id_citas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_tratamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tratamiento` */

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `identificacion` int(11) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`nombre`,`pass`,`rol_id`,`nombres`,`edad`,`identificacion`,`telefono`) values 
(1,'pepito','12345',1,'andres felipe ',22,1081159050,8756967),
(12,'Guerlid200','123',3,'Guerlid Leguizamo',40,2147483647,2147483647),
(17,'Leonardo','$2b$10$7gCE4fZD4Toh8mdKNvCU9eL/0BtM4vAzCCGM6ENzzCVuDd6EXYjsK',3,'Leonardo Jimenez',36,3654565,2147483647),
(20,'Jeffrey','$2b$10$GAS5GJ3SyWoV.DMXg19qiOzBEi5M6Vkef8zwBOF8Ezzl6KHS4keDC',2,'Jefre Diaz',19,129083084,2147483647),
(21,'Maritza ','$2b$10$ROsO6g4.45r2ZuaFDJs42ewuSjO292gK2qVnJhBNtVILZyIVXV.U2',3,'Martiza Mendez',19,12389483,2147483647),
(23,'Jaime','$2b$10$SmsfvTujXiSsB8ac1eXKoOR8Ap57GK3ztF.KIsovfsMKq00po4f4O',2,'Jaime Villalba',18,1239893,2147483647),
(24,'Juan','$2b$10$9LfjK6a5VMbsjHXqj9knVernHPplQU69LsUzRoG4rNGz8TQ/03r8m',2,'Juan Perdomo',23,12344422,2147483647),
(25,'Leonardo','$2b$10$s4dVT4Z9O5E4rs/RZr0VN.s2PRK/YKAS/bOd/PE2ZNrDzpF9mOzO6',3,'Leonardo Jimenez',35,10822352,2147483647);

/*Table structure for table `ventas` */

DROP TABLE IF EXISTS `ventas`;

CREATE TABLE `ventas` (
  `id_ventas` int(11) NOT NULL AUTO_INCREMENT,
  `id_productos` int(11) DEFAULT NULL,
  `id_citas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_ventas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `ventas` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
