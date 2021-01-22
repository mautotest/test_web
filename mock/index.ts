// mock/index.ts
const mock = {

  // 支持标准 HTTP
    // 'GET /api/users': { users: [1, 2] },
    // 'DELETE /api/users': { users: [1, 2] },
  
    // 支持参数
    // 'POST /api/users/:id': (req, res) => {
    //   const { id } = req.params;
    //   res.send({ id: id });
    // },

    'POST /login': (req, res) => {
      const { id } = req;
      console.log("id",id)
      res.send({ id: id });
    },
  };

// module.exports = mock