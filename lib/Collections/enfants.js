Enfants = new Mongo.Collection("enfants");
if (Meteor.isClient)
{
Template.body.helpers(
{
enfants: function ()
{
return Enfants.find({});
}
})
Template.enfants.events(
{
"submit .new-enfants": function (event)
{
      var prenom = event.target.prenom.value;
      var nom = event.target.nom.value;
      var ecole = event.target.ecole.value;
      var classe = event.target.classe.value;
      var un = event.target.un.value;
      var ptarretsoir =event.target.ptarretsoir.value;
      var autrematin =event.target.autrematin.value;
      var deux = event.target.deux.value;
      var autresoir =event.target.autresoir.value;
      var trois = event.target.trois.value;
      var autremer = event.target.autremer.value;
      var quatre = event.target.quatre.value;
      var autremersoir = event.target.autremersoir.value;
      var ptarretmersoir = event.target.ptarretmersoir.value;
      var enfant = Meteor.userId();
    Enfants.insert(
    {
    prenom: prenom,
    nom: nom,
    ecole: ecole,
    classe: classe,
    un: un,
    autrematin: autrematin,
    deux: deux,
    autresoir: autresoir,
    ptarretsoir: ptarretsoir,
    trois: trois,
    autremer: autremer,
    quatre: quatre,
    autremersoir: autremersoir,
    ptarretmersoir: ptarretmersoir,
    createdAt: new Date()
    });
    event.target.prenom.value = "";
    event.target.nom.value = "";
    event.target.ecole.value = "";
    event.target.classe.value = "";
    event.target.un.value = "";
    event.target.autrematin.value = "";
    event.target.deux.value = "";
    event.target.autresoir.value = "";
    event.target.ptarretsoir.value = "";
    event.target.trois.value = "";
    event.target.autremer.value = "";
    event.target.quatre.value = "";
    event.target.autremersoir.value = "";
    event.target.ptarretmersoir.value = "";
    return false;
    }
  });
}
if (Meteor.isServer) {
}