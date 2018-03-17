#pragma strict
import UnityEngine.UI;
import UnityEngine.SceneManagement;

 var val1 : String = "";
 var val2 : String = "";
 var val3 : String = "";
 var val4 : String = "";
 var val5 : String = "";

 var trouve : boolean;
 public var led1 : GameObject;
  public var led2 : GameObject;
   public var led3 : GameObject;
    public var led4 : GameObject;
     public var led5 : GameObject;
 var realcode = new Array ();
 var tentative = new Array ();
public var yourButton: Button;

 function Start() {
	    
	    // Resize the array
	    realcode.length = 5;
	    // Assign elements
	    realcode[0] = "5A4";
	   	realcode[1] = "75E";
	    realcode[2] = "CD6";
	    realcode[3] = "38R";
	    realcode[4] = "W62";
	    // iterate through the array
	    for (var value : String in realcode) {
	        print(value);
		}
		var btn: Button = yourButton.GetComponent.<Button>();
		btn.onClick.AddListener(TaskOnClick);
	}

  function TaskOnClick() {
		Debug.Log("You have clicked the button!");
		 // Resize the array
	    tentative.length = 5;
	    // Assign elements
	  	tentative[0] = val1;
	   	tentative[1] = val2;
	    tentative[2] = val3;
	    tentative[3] = val4;
	    tentative[4] = val5;

	  

	    if(realcode[0]==tentative[0]){
	    	led1.GetComponent.<Renderer>().material.color=Color(0,0.8,0);
	    }
	    else{
		    var x=tentative[0];
		    if(Recherche(x)==true){
		     	led1.GetComponent.<Renderer>().material.color=Color(1,0.5,0.1,0.5);
		    }
		    else{
		    	led1.GetComponent.<Renderer>().material.color=Color.red;
		    }
	    }

	  	if(realcode[1]==tentative[1]){
	    	led2.GetComponent.<Renderer>().material.color=Color(0,0.8,0);
	    }
	    else{
		    var y=tentative[1];
		    if(Recherche(y)==true){
		     	led2.GetComponent.<Renderer>().material.color=Color(1,0.5,0.1,0.5);
		    }
		    else{
		    	led2.GetComponent.<Renderer>().material.color=Color.red;
		    }
	    }
	    if(realcode[2]==tentative[2]){
	    	led3.GetComponent.<Renderer>().material.color=Color(0,0.8,0);
	    }
	    else{
		    var z=tentative[2];
		    if(Recherche(z)==true){
		     	led3.GetComponent.<Renderer>().material.color=Color(1,0.5,0.1,0.5);
		    }
		    else{
		    	led3.GetComponent.<Renderer>().material.color=Color.red;
		    }
	    }
	    if(realcode[3]==tentative[3]){
	    	led4.GetComponent.<Renderer>().material.color=Color(0,0.8,0);
	    }
	    else{
		    var m=tentative[3];
		    if(Recherche(m)==true){
		     	led4.GetComponent.<Renderer>().material.color=Color(1,0.5,0.1,0.5);
		    }
		    else{
		    	led4.GetComponent.<Renderer>().material.color=Color.red;
		    }
	    }
	    if(realcode[4]==tentative[4]){
	    	led5.GetComponent.<Renderer>().material.color=Color(0,0.8,0);
	    }
	    else{
		    var n=tentative[4];
		    if(Recherche(n)==true){
		     	led5.GetComponent.<Renderer>().material.color=Color(1,0.5,0.1,0.5);
		    }
		    else{
		    	led5.GetComponent.<Renderer>().material.color=Color.red;
		    }
	    }

	}

	function Recherche(tent){
		trouve=false;
		  for( var i=0;i<5;i++){
	    	if(realcode[i]==tent){
	    		trouve=true;
	    		break;
	    	}
	    	else{
	    		trouve=false;
	    	}
	      }
	     return trouve;
	}


    function OnGUI () {
        // Make a multiline text area that modifies stringToEdit.
        val1 = GUI.TextArea (Rect (30, 20, 50, 30), val1, 3);
        val2 = GUI.TextArea (Rect (85, 20, 50, 30), val2, 3);
        val3 = GUI.TextArea (Rect (140, 20, 50, 30), val3, 3);
        val4 = GUI.TextArea (Rect (195, 20, 50, 30), val4, 3);
        val5 = GUI.TextArea (Rect (250, 20, 50, 30), val5, 3);       
    }

