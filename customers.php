<?php
$output = array (
  0 =>
  array (
    'Name' => 'Alfreds Futterkiste',
    'City' => 'Berlin',
    'Country' => 'Germany',
  ),
  1 =>
  array (
    'Name' => 'Darren Hill',
    'City' => 'Cardiff',
    'Country' => 'Wales',
  ),
  2 =>
  array (
    'Name' => 'Antonio Moreno Taquería',
    'City' => 'México D.F.',
    'Country' => 'Mexico',
  ),
  3 =>
  array (
    'Name' => 'Around the Horn',
    'City' => 'London',
    'Country' => 'UK',
  ),
  4 =>
  array (
    'Name' => 'Bs Beverages',
    'City' => 'London',
    'Country' => 'UK',
  ),
  5 =>
  array (
    'Name' => 'Berglunds snabbköp',
    'City' => 'Luleå',
    'Country' => 'Sweden',
  ),
  6 =>
  array (
    'Name' => 'Blauer See Delikatessen',
    'City' => 'Mannheim',
    'Country' => 'Germany',
  ),
  7 =>
  array (
    'Name' => 'Blondel père et fils',
    'City' => 'Strasbourg',
    'Country' => 'France',
  ),
  8 =>
  array (
    'Name' => 'Bólido Comidas preparadas',
    'City' => 'Madrid',
    'Country' => 'Spain',
  ),
  9 =>
  array (
    'Name' => 'Bon app',
    'City' => 'Marseille',
    'Country' => 'France',
  ),
  10 =>
  array (
    'Name' => 'Bottom-Dollar Marketse',
    'City' => 'Tsawassen',
    'Country' => 'Canada',
  ),
  11 =>
  array (
    'Name' => 'Cactus Comidas para llevar',
    'City' => 'Buenos Aires',
    'Country' => 'Argentina',
  ),
  12 =>
  array (
    'Name' => 'Centro comercial Moctezuma',
    'City' => 'México D.F.',
    'Country' => 'Mexico',
  ),
  13 =>
  array (
    'Name' => 'Chop-suey Chinese',
    'City' => 'Bern',
    'Country' => 'Switzerland',
  ),
  14 =>
  array (
    'Name' => 'Comércio Mineiro',
    'City' => 'São Paulo',
    'Country' => 'Brazil',
  ),
);

header('Content-Type: application/json');
echo json_encode($output);
?>
