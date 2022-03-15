<?php

namespace App\Entity;

use App\Repository\BoatRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @apiResource()
 *
 * @ORM\Entity(repositoryClass=BoatRepository::class)
 */
class Boat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     */
    private $historic;

    /**
     * @ORM\Column(type="integer")
     */
    private $state;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $state_text;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $audio;

    /**
     * @ORM\Column(type="float")
     */
    private $lat;

    /**
     * @ORM\Column(type="float")
     */
    private $lng;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="id_boat")
     */
    private $images;

    /**
     * @ORM\OneToOne(targetEntity=Characteristics::class, mappedBy="id_boat", cascade={"persist", "remove"})
     */
    private $characteristics;

    /**
     * @ORM\OneToMany(targetEntity=Visit::class, mappedBy="id_boat")
     */
    private $visits;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->visits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getHistoric(): ?string
    {
        return $this->historic;
    }

    public function setHistoric(string $historic): self
    {
        $this->historic = $historic;

        return $this;
    }

    public function getState(): ?int
    {
        return $this->state;
    }

    public function setState(int $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getStateText(): ?string
    {
        return $this->state_text;
    }

    public function setStateText(string $state_text): self
    {
        $this->state_text = $state_text;

        return $this;
    }

    public function getAudio(): ?string
    {
        return $this->audio;
    }

    public function setAudio(?string $audio): self
    {
        $this->audio = $audio;

        return $this;
    }

    public function getLat(): ?float
    {
        return $this->lat;
    }

    public function setLat(float $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLng(): ?float
    {
        return $this->lng;
    }

    public function setLng(float $lng): self
    {
        $this->lng = $lng;

        return $this;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setIdBoat($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getIdBoat() === $this) {
                $image->setIdBoat(null);
            }
        }

        return $this;
    }

    public function getCharacteristics(): ?Characteristics
    {
        return $this->characteristics;
    }

    public function setCharacteristics(Characteristics $characteristics): self
    {
        // set the owning side of the relation if necessary
        if ($characteristics->getIdBoat() !== $this) {
            $characteristics->setIdBoat($this);
        }

        $this->characteristics = $characteristics;

        return $this;
    }

    /**
     * @return Collection<int, Visit>
     */
    public function getVisits(): Collection
    {
        return $this->visits;
    }

    public function addVisit(Visit $visit): self
    {
        if (!$this->visits->contains($visit)) {
            $this->visits[] = $visit;
            $visit->setIdBoat($this);
        }

        return $this;
    }

    public function removeVisit(Visit $visit): self
    {
        if ($this->visits->removeElement($visit)) {
            // set the owning side to null (unless already changed)
            if ($visit->getIdBoat() === $this) {
                $visit->setIdBoat(null);
            }
        }

        return $this;
    }
}