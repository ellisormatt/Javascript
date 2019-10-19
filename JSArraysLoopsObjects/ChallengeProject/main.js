// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  function pAequorFactory (specimenNum,dna) {
    let returnObj = {
        'Specimen Number': specimenNum,
        'DNA': dna,
        mutate () {
            //select a random base in the object's dna property and change the current base to a different base
            
        }
    };
    return returnObj;
  }
  
  console.log(pAequorFactory(1,mockUpStrand()));
  
  
  
  