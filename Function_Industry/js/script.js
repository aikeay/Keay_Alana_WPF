/**
 *
 * Alana Keay
 * SDI Section #4
 * Function Industry Assignment
 * Created on 12-17-2014
 */
//alert("test")

// create a calculator to figure how many articles we can fit in your webpage
// create the variable of average size for an article within the function in (K)bytes


function TotalArticles(){

    var articleArea = 14
    var areaWebpage = 1600
    var totalArt = Math.round(areaWebpage / articleArea)
    return totalArt
}
var total = TotalArticles()
console.log ("You have a total "+total+" of articles that you can add to your webpage")


