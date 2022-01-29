var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://st2.depositphotos.com/1967477/8228/v/950/depositphotos_82289048-stock-illustration-cartoon-happy-family-father-holding.jpg" , "https://thumbs.dreamstime.com/b/big-brother-giving-his-little-brother-piggyback-ride-illustration-89952242.jpg", "https://thumbs.dreamstime.com/b/sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg", "https://png.pngtree.com/element_our/20190524/ourmid/pngtree-mother-holding-baby-hand-drawn-cartoon-cute-elements-image_1103754.jpg"];
var names = ["FAMILY BOOK", "Madanlal Pamecha", "Manish Pamecha", "Jeet Pamecha", "Sakshi Pamecha", "Krishna Pamecha"];
var i = 0;

function update()
{
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
    
   var array_length = images.length-1;
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

    i++;

    if(i>array_length){
      i=0;
    }

}
