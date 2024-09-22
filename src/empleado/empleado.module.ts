import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoController } from './empleado.controller';
import { Empleado } from './empleado.entity';
import { EmpleadoService } from './empleado.service';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado])],
  providers: [EmpleadoService],
  controllers: [EmpleadoController],
})
export class EmpleadoModule {}
