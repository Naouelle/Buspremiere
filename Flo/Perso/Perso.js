Clients = new Mongo.Collection("clients");

if (Meteor.isClient) 
{
	Template.body.helpers(
	{
		clients: function ()
		{
      			return Clients.find({});
    		}
  	})
	Template.body.events(
	{
  		"submit .new-user": function (event)
		{
    			var name = event.target.name.value;
    			var lastname = event.target.lastname.value;
			var city = event.target.city.value;
    			var tel = event.target.tel.value;
			var client = Meteor.userId();
			Clients.insert(
			{
      				name: name,
				lastname: lastname,
				city: city,
				tel: tel,
				client: client,
      				createdAt: new Date()
    			});
    			event.target.name.value = "";
    			event.target.lastname.value = "";
    			event.target.city.value = "";
    			event.target.tel.value = "";
    			return false;
  		}
	});
}

if (Meteor.isServer) {
}
