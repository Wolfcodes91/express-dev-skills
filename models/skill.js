const skills = [
    {id: 125223, skill: 'Get' },
    {id: 127904, skill: 'Post'},
    {id: 139608, skill: 'Put'},
    {id: 123456, skill: 'Delete'},
    {id: 123457, skill: 'Crud'},
  ];

  module.exports = {
    getAll,
    getOne,
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }

  function getAll() {
    return skills;
  }
 