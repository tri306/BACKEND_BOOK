const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const borrowSchema = new mongoose.Schema(
    {
        madocgia: { type: mongoose.Schema.ObjectId, ref: 'Docgia', require: true },
        masach: { type: mongoose.Schema.ObjectId, ref: 'Sach', require: true },
        manhanvien: { type: mongoose.Schema.ObjectId, ref: 'Nhanvien' },
        ngaymuon: { type: Date, require: true },
        ngaytra: { type: Date, required: true },
    },
    { timestamps: true, minimize: false },
);

module.exports = mongoose.models?.Theodoimuonsach || mongoose.model('Theodoimuonsach', borrowSchema);
