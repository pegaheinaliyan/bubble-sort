Summary:

we are going to write bubble sort with javascript and then we have short visualization for that to see what is going on, in each step .

Technologies Used:

-jQuery
-HTML
-CSS
-Jasmin
-javascript

GET Start:

you need to :
npm install
bower install 
jasmin install

Implementation:

before you start reading the code you have to undrestand the bubblesort algorithm.
we are going to use a for loop inside another for loop, so each time we are going to compare each element with the element in the right side and chek if the element in the right is less than , we have to swap them.afer we go through all of the array we are going to start again from the first element in array, so we assure that we check all elements with each other.
Also we are going to write our test using jasmin  to be assure that this is working correct .

Visualization:

The viualization is simple.at first we have our fisr array, and in each step we are going to show our array which went through the loops .in each step the array change one step so the color of that array change too . 

Known Issues:

in sort.js there is a code for bubblesort  but also there is some changes for return value because of the css things and showing the correct viualization.
so at first if you run the code with test you dont get all the test pass because instead of returning the array of array you should return array ,thats a simple change that you should do before you run the test (test is correct),but for visualization you dont have to change the code.


