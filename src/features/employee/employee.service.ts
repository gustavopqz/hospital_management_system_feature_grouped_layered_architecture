import { PostingOnDatabaseError } from '@/errors/postingOnDatabase.error';
import bcrypt from 'bcryptjs';
import { EmployeeCreateDTO, EmployeeFetchDTO } from "./employee.dto";
import { EmployeeRepository } from "./employee.repository";

export class EmployeeService {

    constructor(private repo: EmployeeRepository) { }

    public async create(data: EmployeeCreateDTO): Promise<EmployeeFetchDTO> {

        // Hashing password
        const { password, ...employeeInfo } = data;

        const passwordHashed = await bcrypt.hash(password, 12);

        const newEmployee: EmployeeCreateDTO = {
            ...employeeInfo,
            password: passwordHashed
        }

        const createEmployeeExecution = await this.repo.create(newEmployee);

        if (!createEmployeeExecution) throw new PostingOnDatabaseError('Error trying to create new employee.');

        const response = {
            ...employeeInfo,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        return response;
    }

    public async findAll(): Promise<EmployeeFetchDTO[]> {
        const employees = await this.repo.findAll();

        return employees;
    }
}