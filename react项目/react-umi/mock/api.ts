export default {
  'GET /api/date': (req: any, res: any) => {
    res.json({
      data: {
        name: 'admin',
        age: 20,
      },
    });
  },
  'GET /api/list': (req: any, res: any) => {
    res.json({
      name: 'list',
      age: 20,
    });
  },
};
