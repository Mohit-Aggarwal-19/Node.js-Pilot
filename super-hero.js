class SuperHero{

  constructor(name){
    this.name = name;
  }

  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }
}

const superHero = new SuperHero("Batman");

module.exports = superHero