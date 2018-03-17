#pragma strict
import UnityEngine.UI;
import UnityEngine.SceneManagement;
 
 var val1 : String = "";

 var trouve : boolean;

 var tentative : String = "";
 var realcode : String = ">SVP;\n>>Connection;\nAccess : 'prison';\nControl : 'panneau sécurité';\nlasers > off;\n>Merci;";

public var yourButton: Button;

 function Start() {
	    
		var btn: Button = yourButton.GetComponent.<Button>();
		btn.onClick.AddListener(TaskOnClick);
	}

  function TaskOnClick() {
		Debug.Log("You have clicked the button!");	    
	    tentative = val1;

	    if(realcode==tentative){
	    	trouve=true;
	    	Debug.Log(trouve);	
	    }
	    else{
		  trouve=false;
		  Debug.Log(trouve);	
	    } 

	}


   function OnGUI () {
       // Make a multiline text area that modifies stringToEdit.
        GUI.color = Color.green;
        val1 = GUI.TextArea (Rect (0,0,759,390),val1,700);

             
    }

