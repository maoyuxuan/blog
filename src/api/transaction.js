export function fetchList(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let list = [];
      let start = (query.pageIndex - 1) * query.pageSize + 1;
      for (let i = start; i < start + query.pageSize; i++) {
        let albums = [];
        for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
          albums.push({
            // url: 'http://10.10.117.54:8080/assets/thumb/'+ Math.floor(Math.random() * 9) +'.jpg'
            url: '../../assets/thumb/'+ Math.floor(Math.random() * 9) +'.jpg'
          })
        }
        list.push({
          id: i,
          albums: albums,
          title: "今天今天今天今天今天今天今天今天今天今天啊",
          time: "2017-05-08 12:33",
          type: "知识分享"
        });
      }
      resolve({
        list: list, // 当前列表
        pageCount: 10, //总页数
        total: 50 // 总条数
      })
    }, 1000)
  })
}
