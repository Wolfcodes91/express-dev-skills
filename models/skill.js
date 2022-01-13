let skills = [
    {id: 125223, skill: 'Get'},
    {id: 127904, skill: 'Post'},
    {id: 139608, skill: 'Put'},
    {id: 123456, skill: 'Delete'},
    {id: 123457, skill: 'Crud'},
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };

  function update(id, newSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, newSkill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    skills = skills.filter(skill => skill.id !== id);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }
 
