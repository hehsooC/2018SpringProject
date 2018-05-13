const images = [
    "https://images.pexels.com/photos/864990/pexels-photo-864990.jpeg?cs=srgb&dl=active-adult-aerobic-864990.jpg&fm=jpg",
    "https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/374694/pexels-photo-374694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/42069/belly-body-calories-diet-42069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/601177/pexels-photo-601177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3235/sport-fitness-workout-resolution.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/892682/pexels-photo-892682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/698502/pexels-photo-698502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/196640/pexels-photo-196640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/136410/pexels-photo-136410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/685531/pexels-photo-685531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/703019/pexels-photo-703019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/267977/pexels-photo-267977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/19936/breakfast-orange-lemon-oranges.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/834893/pexels-photo-834893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

];


var currentPic = 0;

function Fit() {  
        this.Person = [];
        this.Share = [];
        
        // send a random image to home component
        this.SendPic = () =>{
            return [1, 2, 3, 4, 5].map(() => {
                const randomPic = images[currentPic = (currentPic + 1) % images.length];
                return randomPic;
            });
        }

        // creates a new user in the server.
        this.SignUp = (name, password) => {
            // if there is a username in the server, return false.
            if(this.Person.find(x => x.Name == name)){
                return false;
            }else{
                // if there is no username matched, create a new Person object.
                this.Person.push({ Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null},
                      Notice: [], EachShare:[], Record:[], Requested: false, FriendList:[], History: []});
                return true;
            }
        }        
    
        // send the user's information to server 
        this.LogIn = (name, password) => {
            // if there is a user in the server, send the information.
            if(this.Person.find(x => x.Name == name)){
                var user = this.Person.find( x => x.Name == name);
                // check if username and password is matching
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
       
        // Add each user's profile
        this.ProfileAdd = (age, weight, height, goalWeight, bmi, goalBmi, name) =>{
            if(this.Person.find(x => x.Name == name)){
                var userProfile = this.Person.find(x => x.Name == name).Profile = {Age: age, Weight: weight, Height: height, 
                    GoalWeight: goalWeight, BMI: bmi, GoalBMI: goalBmi};
                return userProfile;
            }  
        }

        // set the date of workout to record.
        this.SetDay = (name, key, month, date) => {
            var userFound = this.Person.find( x => x.Name == name);
            var historyFound = userFound.History.find(x=>x.KeyDate == key);
            if(!historyFound){
                userFound.History.push({ Name: name, DoneExerciseList:[],PlanExercise: [], TotalSetTime: 0,  Month: month, Date: date, KeyDate: key});
                return false;
            }
            // return found history to Me
            else{
                console.log('return user history');
                return historyFound;
                
            }
        }


        // put user's planned workout list into PlanExercise in History[]
        this.PlanHistory = (name, text, key) => {
            var userFound = this.Person.find(x => x.Name == name);
            var historyFound = userFound.History.find(x=>x.KeyDate == key);
            
            if(!historyFound.PlanExercise.length == 0){
                var plan = historyFound.PlanExercise;
                if(!plan.find(x => x.Text == text)){
                    plan.push({Text: text, Chosen: false});
                    return plan;
                }
                return;
            }
            else{
                historyFound.PlanExercise.push({Text: text, Chosen: false});
                return historyFound.PlanExercise;
            }
        }

        // if a planned workout list is selected, make Chosen to true to indicate this exercise is done.
        // this will change the color of planned history list if it's chosen.
        this.MakeChosen = (name, text, key) => {
            var user = this.Person.find(x => x.Name == name);
            var history = user.History.find(x => x.KeyDate == key);
            var chosenWorkout = history.PlanExercise.find(x=> x.Text == text);
            chosenWorkout.Chosen = true;
            return history.PlanExercise;
        }

        // Update total workout time.
        this.GetTotalTime = (name, key, totalTime) => {
            var userFound = this.Person.find(x => x.Name == name);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            
            if(!historyFound){
                console.log('history not found');
                return false;
            }
            // if there is workout history, update it.
            else{
                historyFound.TotalSetTime = totalTime;
                return historyFound.TotalSetTime;
            }
        }

        // Update the Done Exercise List in History[].
        this.RecordDay = (name, key, text, time, set, total) => {

            var userFound = this.Person.find(x => x.Name == name);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            // if this key date has some done exercise lists, execute below.
            if(!historyFound.DoneExerciseList.length == 0){
                var done = historyFound.DoneExerciseList;
                // if there is no texts in DoneExerciseList, push it.
                if(!done.find(x => x.Text == text)){
                    done.push({Text: text, Time: time, Set: set, TotalTime: total});
                    return done;
                }
                // if the text exists, update the time, set, and total time.
                else{
                    var done2 = historyFound.DoneExerciseList.find(x => x.Text == text);
                    done2.Time = Number(done2.Time) + Number(time);
                    done2.Set = Number(done2.Set) + Number(set);
                    done2.TotalTime = Number(done2.TotalTime) + Number(total);
                    
                    return historyFound.DoneExerciseList;
                }
            }
            // if this key date has no done exercise list, push the text.
            else{
                historyFound.DoneExerciseList.push({Text: text, Time: time, Set: set, TotalTime: total});
                return historyFound.DoneExerciseList;
            }

        }


    

        // give other users' name to this user.
        this.GiveUserList = (name) => {
            var user = this.Person.find(x=>x.Name == name);
            // if global Share doesn't have this person, push it. 
            if(!this.Share.find(x => x.Name == name)){
                this.Share.push({Name: name, RequestSent: false});
            }

            // if there are same name in EachShare with Share, exclude that names.
            var x = this.Share.filter(x=>
                !user.EachShare.find(y=> y.Name == x.Name)
            );
            // update EachShare with Changed RequestSent status
            var y = user.EachShare.concat(JSON.parse(JSON.stringify( x )));
            user.EachShare = JSON.parse(JSON.stringify( y ));
            return user.EachShare;
                
        }

        // if Me sends a friend request to other user, indicate that the friend request is sent.
        this.SentRequestChange = (friend, name, status)=> {
            var me = this.Person.find(x => x.Name == name);
            var each = me.EachShare.find( x => x.Name == friend);
            var friendN = this.Person.find( x=> x.Name == friend);
            var eachFriend = friendN.EachShare.find( x => x.Name == name);

            if(status){
                each.RequestSent = true;
            }
            else{
                // if a friend request is declined, give back removed user request button to user's list
                eachFriend.RequestSent = false;
                // remove that request from Me
                me.Notice.splice(me.Notice.indexOf(me.Notice.find( x => x.Friend == friend )), 1); 
            }
            return true;

        }

        // send a friend request to a selected other user.
        this.FriendRequest = (friend, name) => {
            var me = this.Person.find(x => x.Name == name);
            var msg = me.Name + ' sent a friend request!'
            var friendUser = this.Person.find(x => x.Name == friend);
            if(!friendUser.Notice.find(x=> x.Friend == name) && !friendUser.FriendList.find(x=>x.Name == name)){
                friendUser.Notice.push({Name: friend, Friend: name, Msg: msg});
                return true;
            }
            else{
                console.log('friend request already done!');
                return false;
                
            }
        }


        // if friend request is accepted, add that user to this Me's friendList.
        this.AddFriend = (name, friend) =>{
            var user = this.Person.find(x=> x.Name == name);

            var friendN = this.Person.find(x=> x.Name == friend);
            user.FriendList.push({Name: friend});
            friendN.FriendList.push({Name: name});
            // remove this request from Me's Notice
            user.Notice.splice(user.Notice.findIndex(x => x.Friend == friend), 1);
            // remove user who sent the request from Me's user list
            this.SentRequestChange(friend, name, true);
            return user.FriendList;

        }

        // copy friend's history to Record
        this.AddFriendHistory = (name, friend) =>{
            var friendFound = this.Person.find(x => x.Name == friend);
            var user = this.Person.find(x => x.Name == name );
            if(friendFound){
                user.Record = (friendFound.History);
                return user.Record;
            }
            else{
                console.log('history pushing fail! ');
                return false;
            }

        }


        // indicate if this user gets a friend request or not.
        this.ChangeRequested = ( name )=>{
            var user = this.Person.find( x => x.Name == name);
            user.Requested = false;
            return user.Requested;
        }

        // send a user's previous workout history by key date.
        this.GetHistory = (user, key) => {
            var userFound = this.Person.find( x => x.Name == user);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            return historyFound;
        }

        // send a friend's workout history
        this.GetFriendSummary = (name, key, friend) => {
            var userFound = this.Person.find( x => x.Name == friend);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            return historyFound;
        }
        
        // refresh Me to update
        this.RefreshMe = (name) => {
            var user = this.Person.find(x => x.Name == name);
            // if there is no friend request to Me, set Requested false
            // this will change the button of Friend Request Notification
            if(user.Notice.length == 0){
                user.Requested = false;
              }
              else{
                user.Requested = true;
              }
            return user;
        }
  
}   
 
module.exports = Fit; 