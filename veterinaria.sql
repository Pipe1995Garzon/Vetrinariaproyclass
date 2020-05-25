/*
SQLyog Community v13.1.0 (64 bit)
MySQL - 10.1.34-MariaDB : Database - veterinaria
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

/*Table structure for table `articulos` */

DROP TABLE IF EXISTS `articulos`;

CREATE TABLE `articulos` (
  `id_articulos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_a` varchar(100) DEFAULT NULL,
  `articulo` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_articulos`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `articulos` */

insert  into `articulos`(`id_articulos`,`nombre_a`,`articulo`) values 
(1,'Antes de adquirir a un cachorro','Antes de seleccionar al cachorro debemos considerar que este nuevo integrante de la familia significa una responsabilidad y un compromiso con el perro, con la comunidad y con uno mismo.\r\n\r\nEl tipo de perro que adquiriremos los debemos meditar antes de adquirirlo, si nuestro estilo de vida es muy activo, salimos a correr por las mañanas, salimos al campo los fines de semana un perro deportista y activo puede ser nuestra mejor opción, si por el contrario somos sedentarios y solo practicamos pequeñas caminatas una raza menos activa.\r\n\r\nLa selección de la raza es importante ya que los perros no solo son diferentes en su estructura además tenemos relativa certeza del comportamiento dependiendo de la raza, por ejemplo si deseamos un perro amable y juguetón  con los niños el bóxer, el cobrador de labrador pueden ser excelentes opciones, si lo que buscamos es un perro que nos proteja un doberman o un rotwellier pueden ser excelentes para tales fines. El pelo es importante ya que hay gente que '),
(2,'Agresión territorial en el perro.','Entre los mamíferos que suelen “pensar con la nariz” no es de sorprenderse que desempeñen un gran papel la demarcación territorial “olfativa”, el territorio lo determinan las circunstancias de la combatividad ya que esta es máxima en el lugar mas familiar, esto es en el lugar donde se sienten mas seguros.  A mayor distancia de su “cuartel general” menor es la disposición combatiente y mayor es el efecto de desconocimiento e inquietud.  Al acercarse al centro del territorio que el incremento es tal que compensa todas las diferencias de fuerza y tamaño entre los animales adultos y sexualmente maduros de una especie.\r\n\r\nComo animal con instinto gremial el perro tiende a defender a los miembros de su grupo así como al área que ocupa él mismo, sin embargo, esto varia por la predisposición genética de raza a proteger, así como el reforzamiento que se haya dado en el aprendizaje.  Para mucha gente el papel que juega el perro en la defensa de su casa es de vital importancia,  pero para otros d'),
(6,'Cuando el cachorro llega a casa.','..');

/*Table structure for table `articulos_gatos` */

DROP TABLE IF EXISTS `articulos_gatos`;

CREATE TABLE `articulos_gatos` (
  `id_ag` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ag` varchar(100) DEFAULT NULL,
  `articulo_g` varchar(2000) DEFAULT NULL,
  `nombre_tgatos` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_ag`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `articulos_gatos` */

insert  into `articulos_gatos`(`id_ag`,`nombre_ag`,`articulo_g`,`nombre_tgatos`) values 
(1,' ¿Cómo disminuir el estrés de los gatos durante su visita a la clínica veterinaria?','1) Introducción\r\nLos gatos son las mascotas más populares en muchos países y su popularidad continua creciendo a nivel mundial. Muchas personas aman a sus gatos y el 78% los considera como un miembro más de la familia. Adicional a esto grandes avances en la medicina felina han ocurrido en los últimos años. A pesar de esto el gato aún continua siendo incomprendido y desatendido en los cuidados veterinarios que necesita.\r\n\r\nImportancia del manejo preventivo\r\nEstudios recientes han identificado las razones de por qué los gatos no reciben la atención necesaria. Una encuesta realizada a más de 1000 amantes de los gatos en los EE.UU. indicó que el 58% de los gatos odian ir al veterinario. El reto para los clientes empieza en casa, tratando de conseguir que su gato entre en la transportadora. Siguiendo con un paseo en coche desagradable, el gato actúa en el consultorio veterinario en formas que nunca le habían visto y la dificultad de reintegrar a los gatos cuando vuelven a casa después de una estancia en el hospital veterinario. Es comprensible que muchas personas no quieren llevar a sus gatos al veterinario para la atención médica de rutina. Comparando esto con la mayoría de los perros, se emocionan por salir, dar un paseo en coche, conocer gente nueva y obtener golosinas como delicias en el consultorio veterinario. La gente los lleva aproximadamente el doble de frecuencia que a los gatos.',NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `citas` */

insert  into `citas`(`id_citas`,`id_cliente`,`mascota`,`descripcion`,`fecha`,`precio`,`tipo`,`estado`,`hora`) values 
(1,1,'tobi','una mascota cafe','2020-05-04',20000,'Normal','','06:30:00'),
(2,2,'gusi','baño','2020-05-31',30000,'Normal','','17:00:00'),
(3,3,'Mota','Baño urgente','2020-02-28',20000,'Normal','Activa','07:30:00'),
(4,4,'lol','baño','2020-02-28',30000,'Normal','Activa','07:35:00'),
(5,5,'Estrella','Baño urgente','2020-02-07',20000,'Normal','Activa','19:50:00');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `empleados` */

insert  into `empleados`(`id_empleados`,`nombre`,`apellido`,`cedula`,`cargo`) values 
(2,'manuela','garcia',1009876543,'Aseadora'),
(3,'andres','garcia',1003678907,'Domiciliario');

/*Table structure for table `info1` */

DROP TABLE IF EXISTS `info1`;

CREATE TABLE `info1` (
  `id_index` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) DEFAULT NULL,
  `titulo1` varchar(100) DEFAULT NULL,
  `titulo2` varchar(100) DEFAULT NULL,
  `titulobutton1` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `info1` */

insert  into `info1`(`id_index`,`img`,`titulo1`,`titulo2`,`titulobutton1`) values 
(1,NULL,'bienvenidos','nuestros servicios','ver servicio');

/*Table structure for table `info_gatos` */

DROP TABLE IF EXISTS `info_gatos`;

CREATE TABLE `info_gatos` (
  `id_gatos` int(11) NOT NULL AUTO_INCREMENT,
  `tema_gatos` varchar(500) DEFAULT NULL,
  `fecha_gatos` date DEFAULT NULL,
  PRIMARY KEY (`id_gatos`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `info_gatos` */

insert  into `info_gatos`(`id_gatos`,`tema_gatos`,`fecha_gatos`) values 
(1,'Los gatos son mascotas muy ágiles y debemos impulsarlos a que hagan ejercicio todos los días para que liberen su energía? Esto dependerá de cada gatito y de los hábitos de la familia con la que viven, sin embargo, en la mayoría de los casos, unos minutos de actividad física serán positivos en el comportamiento del felino.\r\n','2020-05-11');

/*Table structure for table `info_mascota_no_tradicional` */

DROP TABLE IF EXISTS `info_mascota_no_tradicional`;

CREATE TABLE `info_mascota_no_tradicional` (
  `id_info_mascota` int(11) NOT NULL AUTO_INCREMENT,
  `tema_mascota` varchar(500) DEFAULT NULL,
  `fecha_mnt` date DEFAULT NULL,
  PRIMARY KEY (`id_info_mascota`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `info_mascota_no_tradicional` */

insert  into `info_mascota_no_tradicional`(`id_info_mascota`,`tema_mascota`,`fecha_mnt`) values 
(1,'Por qué es importante lavarse las manos después de jugar con nuestras mascotas? Todo el día estamos en contacto con nuestras queridas mascotas, especialmente en estos días de cuarentena generada por la contingencia del COVID-19. Tenemos que estar conscientes de que ahora y siempre, es muy importante la higiene para evitar contagiarnos de cualquier enfermedad.','2020-05-23');

/*Table structure for table `info_perros` */

DROP TABLE IF EXISTS `info_perros`;

CREATE TABLE `info_perros` (
  `id_perros` int(11) NOT NULL AUTO_INCREMENT,
  `tema` varchar(500) DEFAULT NULL,
  `fecha_perros` date DEFAULT NULL,
  PRIMARY KEY (`id_perros`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `info_perros` */

insert  into `info_perros`(`id_perros`,`tema`,`fecha_perros`) values 
(1,'En el caso de los perros, el olfato es su sentido más desarrollado. Pueden reconocer olores específicos a grandes distancias, lo que les permite relacionarse y reconocer fácilmente lo que tienen a su lado. Esto es útil para reaccionar ante situaciones de peligro, estrés, apareamiento y en su diario vivir.','2020-05-22');

/*Table structure for table `instalaciones` */

DROP TABLE IF EXISTS `instalaciones`;

CREATE TABLE `instalaciones` (
  `id_instalaciones` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(100) DEFAULT NULL,
  `instalacion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_instalaciones`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `instalaciones` */

insert  into `instalaciones`(`id_instalaciones`,`imagen`,`instalacion`) values 
(1,'/images/bienvenida.jpg','Bienvenida.'),
(2,'/images/recepcion1.jpg','recepción');

/*Table structure for table `mascotas_no_tradicionales` */

DROP TABLE IF EXISTS `mascotas_no_tradicionales`;

CREATE TABLE `mascotas_no_tradicionales` (
  `id_mnt` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_m` varchar(100) DEFAULT NULL,
  `articulo_m` varchar(1000) DEFAULT NULL,
  `nombre_temas` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_mnt`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `mascotas_no_tradicionales` */

insert  into `mascotas_no_tradicionales`(`id_mnt`,`nombre_m`,`articulo_m`,`nombre_temas`) values 
(1,'Hurones','Los hurones (Mustela putorius furo) son los descendientes domesticados del turon europeo (Mustela putorius), se habla de que fue domesticado desde hace 2000años; el huron  se ha utilizado para cazar conejos, ratas y para realizar carreras.\r\n\r\nExiste el color blanco, albino, ante natural con puntos oscuros.\r\n\r\nLos hurones son imprevisibles en su comportamiento, la mayoría son dóciles y se acostumbran al manejo, pueden convivir con perros y gatos pero si se les incita pueden lesionarse mutuamente.\r\n\r\nNutrición\r\nLos hurones son carnívoros auténticos, necesitan una dieta elevada en proteínas 30% y grasas 30%, reducida en carbohidratos /fibra. Puede ser alimentado con comida de gato de buena calidad.\r\n\r\nSe recomienda dar alimento una vez al día y agua a libre acceso.\r\n\r\nManejo\r\nPara manejar al hurón se sujeta por el cuello, con una mano  y con la otra se toma de la zona lumbar.',NULL);

/*Table structure for table `nosotros` */

DROP TABLE IF EXISTS `nosotros`;

CREATE TABLE `nosotros` (
  `id_nosotros` int(11) NOT NULL AUTO_INCREMENT,
  `imagen` varchar(100) DEFAULT NULL,
  `informacion` varchar(500) DEFAULT NULL,
  `mision` varchar(500) DEFAULT NULL,
  `vision` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id_nosotros`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `nosotros` */

insert  into `nosotros`(`id_nosotros`,`imagen`,`informacion`,`mision`,`vision`) values 
(1,'/images/equipo.jpg','Contamos con casos de éxito desde 2010. \r\n','Proporcionar servicios integrales de la más alta calidad para las mascotas a través de sistemas preventivos, emergentes y de medicina interna para así mejorar la salud de las personas incrementando la relación Humano-Animal.','Contar con un Hospital Veterinario de Especialidades único en la zona, con  sucursales que abarquen toda el área metropolitana, satisfaciendo la necesidad de servicios veterinarios para personas que buscan trato profesional y especializado.');

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
  `nombreProducto` varchar(100) DEFAULT NULL,
  `codigo` int(11) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  PRIMARY KEY (`id_productos`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `productos` */

insert  into `productos`(`id_productos`,`nombreProducto`,`codigo`,`precio`,`categoria`,`fecha_vencimiento`) values 
(1,'concentrado perros',3434,85000,'Alimentos','2021-08-23');

/*Table structure for table `proveedores` */

DROP TABLE IF EXISTS `proveedores`;

CREATE TABLE `proveedores` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `proveedor` varchar(100) DEFAULT NULL,
  `nit` int(100) DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `proveedores` */

insert  into `proveedores`(`id_proveedor`,`proveedor`,`nit`) values 
(1,'Wayne',200698),
(2,'Chemunex',200456),
(3,'Chalve',300547);

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

/*Table structure for table `servicios` */

DROP TABLE IF EXISTS `servicios`;

CREATE TABLE `servicios` (
  `id_servicios` int(11) NOT NULL AUTO_INCREMENT,
  `servicio` varchar(100) DEFAULT NULL,
  `descripcion` varchar(800) DEFAULT NULL,
  PRIMARY KEY (`id_servicios`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `servicios` */

insert  into `servicios`(`id_servicios`,`servicio`,`descripcion`) values 
(1,'Medicina preventiva ','En la Clínica Veterinaria contamos con excelentes programas de medicina preventiva como es la aplicación de vacunas para perros, gatos y hurones de los laboratorios más reconocidos y con los distribuidores  del ramo que se han destacado por el mantenimiento de la cadena fría para que los biológicos al ser aplicados a su mascota se encuentren en perfectas condiciones.'),
(2,'Consulta','La Clínica Veterinaria cuenta con médicos veterinarios expertos en diferentes disciplinas y con la metodología necesaria para llegar a los diagnósticos que permitirán enfocar los tratamientos de manera eficiente y oportuna, seguimos a detalle el expediente clínico orientado a problemas, en el que al conjuntar los datos generales, la historia clínica y el examen clínico podemos arrojar la lista de problemas que nos permitirá agrupar los signos de acuerdo a problemas específicos y recomendar las pruebas de laboratorio e imageniología complementarias.\r\n\r\nLa parte más importante de un estetoscopio es lo que esta en medio de las olivas.'),
(3,'Estética','La Veterinaria MyDogs cuenta con expertos estilistas en el arreglo de todas las razas de perros y gatos, las mascotas son bañadas con agua caliente y los shampoo y jabones de la más alta calidad.');

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
('t1HXzvlaDYUgdkx9OskrhKzlzWUrEq5R',1590522884,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":26}}'),
('ujT1L9zZU_SJUlc2u52ANJnf-eRq_znc',1590494649,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{},\"passport\":{\"user\":26}}');

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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id`,`nombre`,`pass`,`rol_id`,`nombres`,`edad`,`identificacion`,`telefono`) values 
(1,'pipe','12345',1,'andres felipe ',22,1081159050,8756967),
(12,'Guerlid200','123',3,'Guerlid Leguizamo',40,2147483647,2147483647),
(17,'Leonardo','$2b$10$7gCE4fZD4Toh8mdKNvCU9eL/0BtM4vAzCCGM6ENzzCVuDd6EXYjsK',3,'Leonardo Jimenez',36,3654565,2147483647),
(20,'Jeffrey','$2b$10$GAS5GJ3SyWoV.DMXg19qiOzBEi5M6Vkef8zwBOF8Ezzl6KHS4keDC',2,'Jefre Diaz',19,129083084,2147483647),
(21,'Maritza ','$2b$10$ROsO6g4.45r2ZuaFDJs42ewuSjO292gK2qVnJhBNtVILZyIVXV.U2',3,'Martiza Mendez',19,12389483,2147483647),
(23,'Jaime','$2b$10$SmsfvTujXiSsB8ac1eXKoOR8Ap57GK3ztF.KIsovfsMKq00po4f4O',2,'Jaime Villalba',18,1239893,2147483647),
(24,'Juan','$2b$10$9LfjK6a5VMbsjHXqj9knVernHPplQU69LsUzRoG4rNGz8TQ/03r8m',2,'Juan Perdomo',23,12344422,2147483647),
(25,'Leonardo','$2b$10$s4dVT4Z9O5E4rs/RZr0VN.s2PRK/YKAS/bOd/PE2ZNrDzpF9mOzO6',3,'Leonardo Jimenez',35,10822352,2147483647),
(26,'stefany','$2b$10$exR3fcNva9X0KitN0IrO1uXIh4MEnhMjMYm9Vt0CY0ZMxVdfC75P6',3,'stefany rodriguez',20,1003811345,2147483647);

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
