import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Empleado } from './empleado.entity';
import { EmpleadoService } from './empleado.service';

@Controller('empleados')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Get()
  findAll(): Promise<Empleado[]> {
    return this.empleadoService.findAll();
  }

  @Post()
  create(@Body() empleado: Empleado): Promise<Empleado> {
    return this.empleadoService.create(empleado);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() empleado: Empleado): Promise<Empleado> {
    return this.empleadoService.update(id, empleado);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.empleadoService.remove(id);
  }
}
