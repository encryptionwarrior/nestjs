import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}


    @Get()
    findAll(@Query("role") role?: 'INTERN' | 'ENGINEER' | 'ADMIN') { return this.userService.findAll(role) }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number){
        return this.userService.findOne(+id)
    }

    // @Post()
    // create(@Body() user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
    //     return this.userService.create(user)
    // }
    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() userUpdate: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
    //     return this.userService.update(+id, userUpdate)
    // }
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.userService.update(+id, updateUserDto)
    }


    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: string){
        return this.userService.delete(+id)
    }

}
