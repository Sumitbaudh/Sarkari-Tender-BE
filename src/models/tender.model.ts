import mongoose from "mongoose";

const TenderSchema = new mongoose.Schema({
    title: { type: String },
    referenceNo: { type: String },
    closingDate: { type: String },
    bidOpeningDate : { type : String},
    link : { type : String}
}, { timestamps: true });

export const Tender = mongoose.model("tenders" ,TenderSchema );
