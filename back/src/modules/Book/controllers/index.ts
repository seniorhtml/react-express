import { Request, Response } from 'express';
import { generateRandomId } from '@/utils';
import BookService from '@/modules/Book/services';

class BookController {
  public async findAll(req: Request, res: Response) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 12;
      const { list, count } = await BookService.findAll({ page, limit });
      return res.status(200).json({ list, count });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  public async findOne(req: Request, res: Response) {
    try {
      const book = await BookService.findOne(req.params.id);
      return res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const book = await BookService.create({ ...req.body, id: generateRandomId() });
      return res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new BookController();
