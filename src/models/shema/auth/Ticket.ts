import { model, Schema, Types } from "mongoose";
import mongoose from "mongoose";
 const TicketSchema = new Schema(
  { 
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client' 
    }, 
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: Number },
    status: { type: String, enum: ['pending', 'approve', 'reject']},
  },
  { timestamps: true, }
);

export const TicketModel = mongoose.model('Ticket', TicketSchema);

