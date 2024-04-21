import mongoose, { Schema } from "mongoose";

const detailSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Detail = mongoose.models.Detail || mongoose.model("Detail", detailSchema);

export default Detail;
