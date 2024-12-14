import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodo } from "./todo.dto";

@Controller('todo')
export class TodoController {
   constructor(
    private readonly todoService: TodoService
   ) {} 

   @Post()
   async createTodo(@Body() data: CreateTodo) {
         return await this.todoService.createTodo(data);
    }

    @Get()
    async getTodos() {
        return await this.todoService.getTodos();
    }

    @Delete(':id')
    async deleteTodoById(@Param('id') id: string)
    {
        return await this.todoService.deleteTodoById(id);
    }

    @Patch(':id')
    async completeTodoById(@Param('id') id: string) {
        return await this.todoService.completeTodoById(id);
    }

}