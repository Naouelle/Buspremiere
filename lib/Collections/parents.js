Parents = new Mongo.Collection("parents");

if (Meteor.isClient) 
{
  Template.body.helpers(
  {
    parents: function ()
    {
            return Parents.find({});
        }
    })
  Template.parents.events(
  {
      "submit .new-parents": function (event)
    {
      var nom = event.target.nom.value;
      var prenom = event.target.prenom.value;
      var adresse = event.target.adresse.value;
      var telfix = event.target.telfix.value;
      var telpro = event.target.telpro.value;
      var parent = Meteor.userId();
      Parents.insert(
      {
        prenom: prenom,
        nom: nom,
        adresse: adresse,
        telfix: telfix,
        telpro: telpro,
        parent: parent,
        createdAt: new Date()
          });
          event.target.nom.value = "";
          event.target.prenom.value = "";
          event.target.adresse.value = "";
          event.target.telfix.value = "";
          event.target.telpro.value = "";
          return false;
      }
  });
}

if (Meteor.isServer) {
}