-- --------------------------------------------------------
-- Sunucu:                       127.0.0.1
-- Sunucu sürümü:                10.4.16-MariaDB - mariadb.org binary distribution
-- Sunucu İşletim Sistemi:       Win64
-- HeidiSQL Sürüm:               11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- backend_assignment.portfolios: ~11 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `portfolios` DISABLE KEYS */;
INSERT INTO `portfolios` (`id`, `FK_share_name`, `count`, `FK_shareholder_id`, `createdAt`, `updatedAt`) VALUES
	(1, 'ACK', 10, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(3, 'BUS', 20, 1, '0000-00-00 00:00:00', '2020-11-24 17:33:12'),
	(4, 'ABC', 45, 3, '0000-00-00 00:00:00', '2020-11-24 18:18:14'),
	(5, 'ACK', 21, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(6, 'AVN', 102, 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(7, 'AVN', 2000, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(8, 'BUS', 20, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(9, 'KLM', 200, 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(10, 'KLM', 24, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(13, 'BUS', 5, 7, '2020-11-24 16:24:14', '2020-11-24 17:31:37'),
	(14, 'KLM', 100, 7, '2020-11-24 17:54:06', '2020-11-24 17:54:06');
/*!40000 ALTER TABLE `portfolios` ENABLE KEYS */;

-- backend_assignment.shareholders: ~5 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `shareholders` DISABLE KEYS */;
INSERT INTO `shareholders` (`id`, `first_name`, `last_name`, `email`, `createdAt`, `updatedAt`) VALUES
	(1, 'John', 'Doe', 'johndoe@gmail.com', '2019-11-19 03:30:30', '2020-11-19 15:40:20'),
	(3, 'Büşra', 'Candan', 'busracandan@mail.com', '2020-11-19 16:14:33', '2020-11-19 16:14:33'),
	(5, 'Name', 'Surname', 'name@hotmail.com', '2020-11-21 19:51:28', '2020-11-21 19:51:28'),
	(6, 'Ahmet', 'Yılmaz', 'ahmet@gmail.com', '2020-11-21 20:09:24', '2020-11-21 20:09:24'),
	(7, 'Semih', 'Yılmaz', 'semih@outlook.com', '2020-11-24 19:11:08', '2020-11-24 19:11:08');
/*!40000 ALTER TABLE `shareholders` ENABLE KEYS */;

-- backend_assignment.shares: ~10 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `shares` DISABLE KEYS */;
INSERT INTO `shares` (`id`, `share_name`, `share_count`, `sum_of_sold`, `rate`, `createdAt`, `updatedAt`) VALUES
	(1, 'KLM', 5000, 324, 20, '0000-00-00 00:00:00', '2020-11-24 17:54:05'),
	(2, 'SER', 100, 99, 3, '0000-00-00 00:00:00', '2020-11-23 17:34:41'),
	(3, 'ACK', 50, 42, 9.1, '0000-00-00 00:00:00', '2020-11-24 14:16:51'),
	(4, 'AVN', 3500, 2102, 1.5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(5, 'VES', 60, 0, 150, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(6, 'BUS', 410, 245, 35, '0000-00-00 00:00:00', '2020-11-24 17:33:12'),
	(7, 'ERL', 630, 0, 14, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(10, 'ABC', 63, 45, 1, '0000-00-00 00:00:00', '2020-11-24 18:18:14'),
	(14, 'UNL', 2500, 0, 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(15, 'ATC', 500, 0, 2.5, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `shares` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
