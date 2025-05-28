-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 28 2025 г., 16:33
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `UP05`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Departments`
--

CREATE TABLE `Departments` (
  `id` int NOT NULL COMMENT 'Id отделения',
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Departments`
--

INSERT INTO `Departments` (`id`, `name`) VALUES
(1, 'Вычислительная техника'),
(2, 'Не вычислительная техника1');

-- --------------------------------------------------------

--
-- Структура таблицы `DisabledSt`
--

CREATE TABLE `DisabledSt` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `orderNum` varchar(100) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `disabilityType` varchar(40) NOT NULL,
  `notes` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `DisabledSt`
--

INSERT INTO `DisabledSt` (`id`, `student_id`, `orderNum`, `startDate`, `endDate`, `disabilityType`, `notes`) VALUES
(1, 1, '1', '2025-05-04', '2025-05-31', 'не может ходить', 'нет'),
(3, 1, 'test1', '2025-05-10', '2025-05-29', 'test1', 'test1'),
(4, 1, 'test2', '2025-05-04', '2025-05-31', 'test2', 'test2');

-- --------------------------------------------------------

--
-- Структура таблицы `Dormitory`
--

CREATE TABLE `Dormitory` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `room_id` int NOT NULL,
  `orderNum` text NOT NULL,
  `checkInDate` date NOT NULL COMMENT 'дата заселения',
  `checkOutDate` date DEFAULT NULL COMMENT 'дата выселения',
  `notes` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Dormitory`
--

INSERT INTO `Dormitory` (`id`, `student_id`, `room_id`, `orderNum`, `checkInDate`, `checkOutDate`, `notes`) VALUES
(1, 1, 1, '', '2017-02-13', '2029-05-03', 'нет'),
(3, 1, 1, 'test', '2017-02-13', '2029-05-03', 'test'),
(7, 6, 2, 'test', '2017-02-13', '2029-05-03', 'test'),
(9, 2, 1, 'test2', '2017-02-13', '2029-05-03', 'test'),
(10, 4, 1, 'test4', '2017-02-13', '2029-05-03', 'test4');

-- --------------------------------------------------------

--
-- Структура таблицы `Errors`
--

CREATE TABLE `Errors` (
  `id` int NOT NULL,
  `errorMessage` varchar(70) NOT NULL COMMENT 'код ошибки',
  `timeError` timestamp NOT NULL,
  `details` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Errors`
--

INSERT INTO `Errors` (`id`, `errorMessage`, `timeError`, `details`) VALUES
(1, 'проверка', '2025-05-15 07:03:57', 'ничего');

-- --------------------------------------------------------

--
-- Структура таблицы `Files`
--

CREATE TABLE `Files` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `file_path` varchar(100) NOT NULL,
  `description` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status_type` enum('Сирота','Инвалид','ОВЗ','СВО','Социальная стипендия','Группа риска','Общежитие','СППП') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'модуль документа'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Files`
--

INSERT INTO `Files` (`id`, `student_id`, `file_path`, `description`, `status_type`) VALUES
(1, 1, 'https:/:/d[fgp[df', 'нет', 'Сирота');

-- --------------------------------------------------------

--
-- Структура таблицы `Orhaps`
--

CREATE TABLE `Orhaps` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `orderNum` varchar(100) NOT NULL COMMENT 'Номер заявляения в таблице документы',
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `notes` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Orhaps`
--

INSERT INTO `Orhaps` (`id`, `student_id`, `orderNum`, `startDate`, `endDate`, `notes`) VALUES
(1, 1, '1', '2017-11-09', '2025-08-13', 'нет'),
(3, 1, 'test2', '2025-05-01', '2025-05-31', 'test2'),
(4, 1, 'test3', '2017-11-09', '2025-08-13', 'test3');

-- --------------------------------------------------------

--
-- Структура таблицы `OVZS`
--

CREATE TABLE `OVZS` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `orderNum` varchar(100) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `notes` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `OVZS`
--

INSERT INTO `OVZS` (`id`, `student_id`, `orderNum`, `startDate`, `endDate`, `notes`) VALUES
(1, 1, '1', '2025-05-04', '2025-05-07', 'нет'),
(3, 1, 'test1', '2025-05-21', '2025-05-15', 'test1'),
(4, 1, 'test2', '2025-05-04', '2025-05-07', 'нет');

-- --------------------------------------------------------

--
-- Структура таблицы `RiskGroup`
--

CREATE TABLE `RiskGroup` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `orderNum` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` varchar(20) NOT NULL,
  `registrationDate` date NOT NULL,
  `removalDate` date NOT NULL,
  `reason` varchar(70) NOT NULL COMMENT 'причина постановки',
  `removalReason` varchar(70) NOT NULL COMMENT 'причина снятия',
  `notes` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `RiskGroup`
