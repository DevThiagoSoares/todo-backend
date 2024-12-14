import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/repository/prisma.service";
import { CreateTodo, UpdateTodo } from "./todo.dto";

@Injectable()
export class TodoService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    async createTodo(data: CreateTodo) {
        return await this.prismaService.todo.create({
         data
        });
    }

    async getTodos() {
        return await this.prismaService.todo.findMany({
            where: {
                isDeleted: false
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
    }


    async deleteTodoById(id: string) {
        return await this.prismaService.todo.update({
            where: {
                id
            },
            data: {
                isDeleted: true
            }
        });
    }

    async completeTodoById(id: string) {
        const todo: UpdateTodo = await this.prismaService.todo.findFirst({
            where: {
                id
            }
        });

        if(!todo) {
            throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
        }

        return await this.prismaService.todo.update({
            where: {
                id
            },
            data: {
                isCompleted: !todo.isCompleted,
            }
        });
    
    }
}