<?php
require 'vendor/autoload.php'; 
require './connection/connection.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;

// Выбираем данные из БД
$stmt = $mysqli->query("SELECT `Dormitory`.`id`, `Students`.`lastName`, `Students`.`firstName`, `Students`.`middleName`,  `Dormitory`.`room_id`, `Dormitory`.`orderNum`, `Dormitory`.`checkInDate`, `Dormitory`.`checkOutDate`, `Dormitory`.`notes` FROM `Dormitory`, `Students` WHERE `Students`.`id`=`Dormitory`.`student_id`");

$users = [];
while ($row = $stmt->fetch_assoc()) {
    $users[] = $row;
}

// Создание Excel-файла
$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

if (!empty($users)) {
    // Получаем заголовки (ключи первого элемента)
    $headers = array_keys($users[0]);

    // Записываем заголовки
    foreach ($headers as $colIndex => $header) {
        $columnLetter = Coordinate::stringFromColumnIndex($colIndex + 1); // A, B, C...
        $sheet->getCell($columnLetter . '1')->setValue($header);
    }

    // Записываем данные
    $rowIndex = 2;
    foreach ($users as $rowData) {
        foreach ($headers as $colIndex => $field) {
            $columnLetter = Coordinate::stringFromColumnIndex($colIndex + 1);
            $sheet->getCell($columnLetter . $rowIndex)->setValue($rowData[$field]);
        }
        $rowIndex++;
    }
}

header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="dormitory_export.xlsx"');
header('Cache-Control: max-age=0');

$writer = new Xlsx($spreadsheet);
$writer->save('php://output');
exit;
?>