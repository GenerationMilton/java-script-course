//Create PowerfullGirls objects

function PowerfullGirl(name, color, superpower){
    this.name=name;
    this.color=color;
    this.superpower=superpower;
    this.isLeader=false;
    this.achievements=[];
    this.enemies=[];

    //create methods to call functions and take a description for all person
    this.displayInfo = function(){
        console.log(`PowerfullGirl Information:
        Name: ${this.name}\n
        Color: ${this.color}\n
        SuperPower: ${this.superpower}\n
        Leader: ${this.isLeader ? 'Is the leader' : 'Is not the leader'}\n
        Achievements: ${this.achievements.join( ', ')}\n
        Enemimes: ${this.enemies.join(', ')}
        `)
    }

    //leader methods
    this.becomeLeader= function(){
        this.isLeader=true;
        this.achievements.push('has Became a leader of the PowefullGirls');
        console.log(`${this.name} is the leader now!`);
    }

    //add achievement
    this.addAcchievement= function(achievement){
        this.achievements.push(achievement);
        console.log(`${this.name} achieved: ${achievement}`);
    }
    
    //addEnemy
    this.addEnemy = function (enemy){
        this.enemies.push(enemy);
        console.log(`${this.name} has a new enemy: ${enemy}`);
    }

    //addFly
    this.fly= function(){
        if (this.superpower.toLowerCase().includes('Flight')){
            console.log(`${this.name} is flying high in the sky!`);
        } else {
            console.log(`${this.name} cannot fly.`);
        }
    }
}

//create persons from object

const blossom= new PowerfullGirl('Blossom','Pink', 'IceBreath');
const buttercup= new PowerfullGirl('Buttercup','Green','Super Strength');
const bubbles= new PowerfullGirl('Bubbles','Blue', 'Flight');

// Additional features
blossom.addAcchievement('Saved the Townsville');
buttercup.addAcchievement('Defeated Mojo jojo');
bubbles.addEnemy('Him');

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.becomeLeader();
blossom.addAcchievement('Mastered the Ice Breath');
buttercup.addEnemy('Fluzzy Lumpkins');
bubbles.fly();


//Llamar el metodo par ver el resultado
blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
