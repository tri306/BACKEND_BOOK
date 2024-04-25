const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const borrowSchema = new mongoose.Schema(
  {
    mamuon: Number,
    madocgia: {
      type: mongoose.Schema.ObjectId,
      ref: "Docgia",
      require: true,
    },
    masach: { type: mongoose.Schema.ObjectId, ref: "Sach", require: true },
    manhanvien: {
      type: mongoose.Schema.ObjectId,
      ref: "Nhanvien",
    },
    ngaymuon: {
      type: Date,
    },
    ngaytra: {
      type: Date,
    },
    chiphi: {
      type: Number,
    },
    trangthai: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

borrowSchema.plugin(AutoIncrement, { inc_field: "mamuon", start_seq: 1000 });

module.exports =
  mongoose.models?.Theodoimuonsach ||
  mongoose.model("Theodoimuonsach", borrowSchema);
