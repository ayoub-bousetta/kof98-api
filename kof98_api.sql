-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 10, 2019 at 07:49 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kof98_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `blood_type`
--

DROP TABLE IF EXISTS `blood_type`;
CREATE TABLE IF NOT EXISTS `blood_type` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blood_type`
--

INSERT INTO `blood_type` (`id`, `name`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'O+'),
(4, 'AB'),
(5, 'O');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genders`
--

DROP TABLE IF EXISTS `genders`;
CREATE TABLE IF NOT EXISTS `genders` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genders`
--

INSERT INTO `genders` (`id`, `name`, `slug`) VALUES
(1, 'Male', 'male'),
(2, 'Female', 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_10_27_221308_players', 1),
(5, '2019_10_27_225547_weapons', 1),
(6, '2019_10_27_225832_bloodtypes', 1),
(7, '2019_10_27_230232_genders', 1),
(8, '2019_10_27_235234_add_slug_players', 1),
(9, '2019_10_27_235427_add_slug_genders', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
CREATE TABLE IF NOT EXISTS `players` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` date DEFAULT NULL,
  `height` double(8,2) NOT NULL,
  `weight` double(8,2) NOT NULL,
  `occupation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blood_type_id` int(11) NOT NULL,
  `weapon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fight_style` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `birthdate`, `height`, `weight`, `occupation`, `blood_type_id`, `weapon`, `fight_style`, `img`, `gender_id`, `created_at`, `updated_at`, `slug`) VALUES
