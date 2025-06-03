import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMovieDto } from './dtos/movie';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async create(createMovieDto: CreateMovieDto) {
    return this.prisma.movie.create({
      data: createMovieDto,
    });
  }

  async findAll(paginationQuery) {
    return this.prisma.movie.findMany({
      skip: paginationQuery.page * 10,
      take: 10,
    });
  }

  async findOne(id: string) {
    return this.prisma.movie.findUnique({
      where: { id: Number(id) },
    });
  }

  async update(id: string, updateMovieDto: CreateMovieDto) {
    return this.prisma.movie.update({
      where: { id: Number(id) },
      data: updateMovieDto,
    });
  }

  async remove(id: string) {
    return this.prisma.movie.delete({
      where: { id: Number(id) },
    });
  }
}
