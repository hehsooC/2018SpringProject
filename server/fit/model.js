

/**
// this works but couldn't find api database for workout
var axios = require("axios");
var HealthInfoStack = [];

axios.get('https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=fitness')
    .then(
        response => HealthInfoStack = response.data,
        err => console.log(err)
    ); 
 
var currentInfo = 0;
      
 */       
  
function Fit() {  
        this.Person = [];
        this.Record = [];
        //this.HealthInfo = null; 
       // this.ExerciseList = [];   
        
     
/*         this.GiveExerciseList = (userId) =>{ 
            console.log('give the global exercise list');
            return ExerciseStack;   
   
        }   */ 
        this.SignUp = (name, password) => {
        
            if(this.Person.find(x => x.Name == name)){
                return false;
            }else{
                this.Person.push({ Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null},
                    PlanExercise: [], DoneExerciseList: []});
                return true;
            }
             
        }        

        this.LogIn = (name, password) => {
            if(this.Person.find(x => x.Name == name)){
                var user = this.Person.find( x => x.Name == name);
                if(user.Name == name && user.Password == password){
                    return user;
                } 
                else{
                    return false;
                }
            }  
            else{ 
                return false;
            }  
        } 
       
        this.ProfileAdd = (age, weight, height, goalWeight, bmi, goalBmi, name) =>{
            if(this.Person.find(x => x.Name == name)){
                var userProfile = this.Person.find(x => x.Name == name).Profile = {Age: age, Weight: weight, Height: height, 
                    GoalWeight: goalWeight, BMI: bmi, GoalBMI: goalBmi};
                return userProfile;
            }  
        }

        this.PlanWorkout = (name, text) => {
            console.log('plan workout - model');

            if(this.Person.find(x => x.Name == name)){
                var user = this.Person.find(x => x.Name == name);

                if(!user.PlanExercise.find(x => x.Text == text)){
                    user.PlanExercise.push({Text: text, Chosen: false});
                    var plan = user.PlanExercise;
                    return plan;
                }
                return false;
            }
            else{
                console.log('fail to push plan - model');
                return false;
            }

        }

        this.MakeChosen = (name, text) => {
            var user = this.Person.find(x => x.Name == name);
            var chosenWorkout = user.PlanExercise.find(x=> x.Text == text)
            chosenWorkout.Chosen = true;
            return user.PlanExercise;
        }


        this.DoneExercise = (name, list) => {
            var user = this.Person.find(x => x.Name == name);

            if(user){

                user.DoneExerciseList = list;
                return user.DoneExerciseList;
                
            }
            else{
                console.log('fail to done exercise - model');
                return false;
            }
            
             
        }  

        this.GetTotalTime = (name, totalSet) => {
            var user = this.Person.find(x => x.Name == name);
            user.TotalSetTime = totalSet

            return user.TotalSetTime;

        }

    
            

/*         this.GetData = (userId) => {   
            console.log('user Id is ' + userId); 
            if(this.Person.find(x=> x.UserId == userId))
                console.log('return ' + userId +' Profile');
                return this.Profile;
        } */
    /*     this.SharingOthers = (userId) => {
            console.log('sharing?'); 
            //if(this.FirstUser != userId)
                this.OtherUser.push({Name: userId});
        }  
           */  
/*         this.SubmitWorkout = (text, userId) => {
            console.log('text is ' + text);
            if(!this.PlanExercise.find(x => x.Text == text)){
                this.PlanExercise.push({ Text: text, UserId: userId });
                
            }

        }  */   


 
  /** Couldn't find the health information database yet. 
         // at Home, Give a user to a health information.
        this.GetHealthInfo = () => {
            this.HealthInfo = HealthInfoStack[currentInfo = (currentInfo+1) % HealthInfoStack.length];
        }
         */ 

       
  
}   
 
module.exports = Fit; 