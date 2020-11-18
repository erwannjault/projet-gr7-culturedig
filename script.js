var data = {
  timeline: [
    {
      Date: "1900",
      Titre: "L'étude de la logique mathématique",
      Description: "L'étude de la logique mathématique fournit l'essentiel \
      des avancées qui ont rendu plausible l'intelligence artificielle.",
      Lien : "audd.html",
      Src : "tortuedetest.jpg",
      Catégorie : "",
    },
    {
      Date: "1907",
      Titre: "Le Magicien d'Oz écrit par Franz Baum",
      Description: "L'homme mécanique Tiktok est un personnage fictif qualifié de prototype de robot.\
      Il est considéré comme l'un des premiers robots à apparaître dans la littérature moderne.",
      Lien : "",
      Src : "",
      Catégorie : "",
    }, {
      Date: "1943",
      Titre: "Les Mécanismes cérébraux de l'activité intelligente",
      Description: "W. Ross Ashby, Warren McCulloch et Walter Pitts effectuèrent des travaux sur les réseaux neuronaux,\
      leur utilité et leur fonctionnement chez les organismes simples. Ces recherches ont largement inspiré les travaux actuels de l'IA.",
      Lien : "",
      Src : "",
      Catégorie : "",
    }, {
      Date: "1944",
      Titre: "Herbert Simon",
      Description: "Herbert Simon, physchologue, dans son livre vedette, s'intéresse au comportement humain\
      et au traitement que ce dernier fait des informations qu'il possède, comment elles influent sa pensée et sa prise de décision.\
       Ses travaux servent encore aujourd'hui à l'écriture des algorithmes fondateurs des IA.",
      Lien : "",
      Src : "",
      Catégorie : "",
    },
    {
      Date: "1948",
      Titre: "Norbert Wiener, le père de la cybernétique",
      Description: "Norbert Wiener, dans ses travaux de 1948,\
       invente la cybernétique tel qu'on la connaît aujourd'hui, en décrivant les notions de feedback et de contrôle systématique.",
      Lien : "",
      Src : "",
      Catégorie : "",
    },
    {
      Date: "1950",
      Titre: "Alan Turing dans Mind",
      Description: "Grâce à des jeux d’imitations, il mathématise l’intelligence humaine.\
       Il réalise alors son célèbre test de Turing, qui évalue la capacité d’une machine à entretenir une conversation humaine.",
      Lien : "",
      Src : "",
      Catégorie : "",
    },
    {
      Date: "1950",
      Titre: "Low-Level Languages",
      Description: "De 1950 à 1960, les premiers langages \"symboliques\" (LISP, SLIP, IPL, POP) apparaissent. Ce sont des \"low-level languages\", \
      des langages simples permettant de converser directement avec la machine. A leur sortie, ils offrent de nouvelles opportunités aux développeurs,\
       notamment la résolution de problèmes complexes, résolus auparavant que par les plus grand cerveaux de l'époque. Le chatbot ELIZA a été conçu en SLIP.",
      Lien : "",
      Src : "",
      Catégorie : "",
    }
    ,
  ]
};

var source = $("#template").html();
var template = Handlebars.compile(source);


for (i = 0; i < data.timeline.length; i++) {
  var html = template(data.timeline[i]);
  $("#timeline").append(html);
}  

$(".nav").click(function() {
    $(".date").fadeOut('fast');
    $("a").removeClass('active');
    $(this).addClass('active');
    $("." + this.getAttribute('name')).fadeIn('fast');
  })

$("a[name='all-cat']").click(function(){
  $(".date").fadeIn('fast');
})


$(function() {
  $("#chercher").on("click", function() {
    $(".date").remove();
    var val = $.trim($("#search").val());
    if (val) {
      val = val.toLowerCase();
     for (i = 0; i < data.timeline.length; i++){
      if (data.timeline[i].Titre.includes(val) || data.timeline[i].Description.includes(val)) {
        var html = template(data.timeline[i]);
        $("#timeline").append(html);
      }


      /*data.timeline.forEach(item => {
        if (item.Titre == val) {
          $(this).fadeIn('fast');
        }
      })*/
      }
}
})
$("#reset").on("click", function(){
   $(".date").remove();
   for (i = 0; i < data.timeline.length; i++) {
  var html = template(data.timeline[i]);
  $("#timeline").append(html);
}  

})
})