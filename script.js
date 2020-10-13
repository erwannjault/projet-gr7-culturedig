var data = {
  timeline: [
    {
      Date: "XXème siècle",
      Titre: "L'étude de la logique mathématique",
      Description: "L'étude de la logique mathématique fournit l'essentiel des avancées qui ont rendu plausible l'intelligence artificielle."
    },
    {
      Date: "1907",
      Titre: "Le Magicien d'Oz écrit par Franz Baum",
      Description: "L'homme mécanique Tiktok est un personnage fictif qualifié de prototype de robot. Il est considéré comme l'un des premiers robots à apparaître dans la littérature moderne."
    }, {
      Date: "1943",
      Titre: "Les Mécanismes cérébraux de l'activité intelligente",
      Description: "W. Ross Ashby, Warren McCulloch et Walter Pitt effectuèrent des travaux sur les réseaux neuronaux, leur utilité et leur fonctionnement chez les organismes simples. Ces recherches ont largement inspiré les travaux actuels de l'IA."
    }, {
      Date: "1944",
      Titre: "Herbert Simon",
      Description: "Herbert Simon, physchologue, dans son livre vedette, s'intéresse au comportement humain et au traitement que ce dernier fait des informations qu'il possède, comment elles influent sa pensée et sa prise de décision. Ses travaux servent encore aujourd'hui à l'écriture des algorithmes fondateurs des IA."
    }
  ]
};

var source = $("#template").html();
var template = Handlebars.compile(source);


for (i = 0; i < data.timeline.length; i++) {
  
  var html = template(data.timeline[i]);
  $("#timeline").append(html);
    
}  