"use strict";

import { Table } from './table.js';

const columns = ["Name", "Phone Number", "Email"];
const data = [
    ["arsal al qital", "(021) 1234 5678", "arsalalqital@gmail.com"],
    ["fadillah ramdan", "(022) 8765 4321", "fadillah123@gmail.com"],
    ["rakasiwi", "(023) 2468 1357", "rakasiwi@gmail.com"]
];

new Table('table-container', columns, data);