import { EmployeeCreateDTO } from "./employee.dto";
import { Employee, EmployeeDocument } from "./employee.model";

export class EmployeeRepository {

    public async create(data: EmployeeCreateDTO): Promise<EmployeeDocument> {
        return Employee.create(data);
    }

    public async findAll(): Promise<EmployeeDocument[]> {
        return Employee.find();
    }
}