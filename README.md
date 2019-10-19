# How to create drawer like the desgin shared by [sachinsam] on [dribble.com]
In this app there are two way to create drawer like this design.
There is no complexity to create such design, you just need to create custom drawer with some animation for moving cursor thats it. Two way I have implemented this drawer design .
  - Using [react-native-gesture-handler]
  - Using [[react-navigation]]
***
# OverView of This app

  - This app is  based on expo
  - Contains directories 1 - src, 2 - assets
  - src contains screens, nav and components directories
  - nav-> index.js contains stack navigator as screens->App.js as initial screen
  - App.js contains two buttons
  - Button 1-> open [react-native-gesture-handler] based drawer
  - Button 2-> open [react-navigation] based drawer
  
  ***
# First App
This contains drawer based on [react-native-gesture-handler].
The approach is to create a Drawer cantainer using Higher order component so that this drawer can be used on many screens. You can check DrawerContainer in
>project->src->screens->DrawerContainer.js

In  DrawerContainer.js DrawerLayout is used to create drawer and custom drawer view is written in Drawer.js under
>project->src->components->Drawer.js

In the FirstApp.js navigation stack under src->nav folder there are two screens in the stack NikeHome and NikeDetails where as NikeHome is included DrawerContainer.
***
# Second App
This contains drawer based on [react-navigation] 
SecondApp.js under src->nav folder contains Drawer and navigation stacks. Drawer stack registere with one screen NikeDashBoard. If you want to show drawer on many screens then registere those screens in drawer stack.
***
# Custom Drawer
Custom drawer contains static menu items and view for drawer hide state.
Drawer hidden state view is clickable to open drawer on click and contains arrow cursor which animate based on menu click . 
***
[Satish Rajbhar]


[sachinsam]: <https://dribbble.com/shots/7239829-Nike-UI-Animation>
[dribble.com]:<https://dribbble.com/>
[react-native-gesture-handler]:<https://github.com/kmagiera/react-native-gesture-handler>
[react-navigation]:<https://reactnavigation.org>
[Satish Rajbhar]:<https://www.linkedin.com/in/satissraj/>