<?php

namespace App\DataFixtures;

use App\Entity\Audio;
use App\Entity\Boat;
use App\Entity\Characteristics;
use App\Entity\Image;
use App\Entity\Schedule;
use App\Entity\Text;
use App\Entity\Visit;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Mime\CharacterStream;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // France 1
        $france1 = new Boat();
        $france1->setName("France 1");
        $france1->setHistoric("Le France 1 a assuré ses missions pendant 27 années jusqu'à l'entrée en service des satellites météorologiques en 1985. Il devait alors opérer de longues stations sur les lieux de formation et de passage des pires dépressions au large de l'océan Atlantique. Fouetté par des vents atteignant parfois 100 nœuds (180 km/h), balancé par des creux de 20 mètres, ce navire, quel que soit le temps, a rempli sa mission pendant près de 30 ans, et a fait la pluie et le beau temps pour la Météorologie Nationale.");
        $france1->setState("1");
        $france1->setStateText("Ouvert");
        $france1->setLat("46.15085659418591");
        $france1->setLng("-1.1517760553310752");
        $france1->setImage("https://cdn.discordapp.com/attachments/948214708006166568/948222551568551936/france1.png");
        $manager->persist($france1);
        $caracteristiquesFrance1 = new Characteristics();
        $caracteristiquesFrance1->setBoat($france1);
        $caracteristiquesFrance1->setStartYear("1958");
        $caracteristiquesFrance1->setMaterial("Acier");
        $caracteristiquesFrance1->setRestore("2004 à 2005");
        $caracteristiquesFrance1->setInitialOwner("Ville de La Rochelle");
        $caracteristiquesFrance1->setInitialHarbor("La Rochelle");
        $caracteristiquesFrance1->setCollectionEntry("1988");
        $caracteristiquesFrance1->setBuyPrice("1,2 MF");
        $caracteristiquesFrance1->setHistoricMonumentRankDate("24/02/2004");
        $manager->persist($caracteristiquesFrance1);
        $audioFrance1 = new Audio();
        $audioFrance1->setBoat($france1);
        $audioFrance1->setTitle("Le France 1 en audio...");
        $audioFrance1->setFile("https://vttts-eu.readspeaker.com/cgi-bin/nph-voicetext/7e793d26c12d4915b0e62eb87327ea6a.mp3");
        $manager->persist($audioFrance1);
        $image1France1 = new Image();
        $image1France1->setBoat($france1);
        $image1France1->setDescription("Déplacement du France 1, tiré par un remorqueur");
        $image1France1->setImage("https://museemaritime.larochelle.fr/fileadmin/_processed_/e/a/csm_France1-2014-BarbaraJoussaume_57c3e4f5ff.jpg");
        $manager->persist($image1France1);
        $image2France1 = new Image();
        $image2France1->setBoat($france1);
        $image2France1->setDescription("Barre du France 1");
        $image2France1->setImage("https://museemaritime.larochelle.fr/fileadmin/_processed_/7/7/csm_France1-2018-JulienChauvet-details3_5dadb3cbe3.jpg");
        $manager->persist($image2France1);
        $temoignageFrance1 = new Text();
        $temoignageFrance1->setBoat($france1);
        $temoignageFrance1->setTitle("Un membre de l'équipage");
        $temoignageFrance1->setTestimony("Quand on était en route, il y avait un officier de quart et un matelot de passerelle, mais en pêche j’étais à la passerelle de 6 heures à minuit et encore minuit et 6 heures je me relevais à chaque virage de chalut. L’Angoumois était à la vente le lundi, puis à la marée suivante le mercredi. Entre deux marées, trois jours d’arrêt. L’hiver on se rapprochait 24 heures à l’avance pour arriver à temps. En janvier 1986, on a essuyé un ouragan (force 12), on est resté 80 heures à la cape. Il y avait de quoi avoir peur.");
        $manager->persist($temoignageFrance1);
        $visitLundiFrance1 = new Visit();
        $visitLundiFrance1->setDay("monday");
        $visitLundiFrance1->setBoat($france1);
        $visitLundiFrance1->setMaximumPlaces(50);
        $visitLundiFrance1->setActual(0);
        $manager->persist($visitLundiFrance1);
        $visitMardiFrance1 = new Visit();
        $visitMardiFrance1->setDay("tuesday");
        $visitMardiFrance1->setBoat($france1);
        $visitMardiFrance1->setMaximumPlaces(50);
        $visitMardiFrance1->setActual(0);
        $manager->persist($visitMardiFrance1);
        $visitMercrediFrance1 = new Visit();
        $visitMercrediFrance1->setDay("wednesday");
        $visitMercrediFrance1->setBoat($france1);
        $visitMercrediFrance1->setMaximumPlaces(50);
        $visitMercrediFrance1->setActual(0);
        $manager->persist($visitMercrediFrance1);
        $visitJeudiFrance1 = new Visit();
        $visitJeudiFrance1->setDay("tuesday");
        $visitJeudiFrance1->setBoat($france1);
        $visitJeudiFrance1->setMaximumPlaces(50);
        $visitJeudiFrance1->setActual(0);
        $manager->persist($visitJeudiFrance1);
        $visitVendrediFrance1 = new Visit();
        $visitVendrediFrance1->setDay("tuesday");
        $visitVendrediFrance1->setBoat($france1);
        $visitVendrediFrance1->setMaximumPlaces(50);
        $visitVendrediFrance1->setActual(0);
        $manager->persist($visitVendrediFrance1);
        $visitSamediFrance1 = new Visit();
        $visitSamediFrance1->setDay("tuesday");
        $visitSamediFrance1->setBoat($france1);
        $visitSamediFrance1->setMaximumPlaces(50);
        $visitSamediFrance1->setActual(0);
        $manager->persist($visitSamediFrance1);

        // Saint Gilles
        $saintgilles = new Boat();
        $saintgilles->setName("Saint Gilles");
        $saintgilles->setHistoric("Il fut construit en 1958 aux chantiers navals des ACRP à La Rochelle, où il ira par la suite à Saint-Nazaire commencer sa carrière. Il effectuera des remorquages pendant plus de treize ans et retournera à La Rochelle, au port de La Pallice où il sera désarmé en 1989. Après un accident, le président de l'Union des Remorqueurs de l'Océan demande alors au Musée Maritime de La Rochelle d'en assurer la conservation. Le remorqueur sera hissé sur le slipway en septembre 1994 pour une restauration de sa coque et de son pont. L’année d’après, en 1995, Saint-Gilles est classé « monument historique ».");
        $saintgilles->setState("1");
        $saintgilles->setStateText("Ouvert");
        $saintgilles->setLat("46.15115789976202");
        $saintgilles->setLng("-1.1515942240203119");
        $saintgilles->setImage("https://media.discordapp.net/attachments/948214708006166568/948222947716386836/csm_img_bandeau-saint-gilles_9709637267.png?width=1440&height=567");
        $manager->persist($saintgilles);
        $caracteristiquesSaintgilles = new Characteristics();
        $caracteristiquesSaintgilles->setBoat($saintgilles);
        $caracteristiquesSaintgilles->setStartYear("1958");
        $caracteristiquesSaintgilles->setMaterial("Acier");
        $caracteristiquesSaintgilles->setRestore("2013");
        $caracteristiquesSaintgilles->setInitialOwner("Union des remorqueurs de l'océan");
        $caracteristiquesSaintgilles->setInitialHarbor("La Rochelle");
        $caracteristiquesSaintgilles->setCollectionEntry("1989");
        $caracteristiquesSaintgilles->setBuyPrice("150 000 F");
        $caracteristiquesSaintgilles->setHistoricMonumentRankDate("17/05/1995");
        $manager->persist($caracteristiquesSaintgilles);
        $audioSaintgilles = new Audio();
        $audioSaintgilles->setBoat($saintgilles);
        $audioSaintgilles->setTitle("Le Saint Gilles en audio...");
        $audioSaintgilles->setFile("https://vttts-eu.readspeaker.com/cgi-bin/nph-voicetext/bba1bb3733664358bb09516d85b35914.mp3");
        $manager->persist($audioSaintgilles);
        $image1Saintgilles = new Image();
        $image1Saintgilles->setBoat($saintgilles);
        $image1Saintgilles->setDescription("Le Saint Gilles dans le port de La Rochelle");
        $image1Saintgilles->setImage("http://www.marine-marchande.net/Petits_Reportages/Massard/Saint-Gilles/St-Gilles-918.jpg");
        $manager->persist($image1Saintgilles);
        $temoignageSaintgilles = new Text();
        $temoignageSaintgilles->setBoat($saintgilles);
        $temoignageSaintgilles->setTitle("");
        $temoignageSaintgilles->setTestimony("");
        $manager->persist($temoignageSaintgilles);
        $visitLundiSaintgilles = new Visit();
        $visitLundiSaintgilles->setDay("monday");
        $visitLundiSaintgilles->setBoat($saintgilles);
        $visitLundiSaintgilles->setMaximumPlaces(50);
        $visitLundiSaintgilles->setActual(0);
        $manager->persist($visitLundiSaintgilles);
        $visitMardiSaintgilles = new Visit();
        $visitMardiSaintgilles->setDay("tuesday");
        $visitMardiSaintgilles->setBoat($saintgilles);
        $visitMardiSaintgilles->setMaximumPlaces(50);
        $visitMardiSaintgilles->setActual(0);
        $manager->persist($visitMardiSaintgilles);
        $visitMercrediSaintgilles = new Visit();
        $visitMercrediSaintgilles->setDay("wednesday");
        $visitMercrediSaintgilles->setBoat($saintgilles);
        $visitMercrediSaintgilles->setMaximumPlaces(50);
        $visitMercrediSaintgilles->setActual(0);
        $manager->persist($visitMercrediSaintgilles);
        $visitJeudiSaintgilles = new Visit();
        $visitJeudiSaintgilles->setDay("tuesday");
        $visitJeudiSaintgilles->setBoat($saintgilles);
        $visitJeudiSaintgilles->setMaximumPlaces(50);
        $visitJeudiSaintgilles->setActual(0);
        $manager->persist($visitJeudiSaintgilles);
        $visitVendrediSaintgilles = new Visit();
        $visitVendrediSaintgilles->setDay("tuesday");
        $visitVendrediSaintgilles->setBoat($saintgilles);
        $visitVendrediSaintgilles->setMaximumPlaces(50);
        $visitVendrediSaintgilles->setActual(0);
        $manager->persist($visitVendrediSaintgilles);
        $visitSamediSaintgilles = new Visit();
        $visitSamediSaintgilles->setDay("tuesday");
        $visitSamediSaintgilles->setBoat($saintgilles);
        $visitSamediSaintgilles->setMaximumPlaces(50);
        $visitSamediSaintgilles->setActual(0);
        $manager->persist($visitSamediSaintgilles);

        // Horaires
        $lundi = new Schedule();
        $lundi->setDay("monday");
        $lundi->setOpening("10:00");
        $lundi->setClosing("19:00");
        $manager->persist($lundi);

        $mardi = new Schedule();
        $mardi->setDay("tuesday");
        $mardi->setOpening("10:00");
        $mardi->setClosing("19:00");
        $manager->persist($mardi);

        $mercredi = new Schedule();
        $mercredi->setDay("wednesday");
        $mercredi->setOpening("10:00");
        $mercredi->setClosing("19:00");
        $manager->persist($mercredi);

        $jeudi = new Schedule();
        $jeudi->setDay("thursday");
        $jeudi->setOpening("10:00");
        $jeudi->setClosing("19:00");
        $manager->persist($jeudi);

        $vendredi = new Schedule();
        $vendredi->setDay("friday");
        $vendredi->setOpening("10:00");
        $vendredi->setClosing("19:00");
        $manager->persist($vendredi);

        $samedi = new Schedule();
        $samedi->setDay("saturday");
        $samedi->setOpening("10:00");
        $samedi->setClosing("19:00");
        $manager->persist($samedi);

        $manager->flush();
    }
}
