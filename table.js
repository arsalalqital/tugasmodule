
export class Table {
    constructor(containerId, columns, data) {
        this.container = document.getElementById(containerId);
        this.columns = columns;
        this.data = data;
        this.render();
    }

    render() {
        const table = document.createElement('table');
        table.innerHTML = `
            <tr>
                ${this.columns.map(column => `<th>${column}</th>`).join('')}
            </tr>
            ${this.data.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
        `;
        this.container.appendChild(table);
    }
}