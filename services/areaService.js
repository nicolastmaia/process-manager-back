var { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class AreaService {
  constructor() {}

  async findMany(includeProcess = false) {
    try {
      const result = await prisma.area.findMany({
        include: { processes: { include: { process: includeProcess } } },
      });
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async findOne(areaId) {
    try {
      const result = await prisma.area.findUnique({
        where: { id: parseInt(areaId) },
      });
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async create(area) {
    try {
      const result = await prisma.area.create(area);
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async update(id, updatedArea) {
    try {
      const result = await prisma.area.update({
        where: { id: parseInt(id) },
        data: updatedArea,
      });
      console.log(result);
      prisma.$disconnect();
      return result;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async delete(areaId) {
    try {
      const processDeleteResult = await prisma.process.deleteMany({
        where: { areaId: parseInt(areaId) },
      });

      const areaDeleteResult = await prisma.area.delete({
        where: { id: parseInt(areaId) },
      });

      console.log(areaDeleteResult);
      prisma.$disconnect();
      return areaDeleteResult;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }
}

module.exports = new AreaService();
