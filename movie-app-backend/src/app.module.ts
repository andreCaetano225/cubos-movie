import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [AuthModule, MovieModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
