const animals = [
    { name: "cat", sound:"mew" , internalobject : {
        food :2,
        water :3 
    }},
    { name: "dog", sound: "woof" }
  ];

 
  
  const [cat, dog] = animals
  
//   const { name: catName = "defaultname" , sound="defaultsound" } = cat;
  
//   console.log(catName+"   "+ sound);

  const {name, sound, internalobject : {food, water}}= cat

  console.log(food)
  

  function useAnimal(animal){
    return[
      animal.name,
      function makesound(){
        console.log(animal.sound)
      }
    ]
  }
const[animal,makesound] = useAnimal(cat);
console.log(animal);
makesound();