import XLSX from "xlsx"

function readWorkbookFromLocalFile(file, callback) {
    let reader = new FileReader();
    reader.onload = function(e) {
        let data = e.target.result;
        let workbook = XLSX.read(data, { type: 'binary' });
        if (callback) callback(workbook);
    };
    reader.readAsBinaryString(file);
}

function readExcel(file) {

}