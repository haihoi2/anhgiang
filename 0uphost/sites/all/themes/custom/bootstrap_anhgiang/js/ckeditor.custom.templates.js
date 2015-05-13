/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.addTemplates("default",
{
imagesPath: Drupal.settings.basePath + 'sites/default/files/lahalle/config/',
templates:
    [
        {
            title:"Home page La Halle Full",
            image:"template-lahalle-home.png",
            description:"The home page La Halle Template",
            html: '<div class="home-section" style="border-top:solid 1px #000"><div class="section-content"><div class="row">'+
                        '<div class="columns full"><a href="/fr/le-projet-dentreprise"><img alt="" src="/sites/default/files/pictures/section-thumbnail-full.jpg" /><span class="caption"><span> Le projet d’entreprise </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/notre-histoire"><img alt="" src="/sites/default/files/pictures/section-thumbnail.jpg" /><span class="caption"><span> Notre histoire </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/les-chiffres-cles"><img alt="" src="/sites/default/files/pictures/section-thumbnail-03.jpg" /><span class="caption"><span> Les chiffres clés </span></span></a></div>'+
                        '<div class="columns"><a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail-04.jpg" /><span class="caption"><span> Nos métiers </span></span></a></div>'+
                  '</div></div></div>'
        },
        {
            title:"The HAV Company Project Full",
            image:"template-lahalle-hav-project.png",
            description:"The HAV Company Project Template",
            html: '<div class="company-project hav">'+ 
                    '<div class="intro-feedback">'+
                      '<div class="row">'+
                        '<div class="columns intro-content">'+
                          '<div class="thumbnail"><img alt="" src="/sites/default/files/pictures/bg-star.jpg" /></div>'+
                          '<div class="text">'+
                            '<h3 style="line-height:37px;font-size:32px;font-family: \'playfair_displayregular\';">Dans 3 ans, LA HALLE<br />Chaussures &amp;<br />Maroquinerie sera<br />redevenu le leader<br />incontesté<br />sur son marché</h3>'+
                            '<p class="subtext">LA HALLE</p>'+
                          '</div>'+
                          '<div class="arrow">&nbsp;</div>'+
                        '</div>'+
                        '<div class="columns thumbnail"><img alt="" src="/sites/default/files/pictures/thumnbnail-intro-1.jpg" /></div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="list-company-pj">'+
                      '<div class="block">'+
                        '<div class="row">'+
                          '<div class="columns thumbnail"><img alt="" src="/sites/default/files/pictures/thumnail-cppj-5.jpg" /></div>'+
                          '<div class="columns text">'+
                            '<ul>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">UN MIX DE MARQUES PUISSANT &amp; DESIRABLE</a></h3>'+
                                '<ul>'+
                                  '<li><a class="toggle" href="javascript:void(0)">UN ECART DE COMPETITIVITE SUR L\'OFFRE RESTAURE</a>'+
                                    '<div class="submenu current" id="title-1">'+
                                      '<div class="arrow">&nbsp;</div>'+
                                      '<ul>'+
                                        '<li>METTRE EN PLACE UNE COMMUNICATION 360° "LES HALLES"<br /> INNOVANTE ET IMPACTAN</li>'+
                                        '<li>RETROUVER UNE INTEGRITE DE L’OFFRE EN REVISITANT LES RAYONS<br /> MAROQUINERIE , ACCESSOIRES &amp; COMMODITE</li>'+
                                      '</ul>'+
                                    '</div>'+
                                  '</li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a class="toggle" href="javascript:void(0)">UNE INTEGRITE DE L’OFFRE RETROUVEE</a></h3>'+
                                '<ul>'+
                                  '<li><a class="toggle" href="javascript:void(0)" title="title-6">UNE ENSEIGNE LEGITIME SUR LA MODE</a>'+
                                    '<div class="submenu current" id="title-2">'+
                                      '<div class="arrow">&nbsp;</div>'+
                                      '<ul>'+
                                        '<li>METTRE EN PLACE UNE COMMUNICATION 360° "LES HALLES"<br /> INNOVANTE ET IMPACTAN</li>'+
                                        '<li>RETROUVER UNE INTEGRITE DE L’OFFRE EN REVISITANT LES RAYONS<br /> MAROQUINERIE , ACCESSOIRES &amp; COMMODITE</li>'+
                                      '</ul>'+
                                    '</div>'+
                                  '</li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">UNE SHOPPING EXPERIENCE INEGALEE</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">UN CONCEPT QUI DISTANCE DURABLEMENT LA CONCURRENCE</a></li>'+
                                  '<li><a href="javascript:void(0)">DES MAGASINS PLUS PUISSANTS ET PLUS COMMERCANTS</a></li>'+
                                  '<li><a href="javascript:void(0)">UNTRAFFIC ET UN TAUX DE TRANSFORMATION<br />EN MAGASIN AUGMENTE</a></li>'+
                                '</ul>'+
                              '</li>'+
                            '</ul>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="block">'+
                        '<div class="row">'+
                          '<div class="columns thumbnail"><img alt="" src="/sites/default/files/pictures/thumnail-cppj-6.jpg" /></div>'+
                          '<div class="columns text">'+
                            '<ul>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">UNE SUPPLY CHAIN ET DES COUTS OPTIMISES</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">UNE GESTION DU BUDGET D’ACHATS ET DES STOCKS<br />PLUS PERFORMANTE, UN FLUX PRODUIT OPTIMISE</a></li>'+
                                  '<li><a href="javascript:void(0)">UNE GESTION DES COUTS AMELIOREE</a></li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">DES RELAIS DE CROISSANCE DEVELOPPES</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">3 RELAIS POUR LE CA &amp; L’IMAGE<br />PLUS PERFORMANTE, UN FLUX PRODUIT OPTIMISE</a></li>'+
                                  '<li><a href="javascript:void(0)">UNE GESTION DES COUTS AMELIOREE</a></li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">UN PARC MUSCLE ET RATIONALISE</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">UN PARC RESTRUCTURE POUR PLUS DE PUISSANCE</a></li>'+
                                '</ul>'+
                              '</li>'+
                            '</ul>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="block">'+
                        '<div class="row">'+
                          '<div class="columns thumbnail"><img alt="" src="/sites/default/files/pictures/thumnail-cppj-7.jpg" /></div>'+
                          '<div class="columns text">'+
                            '<ul>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">DU PLAISIR ET DE L\'EXIGENCE AU QUOTIDIEN </a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">NE EXECUTION ET UN PILOTAGE DES RESSOURCES PERFORMANT</a></li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">DES COLLABORATEURS RESPONSABLES ET AUTONOMES</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">UN MANAGEMENT COLLECTIF ET INDIVIDUEL MODELISE</a></li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">UNE PROMOTION INTERNE STRUCTUREE</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">UNE DETECTION RENFORCEE DES TALENTS</a></li>'+
                                '</ul>'+
                              '</li>'+
                            '</ul>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="block">'+
                        '<div class="row">'+
                          '<div class="columns thumbnail"><img alt="" src="/sites/default/files/pictures/thumnail-cppj-8.jpg" /></div>'+
                          '<div class="columns text">'+
                            '<ul>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">DES PRATIQUES MORALES CONTROLEES</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">UN SOURCING ET DES PRESTATAIRES DONT L’INTEGRITE<br />EST ASSUREE</a></li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">UNE CAUSE ENVIRONNEMENTALE &amp; SOCIETALE QUI MOBILISE</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">DES COLLABORATEURS MOBILISES AUTOUR<br />DE CAUSES COMMUNES</a></li>'+
                                '</ul>'+
                              '</li>'+
                            '</ul>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+

                  '<div class="home-section" style="border-top:solid 1px #000"><div class="section-content"><div class="row">'+                       
                        '<div class="columns"><a href="/fr/notre-histoire"><img alt="" src="/sites/default/files/pictures/section-thumbnail.jpg" /><span class="caption"><span> Notre histoire </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/les-chiffres-cles"><img alt="" src="/sites/default/files/pictures/section-thumbnail-03.jpg" /><span class="caption"><span> Les chiffres clés </span></span></a></div>'+
                        '<div class="columns"><a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail-04.jpg" /><span class="caption"><span> Nos métiers </span></span></a></div>'+
                  '</div></div></div>'
        },
        {
            title:"The HAV Company Project - Content Wrapper",
            image:"template-lahalle-hav-project.png",
            description:"The wrapper of the La Halle HAV Content",
            html:'<div class="company-project hav"><div class="intro-feedback">Please Insert [The HAV, HAC Company Project - Content Title] here!</div><div class="list-company-pj">Please Insert [The HAV Company Project - Content Row] here!</div><div class="home-section" style="border-top:solid 1px #000">Please Insert [The HAV, HAC Company Project, Notre Histoire, Key Figures - Content Related] here!</div></div>'
        }, 
        {
            title:"The HAV, HAC Company Project - Content Title",
            image:"template-hav-title-section.png",
            description:"One main image with a title and text that surround the image.",
            html: '<div class="row">'+
                    '<div class="columns intro-content">'+
                      '<div class="thumbnail"><img alt="" src="/sites/default/files/pictures/bg-star.jpg" /></div>'+
                      '<div class="text">'+
                        '<h3 style="line-height:37px;font-size:32px;font-family: \'playfair_displayregular\';">Dans 3 ans, LA HALLE<br />Chaussures &amp;<br />Maroquinerie sera<br />redevenu le leader<br />incontesté<br />sur son marché</h3>'+
                        '<p class="subtext">LA HALLE</p>'+
                      '</div>'+
                      '<div class="arrow">&nbsp;</div>'+
                    '</div>'+
                    '<div class="columns thumbnail"><img alt="" src="/sites/default/files/pictures/thumnbnail-intro-1.jpg" /></div>'+
                  '</div>' 
        },        
        {
            title: 'The HAV Company Project - Content Row',
            image: 'template-hav-content-row-section.png',
            description: 'One image and three row.',
            html: '<div class="block">'+
                        '<div class="row">'+
                          '<div class="columns thumbnail"><img alt="" src="/sites/default/files/pictures/thumnail-cppj-5.jpg" /></div>'+
                          '<div class="columns text">'+
                            '<ul>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">UN MIX DE MARQUES PUISSANT &amp; DESIRABLE</a></h3>'+
                                '<ul>'+
                                  '<li><a class="toggle" href="javascript:void(0)">UN ECART DE COMPETITIVITE SUR L\'OFFRE RESTAURE</a>'+
                                    '<div class="submenu current" id="title-1">'+
                                      '<div class="arrow">&nbsp;</div>'+
                                      '<ul>'+
                                        '<li>METTRE EN PLACE UNE COMMUNICATION 360° "LES HALLES"<br /> INNOVANTE ET IMPACTAN</li>'+
                                        '<li>RETROUVER UNE INTEGRITE DE L’OFFRE EN REVISITANT LES RAYONS<br /> MAROQUINERIE , ACCESSOIRES &amp; COMMODITE</li>'+
                                      '</ul>'+
                                    '</div>'+
                                  '</li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a class="toggle" href="javascript:void(0)">UNE INTEGRITE DE L’OFFRE RETROUVEE</a></h3>'+
                                '<ul>'+
                                  '<li><a class="toggle" href="javascript:void(0)" title="title-6">UNE ENSEIGNE LEGITIME SUR LA MODE</a>'+
                                    '<div class="submenu current" id="title-2">'+
                                      '<div class="arrow">&nbsp;</div>'+
                                      '<ul>'+
                                        '<li>METTRE EN PLACE UNE COMMUNICATION 360° "LES HALLES"<br /> INNOVANTE ET IMPACTAN</li>'+
                                        '<li>RETROUVER UNE INTEGRITE DE L’OFFRE EN REVISITANT LES RAYONS<br /> MAROQUINERIE , ACCESSOIRES &amp; COMMODITE</li>'+
                                      '</ul>'+
                                    '</div>'+
                                  '</li>'+
                                '</ul>'+
                              '</li>'+
                              '<li>'+
                                '<h3><a href="javascript:void(0)">UNE SHOPPING EXPERIENCE INEGALEE</a></h3>'+
                                '<ul>'+
                                  '<li><a href="javascript:void(0)">UN CONCEPT QUI DISTANCE DURABLEMENT LA CONCURRENCE</a></li>'+
                                  '<li><a href="javascript:void(0)">DES MAGASINS PLUS PUISSANTS ET PLUS COMMERCANTS</a></li>'+
                                  '<li><a href="javascript:void(0)">UNTRAFFIC ET UN TAUX DE TRANSFORMATION<br />EN MAGASIN AUGMENTE</a></li>'+
                                '</ul>'+
                              '</li>'+
                            '</ul>'+
                          '</div>'+
                        '</div>'+
                      '</div>'
        },     
        {
            title: 'The HAV, HAC Company Project, Notre Histoire, Key Figures - Content Related',
            image: 'template-hav-content-related.png',
            description: 'The HAV Company Project Content Related Section.',
            html: '<div class="section-content"><div class="row">'+                        
                        '<div class="columns"><a href="/fr/notre-histoire"><img alt="" src="/sites/default/files/pictures/section-thumbnail.jpg" /><span class="caption"><span> Notre histoire </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/les-chiffres-cles"><img alt="" src="/sites/default/files/pictures/section-thumbnail-03.jpg" /><span class="caption"><span> Les chiffres clés </span></span></a></div>'+
                        '<div class="columns"><a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail-04.jpg" /><span class="caption"><span> Nos métiers </span></span></a></div>'+
                  '</div></div>'
        },   
        {
            title:"The HAC Company Project Full",
            image:"template-lahalle-hac-project.png",
            description:"The HAV Company Project Template",
            html: '<div class="company-project hac">'+
                    '<div class="intro-feedback">'+
                      '<div class="row">'+
                        '<div class="columns intro-content">'+
                          '<div class="thumbnail">'+
                            '<img alt="" src="/sites/default/files/pictures/bg-star.jpg" />'+
                          '</div>'+
                          '<div class="text">'+
                            '<h3>Dans 3 ans, LA HALLE<br />Chaussures &amp;<br />Maroquinerie sera<br />redevenu le leader<br />incontesté<br />sur son marché</h3>'+
                            '<p class="subtext">LA HALLE</p>'+
                          '</div>'+
                          '<div class="arrow">&nbsp;</div>'+
                        '</div>'+
                        '<div class="columns thumbnail">'+
                          '<img alt="" src="/sites/default/files/pictures/thumnbnail-intro.jpg" />'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="about-project">'+
                      '<div class="row">'+
                        '<div class="columns thumbnail">'+
                          '<img alt="" src="/sites/default/files/pictures/thumnail-project.jpg" />'+
                        '</div>'+
                        '<div class="columns text">'+
                          '<h3><img alt="" src="/sites/default/files/pictures/title-lahale.png" /></h3>'+
                          '<ul>'+
                            '<li>Une enseigne puissante et désirable</li>'+
                            '<li>Avec une offre produits inégalée et inégalable</li>'+
                            '<li>Un parc de magasins puissants et commerçants</li>'+
                            '<li>Une exécution renforcée dans tous les domaines</li>'+
                          '</ul>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="toggle-project">'+
                      '<div class="panel-group" id="accordion">'+
                        '<div class="panel panel-toggle">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">> Une enseigne plus puissante par une offre produits inégalée<span class="arrow" style="background:#ab8cbc;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseOne" class="panel-collapse collapse in">'+
                            '<div class="panel-body">'+
                              '<p>• Un mix de marques unique en France qui renforce le statut de l’enseigne</p>'+
                              '<p>• Recréer un écart de compétitivité par l’offre</p>'+
                              '<p>• Une offre de marques issue d’un ADN, d’un territoire et d’identifiants forts</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="panel panel-toggle">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="collapsed">> Une enseigne plus attractive grâce au style et à la création<span class="arrow" style="background:#009ee0;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseTwo" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                              '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="panel panel-toggle">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="collapsed">> Une enseigne plus désirable<span class="arrow" style="background:#e3007a;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseThree" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                              '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="panel panel-toggle">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" class="collapsed">> Une enseigne plus présente par un marketing renouvelé<span class="arrow" style="background:#afc628;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseFour" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                              '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="panel panel-toggle ">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseFive" class="collapsed">> Un parc de magasins plus efficace<span class="arrow" style="background:#e97730;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseFive" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                              '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="panel panel-toggle ">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseSix" class="collapsed">> De nouveau relais de croissance<span class="arrow" style="background:#783a97;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseSix" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                              '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="panel panel-toggle ">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" class="collapsed">> Une attention soutenue à l’éthique et à l’intégrité<span class="arrow" style="background:#7d695a;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseSeven" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                              '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="panel panel-toggle ">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseEight" class="collapsed">> Une excellence opérationnelle renforcée<span class="arrow" style="background:#678713;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseEight" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                              '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="panel panel-toggle ">'+
                          '<div class="panel-heading">'+
                            '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseNine" class="collapsed">> Un engagement de tous<span class="arrow" style="background:#ba1818;"><span></span></span></a></h4>'+
                          '</div>'+
                          '<div id="collapseNine" class="panel-collapse collapse">'+
                            '<div class="panel-body">'+
                              '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+      
                  '<div class="home-section" style="border-top:solid 1px #000"><div class="section-content"><div class="row">'+                        
                        '<div class="columns"><a href="/fr/notre-histoire"><img alt="" src="/sites/default/files/pictures/section-thumbnail.jpg" /><span class="caption"><span> Notre histoire </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/les-chiffres-cles"><img alt="" src="/sites/default/files/pictures/section-thumbnail-03.jpg" /><span class="caption"><span> Les chiffres clés </span></span></a></div>'+
                        '<div class="columns"><a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail-04.jpg" /><span class="caption"><span> Nos métiers </span></span></a></div>'+
                  '</div></div></div>'
        },     
        {
            title:"The HAC Company Project - Content Wrapper",
            image:"template-lahalle-hac-project.png",
            description:"The wrapper of the La Halle HAC Content",
            html:'<div class="company-project hac"><div class="intro-feedback">Please Insert [The HAV, HAC Company Project - Content Title] here!</div><div class="about-project">Please Insert [The HAC Company Project - Content First Row] here!</div><div class="toggle-project"><div class="panel-group" id="accordion">Please Insert [The HAC Company Project - Content Row] here!</div></div><div class="home-section" style="border-top:solid 1px #000">Please Insert [The HAV, HAC Company Project, Notre Histoire, Key Figures - Content Related] here!</div></div>'
        },
        {
            title: 'The HAC Company Project - Content First Row',
            image: 'template-hac-content-first-row-section.png',
            description: 'The first row of the La Halle HAC Content.',
            html: '<div class="row">'+
                    '<div class="columns thumbnail">'+
                      '<img alt="" src="/sites/default/files/pictures/thumnail-project.jpg" />'+
                    '</div>'+
                    '<div class="columns text">'+
                      '<h3><img alt="" src="/sites/default/files/pictures/title-lahale.png" /></h3>'+
                      '<ul>'+
                        '<li>Une enseigne puissante et désirable</li>'+
                        '<li>Avec une offre produits inégalée et inégalable</li>'+
                        '<li>Un parc de magasins puissants et commerçants</li>'+
                        '<li>Une exécution renforcée dans tous les domaines</li>'+
                      '</ul>'+
                    '</div>'+
                  '</div>'
        },        
        {
            title: 'The HAC Company Project - Content Row',
            image: 'template-hac-content-row-section.png',
            description: 'The content row of the La Halle HAC Content.',
            html: '<div class="panel panel-toggle">'+
                    '<div class="panel-heading">'+
                      '<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">> Une enseigne plus puissante par une offre produits inégalée<span class="arrow" style="background:#ab8cbc;"><span></span></span></a></h4>'+
                    '</div>'+
                    '<div id="collapseOne" class="panel-collapse collapse in">'+
                      '<div class="panel-body">'+
                        '<p>• Un mix de marques unique en France qui renforce le statut de l’enseigne</p>'+
                        '<p>• Recréer un écart de compétitivité par l’offre</p>'+
                        '<p>• Une offre de marques issue d’un ADN, d’un territoire et d’identifiants forts</p>'+
                      '</div>'+
                    '</div>'+
                  '</div>'
        },
        {
            title:"The Notre Histoire Full",
            image:"template-lahalle-notre-historie.png",
            description:"The HAV Company Project Template",
            html: '<div class="histoire">'+
                    '<div class="title">'+
                      '<h3>Enseigne du Groupe Vivarte, LA HALLE est née au début des années 80 dans des entrepôts en périphérie des grandes métropoles françaises.<br />Spécialiste de l\'équipement de la personne depuis 30 ans , l\'enseigne aux prix attractifs est devenue aujourd\'hui le 1er Multimarques français Grand Public.</h3>'+
                    '</div>'+
                    '<div class="clearfix">'+
                      '<div style="width:380px;float:left;">'+
                        '<div class="block">'+
                          '<h4 style="text-align:right;margin-bottom: 5px;margin-top: 50px;">1981</h4>'+
                          '<p><b>La Halle aux chaussures est pionnier</b> sur le territoire français avec l\'ouverture du 1er magasin chaussures de périphérie à Dombasle, prés de Nancy.<br />L’infrastructure est légère et l’espace dépouillé afin d’optimiser les prix. Le succès est au rendez vous avec 250 clients dés le 1er jour.</p>'+
                          '<img alt="" src="/sites/default/files/pictures/history-img.jpg" />'+
                          '<h4 style="margin-top:80px; margin-bottom:10px;">1987</h4>'+
                          '<p style="margin-bottom:0;"><b>Ouverture du 1er magasin Chaussland</b> il s\'agit d\'une grande Halle aux chaussures qui densifie sa présence sur les grandes zones périphériques.<br />L\'enseigne entreprend également une politique de rénovation de ses 250 magasins.</p>'+
                          '<img alt="" src="/sites/default/files/pictures/history-img-1.jpg" />'+
                        '</div>'+
                      '</div>'+
                      '<div style="width:380px;float:right">'+
                        '<img alt="" src="/sites/default/files/pictures/history-img-2.jpg" style="margin-top:101px;" />'+
                        '<h4 style="margin-top:8px; margin-bottom:10px;text-align:right">1984</h4>'+
                        '<p><b>Ouvertures des 3 premiers magasins de la LA HALLE AUX VETEMENTS</b> à Fresnes, à St Etienne et à Givors , le démarrage est fulgurant grâce à l\'infrastructure existante, la proximité des métiers et l\'expérience acquise avec le pôle de la chaussure.<br /><br />La Halle aux chaussures ouvre la plate-forme logistique d’Issoudun de 54 800 m²et compte alors 75 magasins. La formidable aventure de LA HALLE a commencé ! Toute la famille - hommes, femmes, enfants- s\'y habille et s\'y chausse à petits prix.</p>'+
                        '<p style="text-align:center;padding-top:8px;"><img alt="" src="/sites/default/files/pictures/history-img-15.jpg" style="" /></p>'+
                        '<h4 style="margin-top:50px; margin-bottom:10px;">1995</h4>'+
                        '<p><b>Inauguration du Centre de stockage</b> et de Répartition de la Malterie, près de Châteauroux. 33 000 m2 dédiés entièrement à l\'activité textile discount.<br />L\'investissement massif dans la logistique et l\'informatique se pose comme la réponse nécessaire aux cadencement de livraisons devenues redoutables.</p>'+
                        '<p>La Halle aux Chaussures poursuit sa politique d\'expansion tout en maintenant son leadership sur le secteur chaussure.</p>'+
                        '<p style="text-align:center;"><img alt="" src="/sites/default/files/pictures/history-img-16.jpg" /></p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix">'+
                      '<div style="float:left;width:380px;padding-top:10px;">'+
                        '<p style="text-align:right"><img alt="" src="/sites/default/files/pictures/history-img-17.jpg" /></p>'+
                      '</div>'+
                      '<div style="float:right;width:380px;padding-top:20px;">'+
                        '<h4>2000</h4>'+
                        '<p style="margin-bottom:0;"><b>Nouveau virage.</b> L\'offre de la Halle aux Vêtements s\'adapte avec de la Mode chic pour pas cher et ose le glamour avec une nouvelle égérie, Estelle Lefébure, sur ses affiches "Les Tops" font un carton….Les services aux clients sont présents au coeur du discours. Un nouvel outil informatique voit le jour, TPV 2000 qui vient donner un sérieux coup de main aux Equipes magasins.</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix">'+
                      '<div style="float:left;width:380px;padding-top:0px;">'+
                        '<h4 style="margin-bottom:15px;">2003</h4>'+
                        '<p><b>Ouverture des très grandes Halles aux Chaussures (+ de 900 m2)</b>, l\'offre est élargie au sport de marque et aux marques de centre ville et privilégiera également les produits accessoires.<br />Un effort particulier est apporté à la présentation et à la déco. Le nouveau concept Architral affiche partout la nouvelle identité visuelle de La HALLE aux Vêtements.<br />Le projet logistique Viv\'Halle facilitent les missions des équipes dépôt et magasins, qui gagnent en confort de travail et productivité.</p>'+
                      '</div>'+
                      '<div style="float:right;width:380px;padding-top:45px;"><img alt="" src="/sites/default/files/pictures/history-img-4.jpg" /></div>'+
                    '</div>'+
                    '<div class="clearfix" style="padding-top:6px;">'+
                      '<h4 style="text-align:right">2009/2010</h4>'+
                    '</div>'+
                    '<div class="clearfix" style="padding-top:25px;">'+
                      '<div style="float:left;width:380px">'+
                        '<p style="text-align:right; margin-bottom:79px;"><img alt="" src="/sites/default/files/pictures/history-img-18.jpg" /></p>'+
                        '<img alt="" src="/sites/default/files/pictures/history-img-20.jpg" />'+
                      '</div>'+
                      '<div style="float:right;width:380px">'+
                        '<p><b>Mutation technologique avec le digital :</b> lancement des sites internet Vêtement et Chaussure. Les comportements d\'achat changent. Le client devient muti-canal. On peut aussi commander directement de la caisse du PVT.</p>'+
                        '<h4 style="padding-top:80px;text-align:right; margin-bottom:18px;">2013</h4>'+
                        '<p style="text-align:right"><img alt="" src="/sites/default/files/pictures/history-img-19.jpg" /></p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix" style="padding-top:0px;">'+
                      '<div class="clearfix" style="width:400px;float:left; padding-top:40px;">'+
                        '<img alt="" src="/sites/default/files/pictures/history-img-6.jpg" />'+
                        '<div style="padding-right:20px;padding-top:68px;">'+
                          '<p><b>Une shopping expérience inégalée !</b> lancement d\'un nouveau concept de magasins plus attractifs et plus commerçants.</p>'+
                          '<p style="margin-bottom:0;"><img alt="" src="/sites/default/files/pictures/history-img-9.jpg" style="margin-top:13px; margin-bottom:20px;" /></p>'+
                          '<div class="clearfix">'+
                            '<div style="width:180px;float:left"><img alt="" src="/sites/default/files/pictures/history-img-10.jpg" /></div>'+
                            '<div style="width:180px;float:right"><img alt="" src="/sites/default/files/pictures/history-img-11.jpg" /></div>'+
                          '</div>'+
                          '<img alt="" src="/sites/default/files/pictures/history-img-22.jpg" style="margin-top:46px;" />'+
                        '</div>'+
                      '</div>'+
                      '<div style="width:380px;float:right;padding-top:0px;">'+
                        '<img alt="" src="/sites/default/files/pictures/history-img-7.jpg" />'+
                        '<p style="padding-top:20px;"><b>La révolution est en marche !</b> La Halle aux chaussures et la Halle ont uni leurs voix pour célébrer la French Touch. Univers chic, univers sport, taille bébé ou pointure fillette, le concept La Halle couvre tous les besoins en termes de style, de prix et d\'usage.</p>'+
                        '<h4 style="padding-top:39px; margin-bottom:20px;">2014</h4>'+
                        '<p>Arrivée de collections exclusives vêtements, chaussures, avec la création de secondes lignes des marques du Groupe : K by Kookaï, N by Naf -Naf, C by chevignon...valorisées par un nouveau merchandising.<br />Nouvelle campagne de communication, nouvelle égérie Jenifer et nouvelle signature French, Fun et Fashion. LA HALLE est à ce jour le plus grand dressing de France regroupant une offre complète en vêtements/chaussures.</p>'+
                        '<img alt="" src="/sites/default/files/pictures/history-img-21.jpg" />'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="home-section has-line">'+
                    '<div class="section-content">'+
                      '<div class="row">'+
                        '<div class="columns">'+
                          '<a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail.jpg" /><span class="caption"><span> Notre histoire </span></span></a>'+
                        '</div>'+
                        '<div class="columns">'+
                          '<a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail-03.jpg" /><span class="caption"><span> Les chiffres clés </span></span></a>'+
                        '</div>'+
                        '<div class="columns">'+
                          '<a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail-04.jpg" /><span class="caption"><span> Nos métiers </span></span></a>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'
        }, 
        {
            title:"The Key Figures Full",
            image:"template-lahalle-key-figures.png",
            description:"The HAV Company Project Template",
            html: '<div class="chiffres">'+
                    '<div class="title">'+
                      '<h3>Les chiffres en disent souvent plus que les mots.</h3>'+
                    '</div>'+
                    '<div class="line">&nbsp;</div>'+
                    '<div class="row clearfix">'+
                      '<div class="left">'+
                        '<div class="block" style="padding-top:59px">'+
                          '<div class="text">'+
                            '<img alt="" src="/sites/default/files/pictures/chiffres-1.jpg" />'+
                            '<h4>PLus de 10 000<br />collaborateurs<br />en france</h4>'+
                            '<p>Temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic<br />enim est habitus) et amicitiae gloria excellens de amicitia.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top:98px">'+
                          '<div class="text">'+
                            '<img alt="" src="/sites/default/files/pictures/chiffres-3.jpg" />'+
                            '<h4>44 MARQUES EXCLUSIVES</h4>'+
                            '<p>Temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic<br />enim est habitus) et amicitiae gloria excellens de amicitia.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top:69px">'+
                          '<div class="text">'+
                            '<img alt="" src="/sites/default/files/pictures/6_lahalle_leschiffres_03.jpg" />'+
                            '<h4>43 M de tickets par an</h4>'+
                            '<p>Temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic<br />enim est habitus) et amicitiae gloria excellens de amicitia.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top:33px">'+
                          '<div class="text">'+
                            '<img alt="" src="/sites/default/files/pictures/chiffres-5.jpg" />'+
                            '<h4>&nbsp;14 FLAGSHIPS</h4>'+
                            '<p>Temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic<br />enim est habitus) et amicitiae gloria excellens de amicitia.</p>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="right">'+
                        '<div class="block">'+
                          '<div class="text">'+
                            '<img alt="" src="/sites/default/files/pictures/chiffres-2.jpg" />'+
                            '<h4>PLUS DE 1300 boutiques<br />En France</h4>'+
                            '<p>Temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic<br />enim est habitus) et amicitiae gloria excellens de amicitia.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top:31px;">'+
                          '<div class="text">'+
                            '<img alt="" src="/sites/default/files/pictures/chiffres-4.jpg" />'+
                            '<h4>&nbsp;Programme fidélité<br />«&nbsp;My Fashion Card&nbsp;»&nbsp;:<br />+ de 4&nbsp;300&nbsp;000 encartés</h4>'+
                            '<p>Temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top:38px;">'+
                          '<div class="text">'+
                            '<img alt="" src="/sites/default/files/pictures/chiffres-8.jpg" />'+
                            '<h4>1ER MULTIMARQUES MODE<br />Français</h4>'+
                            '<p>Temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic<br />enim est habitus) et amicitiae gloria excellens de amicitia.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top:45px">'+
                          '<div class="text">'+
                            '<img alt="" src="/sites/default/files/pictures/chiffres-6.jpg" />'+
                            '<h4>plus de 396 000 Fans</h4>'+
                            '<p>Temporibus illis, nemo prudentior; nunc Laelius et sapiens (sic<br />enim est habitus) et amicitiae gloria excellens de amicitia.</p>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="home-section" style="border-top:solid 1px #000">'+
                    '<div class="section-content">'+
                      '<div class="row">'+
                        '<div class="columns">'+
                          '<a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail.jpg" /><span class="caption"><span> Notre histoire </span></span></a>'+
                        '</div>'+
                        '<div class="columns">'+
                          '<a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail-03.jpg" /><span class="caption"><span> Les chiffres clés </span></span></a>'+
                        '</div>'+
                        '<div class="columns">'+
                          '<a href="#"><img alt="" src="/sites/default/files/pictures/section-thumbnail-04.jpg" /><span class="caption"><span> Nos métiers </span></span></a>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'
        }, 
        {
            title:"The Article Details Full",
            image:"template-news-sheet.png",
            description:"The Article Details Template",
            html: '<div class="content-actualites-page">'+
                    '<div class="full">'+
                      '<img alt="" src="/sites/default/files/pictures/img-pagenew.jpg" />'+
                    '</div>'+
                    '<div class="two-columns clearfix">'+
                      '<h3>PRAEFECTUS PRAETPRIO</h3>'+
                      '<div class="block left">'+
                        '<p><b>Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae.</b></p>'+
                        '<p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>'+
                        '<p>Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii nostri angustias iusso sine ulla culpa proscribi ideoque hausto veneno voluntaria morte deleto et tributaria facta est et velut hostiles eius exuviae classi inposi</p>'+
                      '</div>'+
                      '<div class="block right">'+
                        '<p>Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae.</p>'+
                        '<p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>'+
                        '<p>Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii nostri angustias iusso sine ulla culpa proscribi ideoque hausto veneno voluntaria morte deleto et tributaria facta est et velut hostiles eius exuviae classi inpositae in urbem advectae sunt per Catonem, nunc</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="video center">'+
                      '<div class="block">'+
                        '<iframe allowfullscreen="" frameborder="0" height="319" src="//www.youtube.com/embed/4w04os447Mo" width="534"></iframe>'+
                        '<div class="text">'+
                          '<p>Vita est illis semper in fuga uxoresque mercenariae pacto atque, ut sit species matrimonii, dotis nomine fuga uxoresque mercenariae.</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="two-columns clearfix">'+
                      '<div class="block left">'+
                        '<img alt="" src="/sites/default/files/pictures/img-page-news.jpg" />'+
                      '</div>'+
                      '<div class="block right">'+
                        '<h3>PRAEFECTUS PRAETPRIO</h3>'+
                        '<p><b>Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae.</b></p>'+
                        '<p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="one-columns">'+
                      '<h3>PRAEFECTUS PRAETPRIO</h3>'+
                      '<p><b>Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae.</b></p>'+
                      '<p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>'+
                    '</div>'+
                  '</div>' 
        }, 
        {
            title:"The Article Details - Content Wrapper",
            image:"template-news-sheet.png",
            description:"The Article Details Template",
            html: '<div class="content-actualites-page">Please Insert [The Article Details - Content Rows] here!</div>' 
        }, 
        {
            title:"The Article Details - Content Row Full Image",
            image:"template-news-sheet-row-full-image.png",
            description:"The Article Details Full Image Template",
            html: '<div class="full">'+
                    '<img alt="" src="/sites/default/files/pictures/img-pagenew.jpg" />'+
                  '</div>' 
        }, 
        {
            title:"The Article Details - Content Row Two Column Text",
            image:"template-news-sheet-row-two-column-text.png",
            description:"The Article Details Two Column Text Template",
            html: '<div class="two-columns clearfix">'+
                    '<h3>PRAEFECTUS PRAETPRIO</h3>'+
                    '<div class="block left">'+
                      '<p><b>Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae.</b></p>'+
                      '<p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>'+
                      '<p>Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii nostri angustias iusso sine ulla culpa proscribi ideoque hausto veneno voluntaria morte deleto et tributaria facta est et velut hostiles eius exuviae classi inposi</p>'+
                    '</div>'+
                    '<div class="block right">'+
                      '<p>Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae.</p>'+
                      '<p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>'+
                      '<p>Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii nostri angustias iusso sine ulla culpa proscribi ideoque hausto veneno voluntaria morte deleto et tributaria facta est et velut hostiles eius exuviae classi inpositae in urbem advectae sunt per Catonem, nunc</p>'+
                    '</div>'+
                  '</div>' 
        }, 
        {
            title:"The Article Details - Content Row Video Center",
            image:"template-news-sheet-row-video-center.png",
            description:"The Article Details Video Center Template",
            html: '<div class="video center">'+
                    '<div class="block">'+
                      '<iframe allowfullscreen="" frameborder="0" height="319" src="//www.youtube.com/embed/4w04os447Mo" width="534"></iframe>'+
                      '<div class="text">'+
                        '<p>Vita est illis semper in fuga uxoresque mercenariae pacto atque, ut sit species matrimonii, dotis nomine fuga uxoresque mercenariae.</p>'+
                      '</div>'+
                    '</div>'+
                  '</div>' 
        }, 
        {
            title:"The Article Details - Content Row Image And Text",
            image:"template-news-sheet-row-image-and-text.png",
            description:"The Article Details Image And Text Template",
            html: '<div class="two-columns clearfix">'+
                    '<div class="block left">'+
                      '<img alt="" src="/sites/default/files/pictures/img-page-news.jpg" />'+
                    '</div>'+
                    '<div class="block right">'+
                      '<h3>PRAEFECTUS PRAETPRIO</h3>'+
                      '<p><b>Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae.</b></p>'+
                      '<p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>'+
                    '</div>'+
                  '</div>' 
        }, 
        {
            title:"The Article Details - Content Row Full Text",
            image:"template-news-sheet-row-full-text.png",
            description:"The Article Details Full Text Template",
            html: '<div class="one-columns">'+
                    '<h3>PRAEFECTUS PRAETPRIO</h3>'+
                    '<p><b>Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae.</b></p>'+
                    '<p>Vita est illis semper in fuga uxoresque mercenariae conductae ad tempus ex pacto atque, ut sit species matrimonii, dotis nomine futura coniunx hastam et tabernaculum offert marito, post statum diem si id elegerit discessura, et incredibile est quo ardore apud eos in venerem uterque solvitur sexus.</p>'+
                  '</div>' 
        },
        {
            title:"The Enmodveille Full",
            image:"template-enmodveille-la-halle-intranet.png",
            description:"The Enmodveille Template",
            html: '<div class="enmodveille">'+
                    '<h2 class="main-title"><img src="/sites/default/files/pictures/title-enmodde.jpg" alt=""></h2>'+
                    '<div class="content-banner">'+
                      '<table class="table" cellpadding="0" cellspacing="0">'+
                        '<tr>'+
                          '<td class="desc">'+
                            '<h3>À la une</h3>'+
                            '<h4>Qu’est-ce qui pousse <br>une femme à acheter ?</h4>'+
                            '<p>Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum quodam sensu amandi quam cogitatione quantum illa res utilitatis esset habitura. Quod quidem quale sit, etiam in bestiis quibusdam animadverti potest, quae ex se natos ita amant ad quoddam tempus et ab eis ita amantur ut facile earum </p>'+
                          '</td>'+
                          '<td class="thumbnail"> <img src="/sites/default/files/pictures/enmode-top-banner.jpg" alt=""> </td>'+
                        '</tr>'+
                      '</table>'+
                    '</div>'+
                    '<div class="bot-content two-columns">'+
                      '<table class="main-content table" cellpadding="0" cellspacing="0">'+
                        '<tr>'+
                          '<td class="left-main-content">'+
                            '<table width="100%">'+
                              '<tr>'+
                                '<td>'+
                                  '<h3>Ils font parler d’eux</h3>'+
                                  '<table class="sub-content" width="100%">'+
                                    '<tr>'+
                                      '<td>'+
                                        '<table width="100%" style="margin-top:25px;">'+
                                          '<tr>'+
                                            '<td class="thumbnail"> <img src="/sites/default/files/pictures/subcontent-img-1.jpg" alt=""> </td>'+
                                            '<td class="desc"> INNOCENT<br>ET LA SNCF<br>INVENTENT LE<br>«TRICOT À<br>GRAMDE VOSTESSE» </td>'+
                                          '</tr>'+
                                        '</table>'+
                                        '<table width="100%" style="margin-top:13px;color:#000;font-size:15px;line-height:17px;padding-bottom:30px;border-bottom:solid 1px #e5e5e5">'+
                                          '<tr>'+
                                            '<td style="padding-bottom:30px;">Circa hos dies Lollianus primae lanuginis adulescens, Lampadi filius ex praefecto, exploratius causam Maximino spectante, convictus codicem noxiarum artium nondum per aetatem firmato consilio descripsisse, exulque mittendus, ut sperabatur, patris inpulsu provocavit ad principem, et iussus ad eius comitatum duci, de fumo, ut aiunt, in flammam traditus Phalangio Baeticae consulari cecidit funesti carnificis manu.</td>'+
                                          '</tr>'+
                                        '</table>'+
                                      '</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                      '<td>'+
                                        '<table width="100%" style="margin-top:17px;">'+
                                          '<tr>'+
                                            '<td class="thumbnail"> <img src="/sites/default/files/pictures/subcontent-img-2.jpg" alt=""> </td>'+
                                            '<td class="desc"> nike<br>vu<br>par les<br>artistes </td>'+
                                          '</tr>'+
                                        '</table>'+
                                        '<table width="100%" style="margin-top:13px;color:#000;font-size:15px;line-height:17px;padding-bottom:30px;">'+
                                          '<tr>'+
                                            '<td style="padding-bottom:30px;">Nihil morati post haec militares avidi saepe turbarum adorti sunt Montium primum, qui divertebat in proximo, levi corpore senem atque morbosum, et hirsutis resticulis cruribus eius innexis divaricaturn sine spiramento ullo ad usque praetorium traxere praefecti.</td>'+
                                          '</tr>'+
                                        '</table>'+
                                      '</td>'+
                                    '</tr>'+
                                  '</table>'+
                                  '<h3>Innovation du mois</h3>'+
                                  '<table class="sub-content" width="100%">'+
                                    '<tr>'+
                                      '<td>'+
                                        '<table width="100%" style="margin-top:25px;">'+
                                          '<tr>'+
                                            '<td class="thumbnail"> <img src="/sites/default/files/pictures/subcontent-img-3.jpg" alt=""> </td>'+
                                            '<td class="desc"> Audi ouvre<br>son premier<br>showroom<br>100% digital<br>à londres </td>'+
                                          '</tr>'+
                                        '</table>'+
                                        '<table width="100%" style="margin-top:13px;color:#000;font-size:15px;line-height:17px;padding-bottom:30px;border-bottom:solid 1px #e5e5e5">'+
                                          '<tr>'+
                                            '<td style="padding-bottom:30px;">Quod opera consulta cogitabatur astute, ut hoc insidiarum genere Galli periret avunculus, ne eum ut praepotens acueret in fiduciam exitiosa coeptantem. verum navata est opera diligens hocque dilato Eusebius praepositus cubiculi missus est Cabillona aurum secum perferens, quo per turbulentos seditionum concitores occultius distributo et tumor consenuit militum et salus est in tuto locata praefecti. deinde cibo abunde per</td>'+
                                          '</tr>'+
                                        '</table>'+
                                      '</td>'+
                                    '</tr>'+
                                  '</table>'+
                                '</td>'+
                              '</tr>'+
                            '</table>'+
                          '</td>'+
                          '<td class="right-main-content" style="padding-left:20px;">'+
                            '<table width="100%" style="border-bottom:solid 1px #000;">'+
                              '<tr>'+
                                '<td width="92px" style="vertical-align:top"> <img src="/sites/default/files/pictures/subcontent-img-4.jpg" alt=""> </td>'+
                                '<td width="178px" style="padding-left:3px; font-size:15px; line-height:17px; vertical-align:top;padding-top:12px;padding-bottom:20px;"> <b>Superatis Tauri montis verticibus qui ad solis ortum</b> sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro adnexa Isauria, pari sorte uberi palmite viget et frugibus minutis, quam mediam navigabile flumen Calycadnus interscindit.Post quorum necem nihilo lenius ferociens Gallus ut leo cadaveribus pastus multa huius modi scrutabatur. quae singula narrare non refert, me professione modum, quod evitandum </td>'+
                              '</tr>'+
                            '</table>'+
                            '<table width="100%" style="border-bottom:solid 1px #000;margin-top:20px;">'+
                              '<tr>'+
                                '<td width="92px" style="vertical-align:top"> <img src="/sites/default/files/pictures/subcontent-img-5.jpg" alt=""> </td>'+
                                '<td width="178px" style="padding-left:3px; font-size:15px; line-height:17px; vertical-align:top;padding-top:12px;padding-bottom:20px;"> <b>Raptim igitur properantes ut motus sui rumores </b>celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant. et cum superatis difficultatibus arduis ad supercilia venissent fluvii Melanis alti et verticosi, qui pro muro tuetur accolas circumfusus, augente nocte adulta terrorem quievere paulisper lucem opperientes. arbitrabantur enim nullo inpediente </td>'+
                              '</tr>'+
                            '</table>'+
                            '<table width="100%" style="margin-top:20px;">'+
                              '<tr>'+
                                '<td style="vertical-align:top;text-align:center;"> <img src="/sites/default/files/pictures/subcontent-img-6.jpg" alt=""> </td>'+
                              '</tr>'+
                              '<tr>'+
                                '<td width="178px" style="padding:12px 20px 0; font-size:15px; line-height:17px; vertical-align:top;"> <b>Auxerunt haec vulgi sordidioris audaciam, quod cum ingravesceret</b> penuria commeatuum, famis et furoris inpulsu Eubuli cuiusdam inter suos clari domum ambitiosam ignibus subditis inflammavit rectoremque ut sibi iudicio imperiali addictum calcibus incessens et pugnis conculcans seminecem laniatu miserando discerpsit. post cuius lacrimosum interitum in unius exitio quisque imaginem periculi sui considerans documento recenti similia formidabat. </td>'+
                              '</tr>'+
                            '</table>'+
                          '</td>'+
                        '</tr>'+
                      '</table>'+
                    '</div>'+
                  '</div>'
        },
        {
            title:"The Enmodveille - Content Wrapper",
            image:"template-enmodveille-la-halle-intranet.png",
            description:"The wrapper of the Enmodveille Content",
            html: '<div class="enmodveille">Please Insert [The Enmodveille - Content Title] here!'+
              '<div class="bot-content two-columns">'+
                '<table class="main-content table" cellpadding="0" cellspacing="0">'+
                  '<tr>'+
                    '<td class="left-main-content">'+
                      'Please Insert [The Enmodveille - Content Row Wrapper Left] here!'+
                    '</td>'+
                    '<td class="right-main-content" style="padding-left:20px;">'+
                      'Please Insert [The Enmodveille - Content Row Right Element Style Image Left] or [The Enmodveille - Content Row Right Element Style Image Top] here!'+
                    '</td>'+
                  '</tr>'+
                '</table>'+
              '</div>'+
            '</div>'     
        }, 
        {
            title:"The Enmodveille - Content Title",
            image:"template-enmodveille-la-halle-intranet-title.png",
            description:"One main image on the top and the second block with text above the image background.",
            html: '<h2 class="main-title"><img src="/sites/default/files/pictures/title-enmodde.jpg" alt=""></h2>'+
                  '<div class="content-banner">'+
                    '<table class="table" cellpadding="0" cellspacing="0">'+
                      '<tr>'+
                        '<td class="desc">'+
                          '<h3>À la une</h3>'+
                          '<h4>Qu’est-ce qui pousse <br>une femme à acheter ?</h4>'+
                          '<p>Quapropter a natura mihi videtur potius quam ab indigentia orta amicitia, applicatione magis animi cum quodam sensu amandi quam cogitatione quantum illa res utilitatis esset habitura. Quod quidem quale sit, etiam in bestiis quibusdam animadverti potest, quae ex se natos ita amant ad quoddam tempus et ab eis ita amantur ut facile earum </p>'+
                        '</td>'+
                        '<td class="thumbnail"> <img src="/sites/default/files/pictures/enmode-top-banner.jpg" alt=""> </td>'+
                      '</tr>'+
                    '</table>'+
                  '</div>' 
        },        
        {
            title: 'The Enmodveille - Content Row Wrapper Left',
            image: 'template-enmodveille-la-halle-intranet-row-wrapper-left.png',
            description: 'The wrapper of the content on the left column of Enmodveille Content.',
            html: '<table width="100%">'+
                    '<tr>'+
                      '<td>'+ 
                        'Please Insert [The Enmodveille - Content Row Wrapper Left With Header] here!'+        
                      '</td>'+ 
                    '</tr>'
        },          
        {
            title: 'The Enmodveille - Content Row Wrapper Left With Header',
            image: 'template-enmodveille-la-halle-intranet-row-wrapper-left-header.png',
            description: 'One header on the top and the content wrapper on bottom.',
            html: '<h3>Ils font parler d’eux</h3>'+
                  '<table class="sub-content" width="100%">'+
                    '<tr>'+
                      '<td>'+ 
                          'Please Insert [The Enmodveille - Content Row Wrapper Left Element] here!</td></tr>'+        
                        '</td>'+
                    '</tr>'+     
                  '</table>' 
        },            
        {
            title: 'The Enmodveille - Content Row Wrapper Left Element',
            image: 'template-enmodveille-la-halle-intranet-row-wrapper-left-element.png',
            description: 'The content element of the content on the left column of Enmodveille Content.',
            html: '<tr>'+
                    '<td>'+
                      '<table width="100%" style="margin-top:25px;">'+
                        '<tr>'+
                          '<td class="thumbnail"> <img src="/sites/default/files/pictures/subcontent-img-1.jpg" alt=""> </td>'+
                          '<td class="desc"> INNOCENT<br>ET LA SNCF<br>INVENTENT LE<br>«TRICOT À<br>GRAMDE VOSTESSE» </td>'+
                        '</tr>'+
                      '</table>'+
                      '<table width="100%" style="margin-top:13px;color:#000;font-size:15px;line-height:17px;padding-bottom:30px;border-bottom:solid 1px #e5e5e5">'+
                        '<tr>'+
                          '<td style="padding-bottom:30px;">Circa hos dies Lollianus primae lanuginis adulescens, Lampadi filius ex praefecto, exploratius causam Maximino spectante, convictus codicem noxiarum artium nondum per aetatem firmato consilio descripsisse, exulque mittendus, ut sperabatur, patris inpulsu provocavit ad principem, et iussus ad eius comitatum duci, de fumo, ut aiunt, in flammam traditus Phalangio Baeticae consulari cecidit funesti carnificis manu.</td>'+
                        '</tr>'+
                      '</table>'+
                    '</td>'+
                  '</tr>' 
        },                
        {
            title: 'The Enmodveille - Content Row Right Element Style Image Left',
            image: 'template-enmodveille-la-halle-intranet-row-wrapper-right-element-style1.png',
            description: 'The right element with the image on the left and the text on the right.',
            html: '<table width="100%" style="border-bottom:solid 1px #000;">'+
                    '<tr>'+
                      '<td width="92px" style="vertical-align:top"> <img src="/sites/default/files/pictures/subcontent-img-4.jpg" alt=""> </td>'+
                      '<td width="178px" style="padding-left:3px; font-size:15px; line-height:17px; vertical-align:top;padding-top:12px;padding-bottom:20px;"> <b>Superatis Tauri montis verticibus qui ad solis ortum</b> sublimius attolluntur, Cilicia spatiis porrigitur late distentis dives bonis omnibus terra, eiusque lateri dextro adnexa Isauria, pari sorte uberi palmite viget et frugibus minutis, quam mediam navigabile flumen Calycadnus interscindit.Post quorum necem nihilo lenius ferociens Gallus ut leo cadaveribus pastus multa huius modi scrutabatur. quae singula narrare non refert, me professione modum, quod evitandum </td>'+
                    '</tr>'+
                  '</table>' 
        },                  
        {
            title: 'The Enmodveille - Content Row Right Element Style Image Top',
            image: 'template-enmodveille-la-halle-intranet-row-wrapper-right-element-style2.png',
            description: 'The right element with the image on the top and the text on the bottom.',
            html: '<table width="100%" style="margin-top:20px;">'+
                    '<tr>'+
                      '<td style="vertical-align:top;text-align:center;"> <img src="/sites/default/files/pictures/subcontent-img-6.jpg" alt=""> </td>'+
                    '</tr>'+
                    '<tr>'+
                      '<td width="178px" style="padding:12px 20px 0; font-size:15px; line-height:17px; vertical-align:top;"> <b>Auxerunt haec vulgi sordidioris audaciam, quod cum ingravesceret</b> penuria commeatuum, famis et furoris inpulsu Eubuli cuiusdam inter suos clari domum ambitiosam ignibus subditis inflammavit rectoremque ut sibi iudicio imperiali addictum calcibus incessens et pugnis conculcans seminecem laniatu miserando discerpsit. post cuius lacrimosum interitum in unius exitio quisque imaginem periculi sui considerans documento recenti similia formidabat. </td>'+
                    '</tr>'+
                  '</table>' 
        }
        ,
        {
            title:"The New Histoire HAV Full",
            image:"template-new-histoire-hav.png",
            description:"The New Historie HAV Template",
            html: '<div class="histoire">'+
                    '<div class="title">'+
                      '<h3>Enseigne du Groupe Vivarte, LA HALLE MODE ET ACCESSOIRES est née au début des années 80 dans des entrepôts en périphérie des grandes métropoles françaises. Spécialiste de l\'équipement de la personne depuis plus de 30 ans , l\'enseigne aux prix attractifs est devenue aujourd\'hui un des acteurs incontournables du marché français de l\'habillement.</h3> </div>'+
                    '<div class="clearfix">'+
                      '<div style="width:380px;float:left;">'+
                        '<div class="block">'+
                          '<h4 style="text-align:right;margin-bottom: 5px;margin-top: 50px;">1984</h4>'+
                          '<p><b>Ouvertures des 3 premiers magasins de la LA HALLE AUX VETEMENTS</b> à Fresnes, à St Etienne et à Givors , le démarrage est fulgurant grâce à l\'infrastructure existante, la proximité des métiers et l\'expérience acquise avec le pôle de la chaussure.<br /> La formidable aventure de LA HALLE AUX VETEMENTS a commencé ! Toute la famille - hommes, femmes, enfants - s\'y habille à petits prix.</p>'+
                          '<p><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAV_03.jpg" style="margin-top: 82px;" /></p>'+
                        '</div>'+
                      '</div>'+
                      '<div style="width:380px;float:right"><img alt="" src="/sites/default/files/pictures/history-img.jpg" style="margin-top:140px;" />'+
                        '<h4 style="margin-top: 52px; margin-bottom:10px;text-align: left;margin-left: -15px;">1995</h4>'+
                        '<p><b>Inauguration du Centre de stockage et de Répartition</b> de la Malterie, près de Châteauroux, 33 000 m² dédiés entièrement à l\'activité textile discount.<br /> L\'investissement massif dans la logistique et l\'informatique se pose comme la réponse nécessaire aux cadencement de livraisons devenues redoutables.</p>'+
                        '<p style="text-align:center;"><img alt="" src="/sites/default/files/pictures/history-img-16.jpg" /></p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix">'+
                      '<div style="float:right;width:380px;padding-top:10px;">'+
                        '<p style="text-align:left;padding-left: 20px;"><img alt="" src="/sites/default/files/pictures/history-img-17.jpg" /></p>'+
                      '</div>'+
                      '<div style="float:left;width:380px;margin-top: -33px;">'+
                        '<h4 style="margin-bottom: 7px;">2000</h4>'+
                        '<p style="margin-bottom:0;"><b>Nouveau virage !</b> L\'offre de la Halle aux Vêtements s\'adapte avec de la Mode chic pour pas cher et ose le glamour avec une nouvelle égérie, Estelle Lefébure, sur ses affiches "Les Tops" font un carton….Les services aux clients sont présents au coeur du discours. Un nouvel outil informatique voit le jour, TPV 2000 qui vient donner un sérieux coup de main aux Equipes magasins.</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix">'+
                      '<div style="float:right;width:380px;padding-top: 24px;">'+
                        '<h4 style="margin-bottom:15px;">2003</h4>'+
                        '<p><b>Un effort particulier est apporté à la présentation</b> et à la déco. Le nouveau concept Architral affiche partout la nouvelle identité visuelle de La HALLE aux Vêtements.<br /> Le projet logistique Viv\'Halle facilitent les missions des équipes dépôt et magasins, qui gagnent en confort de travail et productivité.</p>'+
                      '</div>'+
                      '<div style="float:left;width:380px;padding-top: 29px;"><img alt="" src="/sites/default/files/pictures/history-img-15.jpg" /></div>'+
                    '</div>'+
                    '<div class="clearfix" style="padding-top: 46px;">'+
                      '<h4 style="text-align:left">2009/2010</h4>'+ 
                    '</div>'+
                    '<div class="clearfix" style="padding-top: 35px;">'+
                      '<div style="float:right;width:380px">'+
                        '<p style="text-align:right; margin-bottom: 85px;"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAV_07.jpg" /></p>'+
                        '<p style="text-align:right;margin-bottom: 0px;"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_22.jpg" /></p>'+
                      '</div>'+
                      '<div style="float:left;width:380px;padding-top: 70px;">'+
                        '<p><b>Mutation technologique avec le digital</b> : lancement du site marchand lahalle.com ! Les comportements d\'achat changent. Le client devient muti-canal.</p>'+
                        '<h4 style="padding-top: 263px;text-align: left; margin-bottom:18px;">2013</h4>'+
                        '<p style="margin-bottom: 0px;"><img alt="" src="/sites/default/files/pictures/history-img-20.jpg" /></p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix" style="padding-top:0px;padding-bottom: 90px;">'+
                      '<div class="clearfix" style="width:400px;float:left; padding-top:40px;"><img alt="" src="/sites/default/files/pictures/history-img-6.jpg" /><br /> &nbsp;'+
                        '<div style="padding-right:20px;padding-top:68px;">'+
                          '<p style="margin-bottom:0;"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAV_11.jpg" style="margin-top: 2px; margin-bottom: 10px;" /></p>'+
                          '<div class="clearfix">'+
                            '<div style="width:180px;float:left"><img alt="" src="/sites/default/files/pictures/history-img-10.jpg" /></div>'+
                            '<div style="width:180px;float:right"><img alt="" src="/sites/default/files/pictures/history-img-11.jpg" /></div>'+
                          '</div>'+
                          '<p><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAV_10.jpg" style="margin-top:83px;" /></p>'+
                        '</div>'+
                      '</div>'+
                      '<div style="width:380px;float:right;padding-top:0px;"><img alt="" src="/sites/default/files/pictures/history-img-7.jpg" /><br /> &nbsp;'+
                        '<p style="padding-top: 62px;">La Halle Mode et Accessoires et La Halle Chaussures et Maroquinerie ont uni leur voix pour diffuser l\'esprit de la Mode française.</p>'+
                        '<h4 style="padding-top: 25px; margin-bottom: 33px;">2014</h4>'+
                        '<p style="margin-bottom:0px;">Arrivée de collections exclusives vêtements avec la création de secondes lignes des marques du Groupe : K by Kookaï,<br /> N by Naf -Naf, C by chevignon....<br /> Lancement d\'un nouveau concept qui propose des collections associant style, qualité et prix attractifs. Les magasins sont mis en valeur par le merchandising, rendant l\'expérience shopping inégalée.<br /> Nouvelle campagne de communication, avec une nouvelle signature Comme les Françaises sont jolies et la collaboration de Jenifer et Tony Parker comme égérie.<br /> Fusion des deux sites marchands pour devenir le plus grand dressing de France; Développement de services en magasin permettant au client de commander directement en caisse, un modèle ou une taille non disponible.</p>'+
                        '<p style="margin-top: 58px;margin-bottom: 0px;"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAV_17.jpg" /></p>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="home-section has-line">'+
                    '<div class="section-content">'+
                      '<div class="row">'+
                        '<div class="columns"><a href="/fr/la-halle/le-projet-dentreprise-0"><img alt="" src="/sites/default/files/push_n1.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Le projet d\'entreprise </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/la-halle/les-chiffres-cles-0"><img alt="" src="/sites/default/files/push_n4.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Les chiffres clés </span></span></a></div>'+          
                        '<div class="columns"><a href="/fr/la-halle/notre-organisation"><img alt="" src="/sites/default/files/push_n3.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Notre organisation </span></span></a></div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'
        } 
        ,
        {
            title:"The New Histoire HAC Full",
            image:"template-new-histoire-hac.png",
            description:"The New Historie HAC Template",
            html: '<div class="histoire" style="padding-bottom:0px;">'+
                    '<div class="title">'+
                      '<h3>Enseigne du Groupe Vivarte, LA HALLE Chaussures &amp; Maroquinerie est née au début des années 80 dans des entrepôts en périphérie des grandes métropoles françaises. Spécialiste de l\'équipement de la personne depuis 30 ans , l\'enseigne aux prix attractifs a su maintenir son leadership sur le secteur de la chaussure depuis plus de 20 ans.</h3> </div>'+
                    '<div class="clearfix">'+
                      '<div style="width:380px;float:left;">'+
                        '<div class="block">'+
                          '<h4 style="text-align:right;margin-bottom: 5px;margin-top: 50px;">1981</h4>'+
                          '<p><b>La Halle aux chaussures est pionnier</b> sur le territoire français avec l\'ouverture du 1er magasin chaussures de périphérie à Dombasle, prés de Nancy.<br /> L’infrastructure est légère et l’espace dépouillé afin d’optimiser les prix. Le succès est au rendez vous avec 250 clients dés le 1er jour.</p> <img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_06.jpg" />'+
                          '<h4 style="margin-top:13px; margin-bottom:10px;">1987</h4>'+
                          '<p style="margin-bottom:0;"><b>Ouverture du 1er magasin Chaussland</b>, il s\'agit d\'une grande Halle aux chaussures qui densifie sa présence sur les grandes zones périphériques.<br /> L\'enseigne entreprend également une politique de rénovation de ses 250 magasins.</p> <img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_13.jpg" style="margin-top:40px;" />'+
                        '</div>'+
                        '<h4 style="margin-top:20px; margin-bottom:25px;">2008</h4>'+
                        '<p><b>Depuis 2003</b>, le rythme des ouvertures n\'a cessé de<br /> s\'accélérer. L\'enseigne compte alors 600 magasins à son actif. Ouverture du 1er magasin chaussures dans les départements d\'Outremer.</p>'+
                        '<p style="margin-bottom:0px;"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_18.jpg" style="margin-top:12px;" /></p>'+
                      '</div>'+
                      '<div style="width:380px;float:right"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_03.jpg" style="margin-top:110px;" />'+
                        '<h4 style="margin-top:8px; margin-bottom:10px;text-align:right">1984</h4>'+
                        '<p style="margin-bottom:0px;"><b>La Halle aux chaussures ouvre la plate-forme logistique</b> d’Issoudun de 54 800 m² . 47 millions d\'articles sont traités par an entre la réception et la livraison vers les magasins. Le parc comprend alors 75 magasins.<br /> La formidable aventure de LA HALLE aux Chaussures a commencé ! Toute la famille - hommes, femmes, enfants - s\'y chausse à petits prix.</p>'+
                        '<p style="text-align:center;padding-top:8px; margin-bottom:0px;"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_10.jpg" style="" /></p>'+
                        '<h4 style="margin-top:8px; margin-bottom:15px;">2003</h4>'+
                        '<p><b>Ouverture des très grandes Halles aux Chaussures (+ de 900 m²)</b>, l\'offre est élargie au sport de marque et aux marques de centre ville et privilégiera également les produits accessoires.</p> <img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_16.jpg" />'+
                        '<h4 style="margin-top:33px; margin-bottom:49px;">2010</h4>'+
                        '<p><b>Mutation technologique avec le digital !</b> Lancement du site marchand lahalleauxchaussures.com ! Environ 200 commandes/jour et un panier moyen à 46 €.<br /> Les comportements d\'achat changent. Le client devient muti-canal.</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix" style="padding-top:35px; padding-bottom:35px">'+
                      '<div style="float:left;width:380px">'+
                        '<h4 style="margin-bottom:18px;margin-top:-10px;">2013</h4>'+
                        '<p style="margin-bottom:0px;"><img alt="" src="/sites/default/files/pictures/history-img-20.jpg" /></p>'+
                      '</div>'+
                      '<div style="float:right;width:380px">'+
                        '<p style="text-align:right"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_22.jpg" /></p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix" style="padding-top:0px;">'+
                      '<div class="clearfix" style="width:400px;float:left; padding-top:40px;"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_30.jpg" />'+
                        '<div style="padding-right:20px;padding-top:25px;">'+
                          '<p style="margin-bottom:0;"><img alt="" src="/sites/default/files/pictures/history-img-9.jpg" style="margin-top:13px;" /></p>'+
                          '<div class="clearfix">&nbsp;</div>'+
                        '</div>'+
                      '</div>'+
                      '<div style="width:380px;float:right;padding-top:0px;"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_31.jpg" style="margin-bottom:65px" />'+
                        '<p><b>La Halle</b> Chaussures et Maroquinerie et la Halle Mode et Accessoires ont uni leur voix pour diffuser l\'esprit de la Mode française.<br /> Arrivée de collections exclusives chaussures, avec la création de secondes lignes des marques du Groupe : A by André, K by Kookaï, N by Naf -Naf, C by chevignon....</p>'+
                      '</div>'+
                    '</div>'+
                    '<div class="clearfix" style="margin-top:58px">'+
                      '<div style="width:380px; float:left"><img alt="" src="/sites/default/files/pictures/5_LaHalle_NotreHistoire-HAC_19.jpg" /></div>'+
                      '<div style="width:380px;float:right">'+
                        '<h4 style="margin-bottom:18px;margin-top:-10px;">2014</h4>'+
                        '<p>Lancement d\'un nouveau concept qui propose des collections associant style, qualité et prix attractifs. Les magasins sont mis en valeur par le merchandising, rendant l\'expérience shopping inégalée.<br /> Nouvelle campagne de communication, avec une nouvelle signature Comme les Françaises sont jolies, et la collaboration de Jenifer comme égérie.<br /> Fusion des deux sites marchands pour devenir le plus grand dressing de France; Développement de services en magasin permettant au client de commander directement en caisse, un modèle ou une pointure non disponible.<br /> Présente à travers un vaste réseau en France, en Outre-mer, en Suisse, La Halle aux Chaussures affirme également sa volonté d\'expansion à l\'international.</p>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="home-section">'+
                    '<div class="section-content">'+
                      '<div class="row">'+
                        '<div class="columns"><a href="/fr/la-halle/le-projet-dentreprise-0"><img alt="" src="/sites/default/files/push_n1.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Le projet d\'entreprise </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/la-halle/les-chiffres-cles-0"><img alt="" src="/sites/default/files/push_n4.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Les chiffres clés </span></span></a></div>'+          
                        '<div class="columns"><a href="/fr/la-halle/notre-organisation"><img alt="" src="/sites/default/files/push_n3.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Notre organisation </span></span></a></div>'+
                      '</div>'+
                    '</div>'+
                  '</div>' 
        }
        , 
        {
            title:"The New Key Figures HAC Full",
            image:"template-new-lahalle-key-figures-hac.png",
            description:"The New Key Figures HAC Template",
            html: '<div class="chiffres" style="padding-bottom:50px;">'+
                    '<div class="title">'+
                      '<h3>Les chiffres en disent souvent plus que les mots.</h3> </div>'+
                    '<div class="line">&nbsp;</div>'+
                    '<div class="row clearfix">'+
                      '<div class="left">'+
                        '<div class="block" style="padding-top: 62px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_03.jpg" />'+
                            '<h4 style=" margin-top: 4px;">Près de 5000<br />collaborateurs<br />en france</h4>'+
                            '<p>L\'expertise au service du Client !</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 57px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_11.jpg" style="" />'+
                            '<h4 style="margin-top: 20px;margin-bottom: 20px;">14 magasins en Réunion,<br />Guadeloupe<br />et Martinique</h4>'+
                            '<p>Des partenaires en outremer !</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 76px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_21.jpg" />'+
                            '<h4 style="margin-top: 12px;">&nbsp;Programme fidélité<br />«&nbsp;My Fashion Card&nbsp;»&nbsp;:<br />+ de 5 millions clients<br />encarté</h4>'+
                            '<p>La fidélité de nos clients est récompensée régulièrement par des offres et des services spécifiques</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 53px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_29.jpg" />'+
                            '<h4 style="margin-top: 16px;margin-bottom: 23px;">10 FLAGSHIPS</h4>'+
                            '<p>Des magasins à forte signature : faire de chaque achat une expérience de plaisir</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 61px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_34.jpg" />'+
                            '<h4 style=" margin-top: 15px;margin-bottom: 22px;">plus de 400 000 fans<br /><span style="font-family: playfair_displayregular;">&amp;</span> plus de 12 000 followers</h4>'+
                            '<p>Restez connecté !</p>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="right">'+
                        '<div class="block" style="padding-top: 91px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_06.jpg" />'+
                            '<h4 style="margin-top: 20px;margin-bottom: 22px;">magasins en France</h4>'+
                            '<p>Un réseau de magasins en perpétuelle évolution, répartis sur tout le territoire français conjugant le savoir-faire des métiers du secteur de la chaussure.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 59px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_13.jpg" style="" />'+
                            '<h4 style="margin-top: 21px;margin-bottom: 28px;">Plus de 20<br />marques exclusives</h4>'+
                            '<p>Stylistes, designers et modélistes proposent des collections exclusives. Elles sont crées pour et par LA HALLE Chaussures et Maroquinerie, et ne se trouvent nulle part ailleurs.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 38px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_18.jpg" />'+
                            '<h4 style=" margin-top: 33px;">23 Millions de tickets<br />clients par an</h4>'+
                            '<p>En moyenne, 32 000 tickets par an et par magasin LA HALLE Chaussures et Maroquinerie</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 52px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_26.jpg" />'+
                            '<h4 style="margin-top: 15px;">N°1 du Marché depuis<br />plus de 10 ans</h4>'+
                            '<p>LH by LA HALLE, A by Andre, P by Pataugas … Autant de marques affinitaires qui jouent avec les codes fashion et mettent en scène la modeuse qui sommeille en chaque femme</p>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="home-section">'+
                    '<div class="section-content">'+
                      '<div class="row">'+
                        '<div class="columns"><a href="/fr/la-halle/le-projet-dentreprise-0"><img alt="" src="/sites/default/files/push_n1.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Le projet d\'entreprise </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/la-halle/les-chiffres-cles-0"><img alt="" src="/sites/default/files/push_n4.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Les chiffres clés </span></span></a></div>'+          
                        '<div class="columns"><a href="/fr/la-halle/notre-organisation"><img alt="" src="/sites/default/files/push_n3.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Notre organisation </span></span></a></div>'+
                      '</div>'+
                    '</div>'+
                  '</div>' 
        }  
        , 
        {
            title:"The New Key Figures HAV Full",
            image:"template-new-lahalle-key-figures-hav.png",
            description:"The New Key Figures HAV Template",
            html: '<div class="chiffres">'+
                    '<div class="title">'+
                      '<h3>Les chiffres en disent souvent plus que les mots.</h3> </div>'+
                    '<div class="line">&nbsp;</div>'+
                    '<div class="row clearfix">'+
                      '<div class="left">'+
                        '<div class="block" style="padding-top: 62px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAV_03.jpg" />'+
                            '<h4 style="margin-top: 9px;">collaborateurs<br />en france</h4>'+
                            '<p>L\'expertise au service du Client !</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 84px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAV_11.jpg" style="" />'+
                            '<h4 style="margin-top: 20px;margin-bottom: 20px;">MAGASINS EN REUNION,<br />GUADELOUPE<br />ET MARTINIQUE</h4>'+
                            '<p style="text-transform:uppercase">Des partenaires en outremer !</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 76px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAV_15.jpg" />'+
                            '<h4 style="margin-top: 12px;">&nbsp;Programme fidélité<br />«&nbsp;My Fashion Card&nbsp;»&nbsp;:<br />+ de 5 millions clients<br />encarté</h4>'+
                            '<p>La fidélité de nos clients est récompensée régulièrement par des offres et des services spécifiques</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 72px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAV_26.jpg" />'+
                            '<h4 style="margin-top: 16px;margin-bottom: 23px;">4 FLAGSHIPS</h4>'+
                            '<p>Des magasins à forte signature : faire de chaque achat une expérience de plaisir !</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 61px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_34.jpg" />'+
                            '<h4 style="margin-top: 15px;margin-bottom: 22px;">plus de 400 000 fans<br /><span style="font-family: playfair_displayregular;">&amp;</span> plus de 12 000 followers</h4>'+
                            '<p>Restez connecté !</p>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="right">'+
                        '<div class="block" style="padding-top: 91px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAV_06.jpg" />'+
                            '<h4 style="margin-top: 20px;margin-bottom: 22px;">Magasins en France</h4>'+
                            '<p>Un réseau de magasins en perpétuelle évolution, répartis sur tout le territoire français conjugant le savoir-faire des métiers du secteur de l\'habillement.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 96px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAV_14.jpg" style="" />'+
                            '<h4 style="margin-top: 21px;margin-bottom: 28px;">Plus de 10<br />marques exclusives</h4>'+
                            '<p>Stylistes, designers et modélistes proposent des collections exclusives. Elles sont crées pour et par LA HALLE Mode &amp; Accessoires, et ne se trouvent nulle part ailleurs.</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 74px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAV_18.jpg" />'+
                            '<h4 style="margin-top: 33px;">20 M de tickets par an</h4>'+
                            '<p>En moyenne, 33 000 tickets par an et par magasin LA HALLE Mode et Accessoire</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="block" style="padding-top: 56px;">'+
                          '<div class="text"><img alt="" src="/sites/default/files/pictures/6_LaHalle_LesChiffres_v3-HAC_26.jpg" />'+
                            '<h4 style="margin-top: 15px;">1ER MULTIMARQUES MODE<br />FRANÇAIS</h4>'+
                            '<p>N by Naf Naf, K by Koukaï, M by Mosquitos…Autant de marques affinitaires qui jouent avec les codes fashion et mettent en scène la modeuse qui sommeille en chaque femme.</p>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="home-section has-line">'+
                    '<div class="section-content">'+
                      '<div class="row">'+
                        '<div class="columns"><a href="/fr/la-halle/le-projet-dentreprise-0"><img alt="" src="/sites/default/files/push_n1.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Le projet d\'entreprise </span></span></a></div>'+
                        '<div class="columns"><a href="/fr/la-halle/les-chiffres-cles-0"><img alt="" src="/sites/default/files/push_n4.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Les chiffres clés </span></span></a></div>'+          
                        '<div class="columns"><a href="/fr/la-halle/notre-organisation"><img alt="" src="/sites/default/files/push_n3.jpg" style="width: 245px; height: 158px;" /><span class="caption"><span> Notre organisation </span></span></a></div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'  
        }    
    ]
});