/**
 * Array is created with elements as file extensions of the correct position of the images.
 */
 
       let array= [];
       array[1]="r1c1.jpg";
       array[2]="r1c2.jpg";
       array[3]="r1c3.jpg";
       array[4]="r2c1.jpg";
       array[5]="r2c2.jpg";
       array[6]="r2c3.jpg";
       array[7]="r3c1.jpg";
       array[8]="r3c2.jpg";
       array[9]="r3c3.jpg";
	  
/**
* imageClicked function is called on clicking any of the images of the grid in the html page. Once a particular image is clicked we get the imageNumber parameter which makes us find the correct image source from the array defined above.
*/
function imageClicked(imageNumber){
        document.getElementById(imageNumber).src=array[imageNumber];
       } 
