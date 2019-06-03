-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 03 Cze 2019, 19:01
-- Wersja serwera: 10.1.38-MariaDB
-- Wersja PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `xdraw`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `compositions`
--

CREATE TABLE `compositions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `compositions`
--

INSERT INTO `compositions` (`id`, `user_id`, `name`, `data`) VALUES
(1, 1, 'Samochód', '{\"version\":\"3.1.0\",\"objects\":[{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":221,\"top\":439,\"width\":60,\"height\":60,\"fill\":\"#ff0000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586},{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":345,\"top\":442,\"width\":60,\"height\":60,\"fill\":\"#ff0000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586},{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":268,\"top\":377,\"width\":50,\"height\":50,\"fill\":\"#ff0000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0},{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":318,\"top\":380,\"width\":50,\"height\":50,\"fill\":\"#ff0000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0}]}'),
(2, 2, 'Pingwin', '{\"version\":\"3.1.0\",\"objects\":[{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":192,\"top\":196,\"width\":50,\"height\":50,\"fill\":\"#ff0000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0},{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":638,\"top\":201,\"width\":50,\"height\":50,\"fill\":\"#ff0000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0},{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":202,\"top\":506,\"width\":50,\"height\":50,\"fill\":\"#ff0000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0},{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":675,\"top\":518,\"width\":50,\"height\":50,\"fill\":\"#ff0000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0},{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":413,\"top\":343,\"width\":60,\"height\":60,\"fill\":\"#00ff00\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586}]}'),
(4, 3, 'Foka', '{\"version\":\"3.1.0\",\"objects\":[{\"type\":\"line\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":386,\"top\":260,\"width\":100,\"height\":100,\"fill\":\"rgb(0,0,0)\",\"stroke\":\"#808080\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"x1\":-50,\"x2\":50,\"y1\":-50,\"y2\":50},{\"type\":\"line\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":395,\"top\":253,\"width\":100,\"height\":100,\"fill\":\"rgb(0,0,0)\",\"stroke\":\"#808080\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":90,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"x1\":-50,\"x2\":50,\"y1\":-50,\"y2\":50}]}'),
(5, 4, 'Lama', '{\"version\":\"3.1.0\",\"objects\":[{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":552,\"top\":245,\"width\":50,\"height\":50,\"fill\":\"#000000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0},{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":556,\"top\":340,\"width\":50,\"height\":50,\"fill\":\"#000000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0},{\"type\":\"rect\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":554,\"top\":440,\"width\":50,\"height\":50,\"fill\":\"#000000\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"rx\":0,\"ry\":0},{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":420,\"top\":355,\"width\":60,\"height\":60,\"fill\":\"#ff00ff\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586},{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":710,\"top\":366,\"width\":60,\"height\":60,\"fill\":\"#ff00ff\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586},{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":474,\"top\":264,\"width\":60,\"height\":60,\"fill\":\"#ff00ff\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586},{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":711,\"top\":270,\"width\":60,\"height\":60,\"fill\":\"#ff00ff\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586},{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":462,\"top\":464,\"width\":60,\"height\":60,\"fill\":\"#ff00ff\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586},{\"type\":\"circle\",\"version\":\"3.1.0\",\"originX\":\"left\",\"originY\":\"top\",\"left\":759,\"top\":481,\"width\":60,\"height\":60,\"fill\":\"#ff00ff\",\"stroke\":\"black\",\"strokeWidth\":3,\"strokeDashArray\":[],\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"radius\":30,\"startAngle\":0,\"endAngle\":6.283185307179586}]}');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(32) NOT NULL,
  `login` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `login`, `password`) VALUES
(1, 'Dawid', '123'),
(2, 'Przemek', '123'),
(3, 'Maciek', '123'),
(4, 'Krystian', '123');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `compositions`
--
ALTER TABLE `compositions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `compositions`
--
ALTER TABLE `compositions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `compositions`
--
ALTER TABLE `compositions`
  ADD CONSTRAINT `compositions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