--

INSERT INTO `RiskGroup` (`id`, `student_id`, `orderNum`, `type`, `registrationDate`, `removalDate`, `reason`, `removalReason`, `notes`) VALUES
(1, 1, '0', 'СОП', '2016-02-10', '2028-09-21', 'нет причин', 'нет причин', 'нет'),
(3, 1, 'test1', 'test1', '2025-05-06', '2025-05-31', 'test1', 'test1', 'test1'),
(4, 1, 'test2', 'test2', '2016-02-10', '2028-09-21', 'test2', 'test2', 'test2');

-- --------------------------------------------------------

--
-- Структура таблицы `Rooms`
--

CREATE TABLE `Rooms` (
  `id` int NOT NULL,
  `name` int NOT NULL COMMENT 'номер комнаты',
  `capacity` int NOT NULL COMMENT 'количество мест'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Rooms`
--

INSERT INTO `Rooms` (`id`, `name`, `capacity`) VALUES
(1, 212, 4),
(2, 312, 2),
(4, 401, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `SocialScolarship`
--

CREATE TABLE `SocialScolarship` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `orderNum` varchar(100) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `SocialScolarship`
--

INSERT INTO `SocialScolarship` (`id`, `student_id`, `orderNum`, `startDate`, `endDate`) VALUES
(1, 1, '1', '2015-02-11', '2029-05-16'),
(3, 1, 'test2', '2025-05-02', '2025-05-23'),
(4, 1, 'test4', '2015-02-11', '2029-05-16');

-- --------------------------------------------------------

--
-- Структура таблицы `SPPP`
--

CREATE TABLE `SPPP` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `orderNum` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dateSppp` date NOT NULL COMMENT 'дата заседания',
  `reason` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'причина заседания',
  `attendedStaff` varchar(70) NOT NULL COMMENT 'присутствовали сотрудники',
  `attendedRepres` varchar(70) NOT NULL COMMENT 'присутствовали представители',
  `decision` varchar(70) NOT NULL COMMENT 'решение',
  `notes` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `SPPP`
--

INSERT INTO `SPPP` (`id`, `student_id`, `orderNum`, `dateSppp`, `reason`, `attendedStaff`, `attendedRepres`, `decision`, `notes`) VALUES
(1, 1, '2', '2025-05-04', 'нет', 'нет', 'нет', 'отчислить', 'нет '),
(3, 1, 'test2', '2025-05-01', 'test2', 'test2', 'test2', 'test2', 'test2'),
(4, 1, 'test3', '2025-05-04', 'test3', 'test3', 'test3', 'test3', 'test3');

-- --------------------------------------------------------

--
-- Структура таблицы `Students`
--

CREATE TABLE `Students` (
  `id` int NOT NULL,
  `lastName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `firstName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `middleName` varchar(50) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `gender` enum('М','Ж') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `education` enum('9 классов','11 классов') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `department_Id` int DEFAULT NULL,
  `group` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `funding` enum('бюджет','внебюджет') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `admissionYear` date DEFAULT NULL,
  `graduationYear` int DEFAULT NULL,
  `isExpelled` enum('Да','Нет') DEFAULT 'Нет',
  `expulsionDate` int DEFAULT NULL,
  `parent_info` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'нет',
  `penalties` varchar(10) DEFAULT NULL COMMENT 'количество взысканий',
  `notes` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Students`
--

INSERT INTO `Students` (`id`, `lastName`, `firstName`, `middleName`, `birthDate`, `gender`, `phone`, `education`, `department_Id`, `group`, `funding`, `admissionYear`, `graduationYear`, `isExpelled`, `expulsionDate`, `parent_info`, `penalties`, `notes`) VALUES
(1, 'Иванов', 'Иван', 'Иванович', '1996-05-08', 'М', '+79123452312', '9 классов', 1, 'ИСВ-22-4', 'бюджет', '2025-05-01', 2025, 'Нет', 2025, 'нет', '1', ''),
(2, 'Антоновна', 'Кириллия', 'Пучнина', '2006-03-08', 'Ж', '+79824564532', '9 классов', 1, 'ИСВ-22-4', 'внебюджет', '2022-09-01', 2025, 'Нет', 2025, 'нет', '1', ''),
(4, 'test', 'test', 'test', '2006-03-08', 'М', '+79824576940', '9 классов', 1, 'ИСВ-22-3', 'бюджет', '2022-09-01', 2025, 'Нет', NULL, 'нет', '1', 'нет'),
(6, 'Бананович', 'Банан', 'Бананов', '2006-12-12', 'М', '+7(123)123-12-12', '9 классов', 1, 'ИСВ-22-4', 'бюджет', '2020-12-12', 2028, 'Нет', 2028, 'test', '1', 'нет'),
(7, 'Бананович', 'Банан', 'Бананов', '2006-12-12', 'М', '+7(123)-123-12-12', '9 классов', 1, 'ИСВ-22-4', 'бюджет', '2020-12-12', 2028, 'Нет', 2028, 'test', '1', 'нет');

-- --------------------------------------------------------

--
-- Структура таблицы `SVO`
--

CREATE TABLE `SVO` (
  `id` int NOT NULL,
  `student_id` int NOT NULL,
  `orderNum` varchar(100) NOT NULL COMMENT 'документ из таблицы',
  `startDate` date NOT NULL,
  `endDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `SVO`
--

INSERT INTO `SVO` (`id`, `student_id`, `orderNum`, `startDate`, `endDate`) VALUES
(1, 1, '1', '2025-05-11', '2018-05-08'),
(3, 1, 'test1', '2025-05-11', '2018-05-08');

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `username` varchar(20) NOT NULL,
  `pasword` varchar(30) NOT NULL,
  `role` enum('Администратор','Сотрудник') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`id`, `username`, `pasword`, `role`) VALUES
(1, 'admin1', '123', 'Администратор');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Departments`
--
ALTER TABLE `Departments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `DisabledSt`
--
ALTER TABLE `DisabledSt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `Dormitory`
--
ALTER TABLE `Dormitory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `room_id` (`room_id`);

--
-- Индексы таблицы `Errors`
--
ALTER TABLE `Errors`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Files`
--
ALTER TABLE `Files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `Orhaps`
--
ALTER TABLE `Orhaps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `OVZS`
--
ALTER TABLE `OVZS`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `RiskGroup`
--
ALTER TABLE `RiskGroup`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `Rooms`
--
ALTER TABLE `Rooms`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `SocialScolarship`
--
ALTER TABLE `SocialScolarship`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `SPPP`
--
ALTER TABLE `SPPP`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `Students`
--
ALTER TABLE `Students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_Id` (`department_Id`);

--
-- Индексы таблицы `SVO`
--
ALTER TABLE `SVO`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Departments`
--
ALTER TABLE `Departments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT 'Id отделения', AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `DisabledSt`
--
ALTER TABLE `DisabledSt`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `Dormitory`
--
ALTER TABLE `Dormitory`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `Errors`
--
ALTER TABLE `Errors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `Files`
--
ALTER TABLE `Files`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `Orhaps`
--
ALTER TABLE `Orhaps`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `OVZS`
--
ALTER TABLE `OVZS`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `RiskGroup`
--
ALTER TABLE `RiskGroup`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `Rooms`
--
ALTER TABLE `Rooms`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `SocialScolarship`
--
ALTER TABLE `SocialScolarship`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `SPPP`
--
ALTER TABLE `SPPP`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `Students`
--
ALTER TABLE `Students`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `SVO`
--
ALTER TABLE `SVO`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `DisabledSt`
--
ALTER TABLE `DisabledSt`
  ADD CONSTRAINT `disabledst_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Dormitory`
--
ALTER TABLE `Dormitory`
  ADD CONSTRAINT `dormitory_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dormitory_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `Rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Files`
--
ALTER TABLE `Files`
  ADD CONSTRAINT `files_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Orhaps`
--
ALTER TABLE `Orhaps`
  ADD CONSTRAINT `orhaps_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `OVZS`
--
ALTER TABLE `OVZS`
  ADD CONSTRAINT `ovzs_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `RiskGroup`
--
ALTER TABLE `RiskGroup`
  ADD CONSTRAINT `riskgroup_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `SocialScolarship`
--
ALTER TABLE `SocialScolarship`
  ADD CONSTRAINT `socialscolarship_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `SPPP`
--
ALTER TABLE `SPPP`
  ADD CONSTRAINT `sppp_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Students`
--
ALTER TABLE `Students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`department_Id`) REFERENCES `Departments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `SVO`
--
ALTER TABLE `SVO`
  ADD CONSTRAINT `svo_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
