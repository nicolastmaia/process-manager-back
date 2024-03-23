var { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class AreaService {
  constructor() {}

  async findMany() {
    try {
      const allAreas = await prisma.area.findMany();
      console.log(allAreas);
      prisma.$disconnect();
      return allAreas;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async findOne(areaId) {
    try {
      const area = await prisma.area.findUnique({
        where: { id: parseInt(areaId) },
      });
      console.log(area);
      prisma.$disconnect();
      return area;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }

  async create(area) {
    try {
      const result = await prisma.area.create({ data: area });
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
      const area = await prisma.area.delete({
        where: { id: parseInt(areaId) },
      });
      console.log(area);
      prisma.$disconnect();
      return area;
    } catch (error) {
      prisma.$disconnect();
      throw error;
    }
  }
}

module.exports = new AreaService();
