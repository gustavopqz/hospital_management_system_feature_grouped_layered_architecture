import mongoose, { Document, Schema } from 'mongoose';

export interface EmployeeDocument extends Document {
    employeeId: string;
    name: string;
    password?: string;
    email: string;
    phoneNumber: string;
    role: 'admin' | 'doctor' | 'nurse' | 'receptionist';
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const EmployeeModel: Schema = new Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        select: false
    },
    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[1-9]{2}9[0-9]{8}$/
    },
    role: {
        type: String,
        enum: ['admin', 'doctor', 'nurse', 'receptionist'],
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Employee = mongoose.model<EmployeeDocument>('Employee', EmployeeModel);