import { PrismaClient, Task, Prisma } from '@prisma/client';

export class TaskRepository {
  constructor(private readonly prisma: PrismaClient) {}
  
  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return await this.prisma.task.create({
      data,
    });
  }

  async findAll(): Promise<Task[]> {
    return await this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async findById(id: number): Promise<Task | null> {
    return await this.prisma.task.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.TaskUpdateInput): Promise<Task> {
    return await this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Task> {
    return await this.prisma.task.delete({
      where: { id },
    });
  }
}
