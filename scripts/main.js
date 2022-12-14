var status = "less";

function toggleText()
{
    var text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque illum velit, exercitationem tempora aliquid. Commodi eius animi voluptatibus optio dolores iure ullam id sit ea, consequuntur odit ratione ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque illum velit, exercitationem tempora aliquid. Commodi eius animi voluptatibus optio dolores iure ullam id sit ea, consequuntur odit ratione ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim doloremque illum velit, exercitationem tempora aliquid. Commodi eius animi voluptatibus optio dolores iure ullam id sit ea, consequuntur odit ratione ab.";

    if (status == "less") {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "Ver menos";
        status = "more";
    } else if (status == "more") {
        document.getElementById("textArea").innerHTML = text.substring(0,200) + "...";
        document.getElementById("toggleButton").innerText = "Ver más";
        status = "less"
    }
}