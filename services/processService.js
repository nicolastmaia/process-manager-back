var { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class ProcessService {
  constructor() {}

  async findMany(includeArea = false, includeChildProcess = false) {
    try {
      const result = await prisma.process.findMany({
        include: {
          areas: includeArea,
          childProcess: includeChildProcess,
        },
      });
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async findOne(processId) {
    try {
      const result = await prisma.process.findUnique({
        where: { id: parseInt(processId) },
      });
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async create(process) {
    try {
      const result = await prisma.process.create(process);
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async update(id, updatedProcess) {
    try {
      const result = await prisma.process.update({
        where: { id: parseInt(id) },
        data: updatedProcess,
      });
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async delete(processId) {
    try {
      const result = await prisma.process.delete({
        where: { id: parseInt(processId) },
      });
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }
}

module.exports = new ProcessService();
