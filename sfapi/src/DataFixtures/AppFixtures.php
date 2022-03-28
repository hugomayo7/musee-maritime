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
        $visitFrance1 = new Visit();
        $visitFrance1->setBoat($france1);
        $visitFrance1->setMaximumPlaces(50);
        $visitFrance1->setActual(0);
        $manager->persist($visitFrance1);

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
