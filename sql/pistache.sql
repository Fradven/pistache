-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 26, 2023 at 07:17 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pistache`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
CREATE TABLE IF NOT EXISTS `menus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(125) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(125) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `title`, `content`, `image`) VALUES
(1, 'Taste of Italy', '<p>\r\n  <strong>Starter:</strong> Bruschetta with Fresh Tomatoes and Basil\r\n</p>\r\n<p>\r\n  <strong>Main Course:</strong> Spaghetti Carbonara with Pancetta\r\n</p>\r\n<p>\r\n  <strong>Dessert:</strong> Tiramisu\r\n</p>', '/images/pictures/menu/taste_of_italy.jpg'),
(2, 'Asian Fusion Delight', '<p>\r\n  <strong>Starter:</strong> Vietnamese Spring Rolls with Peanut Dipping Sauce\r\n</p>\r\n<p>\r\n  <strong>Main Course:</strong> Thai Green Curry with Jasmine Rice\r\n</p>\r\n<p>\r\n  <strong>Dessert:</strong> Mango Sticky Rice\r\n</p>', '/images/pictures/menu/asian_fusion.jpg'),
(3, 'Classic American Feast', '<p>\r\n  <strong>Starter:</strong> Caesar Salad with Homemade Dressing\r\n</p>\r\n<p>\r\n  <strong>Main Course:</strong> Grilled Steak with Mashed Potatoes and Gravy\r\n</p>\r\n<p>\r\n  <strong>Dessert:</strong> New York Cheesecake\r\n</p>', '/images/pictures/menu/american_feast.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(125) COLLATE utf8mb4_general_ci NOT NULL,
  `admin_level` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user`, `password`, `admin_level`) VALUES
(1, 'a', '0cc175b9c0f1b6a831c399e269772661', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
