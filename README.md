# 2018Spring: Web Programming Project
### Heh-Soo Choi

## For In class Final

I tried to store the users' names whenever a user comes into the Share component, 
and model.js will find the user name and return that name to the client side.
But it didn't work well. 
So I commented it for sake of my other functions.

## Project: Fitness Tracker App

###### Please read the comments which are above each function if you have any confusion on the codes.

###### There may be a little delay or glitch due to the refreshing the local server. So please make sure that you click the button.

###### If something is not responding, it might be that the button or the list is not clicked properly. 


## Features Required


1) Profile Management

2) Exercise Log

3) Sharing Workout Log with Friends

## Project Description
 
 The goal of this project is to create a fitness tracker app. This app will manage a user's profile, keep tracking of exercise log (e.g. exercise time, what kind of exercise, etc.), and share the progress with friends who are using the same app (or the local server in our case). 
___
###### A user can use this app as if it's a workout diary. 
___

 **"SignUpComponent"**, **"LoginComponent"**: user can sign-up if a user is new to the app, or sign-in if a user is already signed up. 

**"ProfileComponent"**, **"EditProfileComponent"**: When the user sign-up, the user can create a profile. If the user wants to edit the profile, the user can go to *"Profile"* in the navbar, and the user is able to edit their profile.

**"FitComponent"**: the user will be able to set the month and date, and with that day, the user can add many workout plans by clicking the list. In that workout plans, the user can set the workout time and the set (how many sets you did). If the user hits *'Done'* button, the workout list will be added to the completed workout list. The time and set will be calculated as Total time. And with the entire completed workout lists, the Total Set Time (the entire time of your workout) will be calculated. If the user hits *'Dismiss'* button, the plan list will be removed from the workout plan.
*'Reset'* button will reset the current page and shows the component to set a new workout month and date for a new workout log. 

**"HistoryComponent"**: user can review their workout history. If the user clicks the date, the corresponding workout history will be displayed. If the user updates their workout list on the specific date, the user can click the date again to see the updates.

**"ShareComponent"**: Whenever a user enters to Share Component, the user list is created. The user can see other users in the same server in *'Other Users.'* user can send a friend request by clicking *'Request'* button. If the userA send a friend request to another userB, userB will have a notice on the *'Friend Request,'* and userB's name will be removed from the 'Other Users.' userB can accept or decline by clicking *'Confirm' * button. If userB clicks *'Ok'* button to accept the friend request, that userA will be added to *'Friends List.'* If userB clicks *'Cancel'* button to decline the friend request, userB name will be added to *'Other Users'* again. In *'Friends List,'* user can click *'Display'* button, the workout days will be added to *'Friend's Workout Date.'* If the user clicks the specific date, the user can see friend's workout summary in 'Friend's Workout Achievement.' 

###### The design concept for this app is simple and minimalistic.

## Project Structure

###### I used Model-View-Controller design pattern.

The client model is called *"Fit"*. This "Fit" has *"Person,"* which contains *"Name, Password, Profile, PlanExercise, DoneExerciseList, Record, TotalSetTime, EachShare, Notice, Requested, FriendList, History, Month, Date, Summary, and FriendSummary."*
___



### These Properties are for Local Me (client side) to show the data:
***

**PlanExercise**: contains the workout lists of user's planned workout list. 

**DoneExerciseList**: contains the completed workout lists.

**Month, Date**: current month and date of the workout

**Summary**: will have the selected workout history.

**FriendSummary**: will have the selected workout history of a friend.


### These Properties are used for server side and also for client side:
___


**Record**: will keep tracking of friend's workout summary.

**TotalSetTime**: is the total workout time of entire completed workout list, will be updated whenever the user updates their workout lists.

**EachShare**: will have other users name. 

**Notice**: if other users send a friend request, Me(this user) will have that other users' names here.

**Requested**: if a user gets a friend request, this will be marked as 'true'

**FriendList**: contains a list of friends.

**History**: this will keep tracking of workout history by month and date (key). It contains *Name, PlanExercise, DoneExerciseList, TotalSetTime, Month, Date, KeyDate* to track workout for each day that the user set.