(1, 'Leona Heidern', '2014-05-24', 145.00, 56.00, 'soldier', 1, '1', 'soldier', 'fighters/leona-heidern.jpg', 2, '2019-11-01 22:06:30', '2019-11-07 22:54:36', 'leona-heidern'),
(2, 'Andy Bogard', '2014-05-24', 145.00, 56.00, 'soldier', 1, '1', '1', 'fighters/andy-bogard.jpg', 1, '2019-11-01 22:07:10', '2019-11-01 22:07:10', 'andy-bogard'),
(7, 'Benimaru Nikaido', '1999-06-06', 180.00, 68.00, 'Model', 3, 'Electrical power', 'Shoot boxing (with his inborn electrical power); Muai Thay Kickboxing', 'fighters/benimaru-nikaido.jpg', 1, '2019-11-05 22:58:25', '2019-11-05 22:58:25', 'benimaru-nikaido'),
(10, 'Brian Battler', '1970-04-25', 219.00, 152.00, 'Football player', 5, NULL, 'Power Attacks', 'fighters/brian-battler.jpg', 1, '2019-11-05 23:08:25', '2019-11-05 23:08:25', 'brian-battler'),
(6, 'Athena Asamiya', '2002-03-14', 163.00, 49.00, 'Pop singer', 2, '', 'Psychic powers', 'fighters/athena-asamiya.jpg', 2, '2019-11-05 22:52:48', '2019-11-05 22:52:48', 'athena-asamiya'),
(8, 'Billy Kane', '1996-12-26', 179.00, 78.00, 'Geese Howard\'s personal attendant', 2, 'Santetsukon', 'Bojutsu', 'fighters/billy-kane.jpg', 1, '2019-11-05 23:01:26', '2019-11-05 23:01:26', 'billy-kane'),
(9, 'Mary Ryan', '1973-03-24', 168.00, 49.00, 'Private Detective', 2, 'gfj', 'Commando Sambo', 'fighters/mary-ryan.jpg', 2, '2019-11-05 23:05:20', '2019-11-06 20:17:32', 'mary-ryan'),
(11, 'Chang Koehan', '1960-10-21', 227.00, 203.00, 'Recidivist criminal, Taekwondo student', 2, 'Iron Ball', 'Power striking + some Taekwondo', 'fighters/chang-koehan.jpg', 1, '2019-11-05 23:10:03', '2019-11-05 23:10:03', 'chang-koehan'),
(12, 'Chin Gentsai', '1910-04-27', 164.00, 53.00, 'Recidivist criminal, Taekwondo student', 1, 'Sake bottle', 'All types of Chinese Kung Fu (mainly uses the Drunken Fist)', 'fighters/chin-gentsai.jpg', 1, '2019-11-05 23:11:31', '2019-11-05 23:11:31', 'chin-gentsai'),
(13, 'Chizuru Kagura', '1976-06-26', 169.00, 52.00, 'Owner of Kagura enterprises', 4, NULL, 'Kagura style of ancient martial arts', 'fighters/chizuru-kagura.jpg', 2, '2019-11-05 23:13:14', '2019-11-05 23:13:14', 'chizuru-kagura'),
(14, 'Choi Bounge', '1963-10-25', 153.00, 44.00, 'Recidivist criminal, Taekwondo Student, Butcher (Formerly)', 2, 'Steel claws', 'Speed brawling + some Taekwondo', 'fighters/choi-bounge.jpg', 1, '2019-11-05 23:15:02', '2019-11-05 23:15:02', 'choi-bounge'),
(15, 'Chris', '1984-05-03', 160.00, 48.00, 'Drummer of CYS', 4, NULL, 'Speedy Attacks', 'fighters/chris.jpg', 1, '2019-11-05 23:16:21', '2019-11-05 23:16:21', 'chris'),
(16, 'Geese Howard', '1953-01-21', 183.00, 82.00, 'CEO of Howard Connection', 2, NULL, 'Aiki-Jujutsu and chi techniques from the Hakkyokuseiken school', 'fighters/geese-howard.jpg', 1, '2019-11-05 23:17:58', '2019-11-05 23:17:58', 'geese-howard'),
(17, 'Goenitz', '1957-07-20', 193.00, 88.00, 'Heavenly king; priest', 2, NULL, 'Orochi Wind', 'fighters/goenitz.jpg', 1, '2019-11-05 23:19:00', '2019-11-05 23:19:00', 'goenitz'),
(18, 'Goro Daimon', '1970-05-28', 204.00, 103.00, 'Judo Master', 1, NULL, 'Judo with Personal Combat Style', 'fighters/goro-daimon.jpg', 1, '2019-11-05 23:20:06', '2019-11-05 23:20:06', 'goro-daimon'),
(19, 'Heavy D', '1970-03-25', 208.00, 113.00, 'Boxer', 1, NULL, 'Boxing', 'fighters/heavy-d.jpg', 1, '2019-11-05 23:21:08', '2019-11-05 23:21:08', 'heavy-d'),
(20, 'Heidern', '1989-09-01', 192.00, 90.00, 'Ikari Warriors Commander\r\n', 2, NULL, 'Martial arts + self taught assassination techniques', 'fighters/heidern.jpg', 1, '2019-11-05 23:22:39', '2019-11-05 23:22:39', 'heidern'),
(21, 'Iori Yagami', '1989-09-01', 182.00, 76.00, 'Musician', 5, NULL, 'Yagami style of ancient martial arts + pure instinct', 'fighters/iori-yagami.jpg', 1, '2019-11-05 23:23:37', '2019-11-05 23:23:37', 'iori-yagami'),
(22, 'Joe Higashi', '1972-03-29', 180.00, 72.00, 'Muay Thai Fighter', 4, NULL, 'Muay Thai', 'fighters/joe-higashi.jpg', 1, '2019-11-05 23:25:14', '2019-11-05 23:25:14', 'joe-higashi'),
(23, 'Kasumi Todoh', '1982-03-29', 154.00, 45.00, 'Student', 2, NULL, 'Todohryu Aikijutsu', 'fighters/kasumi-todoh.jpg', 2, '2019-11-05 23:27:11', '2019-11-05 23:27:11', 'kasumi-todoh'),
(24, 'King', '1976-04-22', 175.00, 58.00, 'Bar owner/bartender', 1, NULL, 'Muay Thai', 'fighters/king.jpg', 1, '2019-11-05 23:28:29', '2019-11-05 23:28:29', 'king'),
(25, 'Kyo Kusanagi', '1979-12-12', 181.00, 75.00, 'rider', 2, NULL, 'Kusanagi style of ancient martial arts + personal style of Chinese boxing', 'fighters/kyo-kusanagi.jpg', 1, '2019-11-05 23:31:25', '2019-11-05 23:31:25', 'kyo-kusanagi'),
(26, 'Lucky Glauber', '1971-12-02', 222.00, 105.00, 'Professional basketballer', 4, 'Basketball', 'Basketball + Karate', 'fighters/lucky-glauber.jpg', 1, '2019-11-05 23:34:16', '2019-11-05 23:34:16', 'lucky-glauber'),
(27, 'Mai Shiranui', '1974-01-01', 165.00, 48.00, 'Shiranui Ninja', 2, 'Butterfly Fan', 'Shiranui-ryuu Ninjutsu', 'fighters/mai-shiranui.jpg', 2, '2019-11-05 23:36:06', '2019-11-05 23:36:06', 'mai-shiranui'),
(28, 'Mature', '1973-04-08', 165.00, 48.00, 'Orochi assassin', 5, 'Lipstick and Powder Kit', 'Speedy Attacks', 'fighters/mature.jpg', 2, '2019-11-05 23:37:06', '2019-11-05 23:37:06', 'mature'),
(29, 'James', '1965-07-04', 187.00, 81.00, 'Crime leader', 2, 'Special Rattan Sticks', 'Eskrima', 'fighters/james.jpg', 1, '2019-11-05 23:38:24', '2019-11-05 23:38:24', 'james'),
(30, 'Rugal Bernstein', '1965-02-10', 197.00, 145.00, 'Drug dealer, cartel leader', 2, NULL, 'A composite fighting style mastering all fighting styles', 'fighters/rugal-bernstein.jpg', 1, '2019-11-05 23:40:07', '2019-11-05 23:40:07', 'rugal-bernstein'),
(31, 'Yamata no Orochi', '1973-02-10', 197.00, 145.00, 'Killer', 5, NULL, 'Divine Orochi Power', 'fighters/yamata-no-orochi.jpg', 1, '2019-11-05 23:41:12', '2019-11-05 23:41:12', 'yamata-no-orochi'),
(32, 'Orochi Chris', '1984-05-10', 160.00, 48.00, 'Heavenly King of Orochi', 4, NULL, 'Orochi Flame', 'fighters/orochi-chris.jpg', 1, '2019-11-05 23:42:42', '2019-11-05 23:42:42', 'orochi-chris'),
(33, 'Orochi Shermie', '1976-02-13', 173.00, 68.00, 'Heavenly King of Orochi', 2, NULL, 'Orochi Lightning', 'fighters/orochi-shermie.jpg', 2, '2019-11-05 23:43:43', '2019-11-05 23:43:43', 'orochi-shermie'),
(34, 'Orochi Yashiro', '1976-12-31', 190.00, 99.00, 'Heavenly King of Orochi', 5, NULL, 'Orochi Terra', 'fighters/orochi-yashiro.jpg', 1, '2019-11-05 23:44:41', '2019-11-05 23:44:41', 'orochi-yashiro'),
(35, 'Ralf Jones', '1992-08-25', 188.00, 110.00, 'Ikari Warrior Colonel', 1, 'Pistols, rifles, machine guns, knives and grenades', 'Mercenary Combat', 'fighters/ralf-jones.jpg', 1, '2019-11-05 23:45:49', '2019-11-05 23:45:49', 'ralf-jones'),
(36, 'Orochi Iori', '1965-03-25', 182.00, 76.00, 'musician', 1, 'Purple Flames', 'Instinct', 'fighters/orochi-iori.jpg', 1, '2019-11-05 23:50:36', '2019-11-05 23:50:36', 'orochi-iori'),
(37, 'Orochi Leona', '1965-01-10', 176.00, 66.00, 'Ikari Warrior soldier', 2, 'Explosive earings, flashbang earings, special boots, throwing hairpin', 'Martial arts', 'fighters/orochi-leona.jpg', 2, '2019-11-05 23:51:38', '2019-11-05 23:51:38', 'orochi-leona'),
(38, 'Robert Garcia', '1976-12-25', 180.00, 85.00, 'Successor of the Garcia Foundation', 4, NULL, 'Kyokugenryu Karate', 'fighters/robert-garcia.jpg', 1, '2019-11-05 23:52:40', '2019-11-05 23:52:40', 'robert-garcia'),
(39, 'Ryuji Yamazaki', '1963-08-08', 192.00, 110.00, 'Gangster, Assassin, Dojo Buster', 1, 'Knife', 'Personal art of combative homicide', 'fighters/ryuji-yamazaki.jpg', 1, '2019-11-05 23:53:54', '2019-11-05 23:53:54', 'ryuji-yamazaki'),
(40, 'Saisyu Kusanagi', '1948-08-08', 177.00, 69.00, 'Leader of the Kusanagi clan', 1, NULL, 'Kusanagi style of ancient martial arts', 'fighters/saisyu-kusanagi.jpg', 1, '2019-11-05 23:55:05', '2019-11-05 23:55:05', 'saisyu-kusanagi'),
(41, 'Shermie', '1977-02-12', 177.00, 69.00, 'Fashion designer', 2, NULL, 'Throw attacks', 'fighters/shermie.jpg', 2, '2019-11-05 23:56:07', '2019-11-05 23:56:07', 'shermie'),
(42, 'Shingo Yabuki', '1981-04-08', 179.00, 71.00, 'Student', 5, NULL, 'Chinese boxing', 'fighters/shingo-yabuki.jpg', 1, '2019-11-05 23:57:33', '2019-11-05 23:57:33', 'shingo-yabuki'),
(43, 'Sie Kensou', '1977-09-23', 172.00, 61.00, 'Student', 2, NULL, 'Wing Chun + Chinese Kung Fu', 'fighters/sie-kensou.jpg', 1, '2019-11-05 23:59:27', '2019-11-05 23:59:27', 'sie-kensou'),
(44, 'Takuma Sakazaki', '1950-02-04', 180.00, 88.00, 'Dojo owner', 5, NULL, 'Kyokugenryu Karate', 'fighters/takuma-sakazaki.jpg', 1, '2019-11-06 00:00:28', '2019-11-06 00:00:28', 'takuma-sakazaki'),
(45, 'Terry Bogard', '1971-03-15', 182.00, 77.00, 'part time work to get by', 5, NULL, 'Martial arts, Hakkyokuseiken chi techniques', 'fighters/terry-bogard.jpg', 1, '2019-11-06 00:01:30', '2019-11-06 00:01:30', 'terry-bogard'),
(46, 'Ryo Sakazaki', '1957-08-02', 179.00, 68.00, 'Dojo master', 5, NULL, 'Kyokugenryu Karate', 'fighters/ryo-sakazaki.jpg', 1, '2019-11-06 00:02:33', '2019-11-06 00:02:33', 'ryo-sakazaki'),
(47, 'Vice', '1971-09-28', 178.00, 59.00, 'Orochi assassin', 5, NULL, 'Power Attacks', 'fighters/vice.jpg', 2, '2019-11-06 00:03:40', '2019-11-06 00:03:40', 'vice'),
(48, 'Yuri Sakazaki', '1981-12-07', 168.00, 50.00, 'Student', 1, NULL, 'Kyokugenryu Karate + arrangement of personal styles', 'fighters/yuri-sakazaki.jpg', 2, '2019-11-06 00:05:30', '2019-11-06 00:05:30', 'yuri-sakazaki');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(7, 'Ayoub Bousetta', 'aubbusta@gmail.com', NULL, '$2y$10$uC7sQU/7EZ4rIAO1fnHWHusM0/3gnpuCIBxjF6jfEkJeT4GDfpzXy', '0', '2019-11-08 00:46:20', '2019-11-08 00:46:20');

-- --------------------------------------------------------

--
-- Table structure for table `weapons`
--

DROP TABLE IF EXISTS `weapons`;
CREATE TABLE IF NOT EXISTS `weapons` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
