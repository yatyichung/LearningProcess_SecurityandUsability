//LAB 1-1: LOCATION OBJECT & ROUTING

//get elements from html and set variables
const pageTitle = document.querySelector("#pageTitle");
const contentOutPut = document.querySelector("#mainContent");
const getLink = location.search; //get the url search location ?____
console.log(getLink);


//#### CONTENT FOR HOME PAGE ==== - BACKGROUND IS white
//if the location.search matches ?home, the code inside if statment will execute 
if (getLink === "?home"){
    var contentHome = "<h3>Welcome to our website!</h3>"; 
    contentHome += "<p>We have many wonderful products that you might be interested in.</p>";
    pageTitle.innerHTML = "Home Page"; //replace the pageTitle
    contentOutPut.innerHTML = contentHome; //replace the content with contentHome
    contentOutPut.style.backgroundColor = "white"; //replace the background color of the content
}
//==== END OF CONTENT FOR HOME PAGE ####

//#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
//if the location.search matches ?products, the code inside if statment will execute 
if (getLink === "?products"){
    var contentProducts = "<h3>Our Top 5 Products</h3>";
    contentProducts += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
    pageTitle.innerHTML = "Products"; //replace the pageTitle
    contentOutPut.innerHTML = contentProducts; //replace the content with contentProducts
    contentOutPut.style.backgroundColor = "red"; //replace the background color of the content
}
//==== END OF CONTENT FOR PRODUCTS PAGE #### 

//#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
//if the location.search matches ?about, the code inside if statment will execute 
if (getLink === "?about"){
    var contentAbout = "<h3>About Computer Corp</h3>";
    contentAbout += "<p>We have been around a long time, so we know what we're doing.</p>";
    contentAbout += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
    pageTitle.innerHTML = "About Us"; //replace the pageTitle
    contentOutPut.innerHTML = contentAbout; //replace the content with contentAbout
    contentOutPut.style.backgroundColor = "green"; //replace the background color of the content
}
//==== END OF CONTENT FOR ABOUT US PAGE ####





