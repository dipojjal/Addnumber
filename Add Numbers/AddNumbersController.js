({
	add : function(component, event, helper) {
		
        var var1= component.get("v.number1");
        var var2= component.get("v.number2");
        
        var sum=parseInt(var1)+parseInt(var2);
        
        component.set("v.result",sum);
	}
})
